import {pageMetadata,siteUrl,pages} from '../../lib/seo';
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
const routes=['plans','privacy','terms','legal','services/app-development','services/business-systems','services/web-production','services/ai-automation'];
const titles=['開発費用の目安','プライバシーポリシー','利用規約','特定商取引法に基づく表記','アプリ開発','業務システム開発','Webサイト制作','AI活用・自動化'];
export const dynamicParams=false;
export function generateStaticParams(){return routes.map(r=>({slug:r.split('/')}))}
export async function generateMetadata({params}){const{slug}=await params;return pageMetadata(slug.join('/'))}
export default async function Page({params}){const{slug}=await params;const key=slug.join('/');if(!routes.includes(key))notFound();const label=titles[routes.indexOf(key)];const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ホーム',item:siteUrl+'/'},{'@type':'ListItem',position:2,name:label,item:siteUrl+'/'+key}]};const html=readFileSync(path.join(process.cwd(),'recovered',key.replaceAll('/','-')+'.html'),'utf8');return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(key.startsWith('services/')?{'@context':'https://schema.org','@graph':[breadcrumb,{'@type':'Service','@id':siteUrl+'/'+key+'/#service',name:label,description:pages[key].description,url:siteUrl+'/'+key,serviceType:label,areaServed:{'@type':'Country',name:'日本'},provider:{'@type':'Organization','@id':siteUrl+'/#organization',name:'Aiplun Studio',url:siteUrl}}]}:breadcrumb).replace(/</g,'\\u003c')}}/>{!key.startsWith('services/')&&<nav className="wrap page-breadcrumb" aria-label="パンくずリスト"><a href="/">ホーム</a><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>}<div id="main-content" className="detail-page" dangerouslySetInnerHTML={{__html:html}}/></>}
