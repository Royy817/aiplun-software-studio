import Script from 'next/script';
import './globals.css';
import './software.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aiplun-studio-site.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aiplun Studio | アプリ・システム・Web・AI開発',
    template: '%s'
  },
  description: 'アプリ開発、業務システム開発、Webサイト制作、AI活用を企画から公開後の改善まで一貫して支援するソフトウェア開発スタジオです。',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'Aiplun Studio | ソフトウェア開発スタジオ',
    description: 'アイデアと課題を、使われるソフトウェアへ。アプリ・システム・Web・AI開発を一貫支援。',
    url: siteUrl,
    siteName: 'Aiplun Studio',
    locale: 'ja_JP',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>
        {children}
        <Script src="/script.js?v=software-studio-20260804" strategy="afterInteractive" />
      </body>
    </html>
  );
}
