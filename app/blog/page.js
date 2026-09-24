import {pageMetadata} from '../../lib/seo';
import BlogCards from '../../components/BlogCards';
export const metadata=pageMetadata('blog');
export default function Blog(){return <main id="main-content" className="blog-index wrap"><nav className="blog-breadcrumb" aria-label="パンくず"><a href="/">ホーム</a><span aria-hidden="true">/</span><span>ブログ</span></nav><p className="eyebrow">FIELD NOTES</p><h1>小さな業務から、<br/>AIを使ってみる。</h1><p className="blog-lead">セミナー運営やLINE配信など、具体的な仕事に絞ったAI活用の読みもの。<br/>入力例と、人が確認するポイントをセットで紹介します。</p><BlogCards/><aside className="blog-cta"><h2>自分たちの業務に合わせて使いたい方へ</h2><p>手作業をどこまで残すか、何を仕組みにするか。業務の整理からご相談いただけます。</p><a href="/services/ai-automation">AI活用・自動化の支援を見る ↗</a></aside></main>}
