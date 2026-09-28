import DiagnosisLink from './DiagnosisLink';

const questions = [
  ['費用はどのように決まりますか？', '対象業務、必要なデータ整理、既存システムとの連携、AIの利用量、運用・保守の範囲で変わります。まずは小さく試す範囲を決め、開発費と継続費用を分けてお見積もりします。'],
  ['導入までにどのくらいかかりますか？', '既存の資料や業務の整理状況、連携先、確認が必要な内容によって変わります。ヒアリング後、検証と本導入を分けて進め方・期間をご案内します。'],
  ['相談前に何を準備すればよいですか？', '毎日繰り返している作業、担当人数、おおよその所要時間、使っているツールが分かれば十分です。資料が揃っていない場合も、一緒に業務を整理できます。'],
  ['社内の情報をAIに渡しても大丈夫ですか？', '扱う情報の種類、利用するサービスのデータ取扱い、アクセス権限を事前に確認します。個人情報や機密情報は、必要性を見極め、匿名化・権限設定などの方法を検討します。すべてのデータをAIに入力する前提ではありません。'],
  ['導入後の効果はどう確認しますか？', '開始前に作業時間や件数を確認し、試験運用後に同じ基準で比べます。品質の確認や人による最終判断も含め、続ける価値があるかを判断します。サイト上の削減額は実績ではなくモデルケースです。']
];

export default function AIServiceGuide(){
  return <section className="ai-service-guide" aria-labelledby="ai-guide-title">
    <div className="container">
      <div className="ai-guide-heading"><p className="eyebrow">FROM YOUR OPERATIONS</p><h2 id="ai-guide-title">自社の仕事に置き換えて、<br/>導入を考える。</h2><p>AI導入や業務自動化で変えられるのは、ツールの名前より日々の仕事の流れです。まず、似た業務の導入イメージと費用の考え方をご覧ください。</p></div>
      <div className="ai-guide-links">
        <a href="/#ai-impact"><span>01 / 業種別イメージ</span><strong>今の業務と、導入後を比較する <span aria-hidden="true">↗</span></strong><small>セミナー・介護・店舗・営業の4業種</small></a>
        <a href="/#ai-simulator"><span>02 / コストの想定</span><strong>業務時間相当を試算する <span aria-hidden="true">↗</span></strong><small>人数・時給・稼働日数を変えて試せます</small></a>
        <a href="/works/quest-ai"><span>03 / 自社開発の実例</span><strong>クエストAIの画面と構成を見る <span aria-hidden="true">↗</span></strong><small>顧客管理・LINE案内・QR受付・アンケート</small></a>
      </div>
      <p className="ai-guide-note">削減額シミュレーターはモデルケースです。開発費・運用費を差し引いた金額や、導入済み企業の実績を示すものではありません。</p>
      <div className="ai-guide-faq"><div><p className="eyebrow">BEFORE YOU START</p><h2>相談前に、<br/>よくある質問。</h2><p>導入の進め方、費用、情報の扱いを確認してから相談できます。</p><DiagnosisLink>無料でAI業務診断を受ける</DiagnosisLink></div><div>{questions.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}<a className="ai-guide-pricing" href="/plans#cost-factors">開発費用が変わるポイントを見る →</a></div></div>
    </div>
  </section>;
}
