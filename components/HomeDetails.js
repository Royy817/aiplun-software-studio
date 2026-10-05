'use client';
import {useEffect,useRef} from 'react';

export default function HomeDetails({id,title,description,children}){
 const details=useRef(null);
 useEffect(()=>{
  const reveal=hash=>{
   if(!hash)return;
   let target;
   try{target=document.getElementById(decodeURIComponent(hash.slice(1)));}catch{return;}
   if(target&&(target===details.current||details.current?.contains(target)))details.current.open=true;
  };
  const onHash=()=>reveal(window.location.hash);
  const onClick=event=>{
   const link=event.target.closest('a[href]');
   if(!link||event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const url=new URL(link.href,window.location.href);
   if(url.origin===window.location.origin&&url.pathname===window.location.pathname)reveal(url.hash);
  };
  onHash();window.addEventListener('hashchange',onHash);document.addEventListener('click',onClick);
  return()=>{window.removeEventListener('hashchange',onHash);document.removeEventListener('click',onClick);};
 },[]);
 return <details ref={details} id={id} className="home-details"><summary><span><strong>{title}</strong><span>{description}</span></span><span className="home-details-icon" aria-hidden="true">＋</span></summary><div className="home-details-content">{children}</div></details>;
}
