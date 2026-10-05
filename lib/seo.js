import {posts} from './posts';
export const siteUrl='https://aiplun-studio.jp';
export const pages={
'services/seminar-automation':{title:'セミナー運営の自動化・LINE連携｜申込・QR受付 | Aiplun Studio',description:'セミナーの申込管理、LINE・メール案内、QR受付、アンケート整理と開催後フォローを効率化。既存ツールとの連携や事務局業務に合うシステム開発を支援。自社開発クエストAIの画面と費用の考え方を公開。京都・大阪から全国対応。'},
'blog':{title:'現場で使うAI活用ブログ | Aiplun Studio',description:'国内企業のAI活用事例と、資料作成・社内検索・セミナー運営などの実践ガイドを紹介。公式資料と具体的な手順から、自社の業務改善を考えます。'},
...Object.fromEntries(posts.map(p=>['blog/'+p.slug,{title:p.title+' | Aiplun Studio',description:p.description}])),
'works/quest-ai':{title:'LINE連携CRM・セミナー運営システムの開発実績 | クエストAI',description:'Aiplun Studioが開発したクエストAIを紹介。パソコンでの顧客管理、LINE公式アカウントによるセミナー案内、事前・事後アンケート、QRコード受付をまとめたシステムの管理画面と機能をご覧いただけます。'},
'':{title:'京都・大阪のAI導入・Web制作・システム開発 | Aiplun Studio',description:'京都・大阪から全国へ。Aiplun StudioはAI導入・業務システム開発・ホームページ制作・アプリ開発を、課題の整理から公開・運用まで支援。自社アプリとLINE連携CRMの開発実績、制作例、費用の考え方を公開。初回相談・30分のAI業務診断は無料。'},
'plans':{title:'Web制作・アプリ・システム開発の費用目安 | Aiplun Studio',description:'アプリデザインの費用は画面設計・UIデザイン・操作確認などの範囲で変わります。見積もりの内訳と比較するときの確認ポイント、アプリ・業務システム・Web制作の費用の考え方を紹介。初回相談無料。'},
'privacy':{title:'プライバシーポリシー | Aiplun Studio',description:'Aiplun Studioの個人情報の取り扱いについて。お問い合わせや開発サービスで取得する情報、利用目的、安全管理、第三者提供、お問い合わせ窓口をご案内します。'},
'legal':{title:'特定商取引法に基づく表記 | Aiplun Studio',description:'Aiplun Studioのサービスに関する特定商取引法に基づく表記。事業者情報、料金、お支払い、サービス提供、キャンセル等の条件をご確認いただけます。'},
 'terms':{title:'利用規約 | Aiplun Studio',description:'Aiplun Studioのサービス利用規約。アプリ開発、Webサイト制作、業務システム開発、AI活用支援のご利用にあたっての条件や契約についてご案内します。'},
'services/app-development':{title:'京都・大阪のアプリ開発・MVP開発 | Aiplun Studio',description:'京都・大阪でアプリ開発を相談したい方へ。新規サービスのアイデアをアプリに。iOS・Androidアプリの企画、UI・UX設計、開発、ストア公開、公開後の改善まで支援。予約・マッチングアプリや検証用MVP、既存アプリの改善をご相談いただけます。'},
'services/business-systems':{title:'京都・大阪の業務システム開発｜顧客管理・LINE連携 | Aiplun Studio',description:'Excelや紙の顧客管理を、現場に合う業務システムへ。顧客・案件管理、予約・在庫管理、LINE連携を業務整理から開発・導入まで支援。自社開発CRMの画面・機能も公開しています。京都・大阪を中心に全国対応、初回相談無料。'},
'services/web-production':{title:'京都・大阪のホームページ制作・LP制作｜店舗・企業向け | Aiplun Studio',description:'会社・店舗の魅力が伝わるホームページやLPを、構成・デザインから公開まで制作。スマホ対応、ホテル・カフェの制作例、費用と制作範囲をご覧いただけます。京都・大阪を中心に全国オンライン対応。初回相談無料。'},
'services/ai-automation':{title:'京都・大阪のAI導入支援｜チャットボット・業務自動化 | Aiplun Studio',description:'問い合わせ対応や社内資料の検索、繰り返す手作業をAIで効率化。AIチャットボット・社内検索・業務自動化を、小さな検証から実装まで支援します。具体的なAI活用手順も公開。京都・大阪を中心に全国対応、初回相談無料。'}
};
export function pageMetadata(key){const p=pages[key];if(!p)return {};const url=siteUrl+(key?'/'+key:'/');return{...p,alternates:{canonical:url},openGraph:{...p,url,siteName:'Aiplun Studio',locale:'ja_JP',type:'website',images:[{url:siteUrl+(key==='works/quest-ai'?'/quest-ai-dashboard-original.jpg':'/opengraph-image'),alt:key==='works/quest-ai'?'クエストAIの管理画面':'Aiplun Studio — アプリ・Web・業務システム開発'}]},twitter:{card:'summary_large_image',...p,images:[siteUrl+(key==='works/quest-ai'?'/quest-ai-dashboard-original.jpg':'/opengraph-image')]}}}
