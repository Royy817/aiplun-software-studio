'use client';
import {useEffect,useRef,useState} from 'react';
import DiagnosisLink from './ai/DiagnosisLink';

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
     <div className="opening-plane workflow-plane" role="img" aria-label="申込、連絡、受付、集計をAIとシステムでつなぐ業務改善のイメージ">
      <div className="workflow-base" aria-hidden="true"><span className="workflow-base-label">FROM BUSYWORK TO BETTER WORK.</span></div>
      <svg className="workflow-connections" viewBox="0 0 500 440" fill="none" aria-hidden="true"><path d="M120 92H210V220M380 92H290V220M120 348H210V220M380 348H290V220"/><circle cx="250" cy="220" r="108"/></svg>
      <div className="workflow-core"><span className="workflow-core-index">AIPLUN STUDIO</span><div className="workflow-symbol" aria-hidden="true"><span/><span/><span/></div><strong>仕事を、<br/>つなぐ。</strong><small>AI + SYSTEMS</small></div>
      {[
       ['01','申込','情報をまとめる','form'],
       ['02','連絡','案内を届ける','message'],
       ['03','受付','確認をスムーズに','check'],
       ['04','集計','次の改善へ','chart'],
      ].map(([number,title,description,icon])=><div key={number} className={'workflow-node workflow-node-'+number}><div className="workflow-node-top"><span>{number}</span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{icon==='form'?<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></>:icon==='message'?<><path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 8h8M8 12h5"/></>:icon==='check'?<><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 3 3 5-6"/></>:<><path d="M4 3v17h17M8 16v-4M13 16V8M18 16V5"/></>}</svg></div><strong>{title}</strong><small>{description}</small></div>)}
      <div className="workflow-side-note" aria-hidden="true">LESS BUSY. / MORE POSSIBILITY.</div>
     </div>
    </div>
    <div className="opening-visual-caption"><a href="#ai-impact">業務改善のイメージを見る<span aria-hidden="true">↗</span></a><span>AI・システムによる業務連携のイメージ</span></div>
    <div className="opening-motion-controls"><button type="button" disabled={reduced} onClick={()=>{reset();setPaused(false);setRun(v=>v+1)}} aria-label="業務連携の導入モーションをもう一度見る"><span aria-hidden="true">↻</span> REPLAY</button><button type="button" disabled={reduced} aria-pressed={paused} onClick={()=>{reset();setPaused(v=>!v)}}>{paused?'動きを再開':'動きを止める'}</button></div>
   </div>
  </div>
  <div className="wrap opening-bottom"><p>Less busy. More possibility.</p><div><span>AI AUTOMATION</span><span>BUSINESS SYSTEMS</span><span>APP &amp; WEB</span></div><a href="#ai-impact" aria-label="AI導入イメージへスクロール"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a></div>
 </section>;
}
