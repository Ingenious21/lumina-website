import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

const gradients = [
  'from-[#0d4f47] to-[#138a7a]',
  'from-[#1a2f1a] to-[#2d5a2d]',
  'from-[#051f1c] to-[#0a3330]',
  'from-[#1a1a2e] to-[#0d4f47]',
  'from-[#0d2d4f] to-[#1a5a8a]',
  'from-[#2d1a4a] to-[#5a3d8a]',
]

async function getProjects() {
  const projects = await client.fetch(`
    *[_type == "portfolio"] | order(featured desc, publishedAt desc) {
      _id,
      title,
      slug,
      client,
      category,
      featured,
      coverImage,
      tags,
      results,
      publishedAt,
    }
  `)
  return projects
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Our Work</span>
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
              Results that<br />
              <span className="text-[#27c4a0]">speak loudly.</span>
            </h1>
            <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
              A selection of projects we are proud of — spanning technology, branding, and everything in between.
            </p>
          </div>
          <div className="text-right">
            <div className="text-white/40 text-[12px] font-light uppercase tracking-widest mb-2">Total Projects</div>
            <div className="font-display text-[56px] font-extrabold text-white leading-none">{projects.length}</div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="bg-white border-b border-[#e0e4e0] sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {['All', 'Technology & Engineering', 'Creative & Brand'].map((filter) => (
              <button key={filter} className={`px-5 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${filter === 'All' ? 'bg-[#0d4f47] text-white' : 'text-[#5a665a] border border-[#e0e4e0] hover:border-[#27c4a0] hover:text-[#0f6b60]'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-[#9aa49a] text-[16px] font-light">No projects yet. Check back soon.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project: any, i: number) => (
                <Link
                  key={project._id}
                  href={`/portfolio/${project.slug.current}`}
                  className={`group block rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all ${project.featured ? 'md:col-span-1' : ''}`}
                >
                  {/* Image area */}
                  <div className={`h-52 bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}>
                    {project.coverImage ? (
                      <img
                        src={urlFor(project.coverImage).width(600).height(350).fit('crop').crop('center').url()}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-[#27c4a0] text-[#051f1c] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-[#27c4a0]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white/60 text-[11px] font-semibold tracking-widest uppercase mb-1">
                        {project.tags && project.tags.join(' · ')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-[#e0e4e0] border-t-0 rounded-b-2xl p-6">
                    <div className="text-[#5a665a] text-[13px] font-light mb-1">{project.client}</div>
                    <h3 className="font-display text-[18px] font-bold text-[#181e18] mb-3 group-hover:text-[#0f6b60] transition-colors">
                      {project.title}
                    </h3>
                    {project.results && (
                      <div className="flex items-center gap-2 text-[13px] text-[#27c4a0] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0]"></div>
                        {project.results}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d4f47] py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-extrabold text-white tracking-tight leading-tight mb-5">
            Want results like these?
          </h2>
          <p className="text-white/60 text-[18px] font-light mb-11 max-w-[500px] mx-auto">
            Let&apos;s talk about what we can build together.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}