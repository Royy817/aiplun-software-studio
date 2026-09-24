import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateSavings,defaultSavings,normalizeSavings} from '../lib/savings.mjs';
test('requested five-person example and annual conversion',()=>{
 const result=calculateSavings(defaultSavings);
 assert.equal(result.monthlyCost,200000);
 assert.equal(result.monthlySavings,140000);
 assert.equal(result.annualSavings,1680000);
 assert.equal(result.savedHours,70);
 assert.equal(result.remainingCost,60000);
});
test('zero reduction, full reduction, and fractional hours',()=>{
 assert.equal(calculateSavings({...defaultSavings,rate:0}).annualSavings,0);
 const full=calculateSavings({...defaultSavings,rate:100});
 assert.equal(full.remainingCost,0);
 assert.equal(full.monthlySavings,full.monthlyCost);
 assert.equal(calculateSavings({people:1,hours:1.5,days:22,hourlyCost:2000,rate:100}).annualSavings,792000);
 assert.equal(calculateSavings({people:1,hours:1,days:26,hourlyCost:1500,rate:100}).annualSavings,468000);
});
test('invalid inputs never produce negative or infinite estimates',()=>{
 const input={people:-3,hours:Infinity,days:40,hourlyCost:NaN,rate:200};
 assert.deepEqual(normalizeSavings(input),{people:1,hours:0,days:31,hourlyCost:0,rate:100});
 assert.equal(calculateSavings(input).annualSavings,0);
});
