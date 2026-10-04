import './globals.css';
import './ai-impact.css';
import './seo-enhancements.css';
import './opening-motion.css';
import './capabilities.css';
import './studio-motion.css';
import './brand-film.css';
import './studio-design.css';
import Header from '../components/Header';
import Motion from '../components/Motion';
export const metadata={metadataBase:new URL('https://aiplun-studio.jp'),robots:{index:true,follow:true},icons:{icon:[{url:'/favicon.ico',type:'image/x-icon',sizes:'16x16 32x32 48x48'},{url:'/aiplun-icon.png',type:'image/png',sizes:'512x512'},{url:'/aiplun-icon.svg',type:'image/svg+xml',sizes:'any'}],shortcut:'/favicon.ico',apple:[{url:'/apple-touch-icon.png',sizes:'180x180',type:'image/png'}]},verification:{google:[...new Set(['td2UEvv1jeNGQMIc6wG86kLdUmSkjqNJHBcPuiYwdcI','yGfjbn0yOJEXRS5VunCfL4Cwb2fP65vF8h8BsHR3d9Q',process.env.GOOGLE_SITE_VERIFICATION].filter(Boolean))]}};
export default function Layout({children}){return <html lang="ja"><body><a href="#main-content" className="skip">本文へ移動</a><Header/><Motion/>{children}<footer className="footer"><nav className="wrap footer-services" aria-label="開発サービス"><a href="/services/app-development">アプリ開発</a><a href="/services/business-systems">業務システム開発</a><a href="/services/web-production">ホームページ制作</a><a href="/services/ai-automation">AI活用・自動化</a><a href="/services/seminar-automation">セミナー運営の自動化</a><a href="/blog">AI活用ブログ</a></nav><div className="wrap footer-top"><a className="brand" href="/">Aiplun<span>Studio</span></a><p>アイデアと課題を、使われるソフトウェアへ。</p></div><div className="wrap footer-bottom"><small>© {new Date().getFullYear()} Aiplun Studio</small><nav aria-label="法的情報"><a href="/privacy">プライバシーポリシー</a><a href="/terms">利用規約</a><a href="/legal">特定商取引法に基づく表記</a></nav><a href="#">ページの先頭へ ↑</a></div></footer></body></html>}
