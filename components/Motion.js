'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {initFlowProgress} from './flowProgress';

const revealSelector = '[data-reveal], .studio-introduction, .team-member, .blog-card, .consult-panel, .quest-showcase, .quest-case-hero, .studio-photo, .work-feature, .crm-case, .website-example, .approach-intro, .approach-list article, .pillar-grid>article, .process-grid li, .budget-list>a, .faq-list details, .detail-page .reveal, .ai-industry-tabs button, .ai-industry-panel, .ai-calculator, .ai-diagnosis, .ai-philosophy-grid>div, .ai-service-paths a, .examples-track>a, .team-footer, .capability-consult, .contact form';
const headingSelector = '.section-heading, .ai-section-heading, .team-heading, .blog-home-heading, .contact-grid';
export default function Motion() {
 const pathname = usePathname();
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  const revealed = new WeakSet();
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
   const pop = element.dataset.reveal === 'pop';
   const compact = pop && window.matchMedia('(max-width: 760px)').matches;
   const frames = pop ? [
    {opacity:.82, transform:compact ? 'translateY(7px)' : 'translateY(13px) scale(.987)'},
    ...(!compact ? [{opacity:1, transform:'translateY(0) scale(1.004)', offset:.74}] : []),
    {opacity:1, transform:'none'},
   ] : [
    {opacity:heading ? .76 : .72, transform:`translateY(${heading ? 10 : 8}px)`},
    {opacity:1, transform:'translateY(0)'},
   ];
   const animation = element.animate(frames, {duration:pop ? (compact ? 280 : 440) : heading ? 480 : 360, delay, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards'});
   animations.add(animation);
   animation.onfinish = () => animations.delete(animation);
  };
  const setup = () => {
   observer?.disconnect();
   animations.forEach(animation => animation.cancel());
   animations.clear();
   if (paused || preference.matches || navigator.connection?.saveData || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
   observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     if (!entry.isIntersecting) return;
     const element = entry.target;
     observer.unobserve(element);
     if (element.matches('.section-top')) {
      element.classList.add('studio-section-seen');
     } else if (element.matches(headingSelector)) {
      [...element.children].forEach((child,index) => animate(child, index * 55, true));
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
   observer?.disconnect();animations.forEach(animation => animation.cancel());cancelAnimationFrame(frame);destroyFlow?.();
   window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);
   window.removeEventListener('studio-motion-change',changeMotion);preference.removeEventListener('change',setup);
   header?.classList.remove('is-scrolled');
  };
 }, [pathname]);
 return <div className="reading-progress" aria-hidden="true"/>;
}
