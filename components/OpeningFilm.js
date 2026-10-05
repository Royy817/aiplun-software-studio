'use client';
import {useCallback,useEffect,useRef,useState} from 'react';

export default function OpeningFilm(){
 const dialog=useRef(null),video=useRef(null);
 const [opened,setOpened]=useState(false),[enabled,setEnabled]=useState(false),[playing,setPlaying]=useState(false),[muted,setMuted]=useState(true),[failed,setFailed]=useState(false);
 const finish=useCallback(()=>{video.current?.pause();if(dialog.current?.open)dialog.current.close();setOpened(false);setPlaying(false);},[]);
 useEffect(()=>{
  if(!opened)return;
  const el=dialog.current,root=document.documentElement;
  const previousOverflow=document.body.style.overflow;
  root.classList.add('studio-intro-active');document.body.style.overflow='hidden';
  window.dispatchEvent(new CustomEvent('studio-intro-change'));
  el.showModal();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!navigator.connection?.saveData)setEnabled(true);
  return()=>{if(el.open)el.close();root.classList.remove('studio-intro-active');document.body.style.overflow=previousOverflow;window.dispatchEvent(new CustomEvent('studio-intro-change'));};
 },[opened]);
 useEffect(()=>{if(enabled&&opened)video.current.play().catch(()=>setPlaying(false));},[enabled,opened]);
 const play=()=>{setFailed(false);if(!enabled)setEnabled(true);else video.current.play().catch(()=>setPlaying(false));};
 return <><button id="brand-film" type="button" className="opening-film-launch" aria-haspopup="dialog" onClick={()=>{setFailed(false);setMuted(true);setOpened(true);setEnabled(true);}}><span aria-hidden="true">▷</span> ブランドムービーを見る <small>30秒</small></button><dialog ref={dialog} className="opening-film-dialog" aria-labelledby="opening-film-label" onCancel={event=>{event.preventDefault();finish();}} onClose={finish}>
  <div className="intro-film-header"><div><span className="intro-film-brand">Aiplun Studio</span><p id="opening-film-label">BRAND FILM — 30 SECONDS</p></div><button className="intro-film-close" type="button" autoFocus onClick={finish}>閉じる <span aria-hidden="true">×</span></button></div>
  <video ref={video} src={opened&&enabled?'/media/aiplun-brand-film-30s.mp4':undefined} poster="/media/aiplun-brand-film-poster.webp" muted={muted} playsInline controls={enabled} preload="none" aria-label="Aiplun Studio ブランドムービー" onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={finish} onVolumeChange={()=>setMuted(video.current?.muted??true)} onError={()=>{setFailed(true);setPlaying(false);}}/>
  {!playing&&<button type="button" className="intro-film-play" onClick={play}>{failed?'もう一度再生する':'ムービーを再生'} <span aria-hidden="true">▷</span></button>}
  <div className="intro-film-footer"><p>仕事に、余白を。<small>Less busy. More possibility.</small></p><div><button type="button" className="intro-film-sound" onClick={()=>setMuted(value=>!value)} aria-pressed={!muted}>{muted?'音声をオンにする':'音声をオフにする'}</button><button type="button" className="intro-film-enter" onClick={finish}>サイトへ進む <span aria-hidden="true">↗</span></button></div></div>
 </dialog></>;
}
