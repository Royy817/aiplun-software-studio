import test from 'node:test';
import assert from 'node:assert/strict';
import {validateContact} from '../lib/contact.mjs';
import {GET,POST} from '../app/api/contact/route.js';

const origin='https://aiplun-studio.jp';
const base={name:'相談テスト',email:'owner@example.com',company:'',message:'Web制作について相談したいです。',budget:'未定・相談したい',timing:'未定・相談したい',consent:'yes',website:'',requestId:'12345678-1234-4123-8123-123456789abc'};
let sequence=0;
function req(body=base,headers={}){return new Request(origin+'/api/contact',{method:'POST',headers:{origin,'content-type':'application/json','x-vercel-forwarded-for':`192.0.2.${++sequence}`,...headers},body:typeof body==='string'?body:JSON.stringify(body)})}

test('contact validation and delivery contract',async t=>{
 const originalFetch=globalThis.fetch;
 const originalKey=process.env.RESEND_API_KEY,originalFrom=process.env.CONTACT_FROM_EMAIL;
 t.after(()=>{globalThis.fetch=originalFetch;for(const [name,value] of [['RESEND_API_KEY',originalKey],['CONTACT_FROM_EMAIL',originalFrom]]){if(value===undefined)delete process.env[name];else process.env[name]=value}});
 await t.test('required fields, format, limits, choice values and consent',()=>{
  assert.deepEqual(validateContact(base).errors,{});
  for(const [field,value] of [['name',' '],['email','bad\r\n@example.com'],['message',''],['company','a'.repeat(121)],['budget','unexpected'],['timing',{}],['consent','no']])assert.ok(validateContact({...base,[field]:value}).errors[field],field);
 });
 await t.test('missing setup cannot accept submissions',async()=>{
  delete process.env.RESEND_API_KEY;delete process.env.CONTACT_FROM_EMAIL;
  globalThis.fetch=()=>{throw new Error('Provider must not be called')};
  assert.deepEqual(await GET().json(),{ready:false});assert.equal((await POST(req())).status,503);
 });
 process.env.RESEND_API_KEY='test-only';process.env.CONTACT_FROM_EMAIL='Test <sender@example.com>';
 await t.test('rejects cross-origin, malformed, oversized, trap and invalid data',async()=>{
  assert.equal((await POST(req(base,{origin:'https://other.example'}))).status,403);
  assert.equal((await POST(req('{'))).status,400);
  assert.equal((await POST(req('x'.repeat(16385)))).status,413);
  assert.equal((await POST(req({...base,website:'bot'}))).status,400);
  assert.equal((await POST(req({...base,email:'bad'}))).status,400);
 });
 await t.test('provider acceptance, fixed recipient, Reply-To and stable retry key',async()=>{
  const calls=[];globalThis.fetch=async(url,options)=>{calls.push({url,...options});return Response.json({id:'mock-accepted-id'})};
  assert.deepEqual(await (await POST(req({...base,to:'attacker@example.com'}))).json(),{ok:true});
  await POST(req());
  const payload=JSON.parse(calls[0].body);
  assert.equal(calls[0].url,'https://api.resend.com/emails');assert.deepEqual(payload.to,['royryu221317@gmail.com']);assert.equal(payload.reply_to,base.email);assert.ok(payload.text.includes(base.message));
  assert.equal(calls[0].headers['Idempotency-Key'],calls[1].headers['Idempotency-Key']);
  await POST(req({...base,message:'内容を変更'}));assert.notEqual(calls[1].headers['Idempotency-Key'],calls[2].headers['Idempotency-Key']);
 });
 await t.test('provider rejection or network error never reports success',async()=>{
  for(const mock of [async()=>Response.json({message:'error'},{status:403}),async()=>Response.json({}),async()=>{throw new Error('network')}]){
   globalThis.fetch=mock;const response=await POST(req());assert.equal(response.status,502);assert.notEqual((await response.json()).ok,true);
  }
 });
 await t.test('repeated attempts are throttled on an instance',async()=>{
  globalThis.fetch=async()=>Response.json({id:'mock-id'});
  for(let i=0;i<5;i++)assert.equal((await POST(req(base,{'x-vercel-forwarded-for':'198.51.100.42'}))).status,200);
  assert.equal((await POST(req(base,{'x-vercel-forwarded-for':'198.51.100.42'}))).status,429);
 });
});
