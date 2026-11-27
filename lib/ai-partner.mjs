export const plans = [
  {
    id: 'consult', name: 'AI CONSULT', purpose: '自社で何ができるか知りたい',
    price: '無料', period: '初回', scope: 'オンライン20〜30分',
    details: ['業務課題とAI利用状況の整理', 'AIを活用できる業務と、適した支援の提案'],
  },
  {
    id: 'start', name: 'AI START', purpose: 'まず1部署で使い始めたい',
    price: '20,000円', period: '単発', scope: '原則1部署・5名程度、AIツール1種類、総対応約2時間',
    details: ['業務ヒアリング', 'AIツールの選定', '初期設定支援', '実践型AI研修（60分）', '業務に合わせたプロンプト3種類', 'AI利用上の注意事項', '今後の活用提案'],
  },
  {
    id: 'support', name: 'AI SUPPORT', purpose: '日々の使い方を相談したい',
    price: '50,000円', period: '月額', scope: '総対応 月約4時間',
    details: ['専任AI担当者・チャット相談', '月1回の定例面談', '使い方の指導・業務用プロンプトの改善', '最新AI情報の共有・業務改善提案', 'AI活用状況の管理'],
  },
  {
    id: 'partner', name: 'AI PARTNER', purpose: '一つの業務を本格的に改善したい',
    price: '450,000円', period: '90日間', scope: '原則1部署・1業務、総対応約36時間',
    details: ['1か月目｜業務分析・AI導入計画', '2か月目｜AI導入・小規模実装・社員教育', '3か月目｜定着支援・成果測定・マニュアル整備'],
  },
  {
    id: 'pro', name: 'AI PARTNER PRO', purpose: '外部のAI・DX部門を持ちたい',
    price: '150,000〜300,000円', period: '月額', scope: '月15万円は約12時間、月30万円は約24時間',
    details: ['経営者へのAI戦略提案', '専任担当者による継続支援', '社員教育・業務分析', '業務改善・自動化', 'システム・AIエージェント導入支援', '月次成果報告'],
  },
  {
    id: 'development', name: 'DEVELOPMENT', purpose: '自社専用の仕組みをつくりたい',
    price: '個別見積もり', period: '', scope: '要件に合わせてご提案',
    details: ['業務システム・Webアプリ', 'AIエージェント・業務自動化システム', '社内AI検索システム'],
  },
];

export const industryExamples = [
  {
    name: '営業会社', title: '商談の後処理を、次の提案につなげる。',
    before: '商談メモを整え、顧客管理に転記し、お礼メールを書く。',
    after: '承認済みの商談メモから要点と次のアクションを抽出し、顧客管理の登録案とお礼メールを下書き。',
    review: '営業担当者が約束事項と宛先を確認して送信。',
  },
  {
    name: '建設会社', title: '現場の記録を、事務所に戻る前に整理する。',
    before: '作業内容を思い出しながら日報を書き、写真とあわせて整理する。',
    after: '音声で残したメモを日報の書式に整え、写真に対応する工程や確認事項の候補をまとめる。',
    review: '現場責任者が作業内容と安全に関わる記述を確認。',
  },
  {
    name: '不動産会社', title: '物件情報をまとめ、提案に時間を使う。',
    before: '資料から賃料や設備を拾い、候補を比較して提案文を作る。',
    after: '利用が許可された物件資料から比較表を作り、希望条件に沿う点と確認事項を整理。',
    review: '担当者が空室、費用、募集条件の最新情報を確認。',
  },
  {
    name: '一般企業', title: '社内の問い合わせを、根拠のある回答へ。',
    before: '経費や手続きの質問が来るたび、規程や過去の回答を探す。',
    after: '閲覧権限のある社内資料を検索し、出典付きの回答案を作る。',
    review: '担当者が根拠と規程の更新日を確認。',
  },
];

export const diagnosisQuestions = [
  { name: 'stage', label: '現在のAI活用状況', options: { new: 'ほとんど使っていない', trial: '一部の社員が使っている', active: '業務で使っている' } },
  { name: 'goal', label: '優先したい課題', options: { unsure: '課題や使い道を整理したい', start: 'ツール選定・社員研修', support: '継続的な使い方の相談', partner: '一つの業務を改善', pro: '複数部門のAI活用を推進', development: '自社専用の仕組みを開発' } },
  { name: 'budget', label: '予算の目安（税別）', options: { unknown: '未定・まずは相談', start: '単発2万円から', support: '月5万円程度', partner: '90日間で45万円程度', pro: '月15万〜30万円程度', development: '開発内容に応じて見積もり' } },
];

const reasons = {
  consult: '無料相談で、優先する業務・進め方・必要な予算を一緒に整理できます。',
  start: '一つの部署で、ツール選びから自社業務を使った実践研修まで進められます。',
  support: '専任担当者と相談しながら、日々の活用やプロンプトの見直しを継続できます。',
  partner: '一つの業務に範囲を絞り、90日で導入・教育・成果測定まで進められます。',
  pro: '複数部門の方針や優先順位を管理し、経営と現場の両方を継続して支援します。',
  development: '必要な機能と連携先を整理し、専用システムの範囲と費用をご提案します。',
};

export function recommendPlan({ stage, goal, budget }) {
  let id = 'consult';
  if (goal === 'start' && budget !== 'unknown') id = 'start';
  if (goal === 'support' && ['support', 'pro'].includes(budget)) id = stage === 'new' ? 'start' : 'support';
  if (['partner', 'pro', 'development'].includes(goal) && budget === goal) id = goal;
  return { plan: plans.find(plan => plan.id === id), reason: reasons[id] };
}

export const calculatorFields = [
  { key: 'people', label: 'AIを使う従業員数', unit: '人', min: 1, max: 10000, step: 1, initial: 5 },
  { key: 'minutes', label: '1人あたりの削減作業時間 / 日', unit: '分', min: 0, max: 1440, step: 1, initial: 30 },
  { key: 'hourlyCost', label: '1時間あたりの人件費相当額', unit: '円', min: 0, max: 100000, step: 1, initial: 2500 },
  { key: 'days', label: '月間営業日数', unit: '日', min: 1, max: 31, step: 1, initial: 20 },
];

export function estimateImpact(input) {
  const values = calculatorFields.map(({ key, min, max }) => {
    const value = Number(input[key]);
    return String(input[key] ?? '').trim() !== '' && Number.isInteger(value) && value >= min && value <= max ? value : null;
  });
  if (values.includes(null)) return null;
  const [people, minutes, hourlyCost, days] = values;
  const monthlyMinutes = people * minutes * days;
  return {
    monthlyHours: monthlyMinutes / 60,
    annualHours: monthlyMinutes * 12 / 60,
    monthlyValue: Math.round(monthlyMinutes * hourlyCost / 60),
    annualValue: Math.round(monthlyMinutes * hourlyCost * 12 / 60),
  };
}

const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'];

export function readAttribution(searchParams) {
  return Object.fromEntries(attributionKeys.flatMap(key => {
    const value = searchParams.get(key)?.replace(/[\r\n\t]/g, ' ').trim().slice(0, 120);
    return value ? [[key, value]] : [];
  }));
}
