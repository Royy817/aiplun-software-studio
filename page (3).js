import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Aiplun Studio | アプリ・システム・Web・AI開発',
  description: 'Aiplun Studioは、アプリ開発、業務システム開発、Webサイト制作、AI活用を企画から公開後の改善まで一貫して支援します。初回相談無料。'
};

export default function HomePage() {
  return <HtmlContent file="home.html" />;
}
