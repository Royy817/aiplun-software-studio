'use client';

const choices = [
  ['転記・集計', '業務システム開発について'],
  ['問い合わせ・同じ返信', 'AI業務効率化・自動化について'],
  ['情報の管理・共有', '業務システム開発について'],
  ['予約・顧客管理', '業務システム開発について'],
  ['ホームページ', 'Web制作について'],
  ['アプリ・新サービス', 'アプリ・MVP開発について'],
];

export default function WorkChoices() {
  const choose = (work, topic) => {
    window.dispatchEvent(new CustomEvent('aiplun:work-consultation', {detail: {work, topic}}));
    document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'});
    history.replaceState(null, '', '#contact-form');
  };
  return <div className="work-choice-grid">{choices.map(([work, topic]) =>
    <button type="button" key={work} onClick={() => choose(work, topic)}>{work}<span aria-hidden="true">↗</span></button>
  )}</div>;
}
