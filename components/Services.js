const services = [
  {
    name: 'AI業務自動化', english: 'AI & AUTOMATION', slug: 'ai-automation', tone: 'ai',
    headline: ['繰り返す仕事を減らし、', '人が動ける時間をつくる。'],
    description: '問い合わせ対応や資料検索、毎日の定型作業を効率化。現在の業務を整理し、AIに任せる仕事と人が担う仕事を見極めます。',
    examples: ['問い合わせ・社内FAQ', '資料検索・文章作成の補助', 'LINE・メールの自動送信'],
    scope: '業務分析 → 検証 → 実装 → 運用改善',
  },
  {
    name: '業務システム開発', english: 'BUSINESS SYSTEMS', slug: 'business-systems', tone: 'system',
    headline: ['散らばる情報をつなぎ、', '日々の手間を仕組みに変える。'],
    description: '紙・Excel・チャットに分かれた情報を一元管理。現場の流れに合わせたシステムで、転記や確認にかかる手間を減らします。',
    examples: ['顧客・案件・予約管理', '在庫管理・社内ポータル', '既存ツールとの連携'],
    scope: '業務整理 → 設計 → 開発 → 導入支援',
  },
  {
    name: 'Webサイト制作', english: 'WEB DESIGN & DEVELOPMENT', slug: 'web-production', tone: 'web',
    headline: ['事業の魅力を伝え、', '次の問い合わせにつなげる。'],
    description: '会社やサービスの強みを、伝わる言葉とデザインへ。スマホでの見やすさ、検索からの入口、相談までの導線を整えます。',
    examples: ['コーポレートサイト', 'サービスサイト・LP', 'SEOの整備・保守・改善'],
    scope: '構成 → デザイン → 実装 → 公開',
  },
  {
    name: 'アプリ・MVP開発', english: 'APP & MVP DEVELOPMENT', slug: 'app-development', tone: 'app',
    headline: ['アイデアを形にして、', '使われるサービスへ育てる。'],
    description: '新規サービスの小さな検証から、iOS・Androidアプリの公開まで。まず必要な機能を絞り、利用者の声をもとに改善を重ねます。',
    examples: ['新規サービス・MVP', '予約・マッチングアプリ', '既存アプリの機能改善'],
    scope: '企画 → UI・UX設計 → 開発 → 公開',
  },
];

function ServiceIcon({type}) {
  const shapes = {
    ai: <><rect x="8" y="8" width="16" height="16" rx="4"/><path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5M13 13h6v6h-6z"/></>,
    system: <><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M3 11h26M12 11v17M17 16h7m-7 6h5"/><circle cx="7" cy="7.5" r=".7" fill="currentColor" stroke="none"/></>,
    web: <><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M3 11h26M8 17h8m-8 5h13"/><circle cx="23" cy="20" r="3"/><path d="m25 22 3 3"/></>,
    app: <><rect x="7" y="2" width="18" height="28" rx="4"/><path d="M13 6h6M13 26h6m-5-14-4 4 4 4m4-8 4 4-4 4"/></>,
  };
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[type]}</svg>;
}

export default function Services() {
  return <div className="capabilities">
    <div className="capability-grid">
      {services.map((service, index) => <article className={`capability-card capability-${service.tone}`} key={service.slug} data-reveal>
        <div className="capability-top"><span className="capability-icon"><ServiceIcon type={service.tone}/></span><span className="capability-number">0{index + 1}</span></div>
        <p className="capability-english">{service.english}</p>
        <h3>{service.name}</h3>
        <p className="capability-headline">{service.headline[0]}<br/>{service.headline[1]}</p>
        <p className="capability-description">{service.description}</p>
        <div className="capability-examples"><p>できること</p><ul>{service.examples.map(example => <li key={example}>{example}</li>)}</ul></div>
        <div className="capability-bottom"><p>{service.scope}</p><a href={`/services/${service.slug}`} aria-label={`${service.name}の詳細を見る`}>詳しく見る<span aria-hidden="true">↗</span></a></div>
      </article>)}
    </div>
    <div className="capability-consult"><div><p>何から始めればいいか、まだ決まっていなくても。</p><span>今の課題を伺い、4つの領域から必要な方法をご提案します。</span></div><a className="button dark" href="#contact">自社に合う方法を相談する <span aria-hidden="true">↗</span></a></div>
  </div>;
}
