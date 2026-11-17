'use client';
import {useEffect,useRef,useState} from 'react';

export default function StudioHero(){
 const root=useRef(null);const [paused,setPaused]=useState(false);const [assembled,setAssembled]=useState(false);
 useEffect(()=>{const mq=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>{setPaused(mq.matches);setAssembled(true)};if(mq.matches)sync();const timer=setTimeout(()=>setAssembled(true),900);mq.addEventListener('change',sync);return()=>{clearTimeout(timer);mq.removeEventListener('change',sync)}},[]);
 const toggle=()=>{const next=!paused;setPaused(next);window.dispatchEvent(new CustomEvent('studio-motion-change',{detail:{paused:next}}))};
 return <section className={'sx-hero'+(assembled?' is-assembled':'')+(paused?' sx-paused':'')} ref={root}>
 <div className="sx-hero-top"><span>AI / SYSTEM / WEB / APP</span><span>KYOTO, JAPAN — 全国オンライン対応</span></div>
 <div className="sx-hero-grid"><div className="sx-hero-copy"><p className="sx-audience">専任のIT担当がいない、中小企業・個人事業の方へ。</p><h1>その手間を、<br/><em>次の可能性に。</em></h1><p className="sx-lead">毎日の転記も、顧客管理も、新しいWebサイトも。<br/>仕事の流れを知るところから、<br/>AIとソフトウェアで、使える仕組みをつくります。</p><div className="opening-actions sx-actions"><a className="sx-button" href="#contact">自社の課題を、無料で相談する <span>↗</span></a><a className="sx-sub-link" href="#works">つくったものを見る <span>↓</span></a></div><p className="sx-reassure">要件が未定でも大丈夫。代表が直接お話を伺います。</p></div>
 <div className="sx-scene" aria-label="紙・Excel・メッセージに分かれた仕事が、一つの仕組みにまとまるイメージ"><div className="sx-orbit sx-orbit-one"/><div className="sx-orbit sx-orbit-two"/><div className="sx-orbit sx-orbit-three"/><div className="sx-core"><span className="sx-core-mark">a<span>i</span></span><span>AIPLUN STUDIO</span><small>仕事をつなぐ、仕組みをつくる。</small></div>{[['01','書類の転記','DOCUMENT'],['02','顧客・案件管理','CUSTOMER'],['03','同じ問い合わせ','MESSAGE']].map(([n,title,label],i)=><div className={'sx-task sx-task-'+i} key={n}><span className="sx-task-icon">{['▤','▦','↗'][i]}</span><div><small>{label}</small><strong>{title}</strong></div><b aria-hidden="true">✓</b></div>)}<div className="sx-scene-caption"><span className="sx-dot"/>散らばる仕事が、つながりはじめる。</div><small className="sx-scene-note">業務改善のコンセプトイメージ</small></div></div>
 <div className="sx-hero-bottom"><span>LESS BUSY. <b>MORE POSSIBILITY.</b></span><div><button type="button" onClick={()=>setAssembled(v=>!v)} aria-pressed={assembled}>{assembled?'動きをもう一度':'仕組みにつなぐ'} ↗</button><button type="button" onClick={toggle} aria-pressed={paused}>{paused?'動きを再開':'動きを止める'}</button></div></div>
 </section>
}
