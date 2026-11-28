import Image from 'next/image';
import { PartnerCalculator, PartnerDiagnosis, PartnerIndustries, PartnerNetwork } from '../../../components/ai-partner/Interactive';
import PartnerContact from '../../../components/ai-partner/PartnerContact';
import { estimateImpact, plans } from '../../../lib/ai-partner.mjs';
import { pageMetadata, siteUrl } from '../../../lib/seo';
import './partner.css';

const route = 'services/ai-automation';
const url = siteUrl + '/' + route;
const seo = pageMetadata(route);
const shareImage = siteUrl + '/media/ai-partner-og.png';
export const metadata = {
  ...seo,
  openGraph: { ...seo.openGraph, images: [{ url: shareImage, width: 1200, height: 630, alt: 'AIPLUN AI PARTNER by Aiplun Studio' }] },
  twitter: { ...seo.twitter, images: [shareImage] },
};

const start = plans.find(plan => plan.id === 'start');

const problems = [
  ['何から始めればいいか分からない。', '自社のどの業務でAIが役に立つか、判断する材料がない。'],
  ['一部の社員しか使えていない。', '使い方やルールが共有されず、チームの日常業務に広がらない。'],
  ['改善したいのに、手が回らない。', '入力・転記・確認に追われ、担当者が仕組みづくりに時間を割けない。'],
];

const workflow = [
  ['受け取る', 'メールや紙で届いた請求書を、担当者が回収。', '所定の受信箱に請求書を集める。'],
  ['整理する', '取引先・日付・金額を読み取り、Excelに手入力。', '必要な項目の抽出と、台帳への入力候補づくりを支援。'],
  ['確認する', '原本とExcelを一件ずつ照らし合わせる。', '担当者が原本と照合し、内容を確認してから登録。'],
];

const steps = [
  ['無料相談', '20〜30分で、困っている業務と現在のAI活用状況を伺います。'],
  ['支援範囲のご提案', '対象業務、担当範囲、費用、期間を整理してご提案します。'],
  ['研修・導入・実装', '選んだプランに応じて、現場の仕事に合わせて進めます。'],
  ['効果確認・改善', '一定期間使ったうえで、作業時間や利用状況を確認し、必要な改善を提案します。'],
];

const faqs = [
  ['AIをほとんど使ったことがなくても相談できますか？', 'はい。無料相談で現状をお聞きし、すぐに試せそうな業務を整理します。AI STARTでは、選定・初期設定・自社の業務に合わせた実践研修まで扱います。'],
  ['AI STARTだけを申し込めますか？', 'はい。単発20,000円（税別）のプランです。原則1部署・5名程度で、AIツール1種類を対象とします。'],
  ['京都・大阪以外でも相談できますか？', '全国からオンラインでご相談いただけます。訪問を希望される場合は、場所と条件を相談時にお知らせください。'],
  ['今使っているシステムと連携できますか？', '連携先の提供機能や利用条件を確認し、実現可能な方法をご提案します。個別開発は要件に応じてお見積もりします。'],
  ['外部AIツールの利用料は含まれますか？', '外部AIツールの利用料、追加訪問、大規模な個別開発などは別途お見積もりです。対象範囲と費用をご契約前にご案内します。'],
];

function TwoLineTitle({ as: Tag = 'h2', id, lines, emphasis }) {
  const longest = Math.max(...lines.map(line => Array.from(line).length));
  const [first, second] = lines;
  return <Tag id={id} className="ap-two-line-title" style={{ '--ap-title-fit': `${100 / (longest + .18)}cqi` }}>
    <span>{first}</span>
    <span>{emphasis ? <><em>{emphasis}</em>{second.slice(emphasis.length)}</> : second}</span>
  </Tag>;
}

function Heading({ label, title, children }) {
  return <header className="ap-heading" data-reveal="pop">
    <div><p className="ap-kicker">{label}</p><TwoLineTitle lines={title}/></div>
    {children && <p className="ap-section-intro">{children}</p>}
  </header>;
}

function ConsultLink({ children = '無料で相談する', plan, className = 'ap-button ap-gold' }) {
  return <a className={className} href="#contact-form" data-ap-plan={plan}>{children} <span aria-hidden="true">↗</span></a>;
}

const impactSignals = [
  { area: '顧客対応', current: '返信が遅れ、他社が先に商談する。', proposed: 'よくある質問の返信案をAIが作り、担当者が確認してすばやく返す。' },
  { area: '人手不足', current: '案件が増えても、転記や集計で手一杯になる。', proposed: '繰り返す入力を減らし、商談や顧客への提案に時間を回す。' },
  { area: '事業の継続', current: '担当者が休むと、手順や資料の場所が分からず作業が止まる。', proposed: '手順と資料を共有し、権限内で参照できる仕組みを整える。' },
];
const monthlyWork = 100;
const illustrativeImpact = estimateImpact({ people: 5, minutes: 30, days: 20, hourlyCost: 0 });
const remainingWork = monthlyWork - illustrativeImpact.monthlyHours;

function PartnerImpact() {
  return <section className="ap-section ap-impact" id="why-ai" aria-labelledby="ap-impact-heading">
    <div className="ap-wrap">
      <div className="ap-impact-heading" data-reveal="pop">
        <p className="ap-kicker">AI導入のメリット</p>
        <TwoLineTitle id="ap-impact-heading" lines={['いまのやり方で、', '来年もお客さまを待たせずに済みますか？']}/>
        <p>返信の遅れや引き継ぎの難しさが重なると、商談機会やサービスを続ける力に響きます。負担の大きい業務から見直すと、人が対応すべき仕事に時間を戻せます。</p>
      </div>
      <div className="ap-impact-grid">
        <div className="ap-impact-compare" data-reveal="pop">
          {impactSignals.map(({ area, current, proposed }) => <article key={area}>
            <h3>{area}</h3>
            <dl>
              <div><dt>手作業が残ると</dt><dd>{current}</dd></div>
              <div><dt>AI・仕組み化を進めると</dt><dd>{proposed}</dd></div>
            </dl>
          </article>)}
        </div>
        <figure className="ap-impact-chart" data-reveal="pop">
          <figcaption>転記・集計にかける時間の試算</figcaption>
          <p className="ap-impact-number"><strong>月{illustrativeImpact.monthlyHours}時間</strong>を他の業務へ</p>
          {[[ '現状の想定', monthlyWork ], [ '見直し後の想定', remainingWork ]].map(([label, hours]) => <div className="ap-impact-bar" key={label}>
            <div><span>{label}</span><strong>月{hours}時間</strong></div>
            <div className="ap-impact-track" aria-hidden="true"><span style={{width: `${hours / monthlyWork * 100}%`}}/></div>
          </div>)}
          <p>5人が月20日、1人1日30分ずつ短縮できた場合。効果は業務や使い方によって変わります。</p>
          <a className="ap-text-link" href="#ai-simulator">自社の条件で試算する <span aria-hidden="true">↓</span></a>
        </figure>
      </div>
      <div className="ap-impact-action">
        <p>無料相談では、繰り返しが多く、効果を測りやすい業務を一緒に選びます。</p>
        <div><a className="ap-text-link" href="#ai-impact">業界別の活用例を見る</a><ConsultLink/></div>
      </div>
    </div>
  </section>;
}

function PartnerPhoto({ scene, alt, className }) {
  return <figure className={`ap-photo ${className ?? ''}`} data-reveal="pop">
    <Image src={`/media/ai-partner-${scene}.webp`} alt={alt} fill sizes="(max-width: 760px) 92vw, 520px" />
    <figcaption>支援イメージ（AI生成）</figcaption>
  </figure>;
}

function MonthlyFeeChart() {
  const monthlyPlans = plans.filter(plan => plan.monthlyFees);
  const scale = Math.max(...monthlyPlans.flatMap(plan => plan.monthlyFees));
  return <figure className="ap-fee-chart">
    <figcaption><h3>月額プランの費用比較</h3><p>月額・税別。色の分かれ目はPROの下限です。</p></figcaption>
    <div className="ap-fee-rows">
      {monthlyPlans.map(plan => {
        const [min, max = min] = plan.monthlyFees;
        return <div className="ap-fee-row" key={plan.id}>
          <span>{plan.name}</span><strong>{plan.price}</strong>
          <div className="ap-fee-track" aria-hidden="true">
            <span style={{width: (min / scale * 100) + '%'}}/>
            {max > min && <span className="ap-fee-range" style={{width: ((max - min) / scale * 100) + '%'}}/>}
          </div>
        </div>;
      })}
      <div className="ap-fee-axis" aria-hidden="true"><span>0円</span><span>{scale / 20000}万円</span><span>{scale / 10000}万円</span></div>
    </div>
  </figure>;
}

export default function AIPartnerPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': url + '#service', name: 'AIPLUN AI PARTNER', url, description: seo.description, serviceType: '中小企業向けAI導入支援', provider: { '@id': siteUrl + '/#organization' }, areaServed: { '@type': 'Country', name: '日本' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'AI導入支援', item: url },
      ] },
    ],
  };

  return <main className="ap" id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
    <section className="ap-hero ap-dark">
      <div className="ap-wrap">
        <div className="ap-hero-top">
          <p className="ap-wordmark"><span aria-hidden="true"/> AIPLUN AI PARTNER</p>
        </div>
        <div className="ap-hero-grid">
          <div className="ap-hero-copy" data-reveal="pop">
            <p className="ap-kicker">京都・大阪を中心とした中小企業向け</p>
            <TwoLineTitle as="h1" lines={['あなたの会社に、', 'AI専門部門を']} emphasis="AI専門部門"/>
            <p className="ap-hero-lead">転記や集計に追われる時間を、接客や提案に。</p>
            <p className="ap-hero-description">まずは繰り返しの多い1業務から。AIツールの選定、社員研修、自動化、運用まで、必要な範囲で伴走します。</p>
            <p className="ap-hero-price">AI導入支援、単発 <strong>2万円</strong> から <small>税別</small></p>
            <div className="ap-hero-actions"><ConsultLink/><a className="ap-button ap-outline" href="#pricing">サービス・料金を見る <span aria-hidden="true">↓</span></a></div>
            <p className="ap-hero-meta">初回相談20〜30分 <span aria-hidden="true">/</span> 全国オンライン対応</p>
          </div>
          <PartnerNetwork/>
        </div>
      </div>
    </section>

    <nav className="ap-jump" aria-label="AI導入支援ページ内の移動">
      <div className="ap-wrap">
        <a href="#pricing">サービス・料金</a>
        <a href="#why-ai">導入メリット</a>
        <a href="#ai-diagnosis">AI導入診断</a>
        <a className="ap-jump-contact" href="#contact-form">無料相談 <span aria-hidden="true">↗</span></a>
      </div>
    </nav>

    <PartnerImpact/>

    <section className="ap-section ap-paper">
      <div className="ap-wrap ap-editorial">
        <div>
          <Heading label="中小企業のAI導入" title={['AIを使いたい。', '現場では、何から？']}/>
          <PartnerPhoto scene="consultation" alt="資料を見ながら業務について相談する二人" className="ap-photo-consultation"/>
        </div>
        <ol className="ap-problems">{problems.map(([title, copy], index) => <li key={title} data-reveal="pop"><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      </div>
    </section>

    <section className="ap-section">
      <div className="ap-wrap">
        <Heading label="AIPLUNの支援範囲" title={['現場で使い続けられる', '形まで。']}>専任のAI担当を置きにくい企業のために、導入の判断から日々の運用まで支援します。</Heading>
        <div className="ap-promise">
          <article data-reveal="pop"><h3>減らしたい仕事を決める</h3><p>人手に頼っている作業を洗い出し、負担が大きく、効果を確かめやすい業務を選びます。</p></article>
          <article data-reveal="pop"><h3>現場で使える形にする</h3><p>ツールの使い方を教え、業務手順に組み込みます。既存ツールで足りない部分は個別開発も可能です。</p></article>
          <article data-reveal="pop"><h3>負担が減ったか確かめる</h3><p>作業時間や確認の手戻りを測り、社内で続けるための手順と改善点を整理します。</p></article>
        </div>
      </div>
    </section>

    <section className="ap-section ap-dark ap-flow" id="workflow">
      <div className="ap-wrap">
        <div className="ap-flow-intro">
          <Heading label="業務改善イメージ" title={['請求書の手入力を、', '確認中心の仕事へ。']}>入力候補はAIが作り、登録の判断は担当者が行う場合の例です。</Heading>
          <PartnerPhoto scene="workflow" alt="紙の請求書とノートパソコンの表を照合する担当者" className="ap-photo-workflow"/>
        </div>
        <div className="ap-flow-head"><span>工程</span><span>導入前</span><span>導入後のイメージ</span></div>
        <ol className="ap-flow-list">{workflow.map(([step, before, after], index) => <li key={step} data-reveal="pop">
          <h3><span aria-hidden="true">0{index + 1}</span>{step}</h3>
          <p><span>導入前</span>{before}</p>
          <p><span>導入後</span>{after}</p>
        </li>)}</ol>
      </div>
    </section>

    <section className="ap-section ap-paper" id="ai-start">
      <div className="ap-wrap ap-start">
        <div data-reveal="pop">
          <p className="ap-kicker">{start.name}</p>
          <TwoLineTitle lines={['まずは、1部署で。', '自社の仕事でAIを試す。']}/>
          <p className="ap-start-price"><small>{start.period}</small> {start.price} <small>税別</small></p>
          <p className="ap-muted">{start.scope}を想定しています。</p>
          <ConsultLink plan={start.id}>AI STARTに申し込む</ConsultLink>
        </div>
        <div className="ap-start-side">
          <PartnerPhoto scene="training" alt="小規模のチームでパソコンを見ながら実践研修を受ける様子" className="ap-photo-training"/>
          <div className="ap-start-content" data-reveal="pop">
            <h3>AI STARTに含まれる内容</h3>
            <ul>{start.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>

    <section className="ap-section" id="pricing">
      <div className="ap-wrap">
        <Heading label="サービス・料金" title={['課題に合わせて、', '支援を選ぶ。']}>無料相談、単発の研修、月額支援、90日間の業務改善、専用システムの開発まで。</Heading>
        <div className="ap-pricing" data-reveal="pop">
          {plans.map(plan => <details key={plan.id} className={plan.id === 'start' ? 'ap-priority' : undefined}>
            <summary>
              <span className="ap-plan-name">{plan.name}</span>
              <span className="ap-plan-purpose">{plan.purpose}</span>
              <span className="ap-plan-price"><small>{plan.period}</small> {plan.price}</span>
              <span className="ap-plan-outcome">{plan.outcome}</span>
              <span className="ap-plan-more">支援内容を見る <span aria-hidden="true" className="ap-plus"/></span>
            </summary>
            <div className="ap-plan-details">
              <p>{plan.scope}</p>
              {plan.id === 'partner' ? <ol className="ap-plan-timeline">{plan.details.map(detail => {
                const [month, task] = detail.split('｜');
                return <li key={month}><strong>{month}</strong><span>{task}</span></li>;
              })}</ol> : <ul>{plan.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}
              <ConsultLink plan={plan.id} className="ap-text-link">{plan.id === 'start' ? 'AI STARTに申し込む' : '無料で相談する'}</ConsultLink>
            </div>
          </details>)}
        </div>
        <MonthlyFeeChart/>
        <p className="ap-fineprint">すべて税別です。外部AIツール利用料、追加訪問、大規模な個別開発などは別途お見積もりとなります。記載の対応時間は目安です。詳細な提供条件はご提案時にお伝えします。</p>
      </div>
    </section>

    <section className="ap-section ap-paper" id="ai-impact">
      <div className="ap-wrap" id="ai-industry-examples">
        <Heading label="業界別AI活用" title={['自社の仕事に', '置き換えてみる。']}>営業、建設、不動産、バックオフィスの公開事例から、自社で試せる業務を見つけてみましょう。</Heading>
        <PartnerIndustries/>
      </div>
    </section>

    <section className="ap-section ap-dark" id="ai-diagnosis">
      <div className="ap-wrap">
        <Heading label="AI導入診断" title={['何から始めるか、', '3つの質問で。']}/>
        <PartnerDiagnosis/>
      </div>
    </section>

    <section className="ap-section ap-paper" id="ai-simulator">
      <div className="ap-wrap">
        <Heading label="業務改善効果シミュレーター" title={['どれくらい', '時間が生まれるか。']}>人数や作業時間を変えて、自社で削減できそうな工数を試算できます。</Heading>
        <PartnerCalculator/>
        <p className="ap-fineprint">月間削減時間は「人数 × 1人1日あたりの削減時間 × 月間営業日数」、年間は月間の12倍で算出。金額は削減工数を人件費に換算した試算です。AI導入・運用費は含まず、実際の利益・費用削減を保証するものではありません。</p>
      </div>
    </section>

    <section className="ap-section" id="development-work">
      <div className="ap-wrap">
        <Heading label="開発実績・支援体制" title={['業務に合わせて、', '開発まで。']}>Aiplun Studioが窓口となり、相談から設計・実装・運用まで対応します。</Heading>
        <article className="ap-case" data-reveal="pop">
          <div className="ap-case-image"><Image src="/quest-ai-dashboard.webp" alt="クエストAIの顧客・セミナー管理画面" width={1280} height={800} sizes="(max-width: 760px) 100vw, 60vw"/></div>
          <div><p className="ap-kicker">自社開発・LINE連携CRM</p><h3>クエストAI</h3><p>セミナー申込み、LINE案内、QR受付、アンケートをまとめた自社開発システムです。</p><a className="ap-text-link" href="/works/quest-ai">開発実績を見る ↗</a><a className="ap-text-link" href="/services/seminar-automation">セミナー運営の自動化を見る ↗</a></div>
        </article>
        <p className="ap-case-more"><a className="ap-text-link" href="/#aiplun-app">自社開発のアイプラアプリを見る ↗</a></p>
      </div>
    </section>

    <section className="ap-section ap-paper">
      <div className="ap-wrap">
        <Heading label="導入までの流れ" title={['一つの業務から、', '順を追って。']}/>
        <ol className="ap-steps">{steps.map(([title, desc], index) => <li key={title} data-reveal="pop"><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></li>)}</ol>
        <aside className="ap-security ap-maintenance" aria-labelledby="ap-maintenance-heading" id="maintenance">
          <div>
            <TwoLineTitle as="h3" id="ap-maintenance-heading" lines={['導入後の保守・運用も、', '個別にご相談ください。']}/>
            <p>AIツールの設定変更、業務フローの見直し、システムの運用など。現在の環境とご希望を伺い、対応範囲・頻度・費用をご案内します。</p>
          </div>
          <ConsultLink plan="maintenance">保守・運用を相談する</ConsultLink>
        </aside>
        <aside className="ap-security" aria-label="セキュリティ・AI利用方針">
          <p className="ap-kicker">セキュリティ・AI利用方針</p><TwoLineTitle as="h3" lines={['情報の扱いも、', '導入前に決めます。']}/>
          <ul><li>個人情報・機密情報は、入力できる範囲と利用環境を事前に確認します。</li><li>利用ツールの学習設定・データの保存条件・アクセス権限を確認します。</li><li>社外への送信や重要な判断には、担当者による確認手順を設けます。</li></ul>
        </aside>
      </div>
    </section>

    <section className="ap-section" id="faq">
      <div className="ap-wrap ap-editorial">
        <Heading label="よくある質問" title={['相談前に', '知っておきたいこと。']}/>
        <div className="ap-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" className="ap-plus"/></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>

    <section className="ap-section ap-dark" id="contact">
      <div className="ap-wrap ap-contact-layout">
        <div data-reveal="pop"><p className="ap-kicker">AI CONSULT / 初回20〜30分</p><TwoLineTitle id="ap-contact-heading" lines={['今、時間がかかる仕事を', 'ひとつ教えてください。']}/><p>現在のやり方を伺い、AIで支援できそうな業務と、始める場合の進め方を整理します。</p><p className="ap-contact-note">初回無料 · 京都・大阪を中心に全国オンライン対応</p></div>
        <PartnerContact/>
      </div>
    </section>
  </main>;
}
