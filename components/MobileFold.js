'use client';
import {useEffect,useId,useRef,useState} from 'react';

// On wide screens the wrapper uses display:contents, so the layout is unchanged and the toggle is hidden.
// On phones (max-width:800px) the content starts collapsed but stays in the DOM, so search engines still
// see it. A link to the surrounding section (for example #consultation) opens the fold automatically.
export default function MobileFold({label,children,className=''}){
 const [open,setOpen]=useState(false);
 const id=useId();
 const root=useRef(null);
 useEffect(()=>{
  const section=root.current?.closest('section[id]');
  const reveal=hash=>{
   if(!hash||hash.length<2)return;
   let target;
   try{target=document.getElementById(decodeURIComponent(hash.slice(1)));}catch{return;}
   if(target&&(target===section||root.current?.contains(target)))setOpen(true);
  };
  const onHash=()=>reveal(window.location.hash);
  const onClick=event=>{
   const link=event.target.closest?.('a[href*="#"]');
   if(!link)return;
   const url=new URL(link.href,window.location.href);
   if(url.origin===window.location.origin&&url.pathname===window.location.pathname)reveal(url.hash);
  };
  onHash();
  window.addEventListener('hashchange',onHash);
  document.addEventListener('click',onClick);
  return()=>{window.removeEventListener('hashchange',onHash);document.removeEventListener('click',onClick);};
 },[]);
 return <div ref={root} className={'mobile-fold '+className} data-open={open?'true':'false'}>
  <div className="mobile-fold-body" id={id}>{children}</div>
  <button type="button" className="mobile-fold-toggle" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}>
   <span>{open?'閉じる':label}</span><span aria-hidden="true">{open?'−':'＋'}</span>
  </button>
 </div>;
}
