export default function ServiceQuestions({guide}) {
  return <section className="service-questions service-detail-section" aria-labelledby="service-questions-title">
    <div className="container">
      <h2 id="service-questions-title">{guide.title}</h2>
      <div className="service-questions-list">{guide.questions.map(([question, answer]) =>
        <details key={question}><summary>{question}</summary><p>{answer}</p></details>
      )}</div>
      <p className="service-questions-links"><a href="/plans">費用と見積もりの考え方</a><a href="/#works">開発実績・制作例</a><a href="/#contact">無料で相談する</a></p>
    </div>
  </section>;
}
