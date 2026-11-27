'use client';

import { useEffect, useRef, useState } from 'react';
import {
  calculatorFields, diagnosisQuestions, estimateImpact, industryExamples, recommendPlan,
} from '../../lib/ai-partner.mjs';
import { formatNumber } from '../../lib/savings.mjs';

const departments = [
  { name: '営業', icon: '↗', work: '商談メモ → 提案の下書き' },
  { name: '事務', icon: '▤', work: '請求書 → 台帳の入力案' },
  { name: '経営', icon: '◫', work: '報告 → 判断材料の整理' },
  { name: 'システム', icon: '⌘', work: '社内資料 → 検索・連携' },
];

export function PartnerNetwork() {
  const [active, setActive] = useState(0);
  return (
    <figure className="ap-network" data-reveal="pop">
      <figcaption><span>AIPLUN × あなたの会社</span><span>業務連携イメージ</span></figcaption>
      <div className="ap-network-map">
        <div className="ap-network-orbits" aria-hidden="true"><i/><i/><i/></div>
        <div className="ap-network-core"><i aria-hidden="true">✦</i><b>AIPLUN</b><span>AI PARTNER</span></div>
        {departments.map((department, index) => (
          <button className="ap-node" key={department.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
            <span aria-hidden="true">{department.icon}</span>{department.name}
          </button>
        ))}
        <div className="ap-network-lines" aria-hidden="true">{departments.map(({ name }, index) => <i key={name} className={active === index ? 'is-active' : ''}/>)}</div>
      </div>
      <div className="ap-network-readout" aria-live="polite"><span aria-hidden="true">●</span>{departments[active].work}</div>
    </figure>
  );
}

export function PartnerIndustries() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  function handleKey(event, index) {
    const last = industryExamples.length - 1;
    const keys = { ArrowRight: (index + 1) % (last + 1), ArrowLeft: (index + last) % (last + 1), Home: 0, End: last };
    if (!Object.hasOwn(keys, event.key)) return;
    event.preventDefault();
    setActive(keys[event.key]);
    tabs.current[keys[event.key]]?.focus();
  }

  return <>
    <div className="ap-tabs" role="tablist" aria-label="業界別AI活用例">
      {industryExamples.map((example, index) => (
        <button key={example.name} type="button" role="tab" id={'ap-industry-tab-' + index} aria-selected={active === index} aria-controls={'ap-industry-panel-' + index} tabIndex={active === index ? 0 : -1} ref={element => { tabs.current[index] = element; }} onClick={() => setActive(index)} onKeyDown={event => handleKey(event, index)}>{example.name}</button>
      ))}
    </div>
    {industryExamples.map((example, index) => (
      <div className="ap-industry-panel" key={example.name} role="tabpanel" id={'ap-industry-panel-' + index} aria-labelledby={'ap-industry-tab-' + index} tabIndex={0} hidden={active !== index}>
        <h3>{example.title}</h3>
        <dl>
          <div><dt>今の仕事</dt><dd>{example.before}</dd></div>
          <div><dt>AIで支援</dt><dd>{example.after}</dd></div>
          <div><dt>人が確認</dt><dd>{example.review}</dd></div>
        </dl>
      </div>
    ))}
  </>;
}

export function PartnerDiagnosis() {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  return <div className="ap-tool-shell">
    <form className="ap-tool-inputs" onChange={() => setResult(null)} onSubmit={event => {
      event.preventDefault();
      const answers = Object.fromEntries(new FormData(event.currentTarget));
      setResult({ ...recommendPlan(answers), answers });
    }}>
      {diagnosisQuestions.map(({ name, label, options }) => (
        <label key={name} htmlFor={'ap-diagnosis-' + name}>{label}
          <select name={name} id={'ap-diagnosis-' + name} required disabled={!ready} defaultValue="">
            <option value="" disabled>選択してください</option>
            {Object.entries(options).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
      ))}
      <button className="ap-button ap-gold" type="submit" disabled={!ready}>おすすめの支援を見る <span aria-hidden="true">→</span></button>
    </form>
    <div className="ap-tool-result">
      <div aria-live="polite" aria-atomic="true">
        <p className="ap-kicker">診断結果</p>
        {result ? <><h3>{result.plan.name}</h3><p>{[result.plan.period, result.plan.price].filter(Boolean).join(' ')}{result.plan.id !== 'consult' && result.plan.id !== 'development' ? '（税別）' : ''}</p><p>{result.reason}</p></> :
          <><h3>自社に合う始め方を。</h3><p>3つの質問への回答から、支援プランの目安が分かります。</p></>}
      </div>
      {result && <a className="ap-text-link" href="#contact-form" data-ap-plan={result.plan.id} data-ap-diagnosis={JSON.stringify(result.answers)}>無料で相談する <span aria-hidden="true">↗</span></a>}
    </div>
  </div>;
}

const initialImpact = Object.fromEntries(calculatorFields.map(({ key, initial }) => [key, String(initial)]));

export function PartnerCalculator() {
  const [input, setInput] = useState(initialImpact);
  const impact = estimateImpact(input);
  const monthly = useRef(null);
  useEffect(() => {
    const value = monthly.current;
    if (value?.animate && !window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 720px)').matches &&
        !document.documentElement.classList.contains('studio-motion-paused')) {
      const animation = value.animate([{ opacity: .6 }, { opacity: 1 }], { duration: 220 });
      return () => animation.cancel();
    }
  }, [impact?.monthlyHours]);

  return <div className="ap-tool-shell ap-calc">
    <div className="ap-tool-inputs">
      {calculatorFields.map(({ key, label, unit, min, max, step }) => {
        const value = Number(input[key]);
        const valid = input[key] !== '' && Number.isInteger(value) && value >= min && value <= max;
        return <label key={key} htmlFor={'ap-calc-' + key}>{label}
          <span className="ap-unit"><input id={'ap-calc-' + key} type="number" inputMode="numeric" min={min} max={max} step={step} value={input[key]} aria-invalid={!valid} aria-describedby={!valid ? 'ap-calc-' + key + '-hint' : undefined} onChange={event => setInput({ ...input, [key]: event.target.value })}/><span>{unit}</span></span>
          {!valid && <small id={'ap-calc-' + key + '-hint'}>{formatNumber(min)}〜{formatNumber(max)}の整数を入力してください。</small>}
        </label>;
      })}
    </div>
    <div className="ap-tool-result" aria-live="polite" aria-atomic="true">
      <p className="ap-kicker">削減できる作業時間の試算</p>
      {impact ? <>
        <p className="ap-big-number" ref={monthly}>{formatNumber(impact.monthlyHours)} <span>時間 / 月</span></p>
        <dl><div><dt>年間削減時間</dt><dd>{formatNumber(impact.annualHours)} 時間</dd></div><div><dt>月間の人件費相当額</dt><dd>{formatNumber(impact.monthlyValue)} 円</dd></div><div><dt>年間の人件費相当額</dt><dd>{formatNumber(impact.annualValue)} 円</dd></div></dl>
      </> : <p>有効な数値を入力すると試算結果が表示されます。</p>}
    </div>
  </div>;
}
