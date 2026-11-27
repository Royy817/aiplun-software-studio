import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateImpact, readAttribution, recommendPlan } from '../lib/ai-partner.mjs';

test('the same diagnosis goal can suggest training or ongoing support depending on adoption', () => {
  const recommend = answers => recommendPlan(answers).plan.id;
  assert.equal(recommend({ stage: 'new', goal: 'support', budget: 'support' }), 'start');
  assert.equal(recommend({ stage: 'active', goal: 'support', budget: 'support' }), 'support');
});

test('diagnosis matches scope and budget and offers a free discussion on mismatch', () => {
  for (const plan of ['partner', 'pro', 'development']) {
    assert.equal(recommendPlan({ stage: 'trial', goal: plan, budget: plan }).plan.id, plan);
  }
  assert.equal(recommendPlan({ stage: 'active', goal: 'pro', budget: 'start' }).plan.id, 'consult');
  assert.equal(recommendPlan({ stage: 'new', goal: 'start', budget: 'unknown' }).plan.id, 'consult');
});

test('the estimate returns monthly and annual hours and cost equivalents', () => {
  assert.deepEqual(estimateImpact({ people: '5', minutes: '30', hourlyCost: '2500', days: '20' }), {
    monthlyHours: 50, annualHours: 600, monthlyValue: 125000, annualValue: 1500000,
  });
  assert.deepEqual(estimateImpact({ people: 1, minutes: 0, hourlyCost: 0, days: 1 }), {
    monthlyHours: 0, annualHours: 0, monthlyValue: 0, annualValue: 0,
  });
  assert.equal(estimateImpact({ people: '', minutes: 30, hourlyCost: 2500, days: 20 }), null);
  assert.equal(estimateImpact({ people: 5, minutes: 30, hourlyCost: 2500, days: 32 }), null);
});

test('attribution retains only known UTM keys and limits user input', () => {
  const params = new URLSearchParams({ utm_source: ' demo\nmail ', utm_content: 'x'.repeat(200), other: 'ignored' });
  assert.deepEqual(readAttribution(params), { utm_source: 'demo mail', utm_content: 'x'.repeat(120) });
});
