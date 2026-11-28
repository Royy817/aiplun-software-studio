'use client';

import { useEffect, useState } from 'react';
import './hero-signals.css';

const headline = ['その手間を、', '次の可能性に。'];
const typingInterval = 52;
const secondLineOffset = headline[0].length + 2;
const typingDuration = (secondLineOffset + headline[1].length) * typingInterval;

const examples = [
  {
    label: '請求書の転記',
    topic: 'AI業務効率化・自動化について',
    before: '請求書のPDF',
    sample: '受信トレイに毎月届く',
    action: '必要な項目を抽出',
    after: '確認待ちの台帳',
    fields: [['取引先', 'サンプル商事'], ['請求額', '¥48,000'], ['支払期限', '月末']],
    review: '経理担当が原本と照合して確定',
  },
  {
    label: '顧客・案件管理',
    topic: '業務システム開発について',
    before: '別々の案件メモ',
    sample: '表計算とチャットに分散',
    action: '顧客ごとに情報を集約',
    after: '対応状況が見える台帳',
    fields: [['案件', 'Webサイト改修'], ['進捗', '見積もり提出済み'], ['次の対応', '金曜にフォロー']],
    review: 'チームで次の対応を共有',
  },
  {
    label: '問い合わせ対応',
    topic: 'AI業務効率化・自動化について',
    before: 'よくある問い合わせ',
    sample: '「納期はどのくらい？」',
    action: '社内資料から回答案を作成',
    after: 'そのまま確認できる返信案',
    fields: [['参照元', '納期のご案内'], ['返信案', '制作範囲を伺い、日程をご案内します。']],
    review: '担当者が確認してから送信',
  },
];

function TypeLine({ text, offset = 0 }) {
  return Array.from(text, (character, index) => (
    <span className="sx-type-char" style={{ animationDelay: (offset + index) * typingInterval + 'ms' }} key={index}>{character}</span>
  ));
}

export default function StudioHero() {
  const [typing, setTyping] = useState(true);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(0);
  const [replay, setReplay] = useState(0);
  const example = examples[selected];

  useEffect(() => {
    const finish = setTimeout(() => setTyping(false), typingDuration);
    return () => clearTimeout(finish);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPaused(media.matches || document.documentElement.classList.contains('studio-motion-paused'));
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  function toggleMotion() {
    setPaused(!paused);
    if (!paused) setTyping(false);
    window.dispatchEvent(new CustomEvent('studio-motion-change', { detail: { paused: !paused } }));
  }

  function chooseWork() {
    window.dispatchEvent(new CustomEvent('aiplun:work-consultation', {
      detail: { work: example.label, topic: example.topic },
    }));
  }

  return <section className={'sx-home sx-hero' + (paused ? ' sx-paused' : '')}>
    <div className="sx-hero-top"><span>AI・業務改善 / システム開発</span><span>京都・大阪を中心に全国対応</span></div>
    <div className="sx-hero-grid">
      <div className="sx-hero-copy">
        <p className="sx-audience">中小企業・個人事業の方へ</p>
        <h1 className={typing ? 'sx-typing' : undefined} aria-label={headline.join('')}>
          <span aria-hidden="true"><TypeLine text={headline[0]}/><br/><em><TypeLine text={headline[1]} offset={secondLineOffset}/></em></span>
        </h1>
        <p className="sx-lead">転記や問い合わせ対応を減らすAI導入。<br/>顧客管理や予約に使えるシステム・アプリ開発。<br/>日々の仕事から、まず変える一つを一緒に選びます。</p>
        <div className="opening-actions sx-actions">
          <a className="sx-button" href="#contact-form">無料で相談する</a>
          <a className="sx-sub-link" href="#works">開発実績を見る</a>
        </div>
        <p className="sx-reassure">要件が未定の段階から、代表が直接お話を伺います。</p>
      </div>
      <div className="sx-demo" aria-labelledby="demo-title">
        <div className="sx-demo-heading">
          <h2 id="demo-title">いつもの仕事が、どう変わる？</h2>
          <span>活用イメージ</span>
        </div>
        <div className="sx-demo-options" role="group" aria-label="業務の例を切り替える">
          {examples.map((item, index) => <button type="button" key={item.label} aria-pressed={selected === index} aria-controls="studio-demo-result" onClick={() => setSelected(index)}>{item.label}</button>)}
        </div>
        <div id="studio-demo-result" aria-live="polite" aria-atomic="true">
          <div className="sx-demo-flow" key={selected + ':' + replay}>
            <div className="sx-demo-input"><span>いまの仕事</span><strong>{example.before}</strong><small>{example.sample}</small></div>
            <div className="sx-demo-action"><span aria-hidden="true"/>{example.action}</div>
            <div className="sx-demo-output">
              <span>仕組みを入れた後</span>
              <strong>{example.after}</strong>
              <dl>{example.fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <small>{example.review}</small>
            </div>
          </div>
        </div>
        <div className="sx-demo-footer">
          <a href="#contact-form" onClick={chooseWork}>この業務を相談する</a>
          <div>
            <button type="button" onClick={() => setReplay(replay + 1)} disabled={paused}>再生</button>
            <button type="button" onClick={toggleMotion} aria-pressed={paused}>動きを抑える</button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
