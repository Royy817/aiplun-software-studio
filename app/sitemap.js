import {pages,siteUrl} from '../lib/seo';
export default function sitemap(){return Object.keys(pages).map(key=>({url:siteUrl+(key?'/'+key:'/')}))}
