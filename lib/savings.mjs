// Labor-time value, not cash savings or ROI. Implementation/operating costs are excluded.
export const savingsFields = [
  {key:'people', label:'対象人数', unit:'人', min:1, max:500, step:1},
  {key:'hours', label:'1人あたり毎日の定型業務時間', unit:'時間 / 日', min:0, max:8, step:0.25},
  {key:'hourlyCost', label:'平均人件費（時給）', unit:'円', min:0, max:20000, step:100},
  {key:'days', label:'月間稼働日数', unit:'日', min:1, max:31, step:1},
  {key:'rate', label:'削減できる想定割合', unit:'%', min:0, max:100, step:1},
];
export const defaultSavings = {people:5,hours:1,hourlyCost:2000,days:20,rate:70};
export function normalizeSavings(input) {
  return Object.fromEntries(savingsFields.map(field=>{
    const raw=Number(input[field.key]);
    const value=Number.isFinite(raw)?raw:field.min;
    const clamped=Math.max(field.min,Math.min(field.max,value));
    return [field.key,Number((Math.round(clamped/field.step)*field.step).toFixed(2))];
  }));
}
export function calculateSavings(input) {
  const values=normalizeSavings(input);
  const monthlyHours=values.people*values.hours*values.days;
  const savedHours=monthlyHours*values.rate/100;
  const monthlyCost=monthlyHours*values.hourlyCost;
  const monthlySavings=savedHours*values.hourlyCost;
  return {monthlyHours,savedHours,monthlyCost,monthlySavings,annualSavings:monthlySavings*12,remainingCost:monthlyCost-monthlySavings};
}
export const formatNumber = value => new Intl.NumberFormat('ja-JP',{maximumFractionDigits:2}).format(value);
