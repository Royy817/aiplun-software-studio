'use client';

import { useEffect, useRef, useState } from 'react';
import { diagnosisQuestions, plans, readAttribution } from '../../lib/ai-partner.mjs';
import { validateContact } from '../../lib/contact.mjs';

const supportOptions = [
  ...plans,
  { id: 'maintenance', name: '保守・運用の個別相談' },
];

export default function PartnerContact() {
  const [plan, setPlan] = useState('consult');
  const [diagnosis, setDiagnosis] = useState(null);
  const [ready, setReady] = useState(null);
  const [phase, setPhase] = useState('idle');
  const [notice, setNotice] = useState('');
  const [errors, setErrors] = useState({});
  const [showBar, setShowBar] = useState(false);
  const form = useRef(null);
  const status = useRef(null);
  const requestId = useRef(null);
  const sending = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/contact', { cache: 'no-store', signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => setReady(data.ready === true))
      .catch(() => { if (!controller.signal.aborted) setReady(false); });

    function applyPlan(id) {
      if (supportOptions.some(option => option.id === id)) setPlan(id);
    }

    applyPlan(new URLSearchParams(window.location.search).get('plan'));
    function selectPlan(event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[data-ap-plan]');
      if (!link) return;
      applyPlan(link.dataset.apPlan);
      setDiagnosis(link.dataset.apDiagnosis ? JSON.parse(link.dataset.apDiagnosis) : null);
    }
    document.addEventListener('click', selectPlan);

    const targets = [document.querySelector('.ap-hero-actions'), form.current?.closest('section')].filter(Boolean);
    const visibility = new Map();
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      for (const entry of entries) visibility.set(entry.target, entry.isIntersecting);
      setShowBar(![...visibility.values()].some(Boolean));
    }) : null;
    if (observer) targets.forEach(target => observer.observe(target));
    else setShowBar(true);

    return () => {
      controller.abort();
      document.removeEventListener('click', selectPlan);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!notice) return;
    const invalid = form.current?.querySelector('[aria-invalid="true"]');
    (invalid || status.current)?.focus();
  }, [notice, errors]);

  async function submit(event) {
    event.preventDefault();
    if (sending.current || phase === 'sent' || !ready) return;
    const input = Object.fromEntries(new FormData(event.currentTarget));
    const selectedPlan = supportOptions.find(item => item.id === plan);
    const context = diagnosis ? diagnosisQuestions.map(({ name, label, options }) => label + '：' + options[diagnosis[name]]) : [];
    const { errors } = validateContact(input);
    setErrors(errors);
    if (Object.keys(errors).length) {
      setNotice('入力内容をご確認ください。');
      return;
    }
    const attribution = Object.entries(readAttribution(new URLSearchParams(window.location.search))).map(([key, value]) => key + '=' + value);
    const payload = {
      ...input,
      message: [input.message.trim(), ['希望プラン：' + selectedPlan.name, ...context].join('\n'), attribution.join('\n')].filter(Boolean).join('\n\n'),
    };
    requestId.current ??= crypto.randomUUID();
    sending.current = true;
    setPhase('pending');
    setNotice('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, requestId: requestId.current }),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok || data.ok !== true) {
        if (data.errors) setErrors(data.errors);
        if (response.status === 503) setReady(false);
        setNotice(data.message || '送信できませんでした。時間をおいて再度お試しください。');
        setPhase('idle');
        return;
      }
      setPhase('sent');
      setNotice('ご相談を受け付けました。原則48時間以内にメールでご連絡します。');
    } catch {
      setPhase('idle');
      setNotice('送信結果を確認できませんでした。ご入力内容は残っています。少し待ってから再度お試しください。');
    } finally {
      sending.current = false;
    }
  }

  function errorProps(name) {
    return { 'aria-invalid': Boolean(errors[name]), 'aria-describedby': errors[name] ? 'ap-error-' + name : undefined };
  }

  function errorText(name) {
    return errors[name] && <small className="ap-error" id={'ap-error-' + name}>{errors[name]}</small>;
  }

  return <>
    <form ref={form} className="ap-form" id="contact-form" onSubmit={submit} aria-labelledby="ap-contact-heading" noValidate>
      <fieldset disabled={phase !== 'idle'}>
        <div className="ap-form-names">
          <label>お名前 <small>必須</small><input autoComplete="name" name="name" maxLength={80} required {...errorProps('name')}/>{errorText('name')}</label>
          <label>会社名・屋号 <small>任意</small><input autoComplete="organization" name="company" maxLength={120} {...errorProps('company')}/>{errorText('company')}</label>
        </div>
        <label>メールアドレス <small>必須</small><input type="email" autoComplete="email" name="email" maxLength={254} required {...errorProps('email')}/>{errorText('email')}</label>
        <label>希望する支援<select id="ap-contact-plan" value={plan} onChange={event => { setPlan(event.target.value); setDiagnosis(null); }}>{supportOptions.map(item => <option key={item.id} value={item.id}>{item.purpose ? item.name + ' / ' + item.purpose : item.name}</option>)}</select></label>
        {diagnosis && <p className="ap-diagnosis-note">診断の回答を引き継ぎました。<button type="button" onClick={() => setDiagnosis(null)}>回答を外す</button></p>}
        <label>ご相談内容 <small>必須</small><textarea name="message" rows={3} maxLength={1900} required placeholder="例：毎週の報告書づくりに時間がかかっています。" {...errorProps('message')}/>{errorText('message')}</label>
        <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
        <div className="ap-consent"><input id="ap-consent" type="checkbox" name="consent" value="yes" required {...errorProps('consent')}/><span><a href="/privacy">プライバシーポリシー</a><label htmlFor="ap-consent">を確認し、個人情報の取り扱いに同意する</label></span></div>
        {errorText('consent')}
        {ready === false && <p className="ap-diagnosis-note">フォーム受付は現在準備中です。メールでご相談いただけます。</p>}
        <button className="ap-button ap-gold" type="submit" disabled={ready !== true || phase !== 'idle'}>{phase === 'sent' ? '受付済み' : phase === 'pending' ? '送信中…' : ready === null ? '受付状況を確認中…' : ready === false ? 'フォーム受付準備中' : '相談内容を送信する'}<span aria-hidden="true">↗</span></button>
      </fieldset>
      <p tabIndex={-1} ref={status} className="ap-form-status" role={phase === 'sent' ? 'status' : 'alert'}>{notice}</p>
      <a className="ap-mail" href="mailto:royryu221317@gmail.com?subject=AIPLUN%20AI%20PARTNER">メールで相談する ↗</a>
    </form>
    {showBar && <div className="ap-mobile-cta"><a className="ap-button ap-gold" href="#contact-form">無料で相談する <span aria-hidden="true">↗</span></a></div>}
  </>;
}
