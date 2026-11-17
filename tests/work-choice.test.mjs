import test from 'node:test';
import assert from 'node:assert/strict';
import {withSelectedWork} from '../lib/work-choice.mjs';

test('adds a work line while keeping existing writing', () => {
  assert.equal(withSelectedWork('すでに書いた相談です。', '問い合わせ・同じ返信'), '相談したい業務: 問い合わせ・同じ返信\nすでに書いた相談です。');
});

test('replaces only the work line on another selection', () => {
  const first = withSelectedWork('相談したい業務: 問い合わせ・同じ返信\nすでに書いた相談です。', 'ホームページ');
  assert.equal(first, '相談したい業務: ホームページ\nすでに書いた相談です。');
});
