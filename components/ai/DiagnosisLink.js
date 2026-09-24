'use client';
export default function DiagnosisLink({children='無料でAI業務診断を受ける',className='button dark'}) {
 function selectConsultation(event) {
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||window.location.pathname!=='/')return;
  const contact=document.getElementById('contact');
  if(!contact)return;
  event.preventDefault();
  window.dispatchEvent(new CustomEvent('aiplun:ai-consultation'));
  window.history.pushState(null,'','/?consultation=ai#contact');
  contact.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 return <a className={className} href="/?consultation=ai#contact" onClick={selectConsultation}>{children}<span aria-hidden="true">↗</span></a>;
}
