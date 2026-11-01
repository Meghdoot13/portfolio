// All personal facts come from megh_resume.pdf. Illustrative chapter titles are editorial.
export const profile = {
  name: 'Meghdoot Panda',
  role: 'Business Technology Solutions Associate Consultant',
  company: 'ZS Associates',
  location: 'Pune',
  intro: 'I build data platforms, backend applications, and AI-powered tools. Follow the road from my school days to my work at ZS Associates.',
  email: 'meghdootpanda@gmail.com',
  phone: '+91-7013406930',
  linkedin: 'https://www.linkedin.com/in/meghdoot-panda-b78661193/',
  github: 'https://github.com/Meghdoot13',
  resume: '/megh_resume.pdf',
  chapters: [
    { id:'school', year:'2017', kind:'school', label:'The first milestone', title:'A bright beginning.', organization:'Sam International School', role:'Class X', result:'9.8', resultLabel:'CGPA', color:'peach', copy:'The first stop on the journey: completing Class X at Sam International School.', tags:['Class X', '2017'] },
    { id:'higher-school', year:'2019', kind:'school', label:'The next chapter', title:'A little further. A little higher.', organization:'DPS Dwarka', role:'Class XII', result:'93.5', resultLabel:'Percentage', color:'mint', copy:'On to DPS Dwarka for Class XII, and another academic milestone along the way.', tags:['Class XII', '2019'] },
    { id:'college', year:'2023', kind:'college', label:'The campus chapter', title:'A foundation in computer science.', organization:'Bharati Vidyapeeth College Of Engineering', role:'Bachelor of Science in Computer Science', result:'8.8', resultLabel:'CGPA', color:'lavender', copy:'Completed in 2023, with a Bachelor of Science in Computer Science.', note:'College start date and campus are not specified in the resume.', tags:['Computer Science', 'Completed 2023'] },
    { id:'internship', year:'February 2022', kind:'lab', label:'First industry stop', title:'Turning data into insight.', organization:'Indian Statistical Institute (ISI)', role:'Data Analyst Intern', location:'Pune', color:'blue', copy:'Built an employee attrition prediction model and deployed it into a working application for real-time attrition risk analysis.', metric:'86%', metricLabel:'prediction accuracy', tags:['Predictive modeling', 'Data analysis'], note:'This internship took place before the college completion milestone above.' },
    { id:'associate', year:'July 2023 – Apr 2026', kind:'work', label:'Building at scale', title:'From pipelines to products.', organization:'ZS Associates', role:'Business Technology Solutions Associate', location:'Pune', color:'peach', copy:'Built and modernized data pipelines and the Facility-Fit application.', bullets:['Migrated production pipelines from AWS Glue to Databricks Unity Catalog: monthly failure rate fell from 30% to 10%, and runtime reduced by 30%.','Engineered FastAPI and PostgreSQL REST APIs sustaining 1,000+ requests/second, deployed with Docker, AWS EKS, and GitLab CI/CD.','Migrated Facility-Fit from Spotfire to React + FastAPI for 100+ daily users.'], metric:'1,000+', metricLabel:'API requests per second', tags:['FastAPI', 'PostgreSQL', 'Databricks', 'React', 'AWS EKS'] },
    { id:'current', year:'Apr 2026 – Present', kind:'ai', label:'The journey continues', title:'A new role. An AI-powered chapter.', organization:'ZS Associates', role:'Business Technology Solutions Associate Consultant', location:'Pune', color:'lavender', copy:'Progressed to Associate Consultant in April 2026, building automation and knowledge tools with LLMs and RAG.', bullets:['Engineered an LLM + RAG application to predict transformation functions for clinical SDTM/ADaM variables, reducing dataset creation from 8 hours to 2 hours.','Architected a foundational RAG chatbot with LangGraph and Databricks AI Search. It grew from a prototype into a multi-workflow platform adopted across teams.'], metric:'75%', metricLabel:'less dataset-creation time', tags:['LangGraph', 'RAG', 'Databricks AI Search', 'LLMs'] }
  ],
  skills: [
    {label:'Languages', icon:'</>', items:['Python','SQL','C/C++','JavaScript']},
    {label:'Backend & databases', icon:'{ }', items:['FastAPI','PostgreSQL']},
    {label:'Data engineering', icon:'↗', items:['Databricks','Data Pipelines','Unity Catalog']},
    {label:'Cloud & delivery', icon:'☁', items:['Docker','GitLab CI/CD','AWS EKS','Git']},
    {label:'Artificial intelligence', icon:'✧', items:['LangGraph','RAG']}
  ],
  certifications: [
    {name:'Databricks Certified Data Analyst Associate',url:'https://credentials.databricks.com/93a3a215-8a53-4908-84a6-3f941e2b4c81#acc.aZrDbiJp'},
    {name:'Databricks Certified Generative AI Engineer Associate',url:'https://credentials.databricks.com/aff34f0f-2757-49ad-8aaf-7a047302e016#acc.H6Iq1AuP'}
  ]
};

