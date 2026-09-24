# AI業務改善セクション

- `components/ai/IndustryExplorer.js`: キーボード対応の業種タブ、Before / After、モデルケース、サービス導線。全パネルを初期HTMLに含める。
- `lib/industries.js`: 業種別の課題・フロー・試算条件。追加業種は配列に追加する。`evidence.kind` は現在すべて `model`。実測結果への変更時は出典URL・計測期間・対象範囲を登録し、ModelResult の実測用表示を追加する。モデルの金額をそのまま実績として再表示しない。
- `lib/savings.mjs`: 入力の範囲・正規化・計算関数。削減額は作業時間の人件費換算であり、現金支出削減やROIではない。導入費・運用費は未控除。
- `components/ai/SavingsSimulator.js`: 数値入力・スライダー・期間切替。入力途中や範囲外の場合は結果を非表示、フォーカス離脱時に範囲と刻みに補正。
- `components/ai/DiagnosisLink.js`: `/?consultation=ai#contact`。同一ページ内ではイベントで相談種別を選択。別ページ・新規タブではクエリから選択。入力中の相談文は変更しない。
- `components/ContactBrief.js`: 種別を相談文の先頭に追加して既存送信APIへ渡す。メール送信先、同意、検証、再送制御は維持。
- `app/ai-impact.css`: 既存の色・フォントを継承。800px以下で比較・計算UIを縦配置。動きを減らす設定に対応。

検証: `npm run lint`、`npm test`、`npm run build`。JavaScriptの既存構成を維持しておりTypeScriptファイルはない。
