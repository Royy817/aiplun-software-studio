import {pages,siteUrl} from '../lib/seo';
import {posts} from '../lib/posts';
// Dates reflect actual content changes, not each build or crawler visit.
const updatedPages={'services/seminar-automation':'2026-10-01','services/ai-automation':'2026-10-01','':'2026-10-01'};
export default function sitemap(){return Object.keys(pages).map(key=>{
 const post=posts.find(p=>'blog/'+p.slug===key);
 const modified=post?(post.updated||post.date):updatedPages[key];
 return {url:siteUrl+(key?'/'+key:'/'),...(modified?{lastModified:modified}:{} )};
})}
