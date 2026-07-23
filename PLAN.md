# Portfolio Website Plan

Stack: Next.js (App Router) + TypeScript + Tailwind CSS
Hosting: TBD (Vercel recommended, decide later)

Check items off as they're completed: `- [ ]` -> `- [x]`

## 1. Project Setup
- [x] Scaffold Next.js app (`create-next-app`, TypeScript, Tailwind, App Router, ESLint)
- [x] Set up folder structure (`app/`, `components/`, `data/`, `public/`)
- [ ] Set up Git repo + initial commit (repo initialized, files staged — commit pending: needs `git config user.name`/`user.email` set by you first)
- [x] Add basic layout (fonts, metadata, favicon)
- [x] Set up dark/light theme toggle (next-themes, defaults to dark)

## 2. Content & Data
- [x] Draft personal bio / tagline for Hero section
- [ ] Collect project list: name, description, tech stack, links (repo/live), screenshots — placeholder in `data/projects.ts`, needs your real projects
- [x] Collect experience history: company, role, dates, responsibilities (`data/experience.ts`, 7 roles from resume)
- [ ] Collect OnCall / incident highlights — placeholder metrics in `data/oncall.ts`, needs your real numbers (Sev2s resolved, MTTR, etc.)
- [x] Collect education history: degree, institution, dates, honors/coursework (`data/education.ts`)
- [x] Gather resume as PDF (copied to `public/resume.pdf`)
- [x] Collect any certifications/skills list (`data/skills.ts`, plus patents/publications in `data/publications.ts`)
- [ ] Confirm real GitHub/LinkedIn/email URLs — placeholders in `data/profile.ts`

## 3. Core Sections / Pages
- [x] Navbar (sticky, links to sections/pages, mobile menu)
- [x] Hero section (name, title, tagline, CTA buttons: Resume / GitHub / LinkedIn / Email)
- [x] About section
- [x] Experience section (timeline layout)
- [x] OnCall / Impact section (metrics grid, standalone section)
- [x] Projects section (card grid + Patents & Publications)
- [x] Education section
- [x] Resume page/section (embedded PDF viewer + download button at `/resume`)
- [x] Contact section/footer (email, LinkedIn, GitHub, phone)

## 4. Styling & Polish
- [ ] Choose color palette / typography system
- [ ] Responsive design pass (mobile, tablet, desktop)
- [ ] Animations/transitions (subtle, e.g. Framer Motion or CSS)
- [ ] Accessibility pass (semantic HTML, alt text, contrast, keyboard nav)
- [ ] SEO basics (meta tags, OpenGraph image, sitemap, robots.txt)
- [ ] Performance pass (image optimization, Lighthouse check)

## 5. Deployment
- [ ] Decide hosting provider (Vercel / GitHub Pages / other)
- [ ] Set up custom domain (if applicable)
- [ ] Set up CI (auto-deploy on push to main)
- [ ] Final QA on production URL

## 6. Post-Launch (optional)
- [ ] Add analytics (e.g. Vercel Analytics / Plausible)
- [ ] Blog section for writeups (optional)
- [ ] Keep projects/experience updated as they change
