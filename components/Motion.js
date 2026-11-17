'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {initFlowProgress} from './flowProgress';

const revealSelector = '[data-reveal], .studio-introduction, .team-member, .blog-card, .consult-panel, .quest-showcase, .quest-case-hero, .studio-photo, .work-feature, .crm-case, .website-example, .approach-intro, .approach-list article, .pillar-grid>article, .process-grid li, .budget-list>a, .faq-list details, .detail-page .reveal, .ai-industry-tabs button, .ai-industry-panel, .ai-calculator, .ai-diagnosis, .ai-philosophy-grid>div, .ai-service-paths a, .examples-track>a, .team-footer, .capability-consult, .contact form';
const headingSelector = '.section-heading, .ai-section-heading, .team-heading, .blog-home-heading, .contact-grid';
// 句読点や閉じ括弧は前の文字と同じ塊にして、行頭に来ないようにする
const trailingMarks = /^[、。，．,.・ー」』）)！？!?〜]$/;

// 見出しの文字を1文字ずつの span に分ける(英数字の単語は分けない)。元の文字ノードは保持し、restore で戻す
function splitHeading(heading) {
 const texts = [];
 const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) texts.push(walker.currentNode);
 const label = heading.getAttribute('aria-label');
 if (!label) heading.setAttribute('aria-label', heading.textContent.replace(/\s+/g, ' ').trim());
 const pairs = [], chars = [];
 texts.forEach(text => {
  const wrapper = document.createElement('span');
  wrapper.className = 'studio-chars';
  wrapper.setAttribute('aria-hidden', 'true');
  (text.nodeValue.match(/[A-Za-z0-9]+|\s+|./gu) || []).forEach(part => {
   if (/^\s+$/.test(part)) {wrapper.append(part);return;}
   if (trailingMarks.test(part) && chars.length && chars[chars.length - 1].parentNode === wrapper) {chars[chars.length - 1].append(part);return;}
   const span = document.createElement('span');
   span.className = 'studio-char';
   span.textContent = part;
   wrapper.append(span);chars.push(span);
  });
  text.replaceWith(wrapper);pairs.push([wrapper, text]);
 });
 const restore = () => {
  pairs.forEach(([wrapper, text]) => wrapper.isConnected && wrapper.replaceWith(text));
  if (!label) heading.removeAttribute('aria-label');
 };
 return {chars, restore};
}

export default function Motion() {
 const pathname = usePathname();
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  const revealed = new WeakSet();
  const splits = new Set();
  let destroyFlow = null;
  let observer, frame = 0;
  let paused = document.documentElement.classList.contains('studio-motion-paused');
  const header = document.querySelector('.header');
  const progress = document.querySelector('.reading-progress');
  const update = () => {
   frame = 0;
   const max = document.documentElement.scrollHeight - window.innerHeight;
   header?.classList.toggle('is-scrolled', window.scrollY > 24);
   if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
  };
  const onScroll = () => {if (!frame) frame = requestAnimationFrame(update);};
  const animate = (element, delay = 0, heading = false) => {
   if (revealed.has(element)) return;
   revealed.add(element);
   const animation = element.animate([
    {opacity:heading ? .3 : .45, transform:`translateY(${heading ? 22 : 18}px)`},
    {opacity:1, transform:'translateY(0)'},
   ], {duration:heading ? 760 : 620, delay, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards'});
   animations.add(animation);
   animation.onfinish = () => animations.delete(animation);
  };
  // 見出しの文字が下から起き上がる(1回だけ)。終わったら元の文字ノードに戻す
  const animateHeading = (heading, delay = 0) => {
   if (revealed.has(heading)) return;
   revealed.add(heading);
   const split = splitHeading(heading);
   if (!split.chars.length) {split.restore();return;}
   splits.add(split);
   const step = Math.min(38, 560 / split.chars.length);
   let remaining = split.chars.length;
   const done = () => {if (--remaining === 0) {split.restore();splits.delete(split);}};
   split.chars.forEach((char, index) => {
    const animation = char.animate([
     {opacity:0, transform:'perspective(600px) translateY(.5em) rotateX(-80deg)'},
     {opacity:1, transform:'none'},
    ], {duration:780, delay:delay + index * step, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards'});
    animations.add(animation);
    animation.onfinish = () => {animations.delete(animation);done();};
   });
  };
  const restoreSplits = () => {splits.forEach(split => split.restore());splits.clear();};
  const setup = () => {
   observer?.disconnect();
   animations.forEach(animation => animation.cancel());
   animations.clear();
   restoreSplits();
   if (paused || preference.matches || navigator.connection?.saveData || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
   observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     if (!entry.isIntersecting) return;
     const element = entry.target;
     observer.unobserve(element);
     if (element.matches('.section-top')) {
      element.classList.add('studio-section-seen');
     } else if (element.matches(headingSelector)) {
      [...element.children].forEach((child,index) => child.matches('h2') ? animateHeading(child, index * 90) : animate(child, index * 90, true));
     } else {
      const siblings = [...element.parentElement.children].filter(child => child.matches(revealSelector));
      animate(element, Math.min(Math.max(siblings.indexOf(element),0),3) * 65);
     }
    });
   }, {threshold:.06, rootMargin:'0px 0px -28px 0px'});
   document.querySelectorAll(`${revealSelector}, ${headingSelector}, .section-top`).forEach(element => observer.observe(element));
  };
  const changeMotion = event => {
   paused = Boolean(event.detail?.paused);
   document.documentElement.classList.toggle('studio-motion-paused', paused);
   setup();
  };
  setup();update();
  destroyFlow = initFlowProgress(document.getElementById('process-track'));
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  window.addEventListener('studio-motion-change', changeMotion);
  preference.addEventListener('change', setup);
  return () => {
   observer?.disconnect();animations.forEach(animation => animation.cancel());cancelAnimationFrame(frame);restoreSplits();destroyFlow?.();
   window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);
   window.removeEventListener('studio-motion-change',changeMotion);preference.removeEventListener('change',setup);
   header?.classList.remove('is-scrolled');
  };
 }, [pathname]);
 return <div className="reading-progress" aria-hidden="true"/>;
}
