'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { awards, californiaActivities, education, jhuExtracurriculars, navItems, projects, skillGroups, specialThanks, specialThanksImages, type Project, type TimelineItem, workExperience } from './data'

const ease = [0.22, 1, 0.36, 1] as const

const marqueeItems = ['Aural technology', 'Genetic treatments', 'Hearing loss regeneration', 'Automotive noise pollution']


function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`reveal-in ${className}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease }}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}

function Arrow() {
  return <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="border-t border-white/15">
      {items.map((role, index) => (
        <Reveal delay={index * 0.05} key={`${role.title}-${role.period}`} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[140px_1fr_auto] sm:gap-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-electric">{role.period}</p>
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.06em] text-electric">{role.title}</h3>
            <p className="mt-2 text-sm text-ink">{role.organization}</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{role.detail}</p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{role.tag}</span>
        </Reveal>
      ))}
    </div>
  )
}


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [active, setActive] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  const cardStyle = {
    '--pointer-x': `${pointer.x}%`,
    '--pointer-y': `${pointer.y}%`,
  } as CSSProperties

  return (
    <motion.article
      className="group relative h-full overflow-hidden border border-white/15 bg-panel"
      style={cardStyle}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(420px circle at var(--pointer-x) var(--pointer-y), rgba(66,183,255,.2), transparent 42%)' }} />
      <Link href={`/projects/${project.slug}`} className="relative z-10 block h-full focus-visible:outline-none">
        <div className="border-b border-white/15 p-5">
          <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            <span>{project.id} / {project.period}</span>
            <Arrow />
          </div>
          <div className="relative mt-7 h-56 overflow-hidden border border-electric/25 bg-[#080b10]">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="image-electric-blue object-contain p-3 transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-electric/15 via-transparent to-white/5 mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 bg-engineering-grid opacity-25" />
            <span className="absolute bottom-3 left-3 bg-paper/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-electric">{project.heroImage.label}</span>
            <motion.div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(66,183,255,.9)]" animate={{ scale: active ? [1, 1.7, 1] : 1 }} transition={{ duration: 1.4, repeat: active ? Infinity : 0 }} />
          </div>
        </div>
        <div className="flex h-[calc(100%-15rem)] flex-col p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-electric">{project.type}</p>
          <h3 className="mt-3 max-w-[17ch] text-3xl font-medium leading-[0.95] tracking-[-0.07em] text-ink">{project.title}</h3>
          <div className="mt-7 grid gap-4 border-t border-white/15 pt-5 text-sm leading-6 text-muted">
            <div><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink">Description</span><p className="mt-1">{project.problem}</p></div>
            <div><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink">Process</span><p className="mt-1">{project.execution}</p></div>
            <div><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink">Output</span><p className="mt-1 text-ink">{project.result}</p></div>
          </div>
          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => <span className="border border-white/15 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.06em] text-muted" key={tool}>{tool}</span>)}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-electric/20 pt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-electric">
              <span>Open project detail</span>
              <Arrow />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const { scrollYProgress: projectsProgress } = useScroll({ target: projectsRef, offset: ['start 72%', 'end 30%'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 80])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.96])
  const timelineScale = useTransform(projectsProgress, [0, 1], [0, 1])

  return (
    <main className="overflow-clip bg-paper text-ink">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-electric focus:px-4 focus:py-3 focus:text-paper" href="#main-content">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-paper/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.04em]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-electric text-sm font-bold text-paper transition-transform duration-300 group-hover:rotate-12">E</span>
            <span className="text-electric">Evan H Lee</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-electric" href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <button className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.08em] md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? 'Close' : 'Menu'}
            <span className="grid gap-1.5"><i className={`block h-px w-5 bg-ink transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} /><i className={`block h-px w-5 bg-ink transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} /></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.nav id="mobile-navigation" className="fixed inset-x-0 top-[68px] z-30 border-b border-white/15 bg-paper px-5 py-3 md:hidden" initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.35, ease }} aria-label="Mobile navigation">
          {navItems.map((item, index) => <a className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl tracking-[-0.06em] last:border-0" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}><span className="mr-4 font-mono text-[10px] text-electric">0{index + 1}</span>{item.label}<Arrow /></a>)}
        </motion.nav>}
      </AnimatePresence>

      <section ref={heroRef} id="top" className="relative mx-auto grid min-h-[780px] max-w-[1440px] items-center gap-12 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-14 lg:pb-24 lg:pt-40">
        <Reveal className="relative z-10 max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_18px_rgba(66,183,255,.9)]" /> <span className="text-electric">Evan H Lee</span> / <span className="text-electric">Biomedical Engineering</span> / <span className="text-electric">Johns Hopkins / Class of 2030</span></p>
          <h1 className="mt-7 max-w-[11ch] text-balance text-[clamp(3.6rem,8vw,8.8rem)] font-medium leading-[.87] tracking-[-0.09em]"><span className="text-electric">Evan H Lee</span></h1>
          <p className="mt-8 max-w-lg text-xl leading-[1.25] tracking-[-0.04em] text-ink sm:text-2xl">I&apos;m at <strong className="font-semibold text-electric">Johns Hopkins Whiting</strong> for <strong className="font-semibold text-electric">Biomedical Engineering</strong> as the <strong className="font-semibold text-electric">Class of 2030</strong>! I&apos;m coming from Southern California.</p>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">As an open speaker on my experiences with right ear atresia, I&apos;m especially interested in designing aural technology and exploring genetic treatments for aural conditions.</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a className="group inline-flex items-center gap-8 rounded-full bg-electric px-5 py-3 text-xs font-bold text-paper transition-transform hover:-translate-y-1" href="#projects">View projects <Arrow /></a>
            <a className="border-b border-white/30 pb-2 text-xs font-semibold text-ink transition-colors hover:border-electric hover:text-electric" href="#about">About Me ↓</a>
          </div>
        </Reveal>
        <motion.div className="relative mx-auto w-full max-w-[560px] lg:mr-0" style={{ y: heroY, scale: heroScale }}>
          <div className="relative aspect-[.82/1] overflow-hidden border border-electric/45 bg-[#080b10] shadow-[0_40px_100px_rgba(0,0,0,.42)]">
            <Image className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.035]" src="/about-hero.jpg" alt="Portrait of Evan H Lee." width={622} height={838} priority />
            <div className="absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 bg-paper/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em]">About Me / Evan H Lee</span>
            <span className="absolute bottom-4 right-4 bg-paper/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-electric">Johns Hopkins Whiting / Class of 2030</span>
          </div>
          <span className="absolute -right-8 bottom-1/3 hidden origin-bottom-right rotate-180 font-mono text-[10px] uppercase tracking-[0.08em] text-muted [writing-mode:vertical-rl] lg:block">Southern California / Baltimore</span>
        </motion.div>
        <div className="col-span-full mt-auto flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span>Southern California → Baltimore</span><a className="text-ink transition-colors hover:text-electric" href="#about">Scroll to explore ↓</a><span>01 — 04</span></div>
      </section>

      <div className="overflow-hidden border-y border-paper bg-electric text-paper"><div className="flex w-max [animation:marquee_25s_linear_infinite]"><div className="flex shrink-0 items-center gap-7 py-4 pr-7 font-semibold tracking-[-0.04em]">{marqueeItems.map((item) => <span className="flex items-center gap-7" key={`primary-${item}`}>{item}<i className="text-xl not-italic">✳</i></span>)}</div><div aria-hidden="true" className="flex shrink-0 items-center gap-7 py-4 pr-7 font-semibold tracking-[-0.04em]">{marqueeItems.map((item) => <span className="flex items-center gap-7" key={`duplicate-${item}`}>{item}<i className="text-xl not-italic">✳</i></span>)}</div></div></div>

      <section id="about" className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="flex items-center gap-6 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span className="text-electric">01</span><span>About Me / Skills</span></div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-32">
          <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">About Me</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">About <span className="text-electric">me.</span></h2></Reveal>
          <Reveal delay={0.1} className="max-w-2xl"><p className="text-2xl leading-[1.15] tracking-[-0.05em] text-ink">From clinical control over hearing loss regeneration to ways to combat automotive noise pollution, I&apos;m working towards ensuring that hearing is more accessible for everyone.</p><p className="mt-7 max-w-xl text-base leading-7 text-muted">Outside of academics, I&apos;m playing tennis, bodybuilding, and traveling to new places.</p></Reveal>
        </div>
        <div className="mt-24 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => <Reveal key={group.label} delay={index * 0.05} className="bg-paper p-5 sm:min-h-52"><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-electric">0{index + 1}</p><h3 className="mt-8 text-lg font-medium tracking-[-0.04em]">{group.label}</h3><ul className="mt-5 space-y-2 text-sm leading-5 text-muted">{group.items.map((item) => <li className="flex gap-2" key={item}><span className="text-electric">+</span>{item}</li>)}</ul></Reveal>)}
        </div>
      </section>


      <section ref={projectsRef} id="projects" className="relative mx-auto max-w-[1440px] border-t border-white/15 px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="mt-16 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Description → process → output</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">Selected <span className="text-electric">work.</span></h2></Reveal><Reveal delay={0.1} className="max-w-xl self-end text-base leading-7 text-muted">Selected work from 2022–2026. Open any project for the source images, expanded process notes, and documented deliverables.<Link href="/projects" className="group mt-7 inline-flex items-center gap-3 border-b border-electric/60 pb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-electric transition-colors hover:border-electric">View all projects <Arrow /></Link></Reveal></div>
        <div className="relative mt-20 grid gap-5 lg:grid-cols-3">
          <div className="pointer-events-none absolute -left-3 top-0 hidden h-full w-px bg-white/10 lg:block"><motion.div className="w-px origin-top bg-electric" style={{ height: '100%', scaleY: timelineScale }} /></div>
          {projects.map((project, index) => <Reveal key={project.id} delay={index * 0.08} className="h-full"><ProjectCard project={project} index={index} /></Reveal>)}
        </div>
      </section>

      <section className="border-y border-white/15 bg-panel"><div className="mx-auto grid max-w-[1440px] gap-px bg-white/15 sm:grid-cols-3">{awards.map((award) => <div className="bg-panel p-8 lg:p-12" key={award.value}><p className="text-5xl font-medium tracking-[-0.08em] text-electric lg:text-7xl">{award.value}</p><p className="mt-4 max-w-[18ch] font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-muted">{award.label}</p></div>)}</div></section>

      <section id="experience" className="mx-auto max-w-[1440px] border-t border-white/15 px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="flex items-center gap-6 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span className="text-electric">03</span><span>Education</span></div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-32"><Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Education</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">Where I <span className="text-electric">study.</span></h2></Reveal><TimelineList items={education} /></div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] border-t border-white/15 px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="flex items-center gap-6 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span className="text-electric">04</span><span>Work</span></div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-32"><Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Work experience</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">Where I <span className="text-electric">work.</span></h2></Reveal><TimelineList items={workExperience} /></div>
      </section>

      <section id="jhu-extracurriculars" className="mx-auto max-w-[1440px] border-t border-white/15 px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="flex items-center gap-6 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span className="text-electric">05</span><span>JHU extracurriculars</span></div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-32"><Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Johns Hopkins</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">What I&apos;m <span className="text-electric">building.</span></h2></Reveal><TimelineList items={jhuExtracurriculars} /></div>
      </section>

      <section id="california-activities" className="mx-auto max-w-[1440px] border-t border-white/15 px-5 py-28 sm:px-8 lg:px-14 lg:py-44">
        <div className="flex items-center gap-6 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span className="text-electric">06</span><span>California activities</span></div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-32"><Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Southern California</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">Where I <span className="text-electric">started.</span></h2></Reveal><TimelineList items={californiaActivities} /></div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-electric px-5 py-28 text-paper sm:px-8 lg:px-14 lg:py-40"><div className="pointer-events-none absolute right-[-18%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-paper/30 sm:h-[780px] sm:w-[780px]"><div className="absolute inset-[13%] rounded-full border border-paper/25" /><div className="absolute inset-[-6%] rotate-45 rounded-full border border-paper/25" /></div><div className="relative z-10 mx-auto max-w-[1440px]"><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-paper/60">07 / Contact</p><h2 className="mt-6 max-w-[9ch] text-7xl font-medium leading-[.86] tracking-[-0.09em] sm:text-9xl">Contact <span className="text-paper/55">Evan Lee.</span></h2><p className="mt-9 max-w-md text-base leading-7 text-paper/70">For engineering, research, design, or collaboration conversations.</p><div className="mt-10 flex flex-wrap gap-3"><a className="group inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 text-xs font-bold text-ink transition-transform hover:-translate-y-1" href="mailto:elee243@jh.edu" aria-label="Email Evan Lee at elee243@jh.edu">Email <span className="font-mono text-[10px] text-muted">elee243@jh.edu</span> <Arrow /></a><a className="group inline-flex items-center gap-3 rounded-full border border-paper/35 px-5 py-3 text-xs font-bold text-paper transition-colors hover:bg-paper hover:text-ink" href="https://www.linkedin.com/in/evan-lee-bme" target="_blank" rel="noreferrer" aria-label="Open Evan Lee's LinkedIn profile">LinkedIn <span className="font-mono text-[10px] text-paper/65 group-hover:text-muted">evan-lee-bme</span> <Arrow /></a></div></div><p className="relative z-10 mx-auto mt-24 max-w-[1440px] font-mono text-[10px] uppercase tracking-[0.08em] text-paper/60">elee243@jh.edu / linkedin.com/in/evan-lee-bme</p></section>

      <section id="special-thanks" className="border-y border-white/15 bg-panel px-5 py-28 sm:px-8 lg:px-14 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Acknowledgements / Digifolio</p><h2 className="mt-5 max-w-[8ch] text-6xl font-medium leading-[.9] tracking-[-0.085em] sm:text-8xl">Special <span className="text-electric">thanks.</span></h2></Reveal>
          <Reveal delay={0.1} className="max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {specialThanksImages.map((image) => <div className="group relative aspect-[4/3] overflow-hidden border border-white/15 bg-paper" key={image.src}><Image className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 28vw, 90vw" /></div>)}
            </div>
            <div className="mt-10 border-t border-white/15">{specialThanks.map((thanks, index) => <p className="border-b border-white/15 py-6 text-xl leading-[1.2] tracking-[-0.04em] text-ink" key={thanks}><span className="mr-4 font-mono text-[10px] text-electric">0{index + 1}</span>{thanks}</p>)}</div>
          </Reveal>
        </div>
      </section>
      <footer className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:px-8 lg:px-14"><span>© {new Date().getFullYear()} Evan H Lee</span><span className="text-electric">Biomedical engineering / Johns Hopkins</span><a className="text-ink transition-colors hover:text-electric" href="#top">Back to top ↑</a></footer>
    </main>
  )
}
