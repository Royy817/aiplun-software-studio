import {siteUrl} from './seo';

export const organization = {
  '@type': 'Organization', '@id': siteUrl + '/#organization',
  name: 'Aiplun Studio', url: siteUrl, logo: siteUrl + '/aiplun-icon.png',
  email: 'royryu221317@gmail.com',
  description: 'AI導入・業務システム開発・Web制作・アプリ開発を、業務整理から公開後の改善まで支援する開発スタジオ。京都・大阪を中心に全国オンライン対応。',
  areaServed: {'@type': 'Country', name: '日本'},
  contactPoint: {'@type': 'ContactPoint', contactType: 'サービスの相談', email: 'royryu221317@gmail.com', url: siteUrl + '/#contact', availableLanguage: 'Japanese'}
};

export function articleSchema(post) {
  return {
    '@type': 'BlogPosting', '@id': siteUrl + '/blog/' + post.slug + '/#article',
    headline: post.title, description: post.description,
    datePublished: post.date + 'T00:00:00+09:00',
    dateModified: (post.updated || post.date) + 'T00:00:00+09:00',
    inLanguage: 'ja', mainEntityOfPage: siteUrl + '/blog/' + post.slug,
    author: {'@type': 'Organization', '@id': organization['@id'], name: organization.name, url: siteUrl + '/#team'},
    publisher: {'@id': organization['@id']},
    articleSection: post.category,
    ...(post.sources ? {citation: post.sources.map(source => ({'@type': 'CreativeWork', name: source.label, url: source.url}))} : {})
  };
}
