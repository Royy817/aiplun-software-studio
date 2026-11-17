'use client';

// Three entry points at the top of the contact section (R11).
// "見積もりを依頼する" moves to the form and switches the topic select to 見積もり依頼 (handled in ContactBrief).
const routes = [
 {key:'consult', label:'無料で相談する', text:'何を導入するか決まっていない段階から、困りごとをご相談いただけます。', href:'#contact-form'},
 {key:'estimate', label:'見積もりを依頼する', text:'作りたいもの・直したいことが決まっている方は、内容をお知らせください。', href:'#contact-form'},
 {key:'pricing', label:'費用の目安を見る', text:'まず費用感を知りたい方へ。期間・規模と、費用が変わるポイントをまとめています。', href:'/plans'},
];

export default function ContactRoutes(){
 const selectEstimate = () => window.dispatchEvent(new Event('aiplun:estimate-request'));
 return <ul className="contact-routes" aria-label="ご相談の入口">
  {routes.map(route => <li key={route.key}>
   <a href={route.href} onClick={route.key === 'estimate' ? selectEstimate : undefined}>
    <strong>{route.label}</strong>
    <span>{route.text}</span>
    <span className="contact-route-arrow" aria-hidden="true">{route.href.startsWith('#') ? '↓' : '→'}</span>
   </a>
  </li>)}
 </ul>;
}
