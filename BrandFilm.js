'use client';
import {useEffect, useRef, useState} from 'react';

export default function BrandFilm() {
 const video = useRef(null);
 const [enhanced, setEnhanced] = useState(false);
 const [started, setStarted] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 useEffect(() => {setEnhanced(true);}, []);
 const play = async () => {
  setError('');setLoading(true);
  try {await video.current.play();setStarted(true);}
  catch {setError('動画を再生できませんでした。もう一度お試しください。');}
  finally {setLoading(false);}
 };
 return <section className="brand-film" id="brand-film" aria-labelledby="brand-film-title">
  <div className="wrap">
   <div className="brand-film-heading" data-reveal>
    <div><p className="eyebrow">AIPLUN STUDIO / BRAND FILM</p><h2 id="brand-film-title">仕事に、余白を。</h2></div>
    <p>繰り返す仕事を、仕組みに変える。<br/>人にしかできない仕事へ。</p>
   </div>
   <div className="brand-film-player" data-reveal>
    <video ref={video} controls={started || !enhanced} playsInline preload="none" poster="/media/aiplun-brand-film-poster.webp" aria-label="Aiplun Studio ブランドムービー、30秒" onPlay={() => {setStarted(true);setError('');}} onError={() => {setLoading(false);setError('動画を読み込めませんでした。時間をおいて再生してください。');}}>
     <source src="/media/aiplun-brand-film-30s.mp4" type="video/mp4"/>
     お使いのブラウザでは動画を再生できません。<a href="/media/aiplun-brand-film-30s.mp4">動画を開く</a>
    </video>
    {enhanced && !started && <button className="brand-film-play" type="button" onClick={play} disabled={loading} aria-label="ブランドムービーを音声付きで再生">
     <span className="brand-film-play-icon" aria-hidden="true">▶</span><span>{loading ? '読み込み中…' : 'ブランドムービーを見る'}<small>30秒 / 音声あり</small></span>
    </button>}
   </div>
   {error && <p className="brand-film-error" role="status">{error} <a href="/media/aiplun-brand-film-30s.mp4">動画を直接開く</a></p>}
   <div className="brand-film-foot"><p>AI・システム・Web・アプリ開発</p><a href="#contact">業務の効率化について相談する</a></div>
  </div>
 </section>;
}
