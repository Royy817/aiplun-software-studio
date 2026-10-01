'use client';
import {useEffect,useRef,useState} from 'react';
import DiagnosisLink from './ai/DiagnosisLink';
import HomepageAssembly from './HomepageAssembly';

export default function HeroExperience(){
 const [run,setRun]=useState(0),[paused,setPaused]=useState(false),[reduced,setReduced]=useState(false);
 const root=useRef(null),frame=useRef(0),allowed=useRef(false);
 useEffect(()=>{
  const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
  const update=()=>{setReduced(mq.matches);allowed.current=!mq.matches&&fine.matches&&!navigator.connection?.saveData;};
  setPaused(document.documentElement.classList.contains('studio-motion-paused'));
  update();mq.addEventListener('change',update);fine.addEventListener('change',update);
  return()=>{mq.removeEventListener('change',update);fine.removeEventListener('change',update);cancelAnimationFrame(frame.current);};
 },[]);
 function setMotion(value){setPaused(value);window.dispatchEvent(new CustomEvent('studio-motion-change',{detail:{paused:value}}));}
 function tilt(event){
  if(!allowed.current||paused||event.pointerType==='touch')return;
  const bounds=event.currentTarget.getBoundingClientRect();
  const x=(event.clientX-bounds.left)/bounds.width-.5,y=(event.clientY-bounds.top)/bounds.height-.5;
  cancelAnimationFrame(frame.current);
  frame.current=requestAnimationFrame(()=>{root.current?.style.setProperty('--look-x',`${x*7}deg`);root.current?.style.setProperty('--look-y',`${-y*5}deg`);});
 }
 function reset(){cancelAnimationFrame(frame.current);root.current?.style.setProperty('--look-x','0deg');root.current?.style.setProperty('--look-y','0deg');}
 return <section className={`opening-hero${paused?' motion-still':''}`} ref={root} aria-labelledby="opening-title">
  <div className="wrap opening-topline"><span><i aria-hidden="true"/>AIPLUN STUDIO — AI &amp; SYSTEMS</span><span>KYOTO, JAPAN / WORKING EVERYWHERE</span></div>
  <div className="wrap opening-grid">
   <div className="opening-copy"><p className="opening-location">京都・大阪から全国へ｜AI導入・業務改善</p><h1 id="opening-title"><span className="opening-line"><span>繰り返す仕事を、</span></span><span className="opening-line"><span>減らす。</span></span><span className="opening-line opening-line-accent"><span>可能性を、増やす。</span></span></h1><p className="opening-description">AIとシステムで、入力・問い合わせ・日々の手作業を効率化。<br className="opening-desktop-break"/>企画や営業に集中できる、仕事の流れをつくります。</p><div className="opening-actions"><DiagnosisLink/><a href="#ai-impact" className="opening-secondary">業種別の導入イメージを見る</a></div><p className="opening-copy-note">業務の整理から、開発・導入後の改善まで。</p></div>
   <div className="opening-visual" onPointerMove={tilt} onPointerLeave={reset}>
    <div className="opening-scene" key={run}>
     <div className="opening-scene-grid" aria-hidden="true"/>
     <div className="opening-manifesto" aria-hidden="true"><span>MAKE</span><span>IT REAL.</span><small>ONE IDEA. EVERY POSSIBILITY.</small></div>
     <HomepageAssembly/>
    </div>
    <div className="opening-visual-caption"><a href="#services">できることを見る<span aria-hidden="true">↗</span></a><span>ホームページが完成するイメージ</span></div>
    <div className="opening-motion-controls"><button type="button" disabled={reduced} onClick={()=>{reset();setMotion(false);setRun(v=>v+1)}} aria-label="ホームページ完成のモーションをもう一度見る"><span aria-hidden="true">↻</span> REPLAY</button><button type="button" disabled={reduced} aria-pressed={paused} onClick={()=>{reset();setMotion(!paused)}}>{paused?'サイトの動きを再開':'サイトの動きを止める'}</button></div>
   </div>
  </div>
  <div className="wrap opening-bottom"><p>Less busy. More possibility.</p><div><span>AI AUTOMATION</span><span>BUSINESS SYSTEMS</span><span>APP &amp; WEB</span></div><a href="#ai-impact" aria-label="AI導入イメージへスクロール"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a></div>
 </section>;
}
