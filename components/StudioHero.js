'use client';
import './hero-signals.css';
import {useEffect,useRef,useState} from 'react';

const headline = ['あなたの会社に、', 'AI専門部門を'];
const typingInterval = 52;
const secondLineOffset = headline[0].length + 2;
const typingDuration = (secondLineOffset + headline[1].length) * typingInterval;

function TypeLine({ text, offset = 0 }) {
 return Array.from(text, (character, index) => (
  <span className="sx-type-char" style={{animationDelay:(offset + index) * typingInterval + 'ms'}} key={index}>{character}</span>
 ));
}

export default function StudioHero(){
 const [typing,setTyping]=useState(true);
 useEffect(()=>{
  const finish=setTimeout(()=>setTyping(false),typingDuration);
  return()=>clearTimeout(finish);
 },[]);
 const scene=useRef(null);const replayTimer=useRef(null);const [paused,setPaused]=useState(false);const [assembled,setAssembled]=useState(false);
 useEffect(()=>{
  const mq=matchMedia('(prefers-reduced-motion: reduce)');
  let timer, observer;
  const sync=()=>{setPaused(mq.matches);setAssembled(true)};
  const start=()=>{timer=setTimeout(()=>setAssembled(true),140)};
  if(mq.matches) sync();
  else if('IntersectionObserver' in window){
   observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();start()}
   },{threshold:.3});
   observer.observe(scene.current);
  } else start();
  mq.addEventListener('change',sync);
  return()=>{observer?.disconnect();clearTimeout(timer);clearTimeout(replayTimer.current);mq.removeEventListener('change',sync)};
 },[]);
 const replay=()=>{if(paused)return;clearTimeout(replayTimer.current);setAssembled(false);replayTimer.current=setTimeout(()=>setAssembled(true),350)};
 const toggle=()=>{const next=!paused;setPaused(next);if(next)setTyping(false);window.dispatchEvent(new CustomEvent('studio-motion-change',{detail:{paused:next}}))};
 return <section className={'sx-home sx-hero'+(assembled?' is-assembled':'')+(paused?' sx-paused':'')}>

 <div className="sx-hero-grid">
  <div className="sx-hero-copy">
   <p className="sx-audience">京都・大阪を中心に、中小企業のAI活用を支援</p>
   <h1 className={typing ? 'sx-typing' : undefined} aria-label={headline.join('')}><span aria-hidden="true"><TypeLine text={headline[0]}/><br/><em><TypeLine text={headline[1].slice(0,-1)} offset={secondLineOffset}/></em><TypeLine text={headline[1].slice(-1)} offset={secondLineOffset+headline[1].length-1}/></span></h1>
   <p className="sx-lead">毎日の転記、集計、問い合わせ対応から。<br/>AIの導入・社員研修と、自社に合うシステムの開発・運用を支援します。</p>
   <p className="sx-hero-offer"><strong>単発2万円から</strong><span>AI導入支援・税別</span></p>
   <div className="opening-actions sx-actions">
    <a className="sx-button" href="/?consultation=ai#contact-form">無料でAI導入を相談する <span aria-hidden="true">↗</span></a>
    <a className="sx-sub-link" href="/services/ai-automation#pricing">AI支援の料金を見る <span aria-hidden="true">→</span></a>
   </div>
   <p className="sx-reassure">初回20〜30分。困っている業務をひとつお聞かせください。</p>
  </div>
 <div ref={scene} className="sx-scene" aria-label="紙・Excel・メッセージに分かれた仕事が、一つの仕組みにまとまるイメージ"><div className="sx-orbit sx-orbit-one"/><div className="sx-orbit sx-orbit-two"/><div className="sx-orbit sx-orbit-three"/><svg className="sx-signals" viewBox="0 0 500 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
 {['M88 93 C88 190 196 139 250 250','M433 176 C391 176 386 250 250 250','M110 381 C110 294 203 351 250 250'].map((d,i)=><g key={d} style={{'--phase':i}}><path className="signal-track" d={d}/><path className="signal-packet" pathLength="100" d={d}/></g>)}
 </svg><div className="sx-impact" aria-hidden="true"><i/><i/></div><div className="sx-core"><span className="sx-core-mark">a<span>i</span></span><span>AIPLUN</span><small>仕事をつなぐ、仕組みをつくる。</small></div>{[['01','書類の転記','DOCUMENT'],['02','顧客・案件管理','CUSTOMER'],['03','同じ問い合わせ','MESSAGE']].map(([n,title,label],i)=><div className={'sx-task sx-task-'+i} key={n}><span className="sx-task-icon">{['▤','▦','↗'][i]}</span><div><small>{label}</small><strong>{title}</strong></div><b aria-hidden="true">✓</b></div>)}<div className="sx-scene-caption"><span className="sx-dot"/>散らばる仕事が、つながりはじめる。</div><small className="sx-scene-note">業務改善のコンセプトイメージ</small></div></div>
 <div className="sx-hero-bottom"><a href="#services" className="sx-hero-scroll">支援内容を見る <span aria-hidden="true">↓</span></a><div><button type="button" onClick={replay} disabled={paused}>{assembled?'動きをもう一度':'仕組みにつなぐ'} ↗</button><button type="button" onClick={toggle} aria-pressed={paused}>{paused?'動きを再開':'動きを止める'}</button></div></div>
 </section>
}
