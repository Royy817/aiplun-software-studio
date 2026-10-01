'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
export default function Motion(){const pathname=usePathname();useEffect(()=>{
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 const animations=new Set();let observer;let frame=0;
 const header=document.querySelector('.header');const progress=document.querySelector('.reading-progress');
 const update=()=>{frame=0;const max=document.documentElement.scrollHeight-window.innerHeight;header?.classList.toggle('is-scrolled',window.scrollY>24);if(progress)progress.style.transform=`scaleX(${max>0?Math.min(1,window.scrollY/max):0})`;};
 const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
 const setup=()=>{observer?.disconnect();animations.forEach(a=>a.cancel());animations.clear();if(preference.matches||!('IntersectionObserver' in window)||!Element.prototype.animate)return;
 observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;observer.unobserve(entry.target);const a=entry.target.animate([{opacity:.35,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:520,easing:'cubic-bezier(.22,1,.36,1)'});animations.add(a);a.onfinish=()=>animations.delete(a);});},{threshold:.08,rootMargin:'0px 0px -24px 0px'});
 document.querySelectorAll('[data-reveal], .studio-introduction, .team-heading, .team-member, .blog-card, .consult-panel, .quest-showcase, .quest-case-hero, .section-heading, .studio-photo, .service-explorer, .work-feature, .crm-case, .website-example, .approach-intro, .approach-list article, .process-grid li, .budget-list>a, .faq-list details, .contact-grid, .detail-page .reveal').forEach(el=>observer.observe(el));};
 setup();update();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);preference.addEventListener('change',setup);
 return()=>{observer?.disconnect();animations.forEach(a=>a.cancel());cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);preference.removeEventListener('change',setup);header?.classList.remove('is-scrolled');};
},[pathname]);return <div className="reading-progress" aria-hidden="true"/>}
