export const intents = {
  maintenance: ['公開後の保守・運用', '保守・運用について', '保守・運用を相談する'],
  customers: ['顧客情報を一か所にまとめる', '業務システム開発について', '散らばった顧客情報の管理を相談する'],
  records: ['Excel台帳の管理を見直す', '業務システム開発について', 'Excel台帳の見直しを相談する'],
  entry: ['転記・集計の手間を減らす', '業務システム開発について', '転記・集計の進め方を相談する'],
  replies: ['問い合わせの返信を整える', 'AI業務効率化・自動化について', '問い合わせ対応を相談する'],
  search: ['社内資料を探しやすくする', 'AI業務効率化・自動化について', '社内資料の探し方を相談する'],
  sales: ['商談後の記録と引き継ぎ', '業務システム開発について', '商談後の記録を相談する'],
  seminar: ['セミナーの案内・受付', '業務システム開発について', 'セミナー運営を相談する'],
  handover: ['「あの人しか分からない」をなくす', '業務システム開発について', '業務の見える化を相談する'],
  single: ['一つの台帳を管理画面にする', '見積もり依頼', '台帳の画面化を相談する'],
  linked: ['権限・外部連携を含む台帳を作る', '見積もり依頼', '連携を含む見積もりを相談する']
};
const topics = {
 'scattered-customer-info-collect-one-place':'customers','ancar-customer-contact-data-preparation-20261029':'customers',
 'excel-management-limits-systematization-steps':'records','manual-data-entry-automation-first-steps':'entry',
 'jtp-ai-ocr-template-review-20261026':'entry','repeated-replies-template-ai-draft':'replies','inquiry-workload-triage-guide':'replies',
 'internal-documents-search-first-steps':'search','private-llm-internal-document-search-20261014':'search','box-context-retrieval-document-versions-20261108':'search',
 'copilotforce-sales-followup-review-20261118':'sales','seminar-survey-ai':'seminar','line-seminar-reminder-ai':'seminar',
 'only-one-person-knows-work-visualization-steps':'handover'
};
export const articleIntent = slug => topics[slug] || null;
