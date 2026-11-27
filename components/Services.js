import ServiceIcon from './ServiceIcon';

const services = [
  {
    name: 'AI導入・業務改善',
    english: 'AI & BUSINESS IMPROVEMENT',
    tone: 'ai',
    need: '転記、集計、問い合わせ対応など、今ある仕事を減らしたい',
    description: '負担が大きい業務を見つけ、既存ツールの導入、社員研修、自動化まで支援します。',
    examples: ['請求書の転記・集計', '問い合わせの返信案', '社内資料の検索'],
    links: [{ label: 'AI導入支援・料金を見る', href: '/services/ai-automation' }],
  },
  {
    name: 'システム・アプリ開発',
    english: 'SYSTEM & APP DEVELOPMENT',
    tone: 'system',
    need: '顧客管理、予約、新規サービスなど、自社に合う仕組みをつくりたい',
    description: '現場の業務や新規事業のアイデアを整理し、必要な機能の設計から開発・運用まで支援します。',
    examples: ['顧客・案件・予約管理', '既存ツールとの連携', '新規サービスのアプリ・MVP'],
    links: [
      { label: '業務システム開発を見る', href: '/services/business-systems' },
      { label: 'アプリ・MVP開発を見る', href: '/services/app-development' },
    ],
  },
];

export default function Services() {
  return <div className="capabilities">
    <div className="capability-grid">
      {services.map((service, index) => <article className={`capability-card capability-${service.tone}`} key={service.tone} data-reveal>
        <div className="capability-top">
          <span className="capability-icon"><ServiceIcon type={service.tone}/></span>
          <span aria-hidden="true" className="capability-number">0{index + 1}</span>
        </div>
        <p className="capability-english">{service.english}</p>
        <h3>{service.name}</h3>
        <p className="capability-headline">{service.need}</p>
        <p className="capability-description">{service.description}</p>
        <div className="capability-examples">
          <p>相談できること</p>
          <ul>{service.examples.map(example => <li key={example}>{example}</li>)}</ul>
        </div>
        <div className="capability-bottom capability-links">
          {service.links.map(({ href, label }) => <a key={href} href={href}>{label}<span aria-hidden="true">↗</span></a>)}
        </div>
      </article>)}
    </div>
  </div>;
}
