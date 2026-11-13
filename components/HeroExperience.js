'use client';
import {useEffect,useRef,useState} from 'react';
import OpeningFilm from './OpeningFilm';
import ServiceAssembly from './HomepageAssembly';
import HeroBackgroundFilm from './HeroBackgroundFilm';

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
   <div className="opening-copy"><p className="opening-location">中小企業・個人事業の経営者、業務担当者の方へ</p><h1 id="opening-title" className="mission-title"><span className="opening-line"><span>毎日の転記・確認、</span></span><span className="opening-line"><span>同じ返信。</span></span><span className="opening-line opening-line-accent"><span>その手間を減らす</span></span><span className="opening-line opening-line-accent"><span>仕組みを、一緒に。</span></span></h1><p className="opening-description">Excel・紙・LINEに散らばる仕事を整理し、既存ツールの活用からAI・システム開発まで、業務に合う方法をご提案。Web制作や新しいアプリの相談にも対応します。</p><div className="opening-actions"><a href="#contact" className="button dark">自社の業務を無料で相談する</a><a href="#consultation" className="opening-secondary">無料相談で分かること</a></div><p className="opening-copy-note">専門知識は不要／必要ない開発はすすめません／導入後の活用も相談できます</p><OpeningFilm/></div>
   <div className="opening-visual" onPointerMove={tilt} onPointerLeave={reset}>
    <div className="opening-scene opening-service-scene" key={run}>
     <div className="opening-scene-grid" aria-hidden="true"/>
     <ServiceAssembly/>
    </div>
    <div className="opening-visual-caption"><a href="#services">できることを見る<span aria-hidden="true">↗</span></a><span>課題から、できることがわかる</span></div>
    <div className="opening-motion-controls"><button type="button" disabled={reduced} onClick={()=>{reset();setMotion(false);setRun(v=>v+1)}} aria-label="サービスを紹介する立方体アニメーションをもう一度見る"><span aria-hidden="true">↻</span> REPLAY</button><button type="button" disabled={reduced} aria-pressed={paused} onClick={()=>{reset();setMotion(!paused)}}>{paused?'サイトの動きを再開':'サイトの動きを止める'}</button></div>
   </div>
  </div>
  <HeroBackgroundFilm/>
  <div className="wrap opening-bottom"><p>Less busy. More possibility.</p><div><span>AI AUTOMATION</span><span>BUSINESS SYSTEMS</span><span>APP &amp; WEB</span></div><a href="#services" aria-label="サービスへスクロール"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a></div>
 </section>;
}
