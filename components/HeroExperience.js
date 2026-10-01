'use client';
import {useEffect,useRef,useState} from 'react';
import DiagnosisLink from './ai/DiagnosisLink';

function FlowIcon({kind}){
 return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{kind==='people'?<><circle cx="9" cy="7" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 4v3"/></>:kind==='message'?<><path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 8h8M8 12h5"/></>:<><path d="M4 4h5v5H4zM15 4h5v5h-5zM4 15h5v5H4zM15 15h2v2h-2zM20 15v5h-5M12 4v8H4M12 15v5"/></>}</svg>;
}

export default function HeroExperience(){
 const [run,setRun]=useState(0),[paused,setPaused]=useState(false),[reduced,setReduced]=useState(false);
 const root=useRef(null),frame=useRef(0),allowed=useRef(false);
 useEffect(()=>{
  const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
  const update=()=>{setReduced(mq.matches);allowed.current=!mq.matches&&fine.matches&&!navigator.connection?.saveData;};
  update();mq.addEventListener('change',update);fine.addEventListener('change',update);
  return()=>{mq.removeEventListener('change',update);fine.removeEventListener('change',update);cancelAnimationFrame(frame.current);};
 },[]);
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
     <div className="opening-manifesto" aria-hidden="true"><span>MAKE</span><span>ROOM.</span><small>FOR WHAT MATTERS.</small></div>
     <div className="opening-plane"><div className="opening-orbit" aria-hidden="true"/><div className="opening-product">
      <div className="opening-windowbar"><span className="opening-window-dots" aria-hidden="true"><i/><i/><i/></span><span>QUEST AI / WORKSPACE</span><span className="opening-window-index">01</span></div>
      <img src="/quest-ai-dashboard-original.jpg" alt="Aiplun Studioが開発したクエストAIの管理画面。顧客管理・セミナー案内・受付をまとめるシステム" width="1200" height="750" fetchPriority="high" decoding="async"/>
      <div className="opening-windowfoot"><span>クエストAI</span><span>自社開発 / 管理画面</span></div>
     </div>
     <div className="opening-flow-card opening-flow-one"><span className="opening-card-icon"><FlowIcon kind="people"/></span><div><small>01 / ORGANIZE</small><strong>申込情報を、ひとつに。</strong></div></div>
     <div className="opening-flow-card opening-flow-two"><span className="opening-card-icon"><FlowIcon kind="message"/></span><div><small>02 / CONNECT</small><strong>LINEで案内を届ける。</strong></div></div>
     <div className="opening-flow-card opening-flow-three"><span className="opening-card-icon"><FlowIcon kind="qr"/></span><div><small>03 / MOVE FORWARD</small><strong>受付から、次の関係へ。</strong></div></div>
     <div className="opening-linework" aria-hidden="true"><span/><span/><span/></div>
     </div>
    </div>
    <div className="opening-visual-caption"><a href="/works/quest-ai">画面・機能を見る<span aria-hidden="true">↗</span></a><span>カードは業務連携のイメージです</span></div>
    <div className="opening-motion-controls"><button type="button" disabled={reduced} onClick={()=>{reset();setPaused(false);setRun(v=>v+1)}} aria-label="管理画面の導入モーションをもう一度見る"><span aria-hidden="true">↻</span> REPLAY</button><button type="button" disabled={reduced} aria-pressed={paused} onClick={()=>{reset();setPaused(v=>!v)}}>{paused?'動きを再開':'動きを止める'}</button></div>
   </div>
  </div>
  <div className="wrap opening-bottom"><p>Less busy. More possibility.</p><div><span>AI AUTOMATION</span><span>BUSINESS SYSTEMS</span><span>APP &amp; WEB</span></div><a href="#ai-impact" aria-label="AI導入イメージへスクロール"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a></div>
 </section>;
}
