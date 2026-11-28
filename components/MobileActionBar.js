'use client';
import {useEffect,useState} from 'react';

// Phone-only consultation bar fixed to the bottom of the screen (thumb zone).
// It appears after the hero buttons scroll out of view and hides while the contact form is on screen.
export default function MobileActionBar(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const hero=document.querySelector('.opening-actions');
  const contact=document.getElementById('contact');
  let heroInView=Boolean(hero),contactInView=false;
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.target===hero)heroInView=entry.isIntersecting;
    if(entry.target===contact)contactInView=entry.isIntersecting;
   });
   setVisible(!heroInView&&!contactInView);
  },{threshold:0});
  if(hero)observer.observe(hero);
  if(contact)observer.observe(contact);
  if(!hero)setVisible(true);
  return()=>observer.disconnect();
 },[]);
 return <nav className={'mobile-action-bar'+(visible?' is-visible':'')} aria-label="無料相談の案内" aria-hidden={!visible} inert={!visible}>
  <a className="mobile-action-primary" href="#contact">無料で相談する <span aria-hidden="true">↗</span></a>
  <a className="mobile-action-secondary" href="#pricing">費用の目安</a>
 </nav>;
}
