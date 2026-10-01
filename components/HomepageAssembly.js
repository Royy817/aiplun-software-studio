const services = ['AI・自動化', '業務システム', 'Web制作', 'アプリ開発'];

export default function HomepageAssembly() {
 return <div className="opening-plane website-plane" role="img" aria-label="見出し、サービス、制作例、問い合わせが順に組み上がり、Aiplun Studioのホームページが完成する立体モーション">
  <div className="website-shadow" aria-hidden="true"/>
  <div className="website-browser" aria-hidden="true">
   <div className="website-toolbar"><div><i/><i/><i/></div><span>aiplun-studio.jp</span><span>↗</span></div>
   <div className="website-sheet">
    <div className="website-piece website-nav"><strong>Aiplun<span> Studio</span></strong><div><span>SERVICE</span><span>WORKS</span><b>CONTACT ↗</b></div></div>
    <div className="website-piece website-hero"><div><span className="website-kicker">IDEAS INTO POSSIBILITY.</span><strong>可能性を、<br/>かたちに。</strong><p>AI・システム・Web・アプリ。</p><span className="website-mini-button">一緒につくる ↗</span></div><div className="website-art"><span/><span/><span/></div></div>
    <div className="website-piece website-services"><div className="website-section-label"><span>01 / WHAT WE DO</span><span>4つの支援</span></div><div className="website-service-grid">{services.map((name,index)=><div key={name}><span>0{index+1}</span><i aria-hidden="true"/><strong>{name}</strong></div>)}</div></div>
    <div className="website-piece website-work"><div className="website-section-label"><span>02 / SELECTED WORKS</span><span>アイデアを実装へ</span></div><div className="website-work-grid"><div><div className="website-work-visual website-work-system"><i/><i/><i/></div><span>BUSINESS SYSTEM</span></div><div><div className="website-work-visual website-work-app"><i/><i/></div><span>APP EXPERIENCE</span></div></div></div>
    <div className="website-piece website-contact"><div><span>LET’S BUILD SOMETHING GOOD.</span><strong>次の一歩を、一緒に。</strong></div><b>相談する ↗</b></div>
    <div className="website-piece website-footer"><span>Aiplun Studio</span><span>DESIGNED TO WORK.</span></div>
   </div>
  </div>
  <div className="website-finish" aria-hidden="true"><span>✓</span> IDEAS. DESIGN. DEVELOPMENT.</div>
 </div>;
}
