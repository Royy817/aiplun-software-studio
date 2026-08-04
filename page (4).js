import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-static';

export const metadata = {
  title: '特定商取引法に基づく表記 | Aiplun Studio',
  description: 'Aiplun Studioの特定商取引法に基づく表記です。販売業者、価格、支払方法、キャンセル等について掲載しています。'
};

export default function LegalPage() {
  return <HtmlContent file="legal.html" />;
}
