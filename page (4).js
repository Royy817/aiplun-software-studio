import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-static';

export const metadata = {
  title: '開発費用とプロジェクト規模の目安 | Aiplun Studio',
  description: 'Webサイト、アプリ・MVP、業務システム・AI開発の費用、期間、対応範囲の目安をご案内します。'
};

export default function PlansPage() {
  return <HtmlContent file="plans.html" />;
}
