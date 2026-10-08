'use client'

import { ArrowUpRight, GitBranch, BriefcaseBusiness, Mail, ArrowDown, Sparkles, GraduationCap, Code2, MapPin, Award } from 'lucide-react'

const projects = [
  { number: '01', title: 'UFDR-INTEL', type: 'AI / DIGITAL FORENSICS', description: 'An AI-powered investigation workspace that turns complex forensic case data into clear, queryable intelligence.', impact: 'Text-to-SQL agent · RAG chat · SQLite FTS5', href: 'https://github.com/SangameshDevani/UFDR-INTEL', tone: 'coral', image: '/project-ufdr.jpg' },
  { number: '02', title: 'SMART ROUTE', type: 'PRODUCT / HACKATHON', description: 'A route optimization engine designed to make the best path feel effortless, even when the problem underneath is anything but.', impact: 'Google Maps APIs · PostgreSQL · Redis', href: 'https://github.com/SangameshDevani/smart-route-optimizer', tone: 'blue', image: '/project-route.jpg' },
  { number: '03', title: 'OKGIP', type: 'PLATFORM / INTERNSHIP', description: 'An organizational knowledge platform connecting people with the skills, mentors, and context they need to grow.', impact: 'Spring Boot · React · JWT / RBAC', href: 'https://github.com/SangameshDevani/Infosys-Virtual-Internship-7.0-Organizational-Knowledge-Gap-Intelligence-Platform-', tone: 'lime', image: '/project-okgip.jpg' },
]

const skills = ['Java', 'JavaScript', 'React', 'Next.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQLite FTS5', 'Gemini API', 'REST APIs', 'Git']

const certifications = [
  { title: 'Skill Up in Java Programming', issuer: 'Infosys Springboard' },
  { title: 'AI Fundamentals', issuer: 'IBM' },
  { title: 'AWS Academy Graduate', issuer: 'Cloud Foundations' },
]

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top">SD<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a></div>
        <a className="status" href="mailto:sangameshdevani16@gmail.com"><span /> Available for work</a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-kicker"><span className="eyebrow">Portfolio / 2026</span><span className="eyebrow muted">Bengaluru, India</span></div>
        <div className="hero-grid">
          <div className="hero-left">
            <h1>Building digital<br /><em>experiences</em> with<br />a point of view.</h1>
            <div className="tech-badges">
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> Java</span>
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></svg> Spring Boot</span>
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.3" /><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></svg> React</span>
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 8v8l7-4-7-4" /></svg> Next.js</span>
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg> PostgreSQL</span>
              <span className="tech-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" /></svg> Gemini API</span>
            </div>
            <div className="hero-ctas">
              <a className="hero-cta primary" href="#work">View my work</a>
              <a className="hero-cta ghost" href="mailto:sangameshdevani16@gmail.com?subject=Let's%20build%20something">Get in touch</a>
            </div>
            <p className="hero-quote">&ldquo;Good software feels inevitable in hindsight — the hard part is making it feel that simple.&rdquo;</p>
            <p className="hero-now"><span className="dot" /> Currently: final-year CSE, actively interviewing for SDE roles</p>
          </div>
          <div className="hero-side"><div className="profile-card"><div className="profile-photo-wrap"><img src="/sangamesh-profile.jpg" alt="Sangamesh Devani" /></div><div className="profile-card-copy"><span className="eyebrow">The person behind the build</span><strong>Sangamesh Devani</strong><span>Developer · Problem solver · Builder</span></div><span className="profile-badge">Open to build</span></div><div className="code-card"><div className="code-top"><span><i /><i /><i /></span><small>about-me.ts</small></div><div className="code-body"><span className="code-line"><b>const</b> developer = {'{'}</span><span className="code-line indent">name: <em>&apos;Sangamesh Devani&apos;</em>,</span><span className="code-line indent">focus: <em>&apos;full-stack + AI&apos;</em>,</span><span className="code-line indent">status: <em>&apos;open to build&apos;</em></span><span className="code-line">{'}'}</span></div></div><p>I&apos;m <strong>Sangamesh Devani</strong> — a full-stack developer who brings product thinking to every line of code. I turn ambiguous problems into reliable interfaces, thoughtful APIs, and intelligent tools people can actually use.</p><div className="hero-signals"><span><strong>03+</strong> shipped builds</span><span><strong>8.2</strong> GPA / 10</span><span><strong>2027</strong> graduating</span></div><a className="circle-link" href="#work" aria-label="Scroll to selected work"><ArrowDown size={20} /></a></div>
        </div>
        <div className="hero-foot"><span>Full-stack developer / AI builder</span><span>Scroll to explore ↓</span></div>
      </section>

      <section id="work" className="work section shell">
        <div className="section-head"><div><span className="eyebrow">Selected work</span><h2>Things I&apos;ve<br /><em>made recently.</em></h2></div><span className="section-index">01 — 05</span></div>
        <div className="project-list">{projects.map((project) => <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.number}><div className={`project-art ${project.tone}`}><img src={project.image} alt={`${project.title} project artwork`} /><span className="art-number">{project.number}</span><span className="art-label">{project.type}</span></div><div className="project-copy"><div className="project-meta"><span>{project.type}</span><ArrowUpRight size={18} /></div><h3>{project.title}</h3><p>{project.description}</p><span className="impact">{project.impact}</span></div></a>)}</div>
      </section>

      <section id="about" className="about section shell"><div className="section-head"><span className="eyebrow">A little about me</span><span className="section-index">02 — 05</span></div><div className="about-grid"><div><h2>Curious by default.<br /><em>Intentional by design.</em></h2><div className="about-stats"><span><strong>8.2</strong><small>GPA / 10</small></span><span><strong>2027</strong><small>Graduating</small></span><span><strong>3+</strong><small>Shipped builds</small></span></div><div className="edu-block"><p className="edu-eyebrow">Education</p><div className="edu-item"><p className="edu-period">2023 – 2027</p><p className="edu-title">B.Tech, Computer Science &amp; Engineering</p><p className="edu-org">Dayananda Sagar University, Bengaluru · GPA 8.2/10</p></div><div className="edu-item"><p className="edu-period">2021 – 2023</p><p className="edu-title">Class XII (PCMB)</p><p className="edu-org">SGN PU College, Kalaburgi · 94.16%</p></div></div></div><div className="about-copy"><p>I&apos;m Sangamesh, a full-stack developer and final-year Computer Science student at Dayananda Sagar University in Bengaluru (2023–2027). I work at the intersection of engineering, product thinking, and visual clarity — shaping rough ideas into experiences that feel considered from the first click to the last API response.</p><p>I&apos;m especially drawn to difficult, useful problems: making forensic data easier to explore, optimizing decisions with real-world constraints, and using AI where it adds genuine leverage. My toolkit spans Java and Spring Boot, React and Next.js, FastAPI, relational databases, REST APIs, and Gemini API / LLM integrations.</p><p>When I join a team, I bring ownership, curiosity, and a bias toward shipping. I care about readable systems, accessible interfaces, and the small details that make a product feel trustworthy.</p><div className="about-details"><span><GraduationCap size={16} /> B.Tech Computer Science</span><span><Code2 size={16} /> Full-stack &amp; AI builder</span><span><MapPin size={16} /> Bengaluru, India</span></div><div className="tech-badges"><span className="tech-badge"><Code2 size={13} /> FastAPI</span><span className="tech-badge"><Code2 size={13} /> MySQL</span><span className="tech-badge"><Code2 size={13} /> SQLite FTS5</span><span className="tech-badge"><Code2 size={13} /> REST APIs</span><span className="tech-badge"><Code2 size={13} /> Git</span></div><a className="text-link" href="/resume.pdf" download="Sangamesh_Devani_Resume.pdf">View résumé <ArrowUpRight size={16} /></a></div></div></section>

      <section id="experience" className="experience section shell"><div className="section-head"><div><span className="eyebrow">Experience / learning in public</span><h2>Proof of<br /><em>practice.</em></h2></div><span className="section-index">03 — 05</span></div><div className="experience-intro"><p>I&apos;m still a final-year student, so my professional experience is one focused chapter rather than a long résumé — but it&apos;s a real one: an enterprise internship where I owned four modules end-to-end, not just the one I was assigned.</p><p>Everything else I build — the projects below, the hackathons, the independent work — happens alongside coursework, driven by the same habit: understand the constraints first, then make the engineering feel simple.</p></div><div className="timeline"><article><span className="timeline-date">Jun 2026 – Aug 2026</span><div><h3>Software Development Intern</h3><p>Built the AI-driven Skill-Gap Recommendation Engine, Mentorship/Expert Directory, Knowledge Article Library, and Skill Assessment modules on a Spring Boot 3.3 / Java 17 / React 18 platform. Implemented JWT-based auth and RBAC across 6 user roles, and integrated the Gemini API to power intelligent recommendations.</p><span className="timeline-tags">Infosys Virtual Internship 7.0 — OKGIP</span><a className="repolink" href="https://github.com/SangameshDevani/Infosys-Virtual-Internship-7.0-Organizational-Knowledge-Gap-Intelligence-Platform-" target="_blank" rel="noreferrer">view repo →</a></div></article></div><p className="exp-footnote">✦ Graduating June 2027 — actively interviewing for full-time SDE roles. See <a href="#work">selected work</a> for independent and hackathon projects.</p></section>

      <section id="certifications" className="section shell"><div className="section-head"><div><span className="eyebrow">Certified &amp; always learning</span><h2>Proof on<br /><em>paper too.</em></h2></div><span className="section-index">04 — 05</span></div><div className="cert-grid">{certifications.map((cert) => <div className="cert-card" key={cert.title}><Award size={30} /><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div></div>)}</div></section>

      <section className="marquee" aria-label="Skills"><div>{skills.map((skill) => <span key={skill}>{skill} <i>✦</i></span>)}{skills.map((skill) => <span key={`${skill}-dup`}>{skill} <i>✦</i></span>)}</div></section>

      <section className="contact section shell" id="contact"><div className="section-head"><span className="eyebrow">Have a good idea?</span><span className="section-index">05 — 05</span></div><div className="contact-grid"><h2>Let&apos;s make<br /><em>something good.</em></h2><div><p>I&apos;m always open to interesting problems, thoughtful collaborations, and conversations about building for the web.</p><a className="contact-button" href="mailto:sangameshdevani16@gmail.com?subject=Let's%20build%20something">Start a conversation <ArrowUpRight size={18} /></a><div className="contact-links"><a href="mailto:sangameshdevani16@gmail.com">sangameshdevani16@gmail.com</a><a href="tel:+917619203151">+91 76192 03151</a><a href="https://www.linkedin.com/in/sangameshdevani/" target="_blank" rel="noreferrer">linkedin.com/in/sangameshdevani</a></div></div></div></section>

      <footer className="footer shell"><span>© 2026 Sangamesh Devani</span><div><a href="https://github.com/SangameshDevani" target="_blank" rel="noreferrer"><GitBranch size={17} /></a><a href="https://www.linkedin.com/in/sangameshdevani/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /></a><a href="mailto:sangameshdevani16@gmail.com"><Mail size={17} /></a></div><span>Made with curiosity <Sparkles size={14} /></span></footer>
    </main>
  )
}
