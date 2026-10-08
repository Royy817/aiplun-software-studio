import {pageMetadata} from '../../lib/seo';
import BlogCards from '../../components/BlogCards';
import {posts} from '../../lib/posts';
import {siteUrl} from '../../lib/seo';
const schema={'@context':'https://schema.org','@graph':[
  {'@type':'CollectionPage','@id':siteUrl+'/blog/#page',url:siteUrl+'/blog',name:'現場で使うAI活用ブログ',description:'公式資料に基づく企業のAI活用事例と、業務改善の実践ガイド。',inLanguage:'ja',publisher:{'@id':siteUrl+'/#organization'},mainEntity:{'@type':'ItemList',itemListElement:[...posts].sort((a,b)=>b.date.localeCompare(a.date)).map((post,i)=>({'@type':'ListItem',position:i+1,name:post.title,url:siteUrl+'/blog/'+post.slug}))}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ホーム',item:siteUrl+'/'},{'@type':'ListItem',position:2,name:'ブログ',item:siteUrl+'/blog'}]}
]};
export const metadata=pageMetadata('blog');
export default function Blog(){return <main id="main-content" className="blog-index wrap"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><nav className="blog-breadcrumb" aria-label="パンくず"><a href="/">ホーム</a><span aria-hidden="true">/</span><span>ブログ</span></nav><p className="eyebrow">FIELD NOTES</p><h1>企業の事例から、<br/>自社のAI活用を考える。</h1><p className="blog-lead">企業のAI活用事例と、身近な業務で試せる実践ガイド。<br/>公式資料をもとに、活用方法と自社で始めるポイントを紹介します。</p><BlogCards/><aside className="blog-cta"><h2>自分たちの業務に合わせて使いたい方へ</h2><p>手作業をどこまで残すか、何を仕組みにするか。業務の整理からご相談いただけます。</p><a href="/services/ai-automation">AI活用・自動化の支援を見る ↗</a></aside></main>}
