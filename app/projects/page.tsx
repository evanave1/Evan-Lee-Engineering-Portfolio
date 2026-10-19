import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { allProjects } from '@/app/data'

export const metadata: Metadata = {
  title: 'All Projects — Evan H Lee',
  description: 'A complete index of Evan H Lee\'s engineering, design, and research projects.',
}

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen overflow-clip bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link href="/#top" className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.04em]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-electric text-sm font-bold text-paper transition-transform duration-300 group-hover:rotate-12">E</span>
            <span className="text-electric">Evan H Lee</span>
          </Link>
          <Link href="/#projects" className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-electric">Home / Selected work</Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 sm:px-8 lg:px-14 lg:pt-44">
        <section className="border-b border-white/15 pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-electric">Project index / {allProjects.length} projects / 2022 — 2026</p>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-8">
            <h1 className="max-w-[8ch] text-[clamp(4rem,10vw,9rem)] font-medium leading-[.84] tracking-[-0.09em]">All <span className="text-electric">projects.</span></h1>
            <p className="max-w-md text-base leading-7 text-muted">A complete view of the engineering, design, and research work documented across the portfolio, including every IED / CEA output.</p>
          </div>
        </section>

        <section className="mt-12 grid items-start gap-5 lg:grid-cols-3" aria-label="All projects">
          {allProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="group block overflow-hidden border border-white/15 bg-panel transition-transform duration-300 hover:-translate-y-2" key={project.id}>
              <div className="relative aspect-[1.35/1] overflow-hidden border-b border-white/15 bg-[#080b10]">
                <Image src={project.heroImage.src} alt={project.heroImage.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.035]" />
                <span className="absolute bottom-4 left-4 bg-paper/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-electric">{project.heroImage.label}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"><span>{project.id} / {project.period}</span><span className="text-electric">{project.slug === 'ied-assorted-sketches' ? 'View sketches ↗' : 'Open ↗'}</span></div>
                <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.08em] text-electric">{project.type}</p>
                <h2 className="mt-3 text-3xl font-medium leading-[.95] tracking-[-0.07em]">{project.title}</h2>
                <p className="mt-5 text-sm leading-6 text-muted">{project.overview}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>

      <footer className="border-t border-white/15 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:px-8 lg:px-14"><div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4"><span>© {new Date().getFullYear()} Evan H Lee</span><span className="text-electric">Biomedical engineering / Johns Hopkins</span></div></footer>
    </main>
  )
}
