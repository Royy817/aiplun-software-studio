@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&display=swap');

:root {
  --bg: #f7fafc;
  --surface: #ffffff;
  --text: #132238;
  --muted: #536579;
  --line: #d8e2ee;
  --primary: #0b63ce;
  --primary-strong: #083f87;
  --teal: #0f8a8a;
  --amber: #d88722;
  --accent-soft: #e8f3ff;
  --radius: 8px;
  --shadow: 0 18px 46px rgba(25, 53, 88, 0.1);
}

/* Final designer pass: placed last so it wins over earlier component rules. */
body::before {
  opacity: 0.32;
}

.section {
  padding: 78px 0;
}

.site-header {
  box-shadow: 0 10px 30px rgba(19, 34, 56, 0.04);
}

.section-heading {
  max-width: 820px;
}

.section-heading.centered {
  max-width: 720px;
}

.hero {
  min-height: min(720px, calc(100vh - 36px));
}

.hero-content {
  max-width: 760px;
}

.hero .lead {
  max-width: 680px;
}

.card,
.concern-item,
.flow-list li,
.price-notes,
.work-feature {
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.card:hover,
.work-feature:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(25, 53, 88, 0.12);
}

.service-card {
  min-height: 270px;
  padding-top: 24px;
}

.service-card h3,
.price-card h3,
.project-row h3 {
  color: #102b46;
}

.service-card p,
.price-card li,
.project-row p {
  color: #40566f;
}

.pricing-grid {
  gap: 22px;
}

.price-card {
  padding: 26px;
}

.price-card ul {
  display: grid;
  gap: 8px;
}

.featured {
  background:
    linear-gradient(180deg, rgba(232, 243, 255, 0.72), #fff 34%),
    #fff;
}

.price-notes {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
}

.price-notes ul {
  margin-bottom: 0;
}

.monitor-layout {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.monitor-image {
  box-shadow: none;
}

.works {
  border-top: 1px solid #e6edf5;
  border-bottom: 1px solid #e6edf5;
}

.works-cinematic {
  align-items: stretch;
}

.works-story {
  top: 104px;
  border-left-color: var(--teal);
  background: rgba(255, 255, 255, 0.72);
}

.project-browser {
  min-height: 330px;
}

.project-row {
  padding: 30px;
}

.project-index {
  background: #edf8f8;
  color: #075f5f;
}

.faq-list details {
  box-shadow: none;
}

@media (max-width: 900px) {
  .section {
    padding: 58px 0;
  }

  .price-notes {
    grid-template-columns: 1fr;
  }

  .monitor-layout {
    padding: 18px;
  }
}

/* Designer polish: calm hierarchy, cleaner surfaces, stronger CTA rhythm. */
body::before {
  opacity: 0.38;
}

.section {
  padding: 78px 0;
}

.section-heading {
  max-width: 820px;
}

.section-heading.centered {
  max-width: 720px;
}

.site-header {
  box-shadow: 0 10px 30px rgba(19, 34, 56, 0.04);
}

.hero {
  min-height: min(720px, calc(100vh - 36px));
}

.hero-content {
  max-width: 760px;
}

.hero .lead {
  max-width: 680px;
}

.hero-gallery img {
  filter: saturate(0.92) contrast(1.02);
}

.trust > .container > p,
.monitor-layout p,
.final-cta-inner > p {
  max-width: 820px;
}

.card,
.concern-item,
.flow-list li,
.price-notes,
.work-feature {
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.card:hover,
.work-feature:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(25, 53, 88, 0.12);
}

.service-card {
  min-height: 270px;
  padding-top: 24px;
}

.service-card h3,
.price-card h3,
.project-row h3 {
  color: #102b46;
}

.service-card p,
.price-card li,
.project-row p {
  color: #40566f;
}

.pricing-grid {
  gap: 22px;
}

.price-card {
  padding: 26px;
}

.price-card ul {
  display: grid;
  gap: 8px;
}

.featured {
  background:
    linear-gradient(180deg, rgba(232, 243, 255, 0.72), #fff 34%),
    #fff;
}

.price-notes {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
}

.price-notes ul {
  margin-bottom: 0;
}

.monitor-layout {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.monitor-image {
  box-shadow: none;
}

.works {
  border-top: 1px solid #e6edf5;
  border-bottom: 1px solid #e6edf5;
}

.works-cinematic {
  align-items: stretch;
}

.works-story {
  top: 104px;
  border-left-color: var(--teal);
  background: rgba(255, 255, 255, 0.72);
}

.project-browser {
  min-height: 330px;
}

.project-row {
  padding: 30px;
}

.project-index {
  background: #edf8f8;
  color: #075f5f;
}

.faq-list details {
  box-shadow: none;
}

.final-cta {
  background:
    linear-gradient(90deg, rgba(7, 23, 42, 0.88), rgba(8, 63, 135, 0.74)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1400");
}

@media (max-width: 900px) {
  .section {
    padding: 58px 0;
  }

  .price-notes {
    grid-template-columns: 1fr;
  }

  .monitor-layout {
    padding: 18px;
  }
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Noto Sans JP", sans-serif;
  background: var(--bg);
  color: var(--text);
  font-size: 17px;
  line-height: 1.8;
}

body.intro-active {
  overflow: hidden;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(19, 34, 56, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(19, 34, 56, 0.035) 1px, transparent 1px);
  background-size: 44px 44px;
  content: "";
}

.intro-gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 32%, rgba(218, 178, 112, 0.14), transparent 30%),
    radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.58), transparent 46%),
    linear-gradient(180deg, #080605 0%, #1c1009 100%);
  color: #fff;
  perspective: 1400px;
}

.intro-gate::before {
  position: absolute;
  inset: 4.5% 9%;
  border: 1px solid rgba(218, 178, 112, 0.2);
  border-radius: 4px;
  box-shadow:
    0 32px 110px rgba(0, 0, 0, 0.62),
    inset 0 0 0 10px rgba(18, 8, 3, 0.28),
    inset 0 0 52px rgba(218, 178, 112, 0.07);
  content: "";
}

.intro-door {
  position: absolute;
  top: 4.5%;
  bottom: 5%;
  width: min(41.5vw, 560px);
  background:
    linear-gradient(90deg, rgba(255, 238, 196, 0.1), transparent 24%, rgba(18, 8, 3, 0.5) 70%, rgba(255, 233, 184, 0.05)),
    radial-gradient(ellipse at 34% 14%, rgba(255, 210, 135, 0.13), transparent 30%),
    linear-gradient(135deg, #2c170b 0%, #5a2e14 42%, #6e3a18 62%, #321609 100%);
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow:
    inset 0 0 0 1px rgba(218, 178, 112, 0.14),
    inset 0 0 0 18px rgba(25, 10, 4, 0.34),
    inset 0 0 100px rgba(14, 6, 2, 0.56),
    0 30px 90px rgba(0, 0, 0, 0.5);
}

.intro-door::before {
  position: absolute;
  inset: 7%;
  background:
    linear-gradient(90deg, rgba(255, 230, 185, 0.13), transparent 18%, rgba(34, 14, 4, 0.24)),
    linear-gradient(90deg, transparent 0 48%, rgba(39, 16, 5, 0.24) 48% 52%, transparent 52%),
    linear-gradient(0deg, transparent 0 49%, rgba(39, 16, 5, 0.22) 49% 51%, transparent 51%);
  border: 1px solid rgba(218, 178, 112, 0.2);
  border-radius: 3px;
  box-shadow:
    inset 0 0 0 10px rgba(45, 19, 7, 0.46),
    inset 0 0 0 12px rgba(218, 178, 112, 0.08),
    inset 0 0 45px rgba(0, 0, 0, 0.34);
  content: "";
}

.intro-door::after {
  position: absolute;
  top: 50%;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 226, 173, 0.56);
  border-radius: 50%;
  background:
    radial-gradient(circle at 34% 30%, #f4d696 0 7%, transparent 8%),
    radial-gradient(circle at 58% 60%, #654017 0 13%, transparent 14%),
    radial-gradient(circle at 50% 50%, #c99745 0 28%, #82541f 29% 49%, #3c230e 50% 64%, #a97931 65% 100%);
  box-shadow:
    0 11px 22px rgba(0, 0, 0, 0.38),
    0 0 0 9px rgba(66, 32, 11, 0.36),
    0 0 0 11px rgba(255, 222, 164, 0.11),
    inset -8px -9px 14px rgba(41, 20, 7, 0.45),
    inset 7px 6px 12px rgba(255, 232, 177, 0.36);
  content: "";
  transform: translateY(-50%);
}

.intro-door-left {
  right: 50%;
  transform-origin: left center;
}

.intro-door-left::after {
  right: 38px;
}

.intro-door-right {
  left: 50%;
  transform-origin: right center;
}

.intro-door-left::before {
  box-shadow:
    inset 0 0 0 10px rgba(45, 19, 7, 0.46),
    inset -18px 0 22px rgba(0, 0, 0, 0.24),
    inset 0 0 45px rgba(0, 0, 0, 0.34);
}

.intro-door-right::before {
  box-shadow:
    inset 0 0 0 10px rgba(45, 19, 7, 0.46),
    inset 18px 0 22px rgba(0, 0, 0, 0.24),
    inset 0 0 45px rgba(0, 0, 0, 0.34);
}

.intro-door-right::after {
  left: 38px;
}

.intro-light {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 50%, rgba(255, 232, 184, 0.52), rgba(218, 178, 112, 0.2) 18%, transparent 45%),
    linear-gradient(90deg, transparent 0 47%, rgba(255, 237, 196, 0.42) 49%, rgba(255, 237, 196, 0.42) 51%, transparent 53% 100%);
  opacity: 0;
  transform: scaleX(0.08);
  transform-origin: center;
  mix-blend-mode: screen;
}

.intro-mark {
  position: relative;
  z-index: 4;
  width: min(88%, 820px);
  text-align: center;
  pointer-events: none;
}

.intro-mark span {
  display: block;
  color: #f7d79b;
  font-size: 0.9rem;
  font-weight: 800;
}

.intro-mark strong {
  display: block;
  color: #f4dfb2;
  font-size: clamp(2.1rem, 5.7vw, 5.2rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0;
  text-shadow:
    0 1px 0 rgba(77, 42, 13, 0.58),
    0 12px 34px rgba(0, 0, 0, 0.52),
    0 0 24px rgba(218, 178, 112, 0.22);
}

.intro-mark strong::after {
  display: block;
  width: min(220px, 38%);
  height: 2px;
  margin: 18px auto 0;
  background: linear-gradient(90deg, transparent, rgba(218, 178, 112, 0.82), transparent);
  content: "";
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(1160px, 92%);
  margin: 0 auto;
}

.section {
  padding: 84px 0;
}

h1,
h2,
h3 {
  line-height: 1.35;
  margin: 0 0 14px;
}

h1 {
  max-width: 820px;
  font-size: clamp(2.15rem, 4.6vw, 4.2rem);
  font-weight: 800;
}

h1 span {
  display: block;
  overflow: hidden;
}

.hero-char {
  display: inline-block;
  will-change: transform, opacity;
}

h1 span:first-child {
  animation: headlineReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

h1 span:nth-child(2) {
  animation: headlineReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
}

h2 {
  font-size: clamp(1.65rem, 3vw, 2.45rem);
  font-weight: 800;
}

h3 {
  font-size: 1.16rem;
  font-weight: 800;
}

p {
  margin: 0 0 14px;
}

ul,
ol {
  margin: 0;
  padding-left: 1.2rem;
}

.lead {
  color: #253f5d;
  font-size: 1.08rem;
}

.motion-item {
  opacity: 0;
  transform: translateY(18px);
}

.gsap-ready .motion-item,
.gsap-ready .reveal {
  opacity: 1;
  transform: none;
}

.motion-item.is-visible {
  animation: textRise 0.78s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--motion-delay, 0ms);
}

.section-heading h2.motion-item.is-visible {
  animation-name: titleRise;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  color: var(--primary-strong);
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0;
}

.eyebrow::before {
  width: 30px;
  height: 2px;
  background: currentColor;
  content: "";
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(216, 226, 238, 0.9);
  backdrop-filter: blur(14px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 13px 0;
}

.logo {
  color: #092f67;
  font-size: 1.15rem;
  font-weight: 800;
}

.global-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  color: #284761;
  font-size: 0.94rem;
  font-weight: 700;
}

.global-nav a:hover {
  color: var(--primary);
}

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  color: var(--text);
  font-size: 1.15rem;
}

.btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  font-weight: 800;
  line-height: 1.35;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn::after {
  position: absolute;
  inset: -60% auto -60% -35%;
  width: 32%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  content: "";
  transform: skewX(-18deg) translateX(-120%);
}

.btn:hover::after {
  animation: buttonSweep 0.8s ease;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 12px 26px rgba(11, 99, 206, 0.28);
}

.btn-primary:hover {
  background: var(--primary-strong);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.92);
  color: var(--primary-strong);
  border-color: rgba(255, 255, 255, 0.75);
}

.header-cta {
  white-space: nowrap;
}

.hero {
  position: relative;
  min-height: min(760px, calc(100vh - 42px));
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image:
    linear-gradient(90deg, rgba(7, 23, 42, 0.86) 0%, rgba(7, 23, 42, 0.68) 48%, rgba(7, 23, 42, 0.2) 100%),
    var(--hero-image);
  background-position: center;
  background-size: cover;
  color: #fff;
}

.hero::after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 96px;
  background: linear-gradient(180deg, rgba(247, 250, 252, 0), var(--bg));
  content: "";
}

.hero::before {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(115deg, transparent 0 38%, rgba(255, 255, 255, 0.16) 44%, transparent 52%),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 120px);
  content: "";
  opacity: 0.42;
  mix-blend-mode: screen;
  animation: heroSignal 14s linear infinite;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.65fr);
  gap: 44px;
  align-items: end;
  padding: 72px 0 110px;
}

.hero-content {
  width: min(820px, 100%);
}

.hero .eyebrow {
  color: #b8e7ff;
}

.hero .lead {
  color: #e6f2ff;
  font-weight: 700;
}

.hero p:not(.eyebrow):not(.lead) {
  color: rgba(255, 255, 255, 0.88);
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0;
}

.hero-points span {
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: inherit;
  padding: 7px 13px;
  font-size: 0.92rem;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.hero-proof {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 26px;
  width: min(100%, 720px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
}

.hero-proof div {
  padding: 14px 16px;
  background: rgba(7, 23, 42, 0.28);
}

.hero-proof span {
  display: block;
  color: #b8e7ff;
  font-size: 0.78rem;
  font-weight: 800;
}

.hero-proof strong {
  display: block;
  margin-top: 3px;
  color: #fff;
  font-size: 0.95rem;
  line-height: 1.4;
}

.hero-gallery {
  display: grid;
  grid-template-columns: 1fr 0.78fr;
  grid-template-rows: 170px 170px;
  gap: 14px;
  align-self: center;
}

.hero-gallery img {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: var(--radius);
  object-fit: cover;
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.28);
}

.hero-gallery img:first-child {
  grid-row: span 2;
}

.hero-gallery img:nth-child(2) {
  animation: floatSoft 6s ease-in-out infinite;
}

.hero-gallery img:nth-child(3) {
  animation: floatSoft 7s ease-in-out 0.8s infinite;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

.section-heading {
  margin-bottom: 26px;
}

.section-heading.centered {
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.section-heading.centered .eyebrow {
  justify-content: center;
}

.split-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 24px;
  align-items: end;
}

.grid {
  display: grid;
  gap: 18px;
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background: var(--surface);
  border: 1px solid rgba(216, 226, 238, 0.95);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(11, 99, 206, 0.35);
  box-shadow: 0 24px 54px rgba(25, 53, 88, 0.14);
}

.card.motion-item.is-visible,
.concern-item.motion-item.is-visible,
.flow-list li.motion-item.is-visible,
.case-card.motion-item.is-visible {
  animation-name: cardLift;
}

.card:not(.work-card) {
  padding: 22px;
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.work-card h3,
.work-card p {
  padding-right: 20px;
  padding-left: 20px;
}

.support-card h3,
.support-card p {
  padding-right: 20px;
  padding-left: 20px;
}

.support-card h3 {
  margin-top: 18px;
}

.support-card p {
  padding-bottom: 20px;
}

.work-card h3 {
  margin-top: 18px;
}

.work-card p {
  padding-bottom: 20px;
}

.trust {
  background: var(--bg);
  padding-top: 48px;
}

.trust-monitor {
  margin: 0;
  padding: 16px 18px;
  border-left: 4px solid var(--teal);
  background: #eefafa;
  color: #095d5d;
  font-weight: 800;
}

.tag-sample {
  display: inline-flex;
  align-items: center;
  margin-right: 6px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #fff3dc;
  color: #8b520a;
  font-size: 0.75rem;
  font-weight: 800;
}

.concerns {
  background: #fff;
}

.concerns-layout {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 42px;
  align-items: start;
}

.concern-list {
  display: grid;
  gap: 12px;
}

.concern-item {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  padding: 16px 18px 16px 46px;
  color: #20384f;
  font-weight: 700;
  box-shadow: 0 10px 28px rgba(20, 46, 74, 0.06);
}

.concern-item::before {
  position: absolute;
  top: 19px;
  left: 18px;
  width: 14px;
  height: 14px;
  border: 3px solid var(--teal);
  border-radius: 50%;
  content: "";
}

.section-note {
  margin-top: 18px;
  color: #294760;
}

.services-grid {
  align-items: stretch;
}

.service-card {
  min-height: 246px;
  border-top: 4px solid var(--primary);
}

.service-card:nth-child(3) {
  border-top-color: var(--teal);
}

.service-card:nth-child(4) {
  border-top-color: var(--amber);
}

.service-note {
  color: #075f5f;
  font-weight: 800;
}

.pricing {
  background: linear-gradient(180deg, #eef6ff 0%, #f7fafc 100%);
}

.pricing-grid {
  margin-top: 26px;
  align-items: stretch;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 430px;
}

.price {
  color: var(--primary-strong);
  font-size: 1.75rem;
  font-weight: 800;
}

.featured {
  border: 2px solid var(--primary);
  transform: translateY(-14px);
  box-shadow: 0 28px 58px rgba(11, 99, 206, 0.2);
}

.badge {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 800;
}

.price-notes {
  margin-top: 14px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
}

.price-notes ul {
  margin-bottom: 16px;
}

.monitor {
  background: #fff;
}

.monitor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 34px;
  align-items: center;
  margin-bottom: 28px;
}

.monitor-image {
  width: 100%;
  height: 300px;
  border-radius: var(--radius);
  object-fit: cover;
  box-shadow: var(--shadow);
}

.monitor-items .card {
  border-left: 4px solid var(--teal);
}

.flow {
  background: #f7fafc;
}

.flow-list {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
  padding: 0;
  list-style: none;
}

.flow-list li {
  position: relative;
  min-height: 150px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  padding: 48px 12px 14px;
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(20, 46, 74, 0.06);
}

.flow-list li::before {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f3ff;
  color: var(--primary-strong);
  content: counter(list-item);
  font-size: 0.86rem;
  font-weight: 800;
}

.works {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #ffffff 0%, #f5f9fd 100%);
}

.works::before {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 78% 18%, rgba(11, 99, 206, 0.13), transparent 28%),
    radial-gradient(circle at 16% 82%, rgba(15, 138, 138, 0.12), transparent 30%);
  content: "";
  pointer-events: none;
}

.work-image {
  height: 250px;
}

.works .container {
  position: relative;
  z-index: 1;
}

.works-cinematic {
  display: grid;
  grid-template-columns: 0.38fr 0.62fr;
  gap: 30px;
  align-items: start;
}

.works-story {
  position: sticky;
  top: 96px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 4px solid var(--teal);
  padding: 36px 26px;
  background: rgba(255, 255, 255, 0.76);
  border-radius: var(--radius);
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.07);
}

.works-story h3 {
  font-size: clamp(1.45rem, 2.2vw, 2.05rem);
}

.works-metrics {
  display: grid;
  gap: 10px;
  margin-top: 22px;
}

.works-metrics div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid #dce8f3;
  border-radius: var(--radius);
  background: #fff;
  padding: 12px 14px;
}

.works-metrics span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 800;
}

.works-metrics strong {
  color: var(--primary-strong);
  font-size: 1.05rem;
}

.impact-line {
  position: relative;
  width: 100%;
  height: 2px;
  margin-top: 24px;
  overflow: hidden;
  background: #dbe8f5;
}

.impact-line::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--primary), var(--teal), transparent);
  content: "";
  transform: translateX(-100%);
  animation: lineTravel 2.8s ease-in-out infinite;
}

.work-feature {
  border: 1px solid rgba(216, 226, 238, 0.95);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 28px 70px rgba(25, 53, 88, 0.14);
  overflow: hidden;
  transform: perspective(1200px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg));
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.work-feature:hover {
  box-shadow: 0 34px 82px rgba(25, 53, 88, 0.18);
}

.project-browser {
  position: relative;
  min-height: 390px;
  padding: 20px;
  background:
    radial-gradient(circle at 82% 12%, rgba(255, 255, 255, 0.24), transparent 26%),
    linear-gradient(135deg, rgba(7, 23, 42, 0.9), rgba(11, 99, 206, 0.58)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1100");
  background-position: center;
  background-size: cover;
}

.project-browser img {
  width: min(100%, 700px);
  height: 292px;
  margin: 18px auto 0;
  border-radius: var(--radius);
  object-fit: cover;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
}

.browser-caption {
  position: absolute;
  right: 22px;
  bottom: 22px;
  width: min(78%, 320px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.9);
  padding: 14px;
  color: var(--text);
  backdrop-filter: blur(12px);
}

.browser-caption span {
  display: block;
  color: var(--teal);
  font-size: 0.76rem;
  font-weight: 800;
}

.browser-caption strong {
  font-size: 1.25rem;
}

.browser-badge {
  position: absolute;
  top: 22px;
  right: 22px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 800;
  backdrop-filter: blur(10px);
}

.project-list {
  display: grid;
}

.project-row {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 18px;
  padding: 28px;
  border-top: 1px solid var(--line);
  background: #fff;
  transition: background 0.2s ease, transform 0.2s ease;
}

.project-row:hover {
  background: #f8fbff;
  transform: translateX(3px);
}

.project-index {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f3ff;
  color: var(--primary-strong);
  font-weight: 800;
}

.compact-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 16px 0;
}

.compact-meta div {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #f8fbff;
  padding: 10px;
}

.compact-meta dt {
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
}

.compact-meta dd {
  margin: 4px 0 0;
  font-weight: 800;
}

.works-showcase {
  display: grid;
  gap: 22px;
}

.case-card {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 0;
  overflow: hidden;
  border: 1px solid rgba(216, 226, 238, 0.95);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  transform: perspective(1200px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg));
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.case-card:hover {
  box-shadow: 0 30px 70px rgba(25, 53, 88, 0.16);
}

.case-visual {
  min-height: 360px;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    linear-gradient(135deg, rgba(11, 99, 206, 0.95), rgba(15, 138, 138, 0.86)),
    url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&fm=jpg&q=58&w=1000");
  background-position: center;
  background-size: cover;
}

.site-visual {
  background:
    linear-gradient(135deg, rgba(7, 23, 42, 0.76), rgba(11, 99, 206, 0.62)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1000");
  background-position: center;
  background-size: cover;
}

.site-visual img {
  width: min(100%, 460px);
  max-height: 280px;
  border-radius: var(--radius);
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
}

.app-dashboard {
  position: relative;
  overflow: hidden;
}

.app-dashboard::before {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.2), transparent 34%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0 1px, transparent 1px 18px);
  content: "";
  animation: dashboardDrift 16s linear infinite;
}

.dashboard-window {
  position: relative;
  z-index: 1;
  width: min(100%, 440px);
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--text);
  padding: 18px;
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
}

.window-bar {
  display: flex;
  gap: 6px;
  margin-bottom: 18px;
}

.window-bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff6b5e;
}

.window-bar span:nth-child(2) {
  background: #f6bd3f;
}

.window-bar span:nth-child(3) {
  background: #2cc36b;
}

.dashboard-head {
  display: flex;
  gap: 12px;
  align-items: center;
}

.mini-app-icon {
  width: 54px;
  height: 54px;
  border-radius: 13px;
  box-shadow: 0 12px 24px rgba(11, 99, 206, 0.22);
}

.dashboard-head span,
.metric-grid span {
  display: block;
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 800;
}

.dashboard-head strong {
  font-size: 1.35rem;
  line-height: 1.2;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 18px 0;
}

.metric-grid div {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #f8fbff;
  padding: 10px;
}

.metric-grid strong {
  display: block;
  margin-top: 3px;
  color: var(--primary-strong);
  font-size: 1.16rem;
}

.route-map {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 20px 0;
}

.route-map::before {
  position: absolute;
  top: 50%;
  left: 8%;
  right: 8%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--teal));
  content: "";
  transform: translateY(-50%);
}

.route-map span {
  position: relative;
  z-index: 1;
  aspect-ratio: 1;
  border: 3px solid #fff;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 5px #e8f3ff;
  animation: pulseDot 2.4s ease-in-out infinite;
}

.route-map span:nth-child(2) {
  animation-delay: 0.2s;
}

.route-map span:nth-child(3) {
  animation-delay: 0.4s;
}

.route-map span:nth-child(4) {
  animation-delay: 0.6s;
}

.dashboard-window p {
  margin: 0;
  color: #294760;
  font-size: 0.92rem;
  font-weight: 700;
}

.case-body {
  padding: 34px;
}

.case-label {
  display: inline-flex;
  margin: 0 0 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e8f3ff;
  color: var(--primary-strong);
  font-size: 0.8rem;
  font-weight: 800;
}

.case-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 22px 0;
}

.case-meta div {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 10px;
  background: #f8fbff;
}

.case-meta dt {
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
}

.case-meta dd {
  margin: 4px 0 0;
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 800;
}

.text-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-strong);
  font-weight: 800;
}

.text-link::after {
  margin-left: 8px;
  content: "->";
}

.faq {
  background: #f7fafc;
}

.faq-list {
  display: grid;
  gap: 12px;
}

summary {
  cursor: pointer;
  font-weight: 800;
}

summary::-webkit-details-marker {
  display: none;
}

details p {
  margin-top: 10px;
}

.final-cta {
  background:
    linear-gradient(90deg, rgba(7, 23, 42, 0.9), rgba(8, 63, 135, 0.78)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1400");
  background-position: center;
  background-size: cover;
  color: #fff;
}

.final-cta-inner {
  max-width: 900px;
}

.final-cta p {
  color: rgba(255, 255, 255, 0.9);
}

.site-footer {
  border-top: 1px solid #deebfb;
  background: #fff;
}

.footer-inner {
  padding: 22px 0 90px;
  color: #365577;
  font-size: 0.92rem;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
}

.reveal.is-visible {
  animation: fadeUp 0.8s ease both;
}

.delay-1 {
  animation-delay: 0.16s;
}

.delay-2 {
  animation-delay: 0.32s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatSoft {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes buttonSweep {
  to {
    transform: skewX(-18deg) translateX(520%);
  }
}

@keyframes heroSignal {
  from {
    transform: translateX(-8%);
  }

  to {
    transform: translateX(8%);
  }
}

@keyframes dashboardDrift {
  from {
    transform: translateX(-4%) translateY(-2%);
  }

  to {
    transform: translateX(4%) translateY(2%);
  }
}

@keyframes pulseDot {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 5px #e8f3ff;
  }

  50% {
    transform: scale(1.12);
    box-shadow: 0 0 0 8px rgba(15, 138, 138, 0.18);
  }
}

@keyframes lineTravel {
  0% {
    transform: translateX(-100%);
  }

  55%,
  100% {
    transform: translateX(100%);
  }
}

@keyframes headlineReveal {
  from {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes textRise {
  from {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes titleRise {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.985);
    filter: blur(7px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes cardLift {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    filter: blur(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 1080px) {
  .global-nav {
    gap: 11px;
    font-size: 0.87rem;
  }

  .featured {
    transform: none;
  }

  .flow-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  body {
    font-size: 16px;
  }

  .menu-toggle {
    display: block;
  }

  .global-nav {
    position: absolute;
    top: 64px;
    left: 4%;
    right: 4%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #d5e4f7;
    border-radius: var(--radius);
    background: #fff;
    padding: 14px;
    box-shadow: var(--shadow);
  }

  .global-nav.open {
    display: flex;
  }

  .header-cta {
    display: none;
  }

  .hero {
    min-height: auto;
    background-position: 62% center;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    padding: 76px 0 86px;
  }

  .hero-gallery {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px;
  }

  .hero-proof {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 62px 0;
  }

  .split-heading,
  .concerns-layout,
  .monitor-layout,
  .case-card,
  .works-cinematic,
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .works-story {
    position: static;
    min-height: 0;
    padding: 24px 18px;
  }

  .works-metrics div {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-row {
    grid-template-columns: 1fr;
  }

  .compact-meta {
    grid-template-columns: 1fr;
  }

  .project-browser {
    min-height: 300px;
  }

  .project-browser img {
    height: 210px;
  }

  .case-visual {
    min-height: 280px;
  }

  .case-meta {
    grid-template-columns: 1fr;
  }

  .dashboard-window {
    width: 100%;
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }

  .flow-list {
    grid-template-columns: 1fr;
  }

  .flow-list li {
    min-height: 0;
  }

  .monitor-image {
    height: 230px;
  }

  .footer-inner {
    padding-bottom: 40px;
  }
}

/* Final designer pass: placed last so it wins over earlier component rules. */
body::before {
  opacity: 0.32;
}

.section {
  padding: 78px 0;
}

.site-header {
  box-shadow: 0 10px 30px rgba(19, 34, 56, 0.04);
}

.section-heading {
  max-width: 820px;
}

.section-heading.centered {
  max-width: 720px;
}

.hero {
  min-height: min(720px, calc(100vh - 36px));
}

.hero-content {
  max-width: 760px;
}

.hero .lead {
  max-width: 680px;
}

.card,
.concern-item,
.flow-list li,
.price-notes,
.work-feature {
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.card:hover,
.work-feature:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(25, 53, 88, 0.12);
}

.service-card {
  min-height: 270px;
  padding-top: 24px;
}

.service-card h3,
.price-card h3,
.project-row h3 {
  color: #102b46;
}

.service-card p,
.price-card li,
.project-row p {
  color: #40566f;
}

.pricing-grid {
  gap: 22px;
}

.price-card {
  padding: 26px;
}

.price-card ul {
  display: grid;
  gap: 8px;
}

.featured {
  background:
    linear-gradient(180deg, rgba(232, 243, 255, 0.72), #fff 34%),
    #fff;
}

.price-notes {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
}

.price-notes ul {
  margin-bottom: 0;
}

.monitor-layout {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 14px 38px rgba(25, 53, 88, 0.08);
}

.monitor-image {
  box-shadow: none;
}

.works {
  border-top: 1px solid #e6edf5;
  border-bottom: 1px solid #e6edf5;
}

.works-cinematic {
  align-items: stretch;
}

.works-story {
  top: 104px;
  border-left-color: var(--teal);
  background: rgba(255, 255, 255, 0.72);
}

.project-browser {
  min-height: 330px;
}

.project-row {
  padding: 30px;
}

.project-index {
  background: #edf8f8;
  color: #075f5f;
}

.faq-list details {
  box-shadow: none;
}

@media (max-width: 900px) {
  .section {
    padding: 58px 0;
  }

  .price-notes {
    grid-template-columns: 1fr;
  }

  .monitor-layout {
    padding: 18px;
  }
}
/* Final adult-motion override: keep this last so the refined mood always wins. */
:root {
  --bg: #f4f1eb;
  --surface: #fffdfa;
  --text: #101b2d;
  --muted: #5f6875;
  --line: #e3dbcf;
  --primary: #173f6c;
  --primary-strong: #081f3d;
  --teal: #1d6d72;
  --amber: #a87432;
  --accent-soft: #eef4f7;
  --shadow: 0 22px 58px rgba(8, 31, 61, 0.1);
}

body {
  background:
    radial-gradient(circle at 10% 0%, rgba(168, 116, 50, 0.1), transparent 32%),
    linear-gradient(180deg, #fbfaf6 0%, #f4f1eb 48%, #eef3f6 100%);
}

body::before {
  opacity: 0.2;
  background-image:
    linear-gradient(rgba(16, 27, 45, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 27, 45, 0.026) 1px, transparent 1px);
}

.site-header {
  background: rgba(255, 253, 248, 0.88);
  border-bottom-color: rgba(168, 116, 50, 0.16);
  box-shadow: 0 18px 44px rgba(8, 31, 61, 0.06);
}

.logo {
  color: var(--primary-strong);
}

.global-nav {
  color: #2f4055;
}

.btn-primary {
  background: linear-gradient(135deg, #0a294f 0%, #1f5c8f 100%);
  box-shadow: 0 16px 34px rgba(8, 31, 61, 0.25);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #071e3b 0%, #184a77 100%);
}

.btn-secondary {
  border-color: rgba(232, 213, 174, 0.62);
  background: rgba(255, 253, 248, 0.9);
  color: #0c2f58;
}

.intro-gate {
  background:
    radial-gradient(circle at 50% 33%, rgba(234, 197, 137, 0.16), transparent 29%),
    radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.68), transparent 48%),
    linear-gradient(180deg, #050505 0%, #15100c 46%, #251408 100%);
}

.intro-gate::before {
  inset: 4% 8.5%;
  border-color: rgba(234, 197, 137, 0.24);
  box-shadow:
    0 42px 130px rgba(0, 0, 0, 0.68),
    inset 0 0 0 10px rgba(18, 9, 4, 0.32),
    inset 0 0 72px rgba(234, 197, 137, 0.08);
}

.intro-door {
  background:
    linear-gradient(90deg, rgba(255, 238, 197, 0.12), transparent 23%, rgba(13, 6, 3, 0.58) 74%, rgba(255, 233, 184, 0.07)),
    radial-gradient(ellipse at 31% 14%, rgba(255, 215, 151, 0.15), transparent 28%),
    radial-gradient(ellipse at 58% 72%, rgba(59, 25, 8, 0.28), transparent 34%),
    linear-gradient(135deg, #201008 0%, #512a12 42%, #70401c 62%, #241006 100%);
  background-position: center;
  background-size: cover;
}

.intro-door::after {
  width: 46px;
  height: 46px;
  border-color: rgba(255, 226, 173, 0.62);
  background:
    radial-gradient(circle at 31% 28%, #ffe8ad 0 8%, transparent 9%),
    radial-gradient(circle at 54% 58%, #664118 0 12%, transparent 13%),
    radial-gradient(circle at 50% 50%, #d4a253 0 25%, #8b5b22 26% 48%, #3a220f 49% 63%, #bd8436 64% 100%);
  box-shadow:
    0 13px 24px rgba(0, 0, 0, 0.42),
    0 0 0 10px rgba(55, 28, 12, 0.42),
    0 0 0 12px rgba(255, 222, 164, 0.12),
    inset -9px -10px 15px rgba(36, 18, 8, 0.46),
    inset 8px 7px 13px rgba(255, 234, 184, 0.38);
}

.intro-mark {
  width: min(90%, 940px);
}

.intro-mark::before,
.intro-mark::after {
  position: absolute;
  left: 50%;
  width: min(560px, 72%);
  height: 1px;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(245, 218, 167, 0.84), transparent);
  content: "";
  opacity: 0.78;
  transform: translateX(-50%);
  animation: introFramePulse 2.9s ease-in-out infinite;
}

.intro-mark::before {
  top: calc(50% - clamp(42px, 6vw, 86px));
}

.intro-mark::after {
  bottom: calc(50% - clamp(44px, 6vw, 88px));
  animation-delay: -1.45s;
}

.intro-mark strong {
  position: relative;
  display: inline-block;
  isolation: isolate;
  white-space: nowrap;
  background:
    linear-gradient(115deg, #8d642e 0%, #f5dfaa 22%, #fff7dc 43%, #c7984f 62%, #7b5120 100%);
  background-size: 240% 100%;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: introLogoBreath 3.4s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.44));
}

.intro-mark strong::before {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 0 18%, rgba(255, 255, 255, 0.98) 44%, transparent 66% 100%);
  background-clip: text;
  content: attr(data-text);
  opacity: 0.68;
  transform: translateX(-124%) skewX(-12deg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: introLogoSweep 2.55s cubic-bezier(0.77, 0, 0.18, 1) infinite;
}

.intro-mark strong::after {
  width: min(320px, 52%);
  height: 1px;
  margin-top: 20px;
  background: linear-gradient(90deg, transparent, rgba(245, 218, 167, 0.98), rgba(255, 255, 255, 0.9), rgba(245, 218, 167, 0.98), transparent);
  animation: introUnderline 2.25s ease-in-out infinite;
}

.intro-char {
  position: relative;
  z-index: 1;
  display: inline-block;
  background: inherit;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  will-change: transform, opacity, filter;
}

.hero {
  background-image:
    linear-gradient(90deg, rgba(5, 12, 22, 0.92) 0%, rgba(9, 29, 52, 0.74) 50%, rgba(13, 43, 76, 0.2) 100%),
    var(--hero-image);
}

.hero::before {
  opacity: 0.28;
  background:
    linear-gradient(115deg, transparent 0 38%, rgba(232, 213, 174, 0.18) 44%, transparent 52%),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0 1px, transparent 1px 140px);
}

.hero-points span {
  border-color: rgba(232, 213, 174, 0.42);
  background: rgba(255, 253, 248, 0.13);
}

.card,
.concern-item,
.flow-list li,
.price-notes,
.monitor-layout,
.work-feature,
.works-story {
  border-color: rgba(168, 116, 50, 0.18);
  background-color: rgba(255, 253, 248, 0.94);
}

.pricing {
  background:
    radial-gradient(circle at 50% 8%, rgba(168, 116, 50, 0.13), transparent 32%),
    linear-gradient(180deg, #f7f1e7 0%, #f4f1eb 100%);
}

.featured {
  border-color: var(--amber);
  background:
    linear-gradient(180deg, rgba(249, 239, 219, 0.92), #fffdfa 40%),
    #fffdfa;
  box-shadow: 0 30px 68px rgba(116, 76, 27, 0.18);
}

.badge {
  background: linear-gradient(135deg, #8e5d21, #b98a42);
}

.works {
  background:
    radial-gradient(circle at 78% 18%, rgba(23, 63, 108, 0.12), transparent 28%),
    radial-gradient(circle at 12% 84%, rgba(168, 116, 50, 0.12), transparent 30%),
    linear-gradient(180deg, #fffdfa 0%, #f3f0ea 100%);
}

.works::before {
  background:
    linear-gradient(115deg, transparent 0 36%, rgba(168, 116, 50, 0.08) 44%, transparent 54%),
    radial-gradient(circle at 78% 18%, rgba(23, 63, 108, 0.1), transparent 28%);
}

.project-browser {
  background:
    radial-gradient(circle at 82% 12%, rgba(255, 255, 255, 0.22), transparent 26%),
    linear-gradient(135deg, rgba(5, 12, 22, 0.92), rgba(23, 63, 108, 0.62)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1100");
}

.final-cta {
  background:
    linear-gradient(90deg, rgba(5, 12, 22, 0.94), rgba(13, 43, 76, 0.8)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1400");
}

.hero-gallery img,
.project-browser img {
  animation: imageMoodShift 8.8s ease-in-out infinite;
  object-position: 50% 50%;
  transform-origin: center;
  will-change: transform;
}

.hero-gallery img:nth-child(2),
.hero-gallery img:nth-child(3) {
  animation-name: imageMoodShift;
}

.hero-gallery img:nth-child(1) {
  animation-duration: 10.5s;
}

.hero-gallery img:nth-child(2),
.project-browser img {
  animation-delay: -2.2s;
}

.hero-gallery img:nth-child(3) {
  animation-delay: -4.4s;
}

@keyframes introLogoBreath {
  0%,
  100% {
    background-position: 0% 50%;
    filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.44));
  }

  50% {
    background-position: 100% 50%;
    filter: drop-shadow(0 18px 40px rgba(245, 218, 167, 0.2));
  }
}

@keyframes introLogoSweep {
  0%,
  34% {
    transform: translateX(-124%) skewX(-12deg);
  }

  72%,
  100% {
    transform: translateX(124%) skewX(-12deg);
  }
}

@keyframes introUnderline {
  0%,
  100% {
    opacity: 0.52;
    transform: scaleX(0.72);
  }

  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes introFramePulse {
  0%,
  100% {
    opacity: 0.24;
    transform: translateX(-50%) scaleX(0.42);
  }

  50% {
    opacity: 0.86;
    transform: translateX(-50%) scaleX(1);
  }
}

@keyframes imageMoodShift {
  0%,
  100% {
    transform: scale(1.01) translate3d(0, 0, 0);
  }

  50% {
    transform: scale(1.045) translate3d(0, -1.2%, 0);
  }
}

@media (max-width: 900px) {
  .intro-mark strong {
    font-size: clamp(2rem, 10vw, 3.6rem);
  }

  .hero {
    background-image:
      linear-gradient(180deg, rgba(5, 12, 22, 0.92) 0%, rgba(9, 29, 52, 0.76) 62%, rgba(13, 43, 76, 0.36) 100%),
      var(--hero-image);
  }
}

/* Media and comparison expansion. */
.hero {
  isolation: isolate;
  background-color: #061221;
}

.hero-video-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  filter: saturate(0.92) contrast(1.08) brightness(0.78);
  pointer-events: none;
  transition: opacity 0.9s ease;
}

.hero-video-bg.is-loaded {
  opacity: 0.7;
}

.hero::before,
.hero::after {
  z-index: 1;
  pointer-events: none;
}

.hero-inner {
  z-index: 2;
}

.visual-library {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(29, 109, 114, 0.12), transparent 28%),
    linear-gradient(180deg, #fffdfa 0%, #f4f1eb 100%);
}

.visual-library::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0 36%, rgba(168, 116, 50, 0.08) 45%, transparent 56%);
  content: "";
  pointer-events: none;
}

.visual-library .container {
  position: relative;
  z-index: 1;
}

.photo-collage {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 0.85fr;
  grid-auto-rows: 210px;
  gap: 16px;
}

.visual-card {
  position: relative;
  min-height: 210px;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(168, 116, 50, 0.18);
  border-radius: 18px;
  background: #101b2d;
  box-shadow: 0 24px 62px rgba(8, 31, 61, 0.12);
}

.visual-card-large {
  grid-row: span 2;
}

.visual-card-wide {
  grid-column: span 2;
}

.visual-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}

.visual-card::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 42%, rgba(5, 12, 22, 0.78));
  content: "";
}

.visual-card figcaption {
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: 1;
  color: #fff7dc;
  font-weight: 800;
  text-shadow: 0 10px 24px rgba(0, 0, 0, 0.42);
}

.comparison {
  background:
    radial-gradient(circle at 80% 14%, rgba(23, 63, 108, 0.1), transparent 30%),
    linear-gradient(180deg, #fffdfa 0%, #eef3f6 100%);
}

.comparison-table-wrap {
  overflow-x: auto;
  border: 1px solid rgba(168, 116, 50, 0.22);
  border-radius: 20px;
  background: rgba(255, 253, 248, 0.95);
  box-shadow: 0 24px 62px rgba(8, 31, 61, 0.11);
}

.comparison-table {
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  border-bottom: 1px solid rgba(168, 116, 50, 0.16);
  padding: 16px 18px;
  text-align: left;
  vertical-align: top;
}

.comparison-table thead th {
  background: #0a294f;
  color: #fff;
  font-size: 0.95rem;
}

.comparison-table tbody th {
  width: 22%;
  color: var(--primary-strong);
  font-weight: 800;
}

.comparison-table td {
  color: #40566f;
  font-weight: 700;
}

.comparison-table .is-recommended {
  background: rgba(249, 239, 219, 0.72);
  color: #11243a;
}

.comparison-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.comparison-card {
  border: 1px solid rgba(168, 116, 50, 0.18);
  border-radius: 18px;
  background: rgba(255, 253, 248, 0.94);
  padding: 24px;
  box-shadow: 0 18px 44px rgba(8, 31, 61, 0.08);
}

.comparison-card span,
.plan-detail-card span {
  display: inline-flex;
  margin-bottom: 10px;
  border-radius: 999px;
  background: #eef4f7;
  color: var(--primary-strong);
  padding: 4px 10px;
  font-size: 0.8rem;
  font-weight: 800;
}

.comparison-card.recommended {
  border-color: rgba(168, 116, 50, 0.46);
  background: linear-gradient(180deg, rgba(249, 239, 219, 0.96), rgba(255, 253, 248, 0.96));
  transform: translateY(-8px);
}

.comparison-cta {
  justify-content: center;
  margin-top: 26px;
}

.plan-page-hero {
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(5, 12, 22, 0.92), rgba(13, 43, 76, 0.78)),
    url("https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&fm=jpg&q=58&w=1400");
  background-position: center;
  background-size: cover;
  color: #fff;
}

.plan-page-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.7fr);
  gap: 38px;
  align-items: center;
}

.plan-page-hero .eyebrow,
.plan-page-hero .lead {
  color: #e8f3ff;
}

.plan-photo-strip {
  display: grid;
  grid-template-columns: 1fr 0.82fr;
  grid-template-rows: 170px 170px;
  gap: 14px;
}

.plan-photo-strip img {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 28px 68px rgba(0, 0, 0, 0.28);
}

.plan-photo-strip img:first-child {
  grid-row: span 2;
}

.plan-detail-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.plan-detail-card {
  overflow: hidden;
  border: 1px solid rgba(168, 116, 50, 0.18);
  border-radius: 20px;
  background: rgba(255, 253, 248, 0.96);
  box-shadow: 0 20px 52px rgba(8, 31, 61, 0.09);
}

.plan-detail-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.plan-detail-card h3,
.plan-detail-card p {
  padding-right: 22px;
  padding-left: 22px;
}

.plan-detail-card h3 {
  margin-top: 22px;
}

.plan-detail-card p {
  padding-bottom: 24px;
}

.featured-detail {
  border-color: rgba(168, 116, 50, 0.42);
  transform: translateY(-8px);
}

.visual-card img,
.plan-detail-card img {
  animation: none;
  will-change: auto;
}

@media (max-width: 1080px) {
  .global-nav {
    gap: 9px;
    font-size: 0.82rem;
  }
}

@media (max-width: 900px) {
  .photo-collage,
  .comparison-cards,
  .plan-page-hero-inner,
  .plan-detail-grid {
    grid-template-columns: 1fr;
  }

  .photo-collage {
    grid-auto-rows: 210px;
  }

  .visual-card-large,
  .visual-card-wide {
    grid-row: auto;
    grid-column: auto;
  }

  .comparison-card.recommended,
  .featured-detail {
    transform: none;
  }

  .plan-photo-strip {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px;
  }
}

.plan-photo-strip {
  display: none !important;
}

/* Waterfall opening: replaces the old door with a water-and-mist reveal. */
.intro-gate {
  background: #04111d;
  color: #fff;
  perspective: none;
}

.intro-gate::before {
  inset: 0;
  z-index: 3;
  border: 0;
  border-radius: 0;
  background:
    radial-gradient(circle at 50% 48%, rgba(213, 236, 255, 0.34), transparent 0 18%, rgba(7, 27, 44, 0.36) 19% 38%, transparent 58%),
    linear-gradient(90deg, rgba(4, 17, 29, 0.86), transparent 35% 65%, rgba(4, 17, 29, 0.86));
  box-shadow:
    inset 0 0 0 1px rgba(232, 246, 255, 0.07),
    inset 0 0 130px rgba(0, 0, 0, 0.62);
  content: "";
  pointer-events: none;
}

.intro-gate::after {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(4, 17, 29, 0.1), rgba(4, 17, 29, 0.64)),
    repeating-linear-gradient(112deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 42px);
  content: "";
  pointer-events: none;
}

.intro-water-bg,
.intro-current,
.intro-mist,
.intro-ripple {
  position: absolute;
  pointer-events: none;
}

.intro-water-bg {
  inset: -5%;
  z-index: 0;
  background:
    radial-gradient(ellipse at 50% 42%, rgba(112, 180, 205, 0.28), transparent 0 34%),
    linear-gradient(90deg, rgba(4, 17, 29, 0.96), rgba(7, 38, 58, 0.66), rgba(4, 17, 29, 0.92)),
    linear-gradient(180deg, #061524 0%, #0a2a3d 48%, #03101d 100%);
  background-position: center;
  background-size: cover;
  opacity: 0.94;
}

.intro-current {
  left: -6%;
  right: -6%;
  z-index: 2;
  height: 58%;
  background:
    radial-gradient(ellipse at 50% 92%, rgba(234, 249, 255, 0.36), transparent 0 22%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(173, 221, 238, 0.2), rgba(255, 255, 255, 0.06)),
    linear-gradient(180deg, rgba(6, 30, 48, 0.86), rgba(11, 63, 86, 0.7));
  box-shadow: 0 28px 92px rgba(0, 0, 0, 0.32);
  overflow: hidden;
}

.intro-current::before {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(108deg, rgba(255, 255, 255, 0.16) 0 1px, transparent 1px 52px),
    radial-gradient(ellipse at 50% 100%, rgba(214, 244, 255, 0.26), transparent 0 32%);
  content: "";
  opacity: 0.78;
  animation: waterDrift 6.4s ease-in-out infinite alternate;
}

.intro-current-left {
  top: -4%;
  clip-path: polygon(0 0, 100% 0, 100% 76%, 54% 100%, 0 76%);
}

.intro-current-right {
  bottom: -4%;
  clip-path: polygon(0 24%, 46% 0, 100% 24%, 100% 100%, 0 100%);
}

.intro-ripple {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: min(22vw, 260px);
  aspect-ratio: 1;
  border: 1px solid rgba(218, 244, 255, 0.64);
  border-radius: 50%;
  box-shadow:
    0 0 44px rgba(147, 221, 255, 0.22),
    inset 0 0 34px rgba(255, 255, 255, 0.08);
  transform: translate(-50%, -50%) scale(0.16);
}

.intro-ripple-two {
  width: min(31vw, 360px);
  border-color: rgba(218, 244, 255, 0.36);
}

.intro-mist {
  inset: -20%;
  z-index: 3;
  background:
    radial-gradient(ellipse at 28% 50%, rgba(235, 248, 255, 0.2), transparent 0 34%),
    radial-gradient(ellipse at 70% 48%, rgba(255, 255, 255, 0.16), transparent 0 32%),
    linear-gradient(110deg, transparent 0 28%, rgba(255, 255, 255, 0.16) 44%, transparent 64% 100%);
  opacity: 0.72;
  mix-blend-mode: screen;
}

.intro-light {
  z-index: 5;
  background:
    radial-gradient(circle at 50% 50%, rgba(225, 248, 255, 0.72), rgba(142, 208, 232, 0.26) 18%, transparent 48%),
    linear-gradient(90deg, transparent 0 42%, rgba(235, 250, 255, 0.46) 49%, rgba(235, 250, 255, 0.46) 51%, transparent 58% 100%);
}

.intro-mark {
  z-index: 6;
}

.intro-mark strong {
  background:
    linear-gradient(115deg, #b8d8e9 0%, #f7fbff 22%, #d0a968 48%, #fff4d3 66%, #7eb4cc 100%);
  background-size: 260% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: none;
}

.intro-mark strong::after {
  background: linear-gradient(90deg, transparent, rgba(214, 244, 255, 0.95), rgba(235, 201, 132, 0.8), transparent);
}

body.intro-active .intro-water-bg {
  animation: introWaterQuick 1.55s ease-out both;
}

body.intro-active .intro-current-left {
  animation: introCurrentTopQuick 1.42s cubic-bezier(0.2, 0.75, 0.18, 1) 0.16s both;
}

body.intro-active .intro-current-right {
  animation: introCurrentBottomQuick 1.42s cubic-bezier(0.2, 0.75, 0.18, 1) 0.16s both;
}

body.intro-active .intro-ripple-one {
  animation: introRippleQuick 1.25s ease-out 0.18s both;
}

body.intro-active .intro-ripple-two {
  animation: introRippleQuick 1.38s ease-out 0.28s both;
}

body.intro-active .intro-light {
  animation: introLightQuick 1.18s ease-out 0.2s both;
}

body.intro-active .intro-char {
  animation: introCharQuick 0.56s ease-out both;
  animation-delay: calc(var(--char-index, 0) * 22ms + 180ms);
}

@keyframes waterDrift {
  from {
    transform: translate3d(-3%, -1%, 0);
  }

  to {
    transform: translate3d(3%, 1%, 0);
  }
}

@keyframes introWaterQuick {
  from {
    opacity: 0.92;
    transform: scale(1.04);
  }

  to {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@keyframes introCurrentTopQuick {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-3%, -104%, 0) rotate(-1.5deg);
  }
}

@keyframes introCurrentBottomQuick {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(3%, 104%, 0) rotate(1.5deg);
  }
}

@keyframes introRippleQuick {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.12);
  }

  45% {
    opacity: 0.7;
  }

  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(5.6);
  }
}

@keyframes introLightQuick {
  from {
    opacity: 0;
    transform: scaleX(0.18);
  }

  55% {
    opacity: 0.62;
  }

  to {
    opacity: 0;
    transform: scaleX(1.06);
  }
}

@keyframes introCharQuick {
  from {
    opacity: 0;
    transform: translate3d(0, 14px, 0) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.hero-video-bg {
  filter: saturate(1.1) contrast(1.08) brightness(0.88);
}

.hero-video-bg.is-loaded {
  opacity: 0.9;
}

/* Spacious refinement: give the page a calmer, premium rhythm. */
.section {
  padding: 104px 0;
}

.container {
  padding-right: 28px;
  padding-left: 28px;
}

.hero-inner {
  gap: clamp(52px, 6vw, 86px);
  padding: 110px 0 140px;
}

.hero-content > * + * {
  margin-top: 18px;
}

.hero-points {
  gap: 14px;
  margin: 32px 0 28px;
}

.hero-points span,
.badge,
.case-label,
.browser-badge {
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta-row {
  gap: 16px;
  margin-top: 28px;
}

.hero-proof {
  margin-top: 38px;
}

.section-heading {
  margin-bottom: 44px;
}

.split-heading {
  gap: 48px;
  margin-bottom: 38px;
}

.grid,
.pricing-grid,
.comparison-cards,
.plan-detail-grid,
.works-cinematic {
  gap: 28px;
}

.card:not(.work-card),
.service-card,
.price-card,
.comparison-card {
  padding: 32px;
}

.service-card {
  min-height: 304px;
}

.price-card ul {
  gap: 11px;
}

.price-notes,
.monitor-layout,
.works-story,
.final-cta-inner {
  padding: 36px;
}

.project-row {
  gap: 28px;
  padding: 38px;
}

.flow-list {
  gap: 22px;
}

.faq-list {
  display: grid;
  gap: 14px;
}

@media (max-width: 900px) {
  .section {
    padding: 74px 0;
  }

  .container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .hero-inner {
    gap: 34px;
    padding: 88px 0 104px;
  }

  .section-heading {
    margin-bottom: 30px;
  }

  .grid,
  .pricing-grid,
  .comparison-cards,
  .plan-detail-grid,
  .works-cinematic {
    gap: 22px;
  }

  .card:not(.work-card),
  .service-card,
  .price-card,
  .comparison-card,
  .price-notes,
  .monitor-layout,
  .works-story,
  .final-cta-inner,
  .project-row {
    padding: 24px;
  }
}

/* Hero readability: fewer words, stronger type, richer photo rhythm. */
.hero-inner {
  grid-template-columns: minmax(0, 0.82fr) minmax(420px, 0.78fr);
  align-items: center;
}

.hero-content {
  max-width: 660px;
}

.hero h1 {
  max-width: 760px;
  font-size: clamp(2.65rem, 5.8vw, 5.85rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  text-wrap: balance;
}

.hero h1 span:first-child {
  margin-bottom: 0.16em;
  font-size: clamp(1.35rem, 2vw, 2rem);
  letter-spacing: 0.02em;
  opacity: 0.9;
}

.hero .lead {
  max-width: 570px;
  font-size: clamp(1.08rem, 1.35vw, 1.3rem);
  line-height: 1.65;
}

.hero-subcopy {
  max-width: 540px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.98rem;
  line-height: 1.72;
}

.hero-content > * + * {
  margin-top: 14px;
}

.hero-points {
  margin: 24px 0 20px;
}

.hero-points span {
  padding: 6px 12px;
  font-size: 0.78rem;
}

.hero-proof {
  display: inline-flex;
  width: auto;
  max-width: 100%;
  margin-top: 22px;
  border-radius: 999px;
}

.hero-proof div {
  padding: 9px 16px;
}

.hero-proof strong {
  margin-top: 0;
  font-size: 0.78rem;
  letter-spacing: 0.13em;
}

.hero-gallery {
  width: min(100%, 590px);
  grid-template-columns: minmax(180px, 1.08fr) minmax(140px, 0.76fr) minmax(104px, 0.54fr);
  grid-template-rows: repeat(3, 132px);
  gap: 14px;
}

.hero-gallery img {
  border-radius: 20px;
  animation: none !important;
}

.hero-gallery img:first-child {
  grid-column: 1;
  grid-row: 1 / span 3;
}

.hero-gallery img:nth-child(2) {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.hero-gallery img:nth-child(3) {
  grid-column: 2;
  grid-row: 3;
}

.hero-gallery .hero-photo-large {
  grid-column: 3;
  grid-row: 1 / span 2;
}

.hero-gallery .hero-photo-small {
  grid-column: 3;
  grid-row: 3;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: clamp(2.35rem, 11vw, 4rem);
  }

  .hero-gallery {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px 130px;
  }

  .hero-gallery img:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .hero-gallery img:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .hero-gallery img:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  .hero-gallery .hero-photo-large {
    grid-column: 1;
    grid-row: 3;
  }

  .hero-gallery .hero-photo-small {
    grid-column: 2;
    grid-row: 3;
  }
}

@media (max-width: 560px) {
  .hero-proof {
    display: none;
  }

  .hero-gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: 156px;
    grid-template-rows: none;
  }

  .hero-gallery img,
  .hero-gallery img:first-child,
  .hero-gallery img:nth-child(2),
  .hero-gallery img:nth-child(3),
  .hero-gallery .hero-photo-large,
  .hero-gallery .hero-photo-small {
    grid-column: auto;
    grid-row: auto;
  }

  .hero-gallery img:first-child {
    height: 220px;
  }
}

/* Top page layout pass: compact copy and mobile-first visual balance. */
.hero {
  min-height: min(700px, calc(100vh - 48px));
}

.hero-inner {
  grid-template-columns: minmax(0, 0.72fr) minmax(440px, 0.86fr);
  gap: clamp(38px, 5vw, 72px);
  padding: 92px 0 116px;
}

.hero-content {
  max-width: 610px;
}

.hero .eyebrow {
  margin-bottom: 12px;
  font-size: 0.78rem;
  letter-spacing: 0.11em;
}

.hero h1 {
  max-width: 650px;
  font-size: clamp(2.5rem, 5.2vw, 5.15rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.hero h1 span:first-child {
  margin-bottom: 0.1em;
  font-size: clamp(1.1rem, 1.55vw, 1.55rem);
}

.hero .lead {
  max-width: 450px;
  margin-top: 18px;
  font-size: clamp(1rem, 1.1vw, 1.16rem);
  line-height: 1.72;
}

.hero-subcopy,
.hero-proof {
  display: none;
}

.hero-points {
  margin: 20px 0 12px;
}

.hero-points span {
  padding: 5px 11px;
  font-size: 0.72rem;
}

.hero .cta-row {
  margin-top: 22px;
}

.hero-gallery {
  width: min(100%, 620px);
  grid-template-columns: minmax(220px, 1.2fr) minmax(132px, 0.62fr);
  grid-template-rows: 168px 132px 118px;
  gap: 13px;
}

.hero-gallery img:first-child {
  grid-column: 1;
  grid-row: 1 / span 3;
}

.hero-gallery img:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.hero-gallery img:nth-child(3) {
  display: none;
}

.hero-gallery .hero-photo-large {
  grid-column: 2;
  grid-row: 2;
}

.hero-gallery .hero-photo-small {
  grid-column: 2;
  grid-row: 3;
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    background-position: center;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 70px 0 70px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero h1 {
    max-width: 620px;
    font-size: clamp(2.32rem, 9vw, 4.2rem);
    letter-spacing: -0.04em;
  }

  .hero .lead {
    max-width: 520px;
  }

  .hero-points {
    margin: 16px 0 8px;
  }

  .hero-gallery {
    width: 100%;
    grid-template-columns: minmax(0, 1fr) minmax(120px, 0.44fr);
    grid-template-rows: 150px 130px;
  }

  .hero-gallery img:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .hero-gallery img:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .hero-gallery .hero-photo-large {
    display: none;
  }

  .hero-gallery .hero-photo-small {
    grid-column: 2;
    grid-row: 2;
  }
}

@media (max-width: 560px) {
  .hero {
    background-image:
      linear-gradient(180deg, rgba(5, 12, 22, 0.94) 0%, rgba(9, 29, 52, 0.82) 58%, rgba(13, 43, 76, 0.44) 100%),
      var(--hero-image);
  }

  .hero-inner {
    gap: 22px;
    padding: 58px 0 52px;
  }

  .hero .eyebrow {
    font-size: 0.7rem;
  }

  .hero h1 {
    font-size: clamp(2.05rem, 12vw, 3.25rem);
    line-height: 1.06;
    letter-spacing: -0.035em;
  }

  .hero h1 span:first-child {
    font-size: 1rem;
  }

  .hero .lead {
    margin-top: 14px;
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .hero-points {
    gap: 8px;
  }

  .hero-points span {
    font-size: 0.68rem;
  }

  .hero .cta-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 18px;
  }

  .hero-gallery {
    position: relative;
    display: block;
    height: 240px;
    margin-top: 2px;
  }

  .hero-gallery img {
    position: absolute;
    display: none;
    box-shadow: 0 20px 46px rgba(0, 0, 0, 0.28);
  }

  .hero-gallery img:first-child {
    inset: 0;
    display: block;
    width: 84%;
    height: 100%;
  }

  .hero-gallery .hero-photo-small {
    right: 0;
    bottom: 16px;
    display: block;
    width: 44%;
    height: 116px;
    border-color: rgba(255, 255, 255, 0.55);
  }
}

/* Aftercare support: reassure clients that the site can keep improving. */
.support-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  margin: 0 auto 30px;
  border: 1px solid rgba(168, 116, 50, 0.22);
  border-radius: 22px;
  background:
    radial-gradient(circle at 8% 0%, rgba(168, 116, 50, 0.12), transparent 34%),
    rgba(255, 253, 248, 0.9);
  padding: 24px 28px;
  box-shadow: 0 20px 50px rgba(8, 31, 61, 0.08);
}

.support-intro p {
  margin: 0;
  color: #30475f;
  font-weight: 700;
}

.support-intro span,
.support-reply-note {
  display: inline-flex;
  justify-content: center;
  border-radius: 999px;
  background: #eef4f7;
  color: var(--primary-strong);
  padding: 8px 14px;
  font-size: 0.86rem;
  font-weight: 900;
  white-space: nowrap;
}

.maintenance {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 12%, rgba(29, 109, 114, 0.12), transparent 30%),
    linear-gradient(180deg, #fffdfa 0%, #eef3f6 100%);
}

.maintenance-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.maintenance-card {
  position: relative;
  padding: 34px;
  border-color: rgba(168, 116, 50, 0.2);
  background: rgba(255, 253, 248, 0.94);
}

.maintenance-featured {
  border-color: rgba(168, 116, 50, 0.52);
  background:
    linear-gradient(180deg, rgba(249, 239, 219, 0.94), rgba(255, 253, 248, 0.96) 48%),
    #fffdfa;
  box-shadow: 0 30px 72px rgba(116, 76, 27, 0.18);
  transform: translateY(-8px);
}

.maintenance-card .price {
  margin: 12px 0 18px;
}

.maintenance-card ul,
.support-scope-card ul {
  display: grid;
  gap: 9px;
}

.support-scope {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  margin-top: 26px;
}

.support-scope-card {
  border: 1px solid rgba(168, 116, 50, 0.18);
  border-radius: 22px;
  background: rgba(255, 253, 248, 0.92);
  padding: 28px;
  box-shadow: 0 18px 44px rgba(8, 31, 61, 0.07);
}

.support-scope-card h3 {
  margin-top: 0;
}

.support-scope-card.included {
  border-color: rgba(29, 109, 114, 0.28);
}

.support-scope-card.excluded {
  background: rgba(255, 250, 243, 0.92);
}

.support-reply-note {
  width: fit-content;
  margin: 26px auto 0;
}

.hero h1 {
  transform: scaleX(1.025);
  transform-origin: left center;
}

@media (max-width: 900px) {
  .support-intro,
  .maintenance-grid,
  .support-scope {
    grid-template-columns: 1fr;
  }

  .support-intro span {
    width: fit-content;
    white-space: normal;
  }

  .maintenance-featured {
    transform: none;
  }
}

@media (max-width: 560px) {
  .support-intro,
  .maintenance-card,
  .support-scope-card {
    padding: 22px;
  }

  .hero h1 {
    transform: scaleX(1.01);
  }
}

/* hero-ni-white-20260604-51 mobile card polish */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.logo-mark {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(8, 31, 61, 0.16);
}

@media (min-width: 901px) {
  .hero-content {
    max-width: 720px;
  }

  .hero h1 {
    max-width: 800px;
    transform: scaleX(1.055);
    transform-origin: left center;
    letter-spacing: -0.035em;
  }

  .hero .lead {
    max-width: 590px;
  }
}

@media (max-width: 700px) {
  .services-grid,
  .pricing-grid,
  .maintenance-grid,
  .comparison-cards,
  .plan-detail-grid,
  .monitor-items,
  .support-scope {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 84vw);
    grid-template-columns: none !important;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 2px 20px 22px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .services-grid::-webkit-scrollbar,
  .pricing-grid::-webkit-scrollbar,
  .maintenance-grid::-webkit-scrollbar,
  .comparison-cards::-webkit-scrollbar,
  .plan-detail-grid::-webkit-scrollbar,
  .monitor-items::-webkit-scrollbar,
  .support-scope::-webkit-scrollbar {
    display: none;
  }

  .services-grid > *,
  .pricing-grid > *,
  .maintenance-grid > *,
  .comparison-cards > *,
  .plan-detail-grid > *,
  .monitor-items > *,
  .support-scope > * {
    scroll-snap-align: start;
    min-width: 0;
  }

  .pricing-grid .featured,
  .maintenance-featured,
  .comparison-card.recommended,
  .featured-detail {
    transform: none;
  }

  #services .section-heading::after,
  #pricing .section-heading::after,
  #maintenance .section-heading::after,
  #comparison .section-heading::after,
  #plan-table .section-heading::after,
  .plan-guide .section-heading::after {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    margin-top: 12px;
    border: 1px solid rgba(29, 109, 114, 0.2);
    border-radius: 999px;
    background: rgba(255, 253, 248, 0.88);
    color: var(--primary-strong);
    padding: 7px 12px;
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1;
    box-shadow: 0 12px 28px rgba(8, 31, 61, 0.08);
    content: "横にスライド  →";
    animation: swipeHint 1.45s ease-in-out infinite;
  }

  #pricing .section-heading.centered::after,
  #maintenance .section-heading.centered::after,
  #comparison .section-heading.centered::after,
  #plan-table .section-heading.centered::after {
    margin-right: auto;
    margin-left: auto;
  }

  #monitor .monitor-layout > div::after {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-top: 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.78);
    color: var(--primary-strong);
    padding: 7px 12px;
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1;
    content: "横にスライド  →";
    animation: swipeHint 1.45s ease-in-out infinite;
  }

  .services-grid,
  .pricing-grid,
  .maintenance-grid,
  .comparison-cards,
  .plan-detail-grid,
  .monitor-items,
  .support-scope {
    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 46px), transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 46px), transparent 100%);
  }
}

@keyframes swipeHint {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(7px);
  }
}

/* hero-ni-white-20260604-51: editorial photo composition for the top page. */
.hero-gallery {
  position: relative;
  isolation: isolate;
  display: block;
  width: min(100%, 650px);
  height: clamp(440px, 46vw, 560px);
  margin-left: auto;
  overflow: visible;
}

.hero-gallery::before {
  position: absolute;
  inset: 8% 4% 4% 9%;
  z-index: 0;
  border: 1px solid rgba(255, 244, 211, 0.18);
  border-radius: 34px;
  background:
    radial-gradient(circle at 18% 12%, rgba(126, 231, 255, 0.16), transparent 34%),
    linear-gradient(145deg, rgba(255, 253, 248, 0.16), rgba(6, 21, 36, 0.34));
  box-shadow:
    0 36px 110px rgba(0, 8, 18, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  content: "";
  transform: rotate(-1.2deg);
  backdrop-filter: blur(8px);
}

.hero-gallery::after {
  position: absolute;
  left: 38px;
  bottom: 36px;
  z-index: 8;
  border: 1px solid rgba(255, 244, 211, 0.3);
  border-radius: 999px;
  background: rgba(4, 17, 29, 0.62);
  color: #fff4d3;
  padding: 8px 14px;
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  line-height: 1;
  box-shadow: 0 16px 36px rgba(0, 8, 18, 0.28);
  content: "WEBSITE / FAQ / CARE";
  backdrop-filter: blur(10px);
}

.hero-gallery img {
  position: absolute !important;
  display: block !important;
  width: auto;
  height: auto;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 28px;
  box-shadow: 0 28px 74px rgba(0, 8, 18, 0.34);
  filter: saturate(0.94) contrast(1.06) brightness(0.96);
  transform-origin: center;
  animation: heroPhotoFloat 7.2s ease-in-out infinite !important;
}

.hero-gallery img:first-child {
  top: 8%;
  left: 6%;
  z-index: 3;
  width: 68%;
  height: 70%;
  border-radius: 34px;
}

.hero-gallery img:nth-child(2) {
  top: 4%;
  right: 0;
  z-index: 5;
  width: 36%;
  height: 30%;
  animation-delay: -1.2s !important;
}

.hero-gallery img:nth-child(3) {
  right: 3%;
  bottom: 14%;
  z-index: 6;
  width: 34%;
  height: 27%;
  animation-delay: -2.4s !important;
}

.hero-gallery .hero-photo-large {
  left: 0;
  bottom: 1%;
  z-index: 4;
  width: 43%;
  height: 30%;
  animation-delay: -3.1s !important;
}

.hero-gallery .hero-photo-small {
  right: 30%;
  bottom: 0;
  z-index: 7;
  width: 26%;
  height: 22%;
  border-radius: 22px;
  animation-delay: -4.2s !important;
}

@media (min-width: 901px) {
  .hero-inner {
    grid-template-columns: minmax(0, 0.76fr) minmax(500px, 0.92fr);
  }
}

@media (max-width: 900px) {
  .hero-gallery {
    width: min(100%, 640px);
    height: 420px;
    margin-right: auto;
    margin-left: auto;
  }

  .hero-gallery img:first-child {
    top: 6%;
    left: 3%;
    width: 69%;
    height: 69%;
  }

  .hero-gallery img:nth-child(2) {
    top: 3%;
    right: 2%;
    width: 35%;
    height: 31%;
  }

  .hero-gallery img:nth-child(3) {
    right: 2%;
    bottom: 15%;
    width: 35%;
    height: 28%;
  }

  .hero-gallery .hero-photo-large {
    left: 5%;
    bottom: 1%;
    width: 42%;
    height: 29%;
  }

  .hero-gallery .hero-photo-small {
    right: 28%;
    bottom: 2%;
    width: 25%;
    height: 22%;
  }
}

@media (max-width: 560px) {
  .hero-gallery {
    height: 310px;
    margin-top: 8px;
  }

  .hero-gallery::before {
    inset: 9% 0 3% 0;
    border-radius: 26px;
  }

  .hero-gallery::after {
    left: 18px;
    bottom: 18px;
    padding: 7px 10px;
    font-size: 0.58rem;
    letter-spacing: 0.13em;
  }

  .hero-gallery img:first-child {
    top: 0;
    left: 0;
    width: 78%;
    height: 73%;
    border-radius: 26px;
  }

  .hero-gallery img:nth-child(2) {
    top: 18px;
    right: 0;
    width: 38%;
    height: 35%;
    border-radius: 22px;
  }

  .hero-gallery img:nth-child(3) {
    display: none !important;
  }

  .hero-gallery .hero-photo-large {
    left: 10%;
    bottom: 0;
    width: 50%;
    height: 27%;
    border-radius: 22px;
  }

  .hero-gallery .hero-photo-small {
    right: 2%;
    bottom: 8%;
    width: 34%;
    height: 25%;
    border-radius: 20px;
  }
}

@keyframes heroPhotoFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -8px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-gallery img {
    animation: none !important;
  }
}

/* hero-ni-white-20260604-51: keep business photos warm and colorful. */
.card-image,
.monitor-image,
.visual-card img {
  filter: saturate(1.12) contrast(1.04) brightness(1.02);
}

/* hero-ni-white-20260604-51: refined floating top navigation banner. */
.site-header {
  top: 10px;
  border-bottom: 0;
  background: transparent;
  box-shadow: none;
  pointer-events: none;
}

.header-inner {
  position: relative;
  pointer-events: auto;
  margin: 10px auto;
  border: 1px solid rgba(217, 199, 166, 0.42);
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(255, 253, 248, 0.92), rgba(239, 248, 248, 0.82)),
    rgba(255, 255, 255, 0.72);
  padding: 9px 12px 9px 16px;
  box-shadow:
    0 22px 56px rgba(8, 31, 61, 0.11),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
}

.header-inner::before {
  position: absolute;
  inset: 4px auto auto 50%;
  width: min(420px, 48%);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(185, 138, 80, 0.54), transparent);
  content: "";
  transform: translateX(-50%);
}

.logo {
  gap: 10px;
  color: #102c44;
  font-size: 1.02rem;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.78);
  border-radius: 13px;
  box-shadow: 0 10px 24px rgba(16, 44, 68, 0.14);
}

.global-nav {
  gap: 5px;
  border: 1px solid rgba(16, 44, 68, 0.06);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.48);
  padding: 5px;
  color: #31465a;
  font-size: 0.84rem;
  font-weight: 800;
}

.global-nav a {
  position: relative;
  border-radius: 999px;
  padding: 8px 10px;
  transition: background 0.22s ease, color 0.22s ease, transform 0.22s ease;
}

.global-nav a:hover {
  background: rgba(16, 44, 68, 0.08);
  color: #102c44;
  transform: translateY(-1px);
}

.global-nav a[href="#contact"],
.global-nav a[href="/#contact"] {
  color: #8a6232;
}

.header-cta {
  min-height: 42px;
  border-radius: 999px;
  background: linear-gradient(135deg, #102c44 0%, #1c5b6d 100%);
  padding: 10px 16px;
  font-size: 0.86rem;
  box-shadow: 0 16px 34px rgba(16, 44, 68, 0.24);
  white-space: nowrap;
}

.menu-toggle {
  border-color: rgba(16, 44, 68, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  color: #102c44;
  box-shadow: 0 10px 24px rgba(16, 44, 68, 0.08);
}

@media (max-width: 1180px) {
  .header-inner {
    gap: 10px;
    padding-left: 12px;
  }

  .global-nav {
    gap: 3px;
    font-size: 0.76rem;
  }

  .global-nav a {
    padding: 7px 8px;
  }

  .header-cta {
    padding-right: 13px;
    padding-left: 13px;
    font-size: 0.8rem;
  }
}

@media (max-width: 900px) {
  .site-header {
    top: 14px;
  }

  .header-inner {
    border-radius: 24px;
    padding: 10px 12px;
  }

  .header-inner::before {
    width: 54%;
  }

  .global-nav {
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    border-color: rgba(217, 199, 166, 0.42);
    border-radius: 22px;
    background:
      linear-gradient(145deg, rgba(255, 253, 248, 0.96), rgba(239, 248, 248, 0.94)),
      #fff;
    padding: 12px;
    box-shadow: 0 24px 52px rgba(8, 31, 61, 0.14);
  }

  .global-nav.open {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .global-nav a {
    width: 100%;
    background: rgba(255, 255, 255, 0.62);
    padding: 11px 12px;
  }
}

@media (max-width: 560px) {
  .site-header {
    top: 8px;
  }

  .logo span {
    font-size: 0.94rem;
  }

  .logo-mark {
    width: 34px;
    height: 34px;
  }

  .global-nav.open {
    grid-template-columns: 1fr;
  }
}

/* hero-ni-white-20260604-51: keep anchored headings visible below the floating nav. */
html {
  scroll-padding-top: 112px;
}

[id] {
  scroll-margin-top: 112px;
}

@media (max-width: 980px) {
  .menu-toggle {
    display: block;
  }

  .header-cta {
    display: none;
  }

  .global-nav {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    border-color: rgba(217, 199, 166, 0.42);
    border-radius: 22px;
    background:
      linear-gradient(145deg, rgba(255, 253, 248, 0.96), rgba(239, 248, 248, 0.94)),
      #fff;
    padding: 12px;
    box-shadow: 0 24px 52px rgba(8, 31, 61, 0.14);
  }

  .global-nav.open {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .global-nav a {
    width: 100%;
    background: rgba(255, 255, 255, 0.62);
    padding: 11px 12px;
  }
}

@media (max-width: 560px) {
  html {
    scroll-padding-top: 96px;
  }

  [id] {
    scroll-margin-top: 96px;
  }
}

/* hero-ni-white-20260604-51: approachable consultation path. */
.consult-note {
  max-width: 560px;
  margin: 14px 0 0;
  color: rgba(255, 253, 248, 0.82);
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.7;
}

.consult-note-center {
  margin: 16px auto 0;
  color: #315068;
  text-align: center;
}

.plan-page-hero .consult-note-center {
  margin-right: 0;
  margin-left: 0;
  color: rgba(255, 253, 248, 0.86);
  text-align: left;
}

.consult-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 26px auto 24px;
}

.consult-steps div {
  border: 1px solid rgba(217, 199, 166, 0.3);
  border-radius: 18px;
  background: rgba(255, 253, 248, 0.12);
  padding: 16px;
  text-align: left;
  box-shadow: 0 18px 36px rgba(8, 31, 61, 0.08);
}

.consult-steps span {
  display: inline-flex;
  margin-bottom: 8px;
  border-radius: 999px;
  background: rgba(255, 249, 234, 0.16);
  color: #f0dcc2;
  padding: 4px 8px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.consult-steps strong,
.consult-steps small {
  display: block;
}

.consult-steps strong {
  color: #fff8e8;
  font-size: 0.98rem;
}

.consult-steps small {
  margin-top: 4px;
  color: rgba(255, 253, 248, 0.76);
  font-weight: 700;
  line-height: 1.55;
}

.mobile-consult-bar {
  display: none;
}

@media (max-width: 700px) {
  body {
    padding-bottom: 78px;
  }

  .consult-note {
    color: rgba(255, 253, 248, 0.86);
    font-size: 0.86rem;
  }

  .consult-note-center {
    color: #315068;
  }

  .consult-steps {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }

  .mobile-consult-bar {
    position: fixed;
    right: 14px;
    bottom: 14px;
    left: 14px;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(16, 49, 75, 0.96), rgba(36, 112, 131, 0.96));
    color: #fff8e8;
    padding: 12px 15px 12px 18px;
    box-shadow: 0 18px 42px rgba(8, 31, 61, 0.28);
    backdrop-filter: blur(12px);
  }

  .mobile-consult-bar strong {
    font-size: 0.95rem;
  }

  .mobile-consult-bar span {
    color: rgba(255, 248, 232, 0.78);
    font-size: 0.7rem;
    font-weight: 800;
    line-height: 1.3;
    text-align: right;
  }
}

/* hero-ni-white-20260604-51: make "あるだけ" the memorable hook. */
.hero h1 {
  line-height: 0.98;
}

.hero h1 span {
  display: block;
}

.hero h1 .hero-emphasis {
  width: fit-content;
  margin: 0.04em 0 0.08em;
  background: linear-gradient(100deg, #fff8e8 0%, #f2d194 42%, #fff4ce 74%, #c79a56 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.12em;
  letter-spacing: -0.035em;
  line-height: 0.92;
  text-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
  white-space: nowrap;
}

.hero h1 .hero-emphasis-white {
  display: inline-block;
  color: #fff;
  font-style: normal;
  -webkit-text-fill-color: #fff;
  text-shadow: 0 16px 38px rgba(0, 0, 0, 0.34);
}

.hero h1 .hero-emphasis::after {
  display: block;
  width: 100%;
  height: 0.12em;
  margin-top: 0.08em;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 248, 232, 0.88), rgba(242, 209, 148, 0.36), transparent);
  content: "";
}

@media (min-width: 701px) {
  .hero h1 .hero-emphasis,
  .hero h1 span:nth-child(3) {
    display: inline-block;
    vertical-align: baseline;
  }

  .hero h1 .hero-emphasis {
    margin-right: 0.12em;
  }
}

@media (max-width: 700px) {
  .hero h1 {
    max-width: 100%;
    transform: none;
  }

  .hero h1 .hero-emphasis {
    font-size: clamp(2.25rem, 14vw, 3.65rem);
    letter-spacing: -0.055em;
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(1.45rem, 7.4vw, 2.3rem);
    letter-spacing: -0.06em;
  }
}

@media (max-width: 380px) {
  .hero h1 .hero-emphasis {
    font-size: clamp(1.95rem, 12.8vw, 2.85rem);
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(1.22rem, 6.7vw, 1.68rem);
  }
}

/* hero-ni-white-20260604-51: keep the PC hook as two readable lines. */
@media (min-width: 901px) {
  .hero-content {
    max-width: 760px;
  }

  .hero h1 {
    max-width: 780px;
    transform: none;
  }

  .hero h1 .hero-emphasis,
  .hero h1 span:nth-child(3) {
    display: block;
  }

  .hero h1 .hero-emphasis {
    margin-right: 0;
    font-size: clamp(4.2rem, 5.2vw, 5.55rem);
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(3.25rem, 4.05vw, 4.35rem);
    letter-spacing: -0.075em;
    white-space: nowrap;
  }
}

/* readability-pass-20260604-52: improve scanning, spacing, and text contrast across the site. */
:root {
  --readable-text: #17314a;
  --readable-muted: #4c6378;
  --readable-line: rgba(184, 204, 221, 0.74);
  --readable-radius: 24px;
  --readable-shadow: 0 18px 46px rgba(8, 31, 61, 0.09);
}

html {
  font-size: 16.5px;
}

body {
  color: var(--readable-text);
  line-height: 1.82;
  letter-spacing: 0.01em;
}

.container {
  width: min(1120px, calc(100% - 48px));
}

.section {
  padding: clamp(76px, 8vw, 110px) 0;
}

.section-heading {
  max-width: 850px;
  margin-bottom: clamp(30px, 4vw, 46px);
}

.section-heading.centered {
  max-width: 780px;
}

.section-heading h2 {
  color: #102c44;
  line-height: 1.28;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.lead,
.section-note,
.trust > .container > p,
.support-intro p,
.monitor-layout p,
.final-cta-inner > p,
.works-story p,
.project-row p {
  color: var(--readable-muted);
  line-height: 1.86;
}

.section-heading .lead,
.section-note,
.trust > .container > p,
.support-intro p,
.final-cta-inner > p {
  max-width: 780px;
}

.section-heading.centered .lead,
.final-cta-inner > p {
  margin-right: auto;
  margin-left: auto;
}

.hero {
  min-height: min(760px, calc(100vh - 38px));
}

.hero::before {
  opacity: 0.28;
}

.hero::after {
  height: 128px;
}

.hero-inner {
  align-items: center;
}

.hero-content {
  max-width: 720px;
  border: 0;
  border-radius: 0;
  background: transparent;
  padding: 0;
  box-shadow: none;
  backdrop-filter: none;
}

.hero h1 {
  line-height: 1.02;
  letter-spacing: -0.036em;
}

.hero h1 span:first-child {
  color: rgba(255, 253, 248, 0.92);
}

.hero .lead {
  max-width: 620px;
  color: rgba(255, 253, 248, 0.92);
  font-size: clamp(1.02rem, 1.18vw, 1.18rem);
  line-height: 1.76;
}

.consult-note {
  max-width: 620px;
  color: rgba(255, 253, 248, 0.88);
  font-size: 0.95rem;
  line-height: 1.78;
}

.hero-points {
  gap: 11px;
}

.hero-points span {
  border-color: rgba(255, 244, 211, 0.34);
  background: rgba(255, 253, 248, 0.13);
  letter-spacing: 0.08em;
}

.btn {
  min-height: 52px;
  border-radius: 16px;
  padding: 14px 22px;
  font-size: 0.98rem;
  line-height: 1.3;
}

.grid,
.pricing-grid,
.maintenance-grid,
.comparison-cards,
.monitor-items,
.works-cinematic {
  gap: clamp(20px, 2.4vw, 30px);
}

.card,
.concern-item,
.flow-list li,
.price-notes,
.monitor-layout,
.works-story,
.project-row,
.support-intro,
.support-scope-card,
.maintenance-card,
.comparison-card {
  border-color: var(--readable-line);
  border-radius: var(--readable-radius);
  box-shadow: var(--readable-shadow);
}

.card:not(.work-card),
.service-card,
.price-card,
.maintenance-card,
.support-scope-card,
.comparison-card,
.price-notes,
.monitor-layout,
.project-row {
  padding: clamp(24px, 2.5vw, 32px);
}

.service-card {
  min-height: auto;
}

.service-card h3,
.price-card h3,
.maintenance-card h3,
.project-row h3,
.faq-list summary {
  color: #102c44;
  line-height: 1.45;
  letter-spacing: -0.012em;
}

.service-card p,
.price-card li,
.maintenance-card li,
.support-scope-card li,
.price-notes li,
.comparison-table th,
.comparison-table td {
  color: #3f566d;
  line-height: 1.78;
}

.service-card p + p,
.maintenance-card p + ul,
.price-card .price + ul {
  margin-top: 14px;
}

.service-note {
  border: 1px solid rgba(15, 138, 138, 0.16);
  border-radius: 16px;
  background: rgba(235, 250, 250, 0.9);
  padding: 12px 14px;
  line-height: 1.72;
}

.price-card ul,
.maintenance-card ul,
.support-scope-card ul,
.price-notes ul {
  display: grid;
  gap: 10px;
}

.price-card li,
.maintenance-card li,
.support-scope-card li {
  padding-left: 0.1em;
}

.price-card.featured,
.maintenance-featured {
  box-shadow: 0 28px 70px rgba(11, 99, 206, 0.17);
}

.price {
  margin: 6px 0 12px;
  line-height: 1.1;
}

.support-intro {
  align-items: center;
  padding: clamp(22px, 2.2vw, 28px);
}

.support-intro span,
.badge,
.case-label {
  letter-spacing: 0.08em;
}

.works-cinematic {
  grid-template-columns: minmax(280px, 0.35fr) minmax(0, 0.65fr);
}

.works-story {
  top: 118px;
  min-height: auto;
  padding: clamp(28px, 3vw, 40px);
}

.project-row {
  grid-template-columns: auto minmax(0, 1fr);
  gap: 18px;
}

.compact-meta {
  gap: 10px;
}

.faq-list {
  display: grid;
  gap: 14px;
  max-width: 920px;
}

.faq-list details.card {
  padding: 0;
}

.faq-list summary {
  cursor: pointer;
  padding: 20px 24px;
  font-size: 1.04rem;
  font-weight: 900;
}

.faq-list details p {
  margin: 0;
  border-top: 1px solid rgba(216, 226, 238, 0.72);
  padding: 0 24px 22px;
  padding-top: 18px;
  color: var(--readable-muted);
  line-height: 1.86;
}

.final-cta-inner {
  border-radius: 34px;
}

@media (min-width: 901px) {
  .hero h1 .hero-emphasis {
    font-size: clamp(3.9rem, 4.85vw, 5.25rem);
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(2.85rem, 3.55vw, 4rem);
    letter-spacing: -0.06em;
  }
}

@media (max-width: 900px) {
  html {
    font-size: 16px;
  }

  .container {
    width: min(100% - 32px, 1120px);
    padding-right: 0;
    padding-left: 0;
  }

  .section {
    padding: 68px 0;
  }

  .section-heading {
    margin-bottom: 26px;
  }

  .hero-inner {
    padding: 82px 0 72px;
  }

  .hero-content {
    border-radius: 0;
    padding: 0;
  }

  .hero h1 {
    line-height: 1.06;
  }

  .hero-gallery {
    margin-top: 4px;
  }

  .works-cinematic {
    grid-template-columns: 1fr;
  }

  .works-story {
    position: relative;
    top: auto;
  }
}

@media (max-width: 700px) {
  .section {
    padding: 58px 0;
  }

  .section-heading h2 {
    font-size: clamp(1.68rem, 7.4vw, 2.22rem);
  }

  .section-heading .lead,
  .lead,
  .section-note {
    font-size: 0.98rem;
    line-height: 1.82;
  }

  .hero {
    background-position: center top;
  }

  .hero-content {
    padding: 0;
  }

  .hero h1 .hero-emphasis {
    font-size: clamp(2.2rem, 12.8vw, 3.28rem);
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(1.56rem, 7.7vw, 2.16rem);
    line-height: 1.12;
    letter-spacing: -0.045em;
  }

  .hero .lead,
  .consult-note {
    font-size: 0.94rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
    min-height: 50px;
  }

  .hero-points span {
    font-size: 0.7rem;
  }

  .services-grid,
  .pricing-grid,
  .maintenance-grid,
  .comparison-cards,
  .plan-detail-grid,
  .monitor-items,
  .support-scope {
    grid-auto-columns: minmax(300px, 86vw);
    padding-bottom: 28px;
  }

  .card:not(.work-card),
  .service-card,
  .price-card,
  .maintenance-card,
  .support-scope-card,
  .comparison-card,
  .price-notes,
  .monitor-layout,
  .project-row {
    padding: 22px;
  }

  .project-row {
    grid-template-columns: 1fr;
  }

  .faq-list summary {
    padding: 18px 20px;
    font-size: 0.98rem;
  }

  .faq-list details p {
    padding: 16px 20px 20px;
  }
}

@media (max-width: 420px) {
  .container {
    width: min(100% - 26px, 1120px);
  }

  .hero-content {
    padding: 0;
  }

  .hero h1 .hero-emphasis {
    font-size: clamp(2.02rem, 12vw, 2.74rem);
    letter-spacing: -0.045em;
  }

  .hero h1 span:nth-child(3) {
    font-size: clamp(1.38rem, 7.1vw, 1.78rem);
  }
}

/* photo-layout-polish-20260604-54: upgrade non-hero photo layouts with editorial depth. */
.trust-cards {
  align-items: stretch;
}

.support-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, 0.98), rgba(247, 251, 252, 0.98)),
    #fff;
}

.support-card::before {
  position: absolute;
  inset: 14px 14px auto auto;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.62);
  border-radius: 999px;
  background: rgba(16, 44, 68, 0.72);
  color: #fff8e8;
  padding: 6px 10px;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  line-height: 1;
  content: "POINT";
  backdrop-filter: blur(10px);
}

.support-card::after {
  position: absolute;
  inset: 24px 24px auto auto;
  z-index: -1;
  width: 120px;
  height: 120px;
  border-radius: 999px;
  background: rgba(15, 138, 138, 0.12);
  content: "";
  filter: blur(28px);
}

.support-card .card-image {
  width: 100%;
  height: clamp(210px, 17vw, 270px);
  margin: 0 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 22px;
  object-fit: cover;
  box-shadow: 0 22px 46px rgba(8, 31, 61, 0.15);
  transform: translateZ(0);
  transition: transform 0.5s ease, filter 0.5s ease;
}

.support-card:hover .card-image {
  filter: saturate(1.16) contrast(1.05) brightness(1.02);
  transform: scale(1.025);
}

.support-card h3,
.support-card p {
  position: relative;
  z-index: 1;
}

.visual-library {
  background:
    radial-gradient(circle at 18% 18%, rgba(46, 126, 138, 0.12), transparent 30%),
    radial-gradient(circle at 82% 82%, rgba(199, 154, 86, 0.15), transparent 32%),
    linear-gradient(180deg, #fffdfa 0%, #f1f6f6 100%);
}

.photo-collage {
  position: relative;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 84px;
  gap: 18px;
  border: 1px solid rgba(217, 199, 166, 0.42);
  border-radius: 34px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(235, 247, 248, 0.62)),
    rgba(255, 255, 255, 0.64);
  padding: clamp(16px, 2vw, 24px);
  box-shadow: 0 34px 90px rgba(8, 31, 61, 0.12);
  backdrop-filter: blur(10px);
}

.photo-collage::before {
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 26px;
  content: "";
  pointer-events: none;
}

.visual-card {
  border-color: rgba(255, 255, 255, 0.64);
  border-radius: 26px;
  box-shadow: 0 24px 58px rgba(8, 31, 61, 0.16);
  transform: translateZ(0);
  transition: transform 0.42s ease, box-shadow 0.42s ease;
}

.visual-card-large {
  grid-column: span 5;
  grid-row: span 5;
}

.visual-card:nth-child(2) {
  grid-column: span 3;
  grid-row: span 3;
}

.visual-card:nth-child(3) {
  grid-column: span 4;
  grid-row: span 3;
}

.visual-card:nth-child(4) {
  grid-column: span 4;
  grid-row: span 2;
}

.visual-card-wide {
  grid-column: span 7;
  grid-row: span 2;
}

.visual-card img {
  filter: saturate(1.08) contrast(1.04) brightness(0.98);
  transition: transform 0.58s ease, filter 0.58s ease;
}

.visual-card::after {
  background:
    linear-gradient(180deg, rgba(4, 17, 29, 0.02) 0%, rgba(4, 17, 29, 0.18) 42%, rgba(4, 17, 29, 0.82) 100%);
}

.visual-card figcaption {
  left: 18px;
  bottom: 18px;
  border: 1px solid rgba(255, 244, 211, 0.34);
  border-radius: 999px;
  background: rgba(4, 17, 29, 0.46);
  padding: 8px 12px;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  backdrop-filter: blur(10px);
}

.visual-card:hover {
  box-shadow: 0 32px 76px rgba(8, 31, 61, 0.22);
  transform: translateY(-5px);
}

.visual-card:hover img {
  filter: saturate(1.16) contrast(1.06) brightness(1.02);
  transform: scale(1.045);
}

.monitor-layout {
  position: relative;
  overflow: visible;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 440px);
}

.monitor-layout::before {
  position: absolute;
  right: 26px;
  bottom: -18px;
  width: min(38%, 360px);
  height: 58%;
  border-radius: 30px;
  background:
    linear-gradient(135deg, rgba(16, 44, 68, 0.12), rgba(15, 138, 138, 0.12));
  content: "";
  transform: rotate(3deg);
}

.monitor-image {
  position: relative;
  z-index: 1;
  height: clamp(320px, 28vw, 420px);
  border: 10px solid #fff;
  border-radius: 30px;
  box-shadow:
    0 30px 78px rgba(8, 31, 61, 0.16),
    0 0 0 1px rgba(217, 199, 166, 0.32);
  transform: rotate(1.2deg);
}

.works .section-heading {
  margin-bottom: 36px;
}

.work-feature {
  border-radius: 34px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 251, 0.98)),
    #fff;
}

.project-browser {
  min-height: clamp(390px, 43vw, 520px);
  overflow: hidden;
  border-radius: 0 0 32px 32px;
  background:
    radial-gradient(circle at 12% 12%, rgba(255, 244, 211, 0.3), transparent 25%),
    radial-gradient(circle at 84% 18%, rgba(126, 231, 255, 0.18), transparent 28%),
    linear-gradient(135deg, rgba(3, 17, 31, 0.96), rgba(20, 73, 95, 0.86)),
    url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=58&w=1100");
}

.project-browser::before {
  position: absolute;
  inset: 70px 34px 38px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  content: "";
  transform: rotate(-1.4deg);
}

.project-browser img {
  position: relative;
  z-index: 1;
  display: block;
  width: min(92%, 760px);
  height: clamp(260px, 28vw, 350px);
  margin: 34px auto 0;
  border: 8px solid rgba(255, 255, 255, 0.94);
  border-radius: 26px;
  object-fit: cover;
  box-shadow:
    0 34px 90px rgba(0, 8, 18, 0.42),
    0 0 0 1px rgba(255, 255, 255, 0.16);
  transform: rotate(-1deg);
}

.browser-caption {
  z-index: 2;
  right: 28px;
  bottom: 28px;
  border-radius: 22px;
  box-shadow: 0 20px 46px rgba(0, 8, 18, 0.18);
}

.browser-badge {
  z-index: 2;
}

@media (max-width: 900px) {
  .support-card .card-image {
    height: 230px;
  }

  .photo-collage {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: 92px;
    border-radius: 28px;
  }

  .visual-card-large,
  .visual-card:nth-child(2),
  .visual-card:nth-child(3),
  .visual-card:nth-child(4),
  .visual-card-wide {
    grid-column: span 3;
    grid-row: span 3;
  }

  .visual-card-large,
  .visual-card-wide {
    grid-column: span 6;
  }

  .monitor-layout {
    grid-template-columns: 1fr;
  }

  .monitor-layout::before {
    right: 12px;
    bottom: 18px;
    width: 64%;
    height: 38%;
  }

  .monitor-image {
    transform: none;
  }

  .project-browser {
    min-height: 430px;
  }
}

@media (max-width: 700px) {
  .support-card .card-image {
    height: 220px;
  }

  .photo-collage {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 14px;
    padding: 14px;
  }

  .photo-collage::before {
    display: none;
  }

  .visual-card,
  .visual-card-large,
  .visual-card:nth-child(2),
  .visual-card:nth-child(3),
  .visual-card:nth-child(4),
  .visual-card-wide {
    grid-column: auto;
    grid-row: auto;
    min-height: 250px;
  }

  .visual-card-large {
    min-height: 320px;
  }

  .monitor-image {
    height: 300px;
    border-width: 7px;
    border-radius: 24px;
  }

  .project-browser {
    min-height: 360px;
    padding: 16px;
  }

  .project-browser::before {
    inset: 58px 18px 42px;
  }

  .project-browser img {
    width: 94%;
    height: 230px;
    margin-top: 28px;
    border-width: 6px;
    border-radius: 20px;
    transform: none;
  }

  .browser-caption {
    right: 18px;
    bottom: 18px;
    width: min(86%, 300px);
  }
}

/* monitor-photos-20260604-55: show the monitor offer with real local-business context. */
.monitor-layout {
  grid-template-columns: minmax(0, 1fr) minmax(420px, 520px);
}

.monitor-photo-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: minmax(260px, 1fr) 122px;
  gap: 12px;
  margin: 0;
  border: 1px solid rgba(217, 199, 166, 0.42);
  border-radius: 32px;
  background:
    linear-gradient(145deg, rgba(255, 253, 248, 0.84), rgba(235, 247, 248, 0.66)),
    rgba(255, 255, 255, 0.7);
  padding: 14px;
  box-shadow: 0 30px 78px rgba(8, 31, 61, 0.16);
}

.monitor-photo-grid figure {
  position: relative;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 22px;
  background: #102c44;
  box-shadow: 0 18px 42px rgba(8, 31, 61, 0.12);
}

.monitor-photo-grid img,
.monitor-photo-grid .monitor-image {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0;
  object-fit: cover;
  box-shadow: none;
  transform: none;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.monitor-photo-main {
  grid-column: 1 / -1;
}

.monitor-photo-grid figure::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 17, 29, 0.02) 30%, rgba(4, 17, 29, 0.68) 100%);
  content: "";
}

.monitor-photo-grid figcaption {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 1;
  border: 1px solid rgba(255, 244, 211, 0.32);
  border-radius: 999px;
  background: rgba(4, 17, 29, 0.5);
  color: #fff8e8;
  padding: 7px 11px;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1;
  backdrop-filter: blur(10px);
}

.monitor-photo-card figcaption {
  left: 10px;
  bottom: 10px;
  padding: 6px 9px;
  font-size: 0.7rem;
}

.monitor-photo-grid figure:hover img {
  filter: saturate(1.12) contrast(1.05) brightness(1.02);
  transform: scale(1.045);
}

@media (max-width: 900px) {
  .monitor-layout {
    grid-template-columns: 1fr;
  }

  .monitor-photo-grid {
    grid-template-rows: 300px 132px;
    max-width: 680px;
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .monitor-photo-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 280px;
    grid-auto-rows: 150px;
    gap: 10px;
    border-radius: 26px;
    padding: 10px;
  }

  .monitor-photo-main {
    grid-column: auto;
  }

  .monitor-photo-grid figure {
    border-radius: 20px;
  }
}

/* privacy-policy-20260604-56: readable legal page and footer link. */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
}

.footer-links a {
  color: rgba(255, 253, 248, 0.78);
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
}

.footer-links a:hover {
  color: #fff8e8;
  text-decoration: underline;
}

.policy-page {
  background:
    radial-gradient(circle at 14% 8%, rgba(15, 138, 138, 0.12), transparent 28%),
    linear-gradient(180deg, #f7fafc 0%, #eef5f7 100%);
}

.policy-hero {
  padding-top: 160px;
  padding-bottom: 56px;
  background:
    linear-gradient(135deg, rgba(16, 44, 68, 0.96), rgba(26, 93, 111, 0.9)),
    #102c44;
  color: #fff;
}

.policy-hero-inner {
  max-width: 900px;
}

.policy-hero .eyebrow {
  color: #c8edf1;
}

.policy-hero h1 {
  max-width: none;
  color: #fff8e8;
  font-size: clamp(2.2rem, 5vw, 4.1rem);
  letter-spacing: -0.045em;
}

.policy-hero .lead {
  max-width: 720px;
  color: rgba(255, 253, 248, 0.84);
}

.policy-content {
  padding-top: 56px;
}

.policy-card {
  max-width: 960px;
  margin: 0 auto;
  border: 1px solid rgba(184, 204, 221, 0.74);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.94);
  padding: clamp(26px, 5vw, 58px);
  box-shadow: 0 28px 72px rgba(8, 31, 61, 0.1);
}

.policy-card > p,
.policy-card section > p,
.policy-card li {
  color: #40576e;
  line-height: 1.92;
}

.policy-card section {
  padding-top: 34px;
  margin-top: 34px;
  border-top: 1px solid rgba(216, 226, 238, 0.86);
}

.policy-card h2 {
  color: #102c44;
  font-size: clamp(1.24rem, 2.2vw, 1.62rem);
  letter-spacing: -0.02em;
}

.policy-card ol {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}

.policy-contact {
  border: 1px solid rgba(15, 138, 138, 0.18);
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(235, 250, 250, 0.96), rgba(255, 253, 248, 0.96));
  padding: 22px;
}

.policy-contact p {
  margin-bottom: 8px;
}

.policy-contact p:last-child {
  margin-bottom: 0;
}

.policy-contact a {
  color: #0b63ce;
  font-weight: 900;
}

@media (max-width: 700px) {
  .policy-hero {
    padding-top: 128px;
    padding-bottom: 44px;
  }

  .policy-content {
    padding-top: 40px;
  }

  .policy-card {
    border-radius: 24px;
    padding: 24px 20px;
  }

  .policy-card section {
    padding-top: 26px;
    margin-top: 26px;
  }

  .policy-card ol {
    padding-left: 1.3rem;
  }
}

/* home-policy-bottom-20260604-57: place the privacy policy at the bottom of the home page. */
.home-policy {
  background:
    radial-gradient(circle at 16% 12%, rgba(15, 138, 138, 0.1), transparent 28%),
    linear-gradient(180deg, #eef5f7 0%, #f7fafc 100%);
  padding-top: clamp(72px, 8vw, 104px);
}

.home-policy .section-heading {
  margin-bottom: 28px;
}

.home-policy-card {
  max-height: none;
  border-radius: 28px;
}

.home-policy-card section:first-of-type {
  margin-top: 30px;
}

@media (max-width: 700px) {
  .home-policy {
    padding-top: 58px;
  }

  .home-policy-card {
    border-radius: 22px;
  }
}

/* privacy-link-bottom-20260604-58: keep the home footer light and link to the policy page. */
.home-policy-link {
  background:
    radial-gradient(circle at 14% 20%, rgba(15, 138, 138, 0.1), transparent 28%),
    linear-gradient(180deg, #eef5f7 0%, #f7fafc 100%);
  padding-top: clamp(60px, 7vw, 86px);
  padding-bottom: clamp(58px, 7vw, 82px);
}

.policy-link-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
  max-width: 940px;
  margin: 0 auto;
  border: 1px solid rgba(184, 204, 221, 0.74);
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(235, 247, 248, 0.88)),
    #fff;
  padding: clamp(24px, 3vw, 34px);
  box-shadow: 0 24px 64px rgba(8, 31, 61, 0.1);
}

.policy-link-card h2 {
  margin-bottom: 8px;
  color: #102c44;
  font-size: clamp(1.45rem, 3vw, 2.08rem);
}

.policy-link-card p:not(.eyebrow) {
  margin-bottom: 0;
  color: #4c6378;
  line-height: 1.76;
}

.policy-link-card .btn {
  white-space: nowrap;
}

@media (max-width: 700px) {
  .policy-link-card {
    grid-template-columns: 1fr;
    border-radius: 22px;
    text-align: left;
  }

  .policy-link-card .btn {
    width: 100%;
  }
}

/* privacy-link-compact-20260604-59: make the home privacy link modest near the footer. */
.home-policy-link {
  padding-top: 32px;
  padding-bottom: 34px;
}

.policy-link-card {
  grid-template-columns: minmax(0, 1fr) auto;
  max-width: 720px;
  border-radius: 20px;
  padding: 18px 20px;
  box-shadow: 0 14px 34px rgba(8, 31, 61, 0.08);
}

.policy-link-card .eyebrow {
  margin-bottom: 5px;
  font-size: 0.64rem;
}

.policy-link-card h2 {
  margin-bottom: 3px;
  font-size: clamp(1.08rem, 2vw, 1.34rem);
}

.policy-link-card p:not(.eyebrow) {
  font-size: 0.88rem;
  line-height: 1.62;
}

.policy-link-card .btn {
  min-height: 40px;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 0.84rem;
}

@media (max-width: 700px) {
  .home-policy-link {
    padding-top: 26px;
    padding-bottom: 28px;
  }

  .policy-link-card {
    gap: 14px;
    padding: 17px;
  }
}

/* legal-links-footer-20260604-60: compact footer legal links and transaction law page. */
.footer-links {
  gap: 14px;
  margin-top: 10px;
}

.footer-links a {
  color: rgba(255, 253, 248, 0.72);
  font-size: 0.78rem;
  font-weight: 800;
}

.legal-hero h1 {
  max-width: 980px;
}

.legal-card {
  max-width: 1040px;
}

.legal-table-wrap {
  overflow-x: auto;
}

.legal-table {
  width: 100%;
  border-collapse: collapse;
  color: #40576e;
  font-size: 0.96rem;
  line-height: 1.78;
}

.legal-table th,
.legal-table td {
  border-bottom: 1px solid rgba(216, 226, 238, 0.9);
  padding: 18px 18px;
  text-align: left;
  vertical-align: top;
}

.legal-table tr:last-child th,
.legal-table tr:last-child td {
  border-bottom: 0;
}

.legal-table th {
  width: 230px;
  color: #102c44;
  font-weight: 900;
  white-space: nowrap;
}

.legal-table a {
  color: #0b63ce;
  font-weight: 900;
}

@media (max-width: 700px) {
  .footer-links {
    gap: 8px 12px;
  }

  .footer-links a {
    font-size: 0.74rem;
  }

  .legal-table {
    font-size: 0.9rem;
  }

  .legal-table th,
  .legal-table td {
    display: block;
    width: 100%;
    padding: 12px 0;
  }

  .legal-table th {
    border-bottom: 0;
    padding-bottom: 2px;
  }

  .legal-table td {
    padding-top: 2px;
  }
}

/* footer-links-inline-20260604-61: place legal links beside the footer copy. */
.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 18px;
  padding-bottom: 34px;
  text-align: center;
}

.footer-inner p {
  margin: 0;
}

.footer-links {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px 12px;
  margin-top: 0;
}

.footer-links::before {
  color: #9aaec1;
  content: "|";
  font-size: 0.78rem;
}

.footer-links a {
  color: #4f6a83;
  font-size: 0.76rem;
  line-height: 1.4;
  text-decoration: none;
}

.footer-links a:hover {
  color: #0b63ce;
  text-decoration: underline;
}

@media (max-width: 760px) {
  .footer-inner {
    flex-direction: column;
    gap: 7px;
    padding-bottom: 92px;
  }

  .footer-links::before {
    display: none;
  }
}

/* service-plan-photo-20260604-62: add one calm visual bridge between services and pricing. */
.service-plan-photo {
  position: relative;
  max-width: 920px;
  margin: clamp(28px, 4vw, 46px) auto 0;
  overflow: hidden;
  border: 1px solid rgba(217, 199, 166, 0.42);
  border-radius: 30px;
  background: #102c44;
  box-shadow: 0 26px 70px rgba(8, 31, 61, 0.14);
}

.service-plan-photo img {
  display: block;
  width: 100%;
  height: clamp(220px, 30vw, 360px);
  object-fit: cover;
  filter: saturate(1.04) contrast(1.04) brightness(0.96);
}

.service-plan-photo::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 17, 29, 0.02) 36%, rgba(4, 17, 29, 0.72) 100%);
  content: "";
}

.service-plan-photo figcaption {
  position: absolute;
  left: clamp(16px, 3vw, 28px);
  bottom: clamp(16px, 3vw, 24px);
  z-index: 1;
  max-width: min(620px, calc(100% - 32px));
  border: 1px solid rgba(255, 244, 211, 0.32);
  border-radius: 999px;
  background: rgba(4, 17, 29, 0.54);
  color: #fff8e8;
  padding: 10px 15px;
  font-size: 0.88rem;
  font-weight: 900;
  line-height: 1.45;
  backdrop-filter: blur(10px);
}

@media (max-width: 700px) {
  .service-plan-photo {
    border-radius: 24px;
    margin-top: 24px;
  }

  .service-plan-photo img {
    height: 240px;
  }

  .service-plan-photo figcaption {
    border-radius: 18px;
    font-size: 0.78rem;
  }
}

/* terms-link-footer-20260604-63: show terms below privacy/legal as compact footer links. */
.footer-links {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 0;
}

.footer-links::before {
  display: none;
}

.footer-link-row {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 12px;
}

.footer-terms-link {
  font-size: 0.72rem;
  opacity: 0.82;
}

.terms-card {
  max-width: 1000px;
}

.terms-hero h1 {
  max-width: 900px;
}

@media (max-width: 760px) {
  .footer-links {
    gap: 3px;
  }

  .footer-link-row {
    gap: 4px 10px;
  }

  .footer-terms-link {
    font-size: 0.7rem;
  }
}

/* final-qa-mobile-polish-20260605-64: keep the opening logo and mobile CTA readable. */
.intro-mark strong {
  white-space: nowrap;
  word-break: keep-all;
}

.intro-mark strong .intro-char {
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  white-space: pre;
}

@media (max-width: 700px) {
  .mobile-consult-bar {
    min-width: 0;
    justify-content: center;
    gap: 10px;
    padding-right: 14px;
    padding-left: 16px;
  }

  .mobile-consult-bar strong {
    flex: 0 0 auto;
  }

  .mobile-consult-bar span {
    flex: 1 1 0;
    max-width: 190px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
}

@media (max-width: 390px) {
  .mobile-consult-bar {
    gap: 8px;
  }

  .mobile-consult-bar span {
    font-size: 0.66rem;
  }
}

/* production-hero-fix-20260605-65: stabilize the deployed first view. */
.intro-gate[hidden] {
  display: none !important;
}

.site-header {
  position: fixed;
  top: 12px;
  right: 0;
  left: 0;
  z-index: 90;
}

.hero {
  min-height: min(820px, 100svh);
}

.hero-inner {
  min-height: inherit;
  grid-template-columns: minmax(440px, 0.92fr) minmax(420px, 0.78fr);
  align-items: center;
  padding-top: clamp(116px, 10vw, 150px);
  padding-bottom: clamp(80px, 8vw, 120px);
}

.hero h1 > span {
  overflow: visible;
}

.hero h1 .hero-char {
  display: inline-block !important;
  overflow: visible !important;
  vertical-align: baseline;
}

.hero h1 > span:first-child {
  display: block;
  white-space: nowrap;
}

.hero h1 .hero-emphasis,
.hero h1 span:nth-child(3) {
  max-width: 100%;
}

.hero-gallery {
  width: min(100%, 620px);
  height: clamp(390px, 36vw, 520px);
  transform: translateZ(0);
}

.hero-gallery::before {
  inset: 10% 3% 4% 7%;
}

@media (max-width: 1100px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;
  }

  .hero-content {
    max-width: 720px;
  }

  .hero-gallery {
    width: min(100%, 620px);
    height: 390px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (max-width: 700px) {
  .site-header {
    top: 8px;
  }

  .hero {
    min-height: auto;
  }

  .hero-inner {
    min-height: auto;
    padding-top: 110px;
    padding-bottom: 64px;
  }

  .hero h1 > span:first-child,
  .hero h1 .hero-emphasis {
    white-space: normal;
  }

  .hero-gallery {
    height: 300px;
  }
}
