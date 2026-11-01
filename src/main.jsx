import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data';
import Scenery from './Scenery';
import './styles.css';

const Arrow = ({down=false}) => <span aria-hidden="true">{down?'↓':'↗'}</span>;
function App() {
  const [active,setActive]=useState('home');
  const [progress,setProgress]=useState(0);
  const [motion,setMotion]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const root=useRef(null);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setMotion(!media.matches); media.addEventListener('change',update);
    return ()=>media.removeEventListener('change',update);
  },[]);
  useEffect(()=>{document.documentElement.dataset.motion=motion?'on':'off';},[motion]);
  useEffect(()=>{
    const sections=[...document.querySelectorAll('[data-stop]')];
    let frame=0;
    const update=()=>{
      const total=document.documentElement.scrollHeight-window.innerHeight;
      setProgress(Math.round(Math.min(100,Math.max(0,window.scrollY/Math.max(1,total)*100))));
      let current='home',nearest=Infinity;
      sections.forEach(section=>{
        const r=section.getBoundingClientRect();
        const distance=Math.abs(r.top+r.height/2-window.innerHeight/2);
        if(distance<nearest){nearest=distance;current=section.id;}
        const p=Math.max(0,Math.min(1,(window.innerHeight-r.top)/(window.innerHeight+r.height)));
        section.style.setProperty('--travel',`${(p-.5)*85}px`);
      });
      if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-8)current='contact';
      setActive(current);frame=0;
    };
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('arrived');
        const report=entry.target.querySelector('details');
        if(report&&!report.dataset.revealed){report.open=true;report.dataset.revealed='true';}
      }
    }),{threshold:.25});
    sections.forEach(s=>observer.observe(s));update();
    window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
    return ()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);};
  },[]);
  const activeChapter=profile.chapters.find(c=>c.id===active);
  return <div ref={root}>
    <a className="skip-link" href="#journey">Skip to career journey</a>
    <header className="site-header"><a href="#home" className="brand" aria-label="Meghdoot Panda, home"><span className="brand-mark">m<span>.</span></span><span>MEGHDOOT<br/><b>PANDA</b></span></a><nav aria-label="Main navigation"><a href="#journey" className={activeChapter?'selected':''}>The journey</a><a href="#skills" className={active==='skills'?'selected':''}>Toolkit</a><a href="#contact" className="nav-contact">Say hello <Arrow/></a></nav><button className="motion-toggle" onClick={()=>setMotion(v=>!v)} aria-pressed={motion} aria-label={motion?'Turn animations off':'Turn animations on'}><span aria-hidden="true">{motion?'◉':'○'}</span><span>Motion {motion?'on':'off'}</span></button></header>
    <div className="reading-progress" role="progressbar" aria-label="Journey reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{width:`${progress}%`}}/></div>
    <main>
      <section id="home" className="hero" data-stop>
        <div className="hero-copy"><p className="eyebrow"><span className="tiny-star">✳</span> A PERSONAL JOURNEY · 2017 — NOW</p><h1>Hi, I’m<br/><span className="name">Meghdoot<svg viewBox="0 0 410 20" aria-hidden="true"><path d="M3 12Q180-3 405 9M75 18Q251 4 382 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/></svg></span><span className="heading-dot">.</span></h1><p className="hero-subtitle">Curiosity led the way.<br/> Now I build with <em>data & AI.</em></p><p className="intro">{profile.intro}</p><div className="hero-actions"><a href="#journey" className="button primary">Follow my journey <Arrow down/></a><a className="text-link" href={profile.resume} download>Get my resume <span aria-hidden="true">↧</span></a></div><div className="current-role"><span className="status-dot"/><p>Currently at <strong>ZS Associates</strong><span>Associate Consultant · Pune</span></p></div></div>
        <div className="hero-art"><div className="art-sticker sticker-top"><span aria-hidden="true">✧</span> A little curiosity.<br/><b>A world of possibilities.</b></div><Scenery kind="hero" active={motion&&active==='home'}/><span className="art-label">Every milestone has a story.</span><p className="illustration-note">An original cartoon guide, inspired by the journey.</p><span className="doodle-spark" aria-hidden="true">✳</span></div>
        <div className="hero-footer"><span className="scroll-hint"><span aria-hidden="true">↓</span> SCROLL TO EXPLORE</span><span>School days to real-world impact</span><span className="edition">VOL. 01 / THE JOURNEY SO FAR</span></div>
      </section>
      <section id="journey" className="journey-intro"><div><p className="eyebrow">THE ROAD SO FAR</p><h2>Small steps.<br/><em>Meaningful milestones.</em></h2></div><p>School, campus, a first internship, and the work that followed. Take the scenic route—or jump to a stop.</p><ol className="route-map">{profile.chapters.map((c,i)=><li key={c.id}><a href={`#${c.id}`}><span className="map-dot">{String(i+1).padStart(2,'0')}</span><span>{['Class X','Class XII','College','Internship','ZS · Associate','ZS · Consultant'][i]}<small>{i===3?'2022':i===4?'2023':i===5?'2026':c.year}</small></span></a></li>)}</ol></section>
      <div className="chapters">{profile.chapters.map((c,i)=><section key={c.id} id={c.id} className={`chapter ${c.color} ${i%2?'reverse':''}`} data-stop aria-labelledby={`${c.id}-title`}>
        <div className="chapter-heading"><span className="chapter-number">{String(i+1).padStart(2,'0')}</span><span className="eyebrow">{c.label}</span><span className="date-tag">{c.year}</span></div>
        <div className="chapter-grid"><div className="chapter-art"><Scenery kind={c.kind} active={motion&&active===c.id}/><div className="place-stamp"><span aria-hidden="true">⌖</span> {c.location||'THE LEARNING YEARS'}</div><span className="scene-caption">{['School','College'].includes(c.kind[0].toUpperCase()+c.kind.slice(1))?'An abstract campus illustration':'An illustrated stop along the way'}</span>{c.metric&&<div className="metric-sticker"><strong>{c.metric}</strong><span>{c.metricLabel}</span></div>}</div>
        <div className="chapter-copy"><h2 id={`${c.id}-title`}>{c.title}</h2><h3>{c.organization}</h3><p className="role">{c.role}</p><p className="chapter-description">{c.copy}</p>{c.result&&<details className="report-card"><summary><span><span aria-hidden="true">▤</span> The report card</span><span className="report-action" aria-hidden="true">+</span></summary><div className="report-result"><span><small>{c.role==='Class XII'?'CLASS XII RESULT':c.role==='Class X'?'CLASS X RESULT':'COLLEGE RESULT'}</small><strong>{c.result}<span>{c.resultLabel}</span></strong></span><span className="result-seal" aria-hidden="true">✦</span></div></details>}{c.bullets&&<ul className="contributions">{c.bullets.map(b=><li key={b}>{b}</li>)}</ul>}<div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div>{c.note&&<p className="fact-note">{c.note}</p>}</div></div>
        <a className="next-stop" href={`#${profile.chapters[i+1]?.id||'skills'}`}>Next: {profile.chapters[i+1]?.organization||'The toolkit'} <Arrow down/></a>
      </section>)}</div>
      <section id="skills" className="skills-section" data-stop><div className="section-top"><div><p className="eyebrow">PACKED FOR THE JOURNEY</p><h2>My everyday <em>toolkit.</em></h2></div><p>The languages, platforms, and tools behind the work.</p></div><div className="skills-grid">{profile.skills.map(s=><article className="skill-group" key={s.label}><span className="skill-icon" aria-hidden="true">{s.icon}</span><h3>{s.label}</h3><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div><div className="certifications"><span className="eyebrow">ALONG THE WAY<br/><b>Two certifications.</b></span>{profile.certifications.map(c=><a key={c.name} href={c.url} target="_blank" rel="noreferrer"><span className="cert-badge" aria-hidden="true">◇</span><span>{c.name}<small>View credential</small></span><Arrow/></a>)}</div></section>
      <section id="contact" className="contact-section" data-stop><div className="contact-doodle" aria-hidden="true">✳</div><p className="eyebrow">THE ROAD KEEPS GOING</p><h2>The next chapter?<br/><em>Let’s connect.</em></h2><p>Thanks for taking the scenic route.<br/>For a conversation about data, technology, or AI, say hello.</p><a className="button primary" href={`mailto:${profile.email}`}>Send me an email <Arrow/></a><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow/></a><a href={`tel:${profile.phone}`}>{profile.phone}</a><a href={profile.resume} download>Download resume <span aria-hidden="true">↧</span></a></div><a href="#home" className="back-top">Back to the beginning ↑</a></section>
    </main>
    <footer className="site-footer"><span>MEGHDOOT PANDA <span className="footer-star">✳</span> BUILT WITH CURIOSITY</span><details className="source-note"><summary>About the story & illustrations</summary><p>Personal facts are sourced from megh_resume.pdf. Buildings and the male cartoon guide are original, abstract SVG illustrations, not photographs or depictions of actual campuses. College campus and start date are not specified. Education is shown together; the February 2022 internship predates the 2023 graduation. See README.md for research notes.</p></details><span>One road. Always learning.</span></footer>
    <nav className="chapter-rail" aria-label="Jump to a journey chapter">{profile.chapters.map((c,i)=><a key={c.id} href={`#${c.id}`} aria-label={`${i+1}. ${c.organization}, ${c.year}`} aria-current={active===c.id?'step':undefined}><span/><span className="rail-label">{c.role}</span></a>)}</nav>
    <div className="mobile-progress"><span>{activeChapter?`${String(profile.chapters.indexOf(activeChapter)+1).padStart(2,'0')} / 06 · ${activeChapter.organization}`:active==='contact'?'The next chapter':active==='skills'?'The toolkit':'The journey begins'}</span><span>{progress}%</span></div>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);

