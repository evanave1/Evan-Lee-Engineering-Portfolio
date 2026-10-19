import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allProjects } from '@/app/data'

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = allProjects.find((item) => item.slug === slug)

  return {
    title: project ? `${project.title} — Evan H Lee` : 'Project — Evan H Lee',
    description: project?.overview,
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen overflow-clip bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link href="/#top" className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.04em]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-electric text-sm font-bold text-paper transition-transform duration-300 group-hover:rotate-12">E</span>
            <span className="text-electric">Evan H Lee</span>
          </Link>
          <Link href="/projects" className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-electric">
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            All projects
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 sm:px-8 lg:px-14 lg:pt-44">
        <section className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-electric">Project {project.id} / {project.period}</p>
            <h1 className="mt-7 max-w-[10ch] text-[clamp(3.7rem,8vw,8.6rem)] font-medium leading-[.86] tracking-[-0.09em] text-electric">{project.title}</h1>
          </div>
          <div className="relative aspect-[1.35/1] overflow-hidden border border-electric/35 bg-[#080b10] shadow-[0_30px_90px_rgba(0,0,0,.35)]">
            <Image src={project.heroImage.src} alt={project.heroImage.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain p-5" />
            <span className="absolute bottom-4 left-4 bg-paper/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-electric">{project.heroImage.label}</span>
          </div>
        </section>

        <section className="mt-24 grid gap-12 border-t border-white/15 pt-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">01 / Project summary</p>
            <h2 className="mt-5 max-w-[13ch] text-4xl font-medium leading-[.95] tracking-[-0.07em] sm:text-6xl">Project <span className="text-electric">record.</span></h2>
            <p className="mt-8 max-w-2xl text-xl leading-[1.25] tracking-[-0.04em]"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-electric">Project description</span>{project.problem}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-electric">Documented method</span>{project.execution}</p>
          </div>
          <aside className="border border-white/15 bg-panel p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-electric">Tools & technologies</p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {project.tools.map((tool) => <li className="flex gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0" key={tool}><span className="text-electric">+</span>{tool}</li>)}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-muted">Project output</p>
            <p className="mt-2 text-lg leading-6 text-ink">{project.result}</p>
          </aside>
        </section>

        <section className="mt-28 border-t border-white/15 pt-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">02 / Source images</p><h2 className="mt-5 text-5xl font-medium leading-[.9] tracking-[-0.08em]">Source <span className="text-electric">images.</span></h2></div>
            <a className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-electric" href={project.sourcePage} target="_blank" rel="noreferrer">Open source portfolio ↗</a>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => {
              const isSketchGallery = project.slug === 'ied-assorted-sketches'
              const imageLinkLabel = isSketchGallery
                ? `Open sketch ${String(index + 1).padStart(2, '0')} at full size`
                : `Open ${image.alt} at full size`

              return (
                <figure className={`group relative overflow-hidden border border-white/15 bg-[#080b10] ${index === 0 && project.gallery.length > 3 ? 'sm:col-span-2 lg:col-span-2' : ''}`} key={image.src}>
                  <a href={image.src} target="_blank" rel="noreferrer" aria-label={imageLinkLabel} className="block cursor-zoom-in">
                    <div className="relative aspect-[1.35/1]">
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]" />
                    </div>
                  </a>
                  <figcaption className="border-t border-white/15 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.1em] text-electric">{image.label} <span aria-hidden="true">↗</span></figcaption>
                </figure>
              )
            })}
          </div>
        </section>

        <section className="mt-28 grid gap-12 border-t border-white/15 pt-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">03 / Process notes</p><h2 className="mt-5 max-w-[9ch] text-5xl font-medium leading-[.9] tracking-[-0.08em]">Project <span className="text-electric">process.</span></h2></div>
          <div className="border-t border-white/15">{project.approach.map((step, index) => <div className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[56px_1fr] sm:gap-8" key={step}><p className="font-mono text-[10px] uppercase tracking-[0.08em] text-electric">0{index + 1}</p><p className="max-w-2xl text-xl leading-[1.2] tracking-[-0.04em] text-ink">{step}</p></div>)}</div>
        </section>

        <section className="mt-28 grid gap-12 border-t border-electric/35 bg-electric p-6 text-paper sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-14">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/60">04 / Documented outputs</p><h2 className="mt-5 max-w-[8ch] text-5xl font-medium leading-[.9] tracking-[-0.08em]">Project <span className="text-paper/55">outputs.</span></h2></div>
          <div className="grid gap-px self-end bg-paper/15 sm:grid-cols-2">{project.deliverables.map((deliverable) => <div className="bg-electric p-5 text-sm font-semibold" key={deliverable}>{deliverable}</div>)}</div>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6">
          <Link className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.08em] text-electric" href="/projects"><span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to all projects</Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{project.title} / Evan H Lee</span>
        </div>
      </div>

      <footer className="border-t border-white/15 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:px-8 lg:px-14"><div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4"><span>© {new Date().getFullYear()} Evan H Lee</span><span className="text-electric">Biomedical engineering / Johns Hopkins</span></div></footer>
    </main>
  )
}
