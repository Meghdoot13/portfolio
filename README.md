# Meghdoot Panda — The journey so far

A local React + Vite portfolio with an original SVG cartoon guide, illustrated road scenes, six resume-backed story stops, report-card reveals, chapter navigation, technical skills, credential links, and contact links.

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
- `src/main.jsx`: page structure, scroll progress, section observer, and motion control.
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

Research performed November 2, 2026 (Asia/Calcutta). No external campus image has been incorporated, so no third-party photo attribution or image license is required. Every building is an original abstract campus or office motif; the UI explicitly labels campus illustrations as abstract. The cartoon guide is generic and is not a portrait.

References reviewed:

- Sam International School official overview: https://www.samis.in/about-us/ — confirms the school context, but no verified, licensed campus image was adopted.
- CBSE institution record: https://saras.cbse.gov.in/SARAS/AffiliatedList/AfflicationDetails/2730527 — identifies a Sam International School in Dwarka. The resume itself does not specify that school's location, so no location or building is attributed to the user.
- DPS Dwarka official website: https://www.dpsdwarka.com/ — returned 403 during research.
- Government of Delhi school listing: https://dmsouthwest.delhi.gov.in/public-utility/delhi-public-school/ — corroborates DPS Dwarka; it is not used as a photographic building reference.
- Bharati Vidyapeeth college official contact page: https://bvcoend.ac.in/index.php/contact-us-2/ — identifies a New Delhi campus. The resume does not identify a campus, so this cannot establish which one the user attended.
- The legacy Bharati Vidyapeeth campus URL returned unrelated content and was excluded. No artwork was derived from it.

## Interaction and accessibility

Normal vertical scrolling is preserved; there are no wheel/touch handlers or scroll locks. Anchor links and keyboard scrolling reach all sections. The guide moves with section scroll progress; active scenes add subtle walking, waving, clouds, and prop motion. Report cards open once when their section enters view and can be toggled manually. Results remain accessible through native disclosures even without motion.

The site defaults to the operating system's reduced-motion preference, follows preference changes, and offers a manual Motion switch. Disabled motion removes smooth scrolling, character movement, and scenery transitions. Text is never hidden behind animation. Includes a skip link, semantic landmarks/headings, focus outlines, labeled progress, chapter links, and phone layouts with a bottom progress strip.

## Verification completed

- `npm run build` passes; production output is generated in `dist/`.
- Browser inspected at 1440px desktop and 390px phone; overflow checks also passed at 320px and 768px.
- All six route links reach their matching sections; all in-page anchor targets exist.
- Scroll progress updates, native keyboard scrolling works, and report cards toggle with click and Enter.
- System reduced motion defaults to disabled animation; manual toggle changes computed animation from `none` to `drift` and back.
- No browser warnings or errors were recorded in the final checks.
- Resume endpoint returns HTTP 200, `application/pdf`, 112626 bytes. The downloadable file's SHA-256 matches the source.
- Desktop and phone screenshots are saved locally in `.qa/` (excluded from Git).

Touch hardware was not available; touch behavior uses native page scrolling and anchor links without gesture interception.
