import {createHash} from 'node:crypto';
import {validateContact} from '../../../lib/contact.mjs';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const destination='royryu221317@gmail.com';
const attempts=new Map();
const reply=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
const configured=()=>Boolean(process.env.RESEND_API_KEY&&process.env.CONTACT_FROM_EMAIL);
export function GET(){return reply({ready:configured()})}
export async function POST(request){
 const origin=request.headers.get('origin');
 const allowed=new Set(['https://aiplun-studio.jp','https://aiplun-software-studio.vercel.app','https://aiplun-software-studio-royy817s-projects.vercel.app']);
 if(process.env.VERCEL_URL)allowed.add('https://'+process.env.VERCEL_URL);
 if(process.env.NODE_ENV!=='production')allowed.add(new URL(request.url).origin);
 if(!origin||!allowed.has(origin))return reply({message:'このサイトのフォームから送信してください。'},403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({message:'送信形式を確認してください。'},415);
 if(!configured())return reply({message:'現在フォームで受付できません。下記メールアドレスへご相談ください。'},503);
 // Best-effort per-instance throttle; no message bodies or raw IPs are logged.
 const now=Date.now();for(const [key,value] of attempts)if(value.until<now)attempts.delete(key);
 const ip=createHash('sha256').update(request.headers.get('x-vercel-forwarded-for')||request.headers.get('x-forwarded-for')||'unknown').digest('hex');
 const bucket=attempts.get(ip)||{count:0,until:now+600000};
 if(bucket.count>=5)return reply({message:'送信が続いています。10分ほど待ってから再度お試しください。'},429);
 bucket.count++;if(attempts.size>=10000)attempts.delete(attempts.keys().next().value);attempts.set(ip,bucket);
 let input;
 try{
  const reader=request.body?.getReader();if(!reader)return reply({message:'入力内容を確認してください。'},400);
  let size=0;const chunks=[];
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>16384){await reader.cancel();return reply({message:'入力内容が長すぎます。'},413)}chunks.push(Buffer.from(value))}
  input=JSON.parse(Buffer.concat(chunks).toString('utf8'));
 }catch{return reply({message:'入力内容を確認してください。'},400)}
 if(!input||typeof input!=='object'||Array.isArray(input))return reply({message:'入力内容を確認してください。'},400);
 if(input.website)return reply({message:'入力内容を確認してください。'},400);
 const {data,errors}=validateContact(input);
 if(Object.keys(errors).length)return reply({message:'入力内容をご確認ください。',errors},400);
 if(typeof input.requestId!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(input.requestId))return reply({message:'ページを開き直してお試しください。'},400);
 const text=`Webサイトからの無料相談\n\n会社名・屋号：${data.company||'個人・未記入'}\nお名前：${data.name}\n返信先：${data.email}\n予算：${data.budget}\n希望時期：${data.timing}\n個人情報の取り扱い：同意済み\n\n相談内容：\n${data.message}`;
 const digest=createHash('sha256').update(JSON.stringify(data)).digest('hex');
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`consult-${input.requestId}-${digest}`},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[destination],reply_to:data.email,subject:'【Aiplun Studio】無料相談フォームからのお問い合わせ',text}),signal:AbortSignal.timeout(12000)});
  const result=await response.json();
  if(!response.ok||!result.id)return reply({message:'送信できませんでした。入力内容を残しています。時間をおいてお試しいただくか、下記メールアドレスへご連絡ください。'},502);
  return reply({ok:true});
 }catch{return reply({message:'送信結果を確認できませんでした。少し待ってから再度お試しください。'},502)}
}
