# Meghdoot Panda — The journey so far

A local React + Vite portfolio with an original SVG cartoon guide and six cinematic, full-viewport chapters. Native scrolling moves the guide along a road, enters a building, zooms through a window into a classroom or workspace, and opens a report card or reveals career impact. All biography, results, dates, and metrics remain sourced from the supplied resume.

## Run

Requires Node.js 20.19+ or 22.12+ and npm.

```powershell
cd portfolio
npm install
npm run dev
```

If your terminal is already in this directory, omit `cd portfolio`. Open the Local URL printed by Vite (normally http://127.0.0.1:5173/).

```powershell
npm run build
npm run preview
```

The production build is written to `dist/`. It can be served by a static web host. This task implements the website locally; no hosted site has been created.

## Edit

- `src/data.js`: all personal facts, story milestones, results, skills, contact details, and credential URLs.
- `src/main.jsx`: page structure, reading progress, active chapter navigation, and motion preference.
- `src/CinematicChapter.jsx`: scroll timeline, camera transforms, original classrooms, fictional teacher, workspaces, and report-card opening.
- `src/cinematic.css`: sticky full-viewport scenes, book perspective, scene controls, readable chapter notes, and responsive/low-motion layouts.
- `src/Scenery.jsx`: reusable original SVG illustrations and generic male cartoon guide.
- `src/styles.css`: responsive layout, scenery animation, focus states, and reduced-motion handling.
- `public/megh_resume.pdf`: downloadable copy of the supplied source PDF. Replace this and the original together when updating the resume.

No heavy animation, icon, or 3D libraries are used. React and Vite are the only direct dependencies. Google Fonts supplies DM Sans and Manrope; the page falls back to system sans-serif fonts if the network is unavailable. Artwork is inline SVG, with no remote image downloads or image tracking.

## Source fidelity and information still needed

Source of truth: `megh_resume.pdf`, including its embedded link annotations. The actual embedded LinkedIn link differs from the shortened displayed text; the website uses the embedded destination.

- Class X: Sam International School, 2017, CGPA: 9.8. No percentage conversion or assumed grade scale.
- Class XII: DPS Dwarka, 2019, Percentage: 93.5. The result uses the resume's label rather than adding an inferred scale.
- College: Bharati Vidyapeeth College Of Engineering, Bachelor of Science in Computer Science, 2023, CGPA: 8.8. This degree is transcribed exactly; it has not been changed to B.Tech based on external information.
- College start date and specific campus are absent. The college scene clearly says so, and shows the completion year only. Supply these if you want a full date range or a recognizable building.
- Internship: Indian Statistical Institute (ISI), Pune, Data Analyst Intern, February 2022. No invented duration.
- ZS: Associate, July 2023–Apr 2026; Associate Consultant, Apr 2026–Present. The role progression is shown as April 2026; no additional promotion dates are inferred.
- Education is grouped before internships as requested. A visible note identifies the February 2022 internship as preceding the 2023 college completion milestone. Internships and employment are otherwise chronological.
- The current role and all metrics reflect the resume, not independent verification of employment.

All required scenes are supported. No school result, employer, achievement, project link, or personal photo has been fabricated. The visible note for the absent college details is intentional, not placeholder biography.

## Campus research and artwork attribution

Research performed November 2, 2026 (Asia/Calcutta). No external campus image has been incorporated, so no third-party photo attribution or image license is required. Every building is an original abstract campus or office motif; the UI explicitly labels campus illustrations as abstract. The cartoon guide is generic and is not a portrait. The teacher, classroom, and school interactions are fictional visual storytelling, not claims about a real teacher or event.

References reviewed:

- Sam International School official overview: https://www.samis.in/about-us/ — confirms the school context, but no verified, licensed campus image was adopted.
- CBSE institution record: https://saras.cbse.gov.in/SARAS/AffiliatedList/AfflicationDetails/2730527 — identifies a Sam International School in Dwarka. The resume itself does not specify that school's location, so no location or building is attributed to the user.
- DPS Dwarka official website: https://www.dpsdwarka.com/ — returned 403 during research.
- Government of Delhi school listing: https://dmsouthwest.delhi.gov.in/public-utility/delhi-public-school/ — corroborates DPS Dwarka; it is not used as a photographic building reference.
- Bharati Vidyapeeth college official contact page: https://bvcoend.ac.in/index.php/contact-us-2/ — identifies a New Delhi campus. The resume does not identify a campus, so this cannot establish which one the user attended.
- The legacy Bharati Vidyapeeth campus URL returned unrelated content and was excluded. No artwork was derived from it.

## Cinematic scrolling and accessibility

The visual transition is inspired by the scale and window transition of https://jeskojets.com/, inspected in a browser on November 2, 2026. No assets, code, branding, or text were copied from the reference.

Each chapter has a native scroll area and a viewport-sized sticky stage. A requestAnimationFrame update maps the actual scroll position to a reversible timeline:

1. 0–30%: the guide walks along the same cubic curve used to draw the road, recedes with distance, and enters the doorway.
2. 30–61%: the camera scales into the actual classroom/workspace drawn inside the featured window. The window frame fades as the camera passes through it.
3. 61–75%: the guide stands inside with a fictional teacher in education scenes, or at a workstation in career scenes.
4. 69–94%: the report moves forward, its cover rotates open, and the exact result appears. Career chapters reveal the resume-backed impact metric instead.
5. Continued scrolling releases the stage and reaches ordinary, readable chapter notes, followed by the next chapter.

Scrolling backward reverses these transforms. Nothing captures wheel, keyboard, or touch gestures, and there are no scroll locks or animation libraries. The exterior and interior share the same SVG coordinate system, keeping the window zoom continuous. Scene animation changes DOM transforms and CSS custom properties without React rerendering on every scroll pixel.

All six chapters have a chapter-map link, a direct **Read chapter** link to their full text, a **Next chapter** link, and a motion switch. The top reading progress, chapter rail, and mobile progress strip remain available. Report-card and dashboard content is also repeated in normal-flow chapter notes, so no facts require timed animation to access.

On a fresh visit, the site honors the operating system's reduced-motion preference. A manual preference is retained for the current browser tab with sessionStorage and survives reloads. System preference changes are also respected. With motion disabled, long scroll areas collapse, sticky camera movement stops, and the fully revealed scene and chapter notes are immediately readable. Toggling motion within a scene preserves that chapter. No biography is hidden behind an animation.

Phone framing uses a wider exterior view, adjusts the teacher's position, and keeps the guide, teacher, and result legible. SVG artwork stays sharp throughout the zoom. Includes skip navigation, semantic headings, focus outlines, native links, and labeled progress. Touch hardware was not available; touch behavior uses native scrolling without gesture interception.

## Verification completed

- Production build passes with React and Vite; no dependencies added for this animation upgrade.
- Desktop and phone scenes visually inspected at 1440×900 and 390×844.
- Horizontal overflow checks pass at 320px, 390px, 768px, and 1440px.
- All six chapter links reach the start of their matching scene. Every in-page anchor target exists.
- School exterior, classroom zoom, teacher/guide framing, and report reveal were inspected in the browser.
- Class X reveals 9.8 CGPA and Class XII reveals 93.5 with the Percentage label; source facts in src/data.js are unchanged.
- Scrolling backward closes the book and hides the result, restoring the preceding classroom state.
- Motion off collapses the school runway to its 640px static stage on a phone, fully reveals the result, and preserves the chapter position. Re-enabling motion restores the sequence.
- Keyboard Enter activates Read chapter and reaches the full normal-flow career notes.
- The current-career workspace reveal shows 75% less dataset-creation time and links to the complete resume-supported contributions.
- No browser warnings or errors were recorded in the final checks.
- The original resume download and contact/credential destinations are unchanged.
- New desktop, classroom, and phone screenshots are saved in .qa/immersive-*.jpg (excluded from Git).
