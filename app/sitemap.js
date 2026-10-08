import {pages,siteUrl} from '../lib/seo';
import {posts} from '../lib/posts';
// Dates reflect actual content changes, not each build or crawler visit.
const updatedPages={'services/seminar-automation':'2026-10-01','services/ai-automation':'2026-10-01','services/web-production':'2026-10-08','services/business-systems':'2026-10-08','services/app-development':'2026-10-08','':'2026-10-08','plans':'2026-10-04'};
export default function sitemap(){return Object.keys(pages).map(key=>{
 const post=posts.find(p=>'blog/'+p.slug===key);
 const modified=post?(post.updated||post.date):key==='blog'?posts.reduce((latest,p)=>[latest,p.updated||p.date].sort().at(-1),''):updatedPages[key];
 return {url:siteUrl+(key?'/'+key:'/'),...(modified?{lastModified:modified}:{} )};
})}
