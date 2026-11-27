import {pageMetadata,siteUrl} from '../../../lib/seo';
import DiagnosisLink from '../../../components/ai/DiagnosisLink';
import {industryCases} from '../../../lib/industries';

export const metadata=pageMetadata('services/seminar-automation');
const stages=[
 ['申込・名簿','申込情報を一覧にまとめ、参加・キャンセルの状態を管理します。転記先を減らし、開催回ごとの名簿を確認できる構成を考えます。'],
 ['案内・リマインド','開催情報と配信対象を確認し、LINEやメールで案内する流れを設計します。送信履歴、キャンセル除外、再送の条件も整理します。'],
 ['当日の受付','QRコードと参加者情報を照合して受付状態を更新。重複受付や端末・通信トラブル時の手動受付も想定します。'],
 ['アンケート・フォロー','回答を参加者情報とひも付け、自由記述の分類はAIで補助。担当者が内容を確認してから、個別のフォローにつなげます。'],
];
const questions=[
 ['今の申込フォームやExcelは使えますか？','まず現在のフォーム、名簿、配信ツールを確認します。データ出力やAPIの有無に応じて、既存ツールを残して連携する方法と、管理画面をまとめる方法を比較します。すべてのツールと連携できるという保証ではありません。'],
 ['LINEとメールのどちらが必要ですか？','参加者の利用状況と現在の案内方法で決めます。LINE公式アカウントを使う場合は友だち登録と申込情報のひも付け、メールの場合は配信先・不達の確認を含めて設計します。'],
 ['AIに任せる仕事と、システムで自動化する仕事は？','申込管理、受付状態、配信日時などの確定情報はシステムで扱います。AIは案内文やアンケート分類の下書きに使い、担当者が確認します。AIに参加者情報や日時を推測させません。'],
 ['導入費用と期間はどのように決まりますか？','申込・配信・受付・アンケートのどこまで対象にするか、開催件数、管理者の権限、連携先で変わります。業務整理後に開発費と運用費を分けて見積もり、検証から本導入までの期間をご案内します。'],
 ['個人情報はどう扱いますか？','必要な情報、閲覧できる担当者、保存期間、利用するサービスの条件を確認して設計します。AIによる回答分類に氏名や連絡先が不要なら、匿名化したデータで処理する方法を検討します。'],
];
export default function SeminarAutomation(){
 const model=industryCases.find(item=>item.id==='events').evidence;
 const monthly=model.savedHours*model.hourlyCost;
 const url=siteUrl+'/services/seminar-automation';
 const schema={'@context':'https://schema.org','@graph':[
  {'@type':'Service',name:'セミナー運営・LINE連携の業務自動化',url,description:metadata.description,serviceType:'セミナー運営の業務自動化・システム開発',provider:{'@type':'Organization','@id':siteUrl+'/#organization',name:'Aiplun Studio',url:siteUrl},areaServed:{'@type':'Country',name:'日本'}},
  {'@type':'BreadcrumbList',itemListElement:[{name:'ホーム',item:siteUrl+'/'},{name:'AI導入・業務自動化',item:siteUrl+'/services/ai-automation'},{name:'セミナー運営の自動化',item:url}].map((item,index)=>({'@type':'ListItem',position:index+1,...item}))}
 ]};
 return <main id="main-content" className="seminar-page wrap">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\u003c')}}/>
  <nav className="blog-breadcrumb" aria-label="パンくず"><a href="/">ホーム</a><span>/</span><a href="/services/ai-automation">AI導入・業務自動化</a><span>/</span><span aria-current="page">セミナー運営</span></nav>
  <header className="seminar-hero"><p className="eyebrow">SEMINAR OPERATIONS</p><h1>セミナー運営の自動化。<br/>申込からLINE案内、<br/>受付・開催後フォローまで。</h1><p>名簿への転記、参加者への連絡、アンケートの整理。繰り返す事務局の仕事をつなぎ、企画と参加者対応に使える時間を増やす仕組みを考えます。</p><p>京都・大阪を中心に、全国オンライン対応。既存ツールの連携から、業務に合わせたシステム開発までご相談いただけます。</p><DiagnosisLink>セミナー運営業務を無料で相談する</DiagnosisLink></header>
  <section className="seminar-section" aria-labelledby="seminar-flow"><p className="eyebrow">BEFORE / AFTER</p><h2 id="seminar-flow">毎回の手作業を、<br/>ひとつながりの運用へ。</h2><div className="seminar-comparison"><article><h3>現在の運用例</h3><p>申込を確認 → 名簿に転記 → 一人ずつ案内 → 受付状況を記録 → 回答を集計 → 顧客へ連絡</p><p>同じ情報を複数のツールで扱うときは、更新・照合が必要な工程を洗い出します。</p></article><article><h3>導入後の設計例</h3><p>申込情報を一元管理 → 対象者へ案内 → QR受付 → 回答を整理 → 担当者が確認してフォロー</p><p>すべてを一度に置き換えず、時間がかかる工程から小さく検証します。</p></article></div><div className="seminar-stages">{stages.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="seminar-section seminar-evidence"><div><p className="eyebrow">MODEL CASE</p><h2>削減できる時間を、<br/>導入前に試算する。</h2><p>月{model.beforeHours}時間の事務作業が月{model.afterHours}時間になると想定した場合、月{model.savedHours}時間の削減。時給{model.hourlyCost.toLocaleString('ja-JP')}円換算では、次の業務時間相当になります。</p><a className="text-link" href="/#ai-simulator">人数・業務時間を変えて試算する</a></div><aside><span>年間の業務時間相当</span><strong>約{monthly*12/10000}万円</strong><p>月 約{monthly/10000}万円を削減できる可能性</p><p className="seminar-note">※モデルケースです。実際の効果は業務内容・利用状況によって異なります。人件費支出が同額減ることを示すものではなく、開発費・運用費を差し引いた金額でもありません。</p></aside></section>
  <section className="seminar-section"><p className="eyebrow">OUR PRODUCT</p><h2>画面で確認できる、<br/>自社開発「クエストAI」。</h2><div className="seminar-product"><img src="/quest-ai-dashboard-original.jpg" alt="自社開発のLINE連携CRMクエストAIの管理画面" width="1200" height="750" loading="lazy"/><div><p>顧客管理、LINEによるセミナー案内、事前・事後アンケート、QRコード受付を扱う自社開発システムです。</p><p>掲載画面は開発内容の紹介です。上記のモデルケースは、このシステムを導入した顧客の測定実績ではありません。個別の連携やAI補助の対応範囲は、ご相談時に確認します。</p><a className="text-link" href="/works/quest-ai">クエストAIの画面・機能を見る</a></div></div></section>
  <section className="seminar-section"><p className="eyebrow">START SMALL</p><h2>必要な範囲と、<br/>続けられる費用を決める。</h2><div className="seminar-stages"><article><span>01</span><h3>業務を整理</h3><p>開催頻度、申込件数、担当人数、各工程の時間、使っているツールを確認します。</p></article><article><span>02</span><h3>一工程で検証</h3><p>案内や集計など一つの工程で、操作・精度・人による確認時間を確かめます。</p></article><article><span>03</span><h3>運用に合わせて導入</h3><p>権限、キャンセル、重複、通信トラブルへの対応を含めて、担当者と運用を決めます。</p></article><article><span>04</span><h3>効果と費用を比較</h3><p>導入前後の時間・件数・品質を比較。LINE・AIなどの利用料や保守費を含めて継続を判断します。</p></article></div><a className="text-link" href="/plans#cost-factors">開発費用・見積もりの考え方を見る</a></section>
  <section className="seminar-section"><h2>セミナー運営の自動化で、<br/>よくある質問。</h2><div className="ai-guide-faq seminar-faq"><div>{questions.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></div></section>
  <section className="seminar-section"><h2>まず一つの仕事から、試す。</h2><div className="seminar-reading"><a href="/blog/line-seminar-reminder-ai"><strong>LINEのセミナーリマインド文をAIで作る</strong><p>日時・会場を間違えない入力例と送信前の確認手順。</p></a><a href="/blog/seminar-survey-ai"><strong>セミナー後アンケートをAIで整理する</strong><p>自由記述の分類と、人が確認するポイント。</p></a></div></section>
  <aside className="blog-cta"><h2>自社の運営では、<br/>どの作業を減らせそうですか？</h2><p>30分の無料ヒアリングで、AI・システム化できる業務と、削減できる時間・コストの目安を整理します。</p><DiagnosisLink>無料でAI業務診断を受ける</DiagnosisLink></aside>
 </main>;
}
