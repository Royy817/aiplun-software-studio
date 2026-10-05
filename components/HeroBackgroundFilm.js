'use client';
import {useEffect,useRef,useState} from 'react';

export default function HeroBackgroundFilm(){
 const video=useRef(null),playback=useRef(()=>{}),sync=useRef(()=>{}),blocked=useRef(false);
 const [enabled,setEnabled]=useState(false),[playing,setPlaying]=useState(false),[paused,setPaused]=useState(false),[globalPaused,setGlobalPaused]=useState(false),[reduced,setReduced]=useState(false);
 useEffect(()=>{
  const el=video.current,hero=el.closest('.opening-hero');
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible=true,manualPause=false,globalPause=document.documentElement.classList.contains('studio-motion-paused'),disposed=false;
  const update=()=>{
   const restricted=preference.matches||navigator.connection?.saveData===true;
   setReduced(restricted);setEnabled(!restricted);setGlobalPaused(globalPause);
   blocked.current=restricted||manualPause||globalPause||document.documentElement.classList.contains('studio-intro-active')||!visible||document.hidden;
   if(blocked.current){el.pause();return;}
   if(!el.getAttribute('src'))return;
   el.muted=true;
   el.play().catch(()=>{if(!disposed)setPlaying(false);});
  };
  sync.current=update;
  playback.current=()=>{manualPause=!manualPause;setPaused(manualPause);update();};
  const motion=event=>{globalPause=event.detail?.paused===true;update();};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update();},{threshold:0});
  observer.observe(hero);preference.addEventListener('change',update);document.addEventListener('visibilitychange',update);window.addEventListener('studio-motion-change',motion);window.addEventListener('studio-intro-change',update);
  update();
  return()=>{disposed=true;observer.disconnect();preference.removeEventListener('change',update);document.removeEventListener('visibilitychange',update);window.removeEventListener('studio-motion-change',motion);window.removeEventListener('studio-intro-change',update);el.pause();};
 },[]);
 // Attach the source only after checking motion and data-saving preferences.
 useEffect(()=>{if(enabled){video.current.load();sync.current();}},[enabled]);
 return <><div className="opening-film-background" aria-hidden="true"><video ref={video} src={enabled?'/media/aiplun-brand-film-30s.mp4':undefined} poster="/media/aiplun-brand-film-poster.webp" muted loop playsInline preload="none" tabIndex={-1} onPlaying={()=>{if(blocked.current){video.current.pause();setPlaying(false);}else setPlaying(true);}} onPause={()=>setPlaying(false)} onError={()=>setPlaying(false)}/></div><div className="wrap opening-film-controls"><span>BRAND FILM / BACKGROUND</span><button type="button" disabled={reduced||globalPaused} aria-pressed={paused||globalPaused} onClick={()=>{if(!playing&&!paused){video.current.muted=true;video.current.play().catch(()=>setPlaying(false));}else playback.current();}}>{reduced?'背景動画：静止表示':globalPaused?'背景動画：全体停止中':playing?'背景動画を停止':paused?'背景動画を再開':'背景動画を再生'}<span aria-hidden="true">{playing&&!globalPaused&&!paused&&!reduced?'Ⅱ':'▷'}</span></button></div></>;
}
