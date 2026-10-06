import ServiceIcon from './ServiceIcon';
const services=[
 {type:'ai',name:'AI活用',slug:'ai-automation',before:'問い合わせ・資料探し',after:'AIで回答・検索を補助',benefit:'繰り返す対応を、もっと楽に。'},
 {type:'system',name:'業務システム',slug:'business-systems',before:'紙・Excelの情報',after:'顧客・予約をまとめて管理',benefit:'転記や確認の手間を減らす。'},
 {type:'web',name:'Web制作',slug:'web-production',before:'会社・店舗の魅力',after:'相談につながるサイトへ',benefit:'強みが伝わるWeb・LP。'},
 {type:'app',name:'アプリ開発',slug:'app-development',before:'新しいサービスの案',after:'使えるアプリ・MVPへ',benefit:'小さくつくり、公開して育てる。'},
];
export default function ServiceAssembly(){
 return <div className="service-assembly" aria-labelledby="assembly-title">
  <div className="assembly-heading"><p>WHAT WE CAN BUILD</p><h2 id="assembly-title">Aiplunでできること</h2><span>課題やアイデアを、使える仕組みへ。</span></div>
  <div className="assembly-cube-stage" aria-hidden="true"><div className="assembly-cube-shadow"/><div className="assembly-cube-view"><div className="assembly-cube">
   {services.map((service,index)=><div className={'assembly-cube-face cube-face-'+index} key={service.type}><span className="cube-face-number">0{index+1} / AIPLUN</span><span className="cube-face-icon"><ServiceIcon type={service.type}/></span><strong>{service.name}</strong><span className="cube-face-caption">{service.after}</span><span className="cube-face-line"/></div>)}
   <div className="assembly-cube-face cube-face-top"><span>AIPLUN</span><small>IDEAS INTO REALITY</small></div><div className="assembly-cube-face cube-face-bottom"/>
  </div></div></div>
  <nav className="assembly-service-links" aria-label="Aiplunのサービス">{services.map(service=><a href={'/services/'+service.slug} key={service.type}>{service.name}<span aria-hidden="true">↗</span></a>)}</nav>
  <div className="assembly-delivery"><span>相談・整理</span><i aria-hidden="true">→</i><span>設計・開発</span><i aria-hidden="true">→</i><strong>公開・改善</strong></div>
 </div>;
}
