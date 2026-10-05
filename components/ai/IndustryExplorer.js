'use client';
import {useState} from 'react';
import {industryCases,servicePaths} from '../../lib/industries';
import {formatNumber} from '../../lib/savings.mjs';
import DiagnosisLink from './DiagnosisLink';
function IndustryIcon({type}) {
 const paths={calendar:'M5 5h14v15H5z M8 3v4 M16 3v4 M5 10h14 M8 14h3 M14 14h2',file:'M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6',store:'M4 10v11h16V10 M3 10l2-7h14l2 7 M3 10q3 4 6 0q3 4 6 0q3 4 6 0 M9 21v-7h6v7',briefcase:'M3 8h18v13H3z M8 8V4h8v4 M3 13q9 5 18 0 M12 13v4'};
 return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d={paths[type]}/></svg>;
}
function Workflow({after,steps}) {
 return <div className={'ai-flow '+(after?'ai-flow-after':'')}><div className="ai-flow-label"><span aria-hidden="true">{after?'↗':'↻'}</span><h4>{after?'AI・システム導入後':'現在'}</h4><small>{after?'つなぐ・任せる':'手作業・転記'}</small></div><ol>{steps.map((step,i)=><li key={i}><span className="ai-step-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><span>{after?step[0]:step}</span>{after&&<small>{step[1]}</small>}</li>)}</ol></div>;
}
function ModelResult({evidence}) {
 if(evidence.savedHours==null)return <div className="ai-model ai-model-custom"><p className="ai-model-tag">導入イメージ / モデルケース</p><h4>あなたのチームの条件で、<br/>生まれる時間を試算。</h4><p>営業人数・準備時間・入力時間によって効果は異なります。</p><a className="text-link" href="#ai-simulator">自社の条件で試算する ↓</a></div>;
 const monthly=evidence.savedHours*evidence.hourlyCost;
 return <div className="ai-model"><p className="ai-model-tag">モデルケース / 業務時間相当</p><p className="ai-model-formula">{evidence.formula}</p><div className="ai-model-numbers"><div><span>月間の削減時間（想定）</span><strong>{evidence.savedHours}<small>時間</small></strong></div><div><span>月間の金額換算</span><strong><small>約</small>{formatNumber(monthly)}<small>円</small></strong></div><div><span>年間の金額換算</span><strong><small>約</small>{formatNumber(monthly*12)}<small>円</small></strong></div></div><p>時給{formatNumber(evidence.hourlyCost)}円で換算した、業務時間相当の削減可能性</p></div>;
}
export default function IndustryExplorer() {
 const [selected,setSelected]=useState(0);
 function changeTab(event,index) {
  let next;
  if(event.key==='ArrowRight')next=(index+1)%industryCases.length;
  if(event.key==='ArrowLeft')next=(index+industryCases.length-1)%industryCases.length;
  if(event.key==='Home')next=0;
  if(event.key==='End')next=industryCases.length-1;
  if(next!==undefined){event.preventDefault();setSelected(next);document.getElementById('industry-tab-'+next)?.focus();}
 }
 return <section id="ai-industry-examples" className="ai-impact section"><div className="wrap"><div className="ai-section-heading" data-reveal><p className="eyebrow">LESS ROUTINE. MORE VALUE.</p><h2>AIで、あなたの会社の仕事は<br className="ai-desktop-break"/>こう変わります。</h2><p>AIを導入することが目的ではありません。<br/>人がやらなくてもいい仕事を減らし、<br/>本当に価値のある仕事に集中できる仕組みをつくります。</p></div><p className="ai-choose-label" id="industry-label">業種から導入イメージを見る</p><div className="ai-industry-tabs" role="tablist" aria-labelledby="industry-label">{industryCases.map((item,i)=><button key={item.id} id={'industry-tab-'+i} type="button" role="tab" aria-selected={selected===i} aria-controls={'industry-panel-'+i} tabIndex={selected===i?0:-1} onKeyDown={e=>changeTab(e,i)} onClick={()=>setSelected(i)}><IndustryIcon type={item.icon}/><span>{item.name}</span></button>)}</div>
 {industryCases.map((item,i)=><div key={item.id} id={'industry-panel-'+i} role="tabpanel" aria-labelledby={'industry-tab-'+i} hidden={selected!==i} tabIndex="0" className="ai-industry-panel"><div className="ai-case-intro"><div><p className="ai-model-tag">導入イメージ / {item.name}</p><h3>{item.headline}</h3></div><ul className="ai-problems">{item.problems.map(problem=><li key={problem}>{problem}</li>)}</ul></div><div className="ai-workflows"><Workflow steps={item.before}/><Workflow after steps={item.after}/></div><p className="ai-human-note">{item.human}</p><ModelResult evidence={item.evidence}/><p className="ai-disclaimer">※上記はモデルケースです。実際の効果は業務内容・利用状況によって異なります。人件費の支出削減を保証するものではなく、導入費用・運用費用は含みません。</p><div className="ai-case-actions"><DiagnosisLink>この仕組みを自社にも導入する</DiagnosisLink>{item.related&&<a href={item.related.href} className="text-link">{item.related.label} →</a>}</div></div>)}
 <nav className="ai-service-paths" aria-label="業務改善を支えるサービス">{servicePaths.map(([name,description,href])=><a href={href} key={href}><strong>{name}<span aria-hidden="true">↗</span></strong><span>{description}</span></a>)}</nav></div></section>;
}
