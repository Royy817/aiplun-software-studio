'use client';
import {useEffect,useRef,useState} from 'react';
import {budgets,timings,validateContact} from '../lib/contact.mjs';
export default function ContactBrief(){
 const [ready,setReady]=useState(null),[pending,setPending]=useState(false),[sent,setSent]=useState(false),[errors,setErrors]=useState({}),[status,setStatus]=useState('');
 const [topic,setTopic]=useState('未定・その他');
 useEffect(()=>{const selectAI=()=>setTopic('AI業務効率化・自動化について');if(new URLSearchParams(window.location.search).get('consultation')==='ai')selectAI();window.addEventListener('aiplun:ai-consultation',selectAI);return()=>window.removeEventListener('aiplun:ai-consultation',selectAI)},[]);
 const notice=useRef(null),requestId=useRef(null),sending=useRef(false);
 useEffect(()=>{const controller=new AbortController();fetch('/api/contact',{cache:'no-store',signal:controller.signal}).then(r=>r.ok?r.json():Promise.reject()).then(data=>setReady(data.ready===true)).catch(()=>{if(!controller.signal.aborted)setReady(false)});return()=>controller.abort()},[]);
 useEffect(()=>{
  if(!status)return;
  const invalid=notice.current?.closest('form')?.querySelector('[aria-invalid="true"]');
  if(invalid)invalid.focus();else notice.current?.focus();
 },[status,errors]);
 const submit=async event=>{
  event.preventDefault();if(sending.current||sent)return;
  const input=Object.fromEntries(new FormData(event.currentTarget));
  if(topic!=='未定・その他'&&input.message?.trim())input.message='【'+topic+'】\n'+input.message;
  const result=validateContact(input);setErrors(result.errors);
  if(Object.keys(result.errors).length){setStatus('入力内容をご確認ください。');return}
  sending.current=true;setPending(true);setStatus('');requestId.current??=crypto.randomUUID();
  try{
   const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...input,requestId:requestId.current}),signal:AbortSignal.timeout(20000)});
   const data=await response.json();
   if(!response.ok||data.ok!==true){if(data.errors)setErrors(data.errors);setStatus(data.message||'送信できませんでした。入力内容は残っていますので、時間をおいてお試しください。');if(response.status===503)setReady(false);return}
   setSent(true);setStatus('ご相談を受け付けました。入力いただいたメールアドレスへ、原則48時間以内に担当者からご連絡します。');
  }catch{setStatus('送信結果を確認できませんでした。入力内容を残しています。少し待ってから再度お試しください。')}
  finally{sending.current=false;setPending(false)}
 };
 const errorFor=name=>errors[name]?<span id={'contact-'+name+'-error'} className="consult-field-error">{errors[name]}</span>:null;
 const attrs=name=>({'aria-invalid':Boolean(errors[name]),'aria-describedby':errors[name]?'contact-'+name+'-error':undefined});
 return <div className="consult-panel"><div className="consult-intro"><p className="eyebrow">FREE CONSULTATION</p><h3 id="consult-title">30秒無料相談フォーム</h3><p>相談内容はひと言で大丈夫です。<br/>初回相談は無料。ご相談だけでも構いません。</p><small>入力時間の目安です。会社名・予算・希望時期は任意です。</small></div><form className="consult-form" onSubmit={submit} aria-labelledby="consult-title" noValidate>
 <fieldset disabled={pending||sent}><legend className="consult-sr">ご相談者と相談内容</legend><div className="consult-fields">
 <div className="consult-field"><label htmlFor="contact-company">会社名・屋号 <span>任意</span></label><input id="contact-company" name="company" autoComplete="organization" maxLength={120} placeholder="個人の方は空欄で大丈夫です" {...attrs('company')}/>{errorFor('company')}</div>
 <div className="consult-field"><label htmlFor="contact-name">お名前 <span className="is-required">必須</span></label><input id="contact-name" name="name" autoComplete="name" maxLength={80} required {...attrs('name')}/>{errorFor('name')}</div>
 <div className="consult-field consult-full"><label htmlFor="contact-email">メールアドレス <span className="is-required">必須</span></label><input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={254} required placeholder="返信先のメールアドレス" {...attrs('email')}/>{errorFor('email')}</div>
 <div className="consult-field consult-full"><label htmlFor="contact-topic">ご相談の種類</label><select id="contact-topic" value={topic} onChange={e=>setTopic(e.target.value)}>{['未定・その他','AI業務効率化・自動化について','業務システム開発について','Web制作について','アプリ・MVP開発について'].map(value=><option key={value}>{value}</option>)}</select></div><div className="consult-field consult-full"><label htmlFor="contact-message">相談内容 <span className="is-required">必須</span></label><textarea id="contact-message" name="message" rows={4} maxLength={2900} required placeholder="例：会社のWebサイトを作りたい／LINEでセミナー運営を効率化したい／アプリのアイデアを試したい" {...attrs('message')}/>{errorFor('message')}</div>
 <div className="consult-field"><label htmlFor="contact-budget">ご予算 <span>任意</span></label><select id="contact-budget" name="budget" defaultValue="未定・相談したい" {...attrs('budget')}>{budgets.map(v=><option key={v}>{v}</option>)}</select>{errorFor('budget')}</div>
 <div className="consult-field"><label htmlFor="contact-timing">希望時期 <span>任意</span></label><select id="contact-timing" name="timing" defaultValue="未定・相談したい" {...attrs('timing')}>{timings.map(v=><option key={v}>{v}</option>)}</select>{errorFor('timing')}</div>
 </div><div className="consult-trap" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off"/></div>
 <label className="consult-consent"><input type="checkbox" name="consent" value="yes" required {...attrs('consent')}/><span><a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>を確認し、個人情報の取り扱いに同意する</span></label>{errorFor('consent')}
 {ready===false&&<p className="consult-unavailable">フォーム受付は現在準備中です。お急ぎの方は、下記メールアドレスからご相談ください。</p>}
 <button className="consult-submit" type="submit" disabled={ready!==true||pending||sent}>{sent?'受付済み':pending?'送信中…':ready===null?'受付状況を確認中…':ready===false?'フォーム受付準備中':'無料で相談する'}{ready===true&&!pending&&!sent&&<span aria-hidden="true"> →</span>}</button>
 </fieldset><div ref={notice} tabIndex={-1} className={'consult-status'+(sent?' is-success':'')} role={sent?'status':'alert'}>{status}</div><p className="consult-direct">メールでのご相談：<a href="https://mail.google.com/mail/?view=cm&fs=1&to=royryu221317%40gmail.com&su=Aiplun%20Studio%E3%81%B8%E3%81%AE%E9%96%8B%E7%99%BA%E7%9B%B8%E8%AB%87" target="_blank" rel="noopener noreferrer">royryu221317@gmail.com</a></p><noscript><p>フォームのご利用にはJavaScriptが必要です。上記メールアドレスへご連絡ください。</p></noscript></form></div>
}
