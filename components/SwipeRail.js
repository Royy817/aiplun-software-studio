'use client';
import {useEffect,useRef,useState} from 'react';

export default function SwipeRail({children,id,label,className='',as:Tag='div'}){
 const track=useRef(null);
 const [position,setPosition]=useState(0);
 const [count,setCount]=useState(0);
 useEffect(()=>{
  const el=track.current;
  let frame=0;
  const update=()=>{
   frame=0;
   const cards=Array.from(el.children);
   const left=el.getBoundingClientRect().left+parseFloat(getComputedStyle(el).scrollPaddingLeft||0);
   let closest=0,distance=Infinity;
   cards.forEach((card,i)=>{const d=Math.abs(card.getBoundingClientRect().left-left);if(d<distance){distance=d;closest=i;}});
   setCount(cards.length);setPosition(closest);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const observer=new ResizeObserver(schedule);
  observer.observe(el);el.addEventListener('scroll',schedule,{passive:true});update();
  return()=>{observer.disconnect();el.removeEventListener('scroll',schedule);cancelAnimationFrame(frame);};
 },[]);
 const move=(index)=>{
  const el=track.current;
  const card=el.children[Math.max(0,Math.min(count-1,index))];
  if(!card)return;
  const padding=parseFloat(getComputedStyle(el).scrollPaddingLeft||0);
  el.scrollTo({left:el.scrollLeft+card.getBoundingClientRect().left-el.getBoundingClientRect().left-padding,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 };
 return <div className="swipe-section">
  <div className="swipe-controls"><p>横にスワイプして見る <span aria-hidden="true">↔</span></p><div><span className="swipe-count" aria-live="polite" aria-atomic="true">{position+1} / {count||'—'}</span><button type="button" aria-label={label+'：前へ'} aria-controls={id} disabled={position===0} onClick={()=>move(position-1)}>←</button><button type="button" aria-label={label+'：次へ'} aria-controls={id} disabled={position>=count-1} onClick={()=>move(position+1)}>→</button></div></div>
  <Tag ref={track} id={id} className={'swipe-track '+className} aria-label={label} tabIndex={0} onKeyDown={event=>{if(event.target!==event.currentTarget||!window.matchMedia('(max-width:800px)').matches)return;let next;if(event.key==='ArrowRight')next=position+1;if(event.key==='ArrowLeft')next=position-1;if(event.key==='Home')next=0;if(event.key==='End')next=count-1;if(next!==undefined){event.preventDefault();move(next);}}}>{children}</Tag>
 </div>;
}
