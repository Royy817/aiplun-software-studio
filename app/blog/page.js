import {pageMetadata} from '../../lib/seo';
import BlogCards from '../../components/BlogCards';
export const metadata=pageMetadata('blog');
export default function Blog(){return <main id="main-content" className="blog-index wrap"><nav className="blog-breadcrumb" aria-label="パンくず"><a href="/">ホーム</a><span aria-hidden="true">/</span><span>ブログ</span></nav><p className="eyebrow">FIELD NOTES</p><h1>企業の事例から、<br/>自社のAI活用を考える。</h1><p className="blog-lead">企業のAI活用事例と、身近な業務で試せる実践ガイド。<br/>公式資料をもとに、活用方法と自社で始めるポイントを紹介します。</p><BlogCards/><aside className="blog-cta"><h2>自分たちの業務に合わせて使いたい方へ</h2><p>手作業をどこまで残すか、何を仕組みにするか。業務の整理からご相談いただけます。</p><a href="/services/ai-automation">AI活用・自動化の支援を見る ↗</a></aside></main>}
