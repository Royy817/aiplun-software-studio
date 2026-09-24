export const budgets=['未定・相談したい','10万円未満','10〜30万円','30〜50万円','50〜100万円','100万円以上'];
export const timings=['未定・相談したい','できるだけ早く','1か月以内','3か月以内','6か月以内','6か月より先'];
export function validateContact(input){
 const errors={},data={};
 for(const [name,max] of [['company',120],['name',80],['email',254],['message',3000]]){
  const raw=input?.[name];data[name]=typeof raw==='string'?raw.trim():'';
  if(raw!==undefined&&typeof raw!=='string')errors[name]='入力形式を確認してください。';
  else if(data[name].length>max)errors[name]=`${max}文字以内で入力してください。`;
 }
 if(!data.name)errors.name='お名前を入力してください。';
 if(!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email))errors.email='返信先のメールアドレスを確認してください。';
 if(!data.message)errors.message='相談したいことをひと言ご記入ください。';
 // eslint-disable-next-line no-control-regex -- Reject control characters in sender identity fields.
 for(const name of ['name','company'])if(/[\r\n\x00-\x1f\x7f]/.test(data[name]))errors[name]='改行や制御文字を除いて入力してください。';
 data.budget=input?.budget||budgets[0];data.timing=input?.timing||timings[0];
 if(!budgets.includes(data.budget))errors.budget='ご予算を選択してください。';
 if(!timings.includes(data.timing))errors.timing='希望時期を選択してください。';
 if(input?.consent!=='yes')errors.consent='個人情報の取り扱いへの同意をご確認ください。';
 return {data,errors};
}
