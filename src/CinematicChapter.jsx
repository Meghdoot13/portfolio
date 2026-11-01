import React, { useEffect, useId, useRef } from 'react';
import { Character } from './Scenery';

const clamp = n => Math.max(0, Math.min(1, n));
const range = (p, a, b) => clamp((p-a)/(b-a));
const ease = t => t*t*(3-2*t);

function Teacher() {
  return <g transform="translate(443 664) scale(1.48)">
    <ellipse cy="4" rx="33" ry="8" fill="#252b3420"/>
    <path d="M-13-58-15-5M13-58 15-5" stroke="#454750" strokeWidth="17" strokeLinecap="round"/>
    <path d="M-17-5h-15m47 0h16" stroke="#31343b" strokeWidth="13" strokeLinecap="round"/>
    <path d="M-27-115Q0-130 27-115L30-57H-30Z" fill="#497f74"/>
    <path d="m-10-118 10 39 10-39" fill="#fff5dc"/><path d="m-2-115-3 24 5 9 5-9-3-24" fill="#dca269"/>
    <path d="M-24-108-34-71-20-59M24-108 40-86 54-97" stroke="#497f74" strokeWidth="14" strokeLinecap="round" fill="none"/>
    <path d="m-20-59 7 4m67-42 9-7" stroke="#d49d7c" strokeWidth="10" strokeLinecap="round"/>
    <rect x="-8" y="-136" width="16" height="19" rx="7" fill="#d49d7c"/>
    <rect x="-23" y="-181" width="46" height="57" rx="22" fill="#e7b490"/>
    <path d="M-23-148q-11-37 10-39 14-10 29 2 18 2 7 38l-5-25q-18 7-36 0Z" fill="#a5a89d"/>
    <g stroke="#42484a" strokeWidth="2.5"><rect x="-19" y="-159" width="16" height="12" rx="4"/><rect x="3" y="-159" width="16" height="12" rx="4"/><path d="M-3-155h6"/></g>
    <path d="M-5-138q5 4 11-1" stroke="#9d6350" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </g>;
}

function Room({chapter, studentRef, windowFrameRef}) {
  const learning=!!chapter.result;
  return <g>
    <rect width="1200" height="800" fill={learning?'#f5e6c9':'#dfe6ed'}/>
    <path d="M0 0h1200v45H0z" fill="#fffae8"/>
    <path d="M0 589h1200v211H0z" fill={learning?'#cba47e':'#aab7bd'}/>
    <path d="M0 589h1200" stroke={learning?'#a7876a':'#879da6'} strokeWidth="8"/>
    {[100,300,500,700].map(y=><path key={y} d={`M0 ${y+590}h1200`} stroke="#ffffff20" strokeWidth="2"/>)}
    <path d="M300 590 210 800m690-210 90 210M600 590v210" stroke="#5e4c4420" strokeWidth="2"/>
    <rect x="52" y="145" width="167" height="260" rx="7" fill="#c9deda" stroke="#c19f7c" strokeWidth="13"/>
    <path d="M135 150v250M58 275h154" stroke="#fff1d7" strokeWidth="9"/>
    <path d="M60 340q75-70 150-20v74H60Z" fill="#9cbd9c"/><path d="M60 367q80-47 150-7v34H60Z" fill="#7f9f87"/>
    <path d="m60 146 80 0-58 190H60Z" fill="#fffce7" opacity=".45"/>
    <path d="M79 145 52 439H16V145M192 145l27 294h36V145" fill="#dcaa83"/>
    {learning?<>
      <rect x="283" y="156" width="652" height="272" rx="9" fill="#a8855c"/>
      <rect x="298" y="171" width="622" height="242" rx="3" fill="#3b665c"/>
      <text x="610" y="218" textAnchor="middle" fill="#e8efdd" fontSize="14" letterSpacing="5">THE LEARNING YEARS</text>
      <text x="610" y="285" textAnchor="middle" fill="#fff8df" fontSize="38" fontFamily="Georgia,serif" fontStyle="italic">{chapter.role==='Class X'?'Class X':chapter.role==='Class XII'?'Class XII':'Computer Science'}</text>
      <path d="M478 307q130-12 259 0" stroke="#c6d5b6" strokeWidth="2"/>
      <text x="610" y="361" textAnchor="middle" fill="#d5e3d5" fontSize="18">{chapter.year}</text>
      <path d="M313 421h592" stroke="#ddbe8c" strokeWidth="10"/>
      <rect x="801" y="404" width="42" height="8" rx="3" fill="#e6deba"/>
      <g className="room-teacher"><Teacher/></g>
    </>:<>
      <rect x="300" y="180" width="620" height="350" rx="18" fill="#4b4d68"/>
      <rect x="315" y="195" width="590" height="314" rx="9" fill="#f5f5ec"/>
      <path d="M315 238h590" stroke="#dddde4" strokeWidth="2"/>
      <g fill="#a6a0bb"><circle cx="337" cy="217" r="4"/><circle cx="353" cy="217" r="4"/><circle cx="369" cy="217" r="4"/></g>
      <text x="345" y="280" fill="#77718c" fontSize="12" letterSpacing="4">{chapter.kind==='lab'?'DATA → INSIGHT':chapter.kind==='ai'?'KNOWLEDGE → ACTION':'PIPELINES → PRODUCTS'}</text>
      {chapter.kind==='lab'?<><path d="M360 452h480" stroke="#b5bac4" strokeWidth="2"/>{[65,95,80,125,155,179].map((h,i)=><rect key={i} x={375+i*73} y={450-h} width="42" height={h} rx="5" fill={i%2?'#b5a1d8':'#82b8b0'}/>)}<path d="m395 367 73-37 73 13 73-45 73-28 73-24" stroke="#7064ad" strokeWidth="4" strokeLinecap="round"/></>:<>{['SOURCE',chapter.kind==='ai'?'RETRIEVE':'TRANSFORM',chapter.kind==='ai'?'GENERATE':'DELIVER'].map((t,i)=><g key={t}><rect x={345+i*180} y="336" width="153" height="95" rx="12" fill={i%2?'#e4dbf3':'#dcebe3'}/><text x={421+i*180} y="391" textAnchor="middle" fontSize="12" fill="#625a7c" letterSpacing="2">{t}</text>{i<2&&<path d={`m${502+i*180} 382h20m-5-5 5 5-5 5`} stroke="#8f81ac" strokeWidth="2"/>}</g>)}</>}
      <path d="M574 531v53h-63m115-53v53h63" stroke="#555970" strokeWidth="16"/>
      <rect x="250" y="591" width="730" height="25" rx="8" fill="#c3a287"/><path d="M300 616v116m630-116v116" stroke="#7a6c66" strokeWidth="15"/>
    </>}
    <circle cx="1047" cy="194" r="40" fill="#f9f4df" stroke="#b6aa93" strokeWidth="5"/><path d="M1047 164v30l17 11" stroke="#8b8276" strokeWidth="4" strokeLinecap="round"/>
    <g transform="translate(1030 588)"><path d="M-33 0h66l-9 66h-48Z" fill="#b8856c"/><path d="M0 0v-98M-2-35q-52-6-39-48 43 9 39 48M3-58q50-9 39-50-43 9-39 50" fill="#64957c" stroke="#61816b" strokeWidth="5"/></g>
    <g ref={studentRef}><Character x={learning?690:700} y={learning?674:744} scale={learning?1.57:1.4}/></g>
    {learning&&<><path d="M535 653h290v20H535Z" fill="#bb8e67"/><path d="M558 672v76m244-76v76" stroke="#87654e" strokeWidth="10"/><g transform="translate(665 550) rotate(-9)"><rect x="-29" y="-40" width="58" height="74" rx="3" fill="#7866aa"/><text x="0" y="-5" textAnchor="middle" fill="#fff4d7" fontSize="7" letterSpacing="1">REPORT</text><path d="M-16 7h32m-32 6h25" stroke="#d9c3ee" strokeWidth="2"/></g></>}
    <g ref={windowFrameRef}>
      <path d="M0 0h1200v800H0Z" fill="none" stroke="#fff6df" strokeWidth="38"/>
      <path d="M600 0v800M0 400h1200" stroke="#fff2d3" strokeWidth="19"/>
      <path d="m0 0 600 0L0 800Z" fill="#fff7dc" opacity=".1"/>
    </g>
  </g>;
}

function FilmWorld({chapter,refs,id}) {
  const learning=!!chapter.result;
  return <svg className="film-world" fill="none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-sky`} x2="0" y2="1"><stop stopColor={learning?'#c4e1e2':'#c8d4e7'}/><stop offset="1" stopColor="#f5eacb"/></linearGradient>
      <linearGradient id={`${id}-wall`} x2="1" y2="1"><stop stopColor={learning?'#f8d8ab':'#c4bfdf'}/><stop offset="1" stopColor={learning?'#e2b58c':'#a29abc'}/></linearGradient>
      <clipPath id={`${id}-window`}><rect x="510" y="306" width="180" height="120" rx="2"/></clipPath>
    </defs>
    <g ref={refs.camera} className="film-camera">
      <rect x="-2000" y="-2000" width="5200" height="4800" fill={`url(#${id}-sky)`}/>
      <circle cx="914" cy="180" r="60" fill="#f9d58a"/><circle cx="914" cy="180" r="76" fill="#f9d58a" opacity=".2"/>
      <g ref={refs.clouds} fill="#fff9eb" opacity=".9"><path d="M178 178q-21-31 13-40 9-43 42-23 35-8 39 25 33 7 19 38Z"/><path d="M762 117q-12-21 9-26 6-26 29-16 25-5 28 18 25 8 15 24Z"/><path d="M1000 324q-12-21 9-26 6-26 29-16 25-5 28 18 25 8 15 24Z"/></g>
      <g ref={refs.hills}><path d="M-800 540Q-100 320 280 470 650 270 1020 460 1350 280 2000 500V1000H-800Z" fill="#abc6b1"/><path d="M-800 585Q-60 440 300 526 770 410 1200 550L2000 900H-800Z" fill="#92b59c"/></g>
      <path d="M-2000 552H3000V1800H-2000Z" fill="#8fb597"/>
      <path d="M-1000 930C230 630 960 855 600 550" stroke="#769a80" strokeWidth="131"/>
      <path d="M-1000 930C230 630 960 855 600 550" stroke="#e8dbc1" strokeWidth="118"/>
      <path d="M-1000 930C230 630 960 855 600 550" stroke="#fff7e3" strokeWidth="4" strokeDasharray="18 19"/>
      <ellipse cx="600" cy="556" rx="388" ry="22" fill="#4a725d" opacity=".19"/>
      <g>
        <path d="M251 322h698v222H251Z" fill={`url(#${id}-wall)`}/>
        <path d="M239 309h722v20H239Z" fill={learning?'#b77860':'#7f789d'}/>
        <path d="M445 256h310v288H445Z" fill={learning?'#f5d8aa':'#cfc7e3'}/>
        {learning?<><path d="m428 260 172-81 172 81Z" fill="#b6765d"/><path d="m447 256 153-66 153 66Z" fill="#d29976"/><circle cx="600" cy="231" r="21" fill="#fff0c9" stroke="#a17b5b" strokeWidth="3"/><path d="M600 217v14l10 6" stroke="#89745d" strokeWidth="2.5"/><path d="M600 178v-55" stroke="#797567" strokeWidth="4"/><path d="m603 124 47 9-47 15Z" fill="#8c73bd"/></>:<><rect x="445" y="214" width="310" height="47" fill="#9b94b5"/><path d="M434 210h332v13H434Z" fill="#756e91"/><text x="600" y="248" textAnchor="middle" fill="#fff1d5" fontSize="23" fontWeight="700" letterSpacing="7">{chapter.kind==='lab'?'ISI':'ZS'}</text></>}
        {[282,369,759,846].map(x=><g key={x}><rect x={x} y="359" width="53" height="68" rx="2" fill="#729b9f" stroke="#fbe6bc" strokeWidth="7"/><path d={`M${x+26} 361v63M${x} 392h53`} stroke="#f8e5c3" strokeWidth="4"/><rect x={x} y="462" width="53" height="58" rx="2" fill="#719295" stroke="#fbe6bc" strokeWidth="7"/></g>)}
        <rect x="503" y="299" width="194" height="134" rx="3" fill="#fcf1d2"/>
        <g clipPath={`url(#${id}-window)`}><svg x="510" y="306" width="180" height="120" viewBox="0 0 1200 800"><Room chapter={chapter} studentRef={refs.insideStudent} windowFrameRef={refs.windowFrame}/></svg></g>
        <path ref={refs.lintel} d="M498 434h204" stroke="#b28b69" strokeWidth="9"/>
        {learning?<path d="M559 477q41-35 82 0v67h-82Z" fill="#71695c"/>:<rect x="559" y="459" width="82" height="85" fill="#64778b"/>}<path d="M600 458v85" stroke="#a08e77" strokeWidth="2"/><circle cx="590" cy="508" r="3" fill="#e4c68a"/>
        <rect x="522" y="272" width="156" height="20" rx="2" fill="#fff3d6"/><text x="600" y="286" textAnchor="middle" fill="#75654e" fontSize="9" letterSpacing="3" fontWeight="700">{learning?'LEARNING CAMPUS':chapter.kind==='lab'?'DATA LAB':'ZS ASSOCIATES'}</text>
        <path d="M543 548h114m-121 8h128m-137 8h146" stroke="#ead6b2" strokeWidth="7"/>
      </g>
      <g ref={refs.walker}><Character x={0} y={0}/></g>
      <g ref={refs.foreground}>
        {[{x:200,y:574,s:1},{x:1030,y:582,s:1.16},{x:140,y:680,s:1.4}].map(t=><g key={t.x} transform={`translate(${t.x} ${t.y}) scale(${t.s})`}><ellipse cy="2" rx="57" ry="13" fill="#41695330"/><path d="M0 0v-136" stroke="#7c6b53" strokeWidth="12" strokeLinecap="round"/><path d="m0-61-26-33m26 11 22-31" stroke="#7c6b53" strokeWidth="6"/><path d="M-50-101q-32-41 5-65-2-49 45-42 47-13 49 39 40 31 4 65-12 32-53 13-37 23-50-10" fill={t.x===1030?'#527e69':'#628c71'}/><path d="M-27-152q-4-28 20-30" stroke="#ffffff20" strokeWidth="9" strokeLinecap="round"/></g>)}
        <g transform="translate(835 666) rotate(4)"><path d="M0 0v77" stroke="#8c7256" strokeWidth="8"/><path d="M-59-21H44l19 22-19 22H-59Z" fill="#f8e7be" stroke="#a98d65" strokeWidth="3"/><text x="0" y="7" textAnchor="middle" fill="#7b6a50" fontSize="11" letterSpacing="2">ONWARD</text></g>
        <path d="m332 605 4-13 5 13 13 5-13 4-5 13-4-13-13-4Z" fill="#f8e7b4"/>
        <path d="m967 644 4-10 4 10 10 4-10 4-4 10-4-10-10-4Z" fill="#f8e7b4"/>
      </g>
    </g>
  </svg>;
}

export default function CinematicChapter({chapter:c,index,motion,onToggle,next}) {
  const root=useRef(null),runway=useRef(null),stage=useRef(null);
  const refs={camera:useRef(null),clouds:useRef(null),hills:useRef(null),walker:useRef(null),foreground:useRef(null),insideStudent:useRef(null),windowFrame:useRef(null),lintel:useRef(null)};
  const id=useId().replace(/:/g,'');
  useEffect(()=>{
    let frame=0,last=-1;
    const draw=()=>{
      frame=0;
      const r=runway.current.getBoundingClientRect();
      const p=motion?clamp(-r.top/Math.max(1,r.height-stage.current.offsetHeight)):1;
      if(Math.abs(p-last)<.00005)return;last=p;
      const narrow=innerWidth<=700,zoom=ease(range(p,.30,.61));
      const base=narrow ? 0.84 : 1,scale=base*Math.exp(Math.log(6.667/base)*zoom);
      const centerY=narrow?430-30*zoom:400;
      refs.camera.current.setAttribute('transform',`translate(600 ${centerY}) scale(${scale}) translate(-600 ${-(400-34*zoom)})`);
      const walk=ease(range(p,.025,.28)),enter=range(p,.24,.34);
      // Follow the same cubic curve used to draw the road, then enter the doorway.
      const t=(narrow ? 0.55 : 0.49)+(1-(narrow ? 0.55 : 0.49))*walk,u=1-t;
      const x=u*u*u*-1000+3*u*u*t*230+3*u*t*t*960+t*t*t*600;
      const y=u*u*u*930+3*u*u*t*630+3*u*t*t*855+t*t*t*550-24*enter;
      refs.walker.current.setAttribute('transform',`translate(${x} ${y}) scale(${1.05-.4*walk-.17*enter})`);
      refs.walker.current.style.opacity=1-ease(enter);
      const stride=Math.sin(range(p,0,.32)*Math.PI*22)*19*(1-enter);
      refs.walker.current.querySelector('.leg-a').setAttribute('transform',`rotate(${stride} -12 -53)`);
      refs.walker.current.querySelector('.leg-b').setAttribute('transform',`rotate(${-stride} 12 -53)`);
      refs.insideStudent.current.style.opacity=ease(range(p,.27,.38));
      refs.windowFrame.current.style.opacity=1-ease(range(p,.51,.60));
      refs.clouds.current.setAttribute('transform',`translate(${-40*range(p,0,.6)} 0)`);
      refs.foreground.current.setAttribute('transform',`translate(${-22*zoom} ${25*zoom})`);
      refs.hills.current.setAttribute('transform',`translate(0 ${-12*zoom})`);
      const reveal=ease(range(p,.69,.90)),open=ease(range(p,.78,.94));
      const vars={'--film-progress':`${p*100}%`,'--title-alpha':1-ease(range(p,.22,.38)),'--reveal':reveal,'--book-alpha':range(p,.66,.71),'--book-scale':.08+.92*reveal,'--book-x':`${(1-reveal)*12}vw`,'--book-y':`${(1-reveal)*18}vh`,'--cover-angle':`${-180*open}deg`,'--page-alpha':open,'--result-alpha':range(p,.85,.94),'--room-dim':reveal*.32};
      Object.entries(vars).forEach(([k,v])=>stage.current.style.setProperty(k,v));
      const phase=p<.30?0:p<.61?1:p<.75?2:3;
      stage.current.dataset.phase=phase;
      stage.current.querySelector('[data-phase-label]').textContent=c.result?['Follow the road to campus','Through the classroom window','A moment with the teacher','Open a new milestone'][phase]:['The next stop on the road','Step inside the workspace','From learning to building','The impact of the work'][phase];
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw);};
    const resize=()=>{last=-1;schedule();};
    draw();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',resize);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',resize);};
  },[motion,c]);
  return <section id={c.id} ref={root} className={`film-chapter ${c.color}`} data-stop aria-labelledby={`${c.id}-title`}>
    <div className="film-runway" ref={runway}>
      <div className="film-stage" ref={stage}>
        <FilmWorld chapter={c} refs={refs} id={id}/>
        <div className="film-shade"/>
        <div className="film-topline"><a href="#journey" aria-label="Back to journey map" className="film-identity">m<span>.</span> <small>THE JOURNEY</small></a><span className="film-era">{String(index+1).padStart(2,'0')} / 06 <i/> {c.year}</span><div className="film-tools"><a href={`#${c.id}-notes`}>Read chapter <span aria-hidden="true">↘</span></a><button onClick={()=>{onToggle();requestAnimationFrame(()=>root.current.scrollIntoView({behavior:'instant',block:'start'}));}} aria-pressed={motion} aria-label={motion?'Turn animations off':'Turn animations on'}>{motion?'◉':'○'} <span>Motion {motion?'on':'off'}</span></button></div></div>
        <div className="film-title"><p className="eyebrow">CHAPTER {String(index+1).padStart(2,'0')} · {c.label}</p><h2 id={`${c.id}-title`}>{c.title}</h2><p>{c.organization}</p><span>{c.role}</span></div>
        {c.result?<div className="cinema-report" aria-label={`${c.role} report card: ${c.resultLabel} ${c.result}`}><div className="report-spread"><div className="book-page book-left"><span className="book-flower" aria-hidden="true">✳</span><p className="eyebrow">A MILESTONE<br/>ON THE JOURNEY</p><h3>{c.organization}</h3><p>{c.role}</p><span className="book-year">{c.year}</span></div><div className="book-page book-right"><p className="eyebrow">{c.role==='Class XII'?'CLASS XII RESULT':c.role==='Class X'?'CLASS X RESULT':'COLLEGE RESULT'}</p><span className="book-rule"/><div className="book-result"><strong>{c.result}</strong><span>{c.resultLabel}</span></div><span className="book-seal" aria-hidden="true">✦</span><small>A chapter to remember.</small></div><div className="book-cover" aria-hidden="true"><span>THE LEARNING YEARS</span><strong>My<br/>report<br/>card.</strong><span className="cover-star">✳</span><span>{c.year} / {c.role==='Class X'?'CLASS X':c.role==='Class XII'?'CLASS XII':'COLLEGE'}</span></div></div></div>:<div className="cinema-insight"><p className="eyebrow">{c.organization} · {c.location}</p><strong>{c.metric}</strong><span>{c.metricLabel}</span><p>{c.copy}</p><div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></div>}
        <div className="film-bottomline"><div className="film-caption"><span className="film-live-dot"/><p data-phase-label>Follow the road to campus</p><small>{motion?'SCROLL TO CONTINUE ↓':'LOW MOTION · READ AT YOUR PACE'}</small></div><p className="film-disclaimer">{c.result?'Abstract campus · fictional teacher & classroom':'Abstract office · illustrated work scene'}</p><a href={`#${next?.id||'skills'}`}>Next chapter <span aria-hidden="true">→</span></a></div>
        <div className="film-scrubber" aria-hidden="true"><span/></div>
      </div>
    </div>
    <div id={`${c.id}-notes`} className="chapter-notes">
      <div className="notes-heading"><p className="eyebrow">CHAPTER {String(index+1).padStart(2,'0')} / THE DETAILS</p><h3>{c.organization}</h3><p>{c.role}</p><span>{c.year}{c.location?` · ${c.location}`:''}</span></div>
      <div className="notes-body"><p>{c.copy}</p>{c.result&&<p className="notes-grade"><strong>{c.result}</strong> {c.resultLabel}</p>}{c.bullets&&<ul>{c.bullets.map(b=><li key={b}>{b}</li>)}</ul>}<div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div>{c.note&&<p className="fact-note">{c.note}</p>}<a className="notes-next" href={`#${next?.id||'skills'}`}>{next?`Continue to ${next.organization}`:'Explore the toolkit'} ↓</a></div>
    </div>
  </section>;
}

