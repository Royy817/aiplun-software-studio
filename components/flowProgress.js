// 「成果までの流れ」(ol#process-track)の進捗ライン。
// PC はスクロール、スマホ(800px 以下)は横スワイプに合わせて線が伸び、通過した工程が点灯する。
// prefers-reduced-motion / html.studio-motion-paused / html.motion-still では線を全部引いた静止表示。
// 線と点は aria-hidden の飾りで、JS が動かないときは何も追加されない。

const STATIC_CLASSES = ['studio-motion-paused', 'motion-still'];

const clamp01 = value => (value < 0 ? 0 : value > 1 ? 1 : value);

export function initFlowProgress(track) {
 if (!track || track.dataset.flowProgressReady || typeof window === 'undefined') return null;
 const steps = [...track.children];
 if (steps.length < 2 || !('IntersectionObserver' in window) || !('ResizeObserver' in window)) return null;
 track.dataset.flowProgressReady = 'true';

 const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
 const mobile = window.matchMedia('(max-width: 800px)');
 const isStatic = () => reduceMotion.matches || STATIC_CLASSES.some(name => document.documentElement.classList.contains(name));

 const bar = document.createElement('div');
 bar.className = 'flow-progress';
 bar.setAttribute('aria-hidden', 'true');
 bar.innerHTML = '<span class="flow-progress-rail"><span class="flow-progress-fill"></span></span>' + steps.map(() => '<span class="flow-progress-node"></span>').join('');
 track.parentNode.insertBefore(bar, track);
 const nodes = [...bar.querySelectorAll('.flow-progress-node')];
 const last = steps.length - 1;
 let inView = false, frame = 0, lastReached = -2;

 // 点の位置: PC はカードの中央、スマホは横幅いっぱいに等間隔
 const layout = () => {
  const width = bar.clientWidth;
  const base = bar.getBoundingClientRect().left;
  const xs = steps.map((step, index) => {
   if (mobile.matches) return 6 + ((width - 12) * index) / last;
   const rect = step.getBoundingClientRect();
   return rect.left - base + rect.width / 2;
  });
  nodes.forEach((node, index) => node.style.setProperty('--flow-node-x', `${xs[index]}px`));
  bar.style.setProperty('--flow-x0', `${xs[0]}px`);
  bar.style.setProperty('--flow-span', `${xs[last] - xs[0]}px`);
 };

 const progress = () => {
  if (mobile.matches) {
   const max = track.scrollWidth - track.clientWidth;
   return max > 0 ? clamp01(track.scrollLeft / max) : 1;
  }
  const height = window.innerHeight || document.documentElement.clientHeight;
  return clamp01((height * 0.85 - track.getBoundingClientRect().top) / (height * 0.5));
 };

 const setReached = count => {
  if (count === lastReached) return;
  lastReached = count;
  steps.forEach((step, index) => {
   step.classList.toggle('is-reached', index < count);
   nodes[index].classList.toggle('is-reached', index < count);
  });
 };

 const render = () => {
  frame = 0;
  if (isStatic()) return;
  const value = progress();
  bar.style.setProperty('--flow-p', value.toFixed(4));
  // スマホは見ている工程まで、PC は線の先端が越えた点まで点灯
  setReached(mobile.matches ? Math.round(value * last) + 1 : Math.floor(value * last + 0.02) + (value > 0.001 ? 1 : 0));
 };
 const request = () => {if (!frame) frame = requestAnimationFrame(render);};

 const applyMode = () => {
  const still = isStatic();
  bar.classList.toggle('is-static', still);
  track.classList.toggle('flow-progress-active', !still);
  if (still) {
   lastReached = -2;
   bar.style.removeProperty('--flow-p');
   steps.forEach((step, index) => {step.classList.remove('is-reached');nodes[index].classList.remove('is-reached');});
  } else render();
 };

 const onScroll = () => {if (inView) request();};
 const onMediaChange = () => {layout();applyMode();};
 const visibility = new IntersectionObserver(entries => {inView = entries[0].isIntersecting;if (inView) request();}, {rootMargin:'10% 0px 10% 0px'});
 const resize = new ResizeObserver(() => {layout();request();});
 // 既存の「サイトの動きを止める」は html の class を付け外しするので、それを見張る
 const mode = new MutationObserver(applyMode);

 visibility.observe(track);
 resize.observe(bar);resize.observe(track);
 mode.observe(document.documentElement, {attributes:true, attributeFilter:['class']});
 window.addEventListener('scroll', onScroll, {passive:true});
 track.addEventListener('scroll', onScroll, {passive:true});
 reduceMotion.addEventListener('change', onMediaChange);
 mobile.addEventListener('change', onMediaChange);
 layout();applyMode();

 return () => {
  visibility.disconnect();resize.disconnect();mode.disconnect();cancelAnimationFrame(frame);
  window.removeEventListener('scroll', onScroll);
  track.removeEventListener('scroll', onScroll);
  reduceMotion.removeEventListener('change', onMediaChange);
  mobile.removeEventListener('change', onMediaChange);
  track.classList.remove('flow-progress-active');
  steps.forEach(step => step.classList.remove('is-reached'));
  bar.remove();
  delete track.dataset.flowProgressReady;
 };
}
