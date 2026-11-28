'use client';

const choices = [
  ['転記・集計', 'AI業務効率化・自動化について'],
  ['問い合わせ・同じ返信', 'AI業務効率化・自動化について'],
  ['情報の管理・共有', '業務システム開発について'],
  ['予約・顧客管理', '業務システム開発について'],
  ['ホームページ', 'Web制作について'],
  ['アプリ・新サービス', 'アプリ・MVP開発について'],
];

export default function WorkChoices() {
  const choose = (work, topic) => {
    window.dispatchEvent(new CustomEvent('aiplun:work-consultation', {detail: {work, topic}}));
  };
  return <div className="work-choice-grid">{choices.map(([work, topic]) =>
    <a href="#contact-form" key={work} onClick={() => choose(work, topic)}>{work}<span aria-hidden="true">↗</span></a>
  )}</div>;
}
