import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

async function getProject(slug: string) {
  const project = await client.fetch(`
    *[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      category,
      featured,
      coverImage,
      tags,
      challenge,
      solution,
      results,
      publishedAt,
    }
  `, { slug })
  return project
}

async function getRelatedProjects(category: string, currentId: string) {
  const projects = await client.fetch(`
    *[_type == "portfolio" && category == $category && _id != $currentId] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      client,
      category,
      coverImage,
      tags,
      results,
    }
  `, { category, currentId })
  return projects
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-[32px] font-bold text-[#181e18] mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-[#0f6b60] font-medium hover:underline">Back to Portfolio</Link>
        </div>
      </main>
    )
  }

  const relatedProjects = await getRelatedProjects(project.category || '', project._id)

  return (
    <main className="bg-white">

      {/* FULL BLEED HERO IMAGE */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', maxHeight: '780px' }}>

        {/* Background */}
        {project.coverImage ? (
          <img
            src={urlFor(project.coverImage).width(1800).height(780).fit('crop').crop('center').url()}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d4f47] via-[#051f1c] to-[#0a3330]">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        )}

        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051f1c] via-[#051f1c]/60 to-[#051f1c]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#051f1c]/80 via-[#051f1c]/20 to-transparent"></div>

        {/* Top nav */}
        <div className="absolute top-0 left-0 right-0 pt-[90px] px-[5%]">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] transition-colors bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to Portfolio
            </Link>
            {project.featured && (
              <span className="text-[11px] font-bold px-4 py-2 rounded-full bg-[#27c4a0] text-[#051f1c] tracking-widest uppercase">
                Featured Project
              </span>
            )}
          </div>
        </div>

        {/* Hero content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-[5%] pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags && project.tags.map((tag: string) => (
                <span key={tag} className="text-[11px] font-semibold text-[#4dd9b8] bg-[#27c4a0]/15 border border-[#27c4a0]/25 px-3 py-1 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-[clamp(36px,5.5vw,80px)] font-extrabold text-white leading-[1.02] tracking-tight mb-4 max-w-[800px]">
              {project.title}
            </h1>
            <p className="text-white/60 text-[18px] font-light mb-8">{project.client}</p>
            <div className="flex flex-wrap items-center gap-8">
              {[
                { label: 'Client', value: project.client },
                { label: 'Category', value: project.category },
                { label: 'Year', value: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : '2025' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</span>
                  <span className="text-white font-semibold text-[14px]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* STATS BAR */}
      <div className="bg-white border-b border-[#e0e4e0]">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e0e4e0]">
            {[
              { label: 'Client', value: project.client },
              { label: 'Industry', value: project.category },
              { label: 'Services', value: project.tags ? project.tags.length + ' Services' : '—' },
              { label: 'Year', value: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : '2025' },
            ].map((item) => (
              <div key={item.label} className="py-6 px-8 first:pl-0 last:pr-0">
                <div className="text-[10px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">{item.label}</div>
                <div className="font-display font-bold text-[#181e18] text-[15px]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-[5%] py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* LEFT — Main content */}
          <div className="md:col-span-2 flex flex-col gap-16">

            {/* Challenge */}
            {project.challenge && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#0f6b60"/>
                    </svg>
                  </div>
                  <span className="font-display font-bold text-[#181e18] text-[20px]">The Challenge</span>
                </div>
                <p className="text-[#5a665a] text-[17px] font-light leading-[1.85] pl-[52px]">{project.challenge}</p>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
              <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
            </div>

            {/* Solution */}
            {project.solution && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-display font-bold text-[#181e18] text-[20px]">Our Solution</span>
                </div>
                <p className="text-[#5a665a] text-[17px] font-light leading-[1.85] pl-[52px]">{project.solution}</p>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
              <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
            </div>

            {/* Results */}
            {project.results && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0d4f47] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-display font-bold text-[#181e18] text-[20px]">The Results</span>
                </div>
                <div className="pl-[52px]">
                  <div className="bg-gradient-to-br from-[#0d4f47] to-[#051f1c] rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }}></div>
                    <div className="relative z-10">
                      <div className="w-8 h-0.5 bg-[#27c4a0] mb-4"></div>
                      <p className="text-white text-[19px] font-light leading-relaxed">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Services */}
            {project.tags && project.tags.length > 0 && (
              <div className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-7">
                <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-5">Services Used</div>
                <div className="flex flex-col gap-3">
                  {project.tags.map((tag: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-[#e0e4e0] last:border-0">
                      <div className="w-6 h-6 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
                      </div>
                      <span className="text-[14px] text-[#181e18] font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project details */}
            <div className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-7">
              <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-5">Project Info</div>
              <div className="flex flex-col gap-0">
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Category', value: project.category },
                  { label: 'Year', value: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : '2025' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-[#e0e4e0] last:border-0">
                    <span className="text-[13px] text-[#9aa49a] font-light">{item.label}</span>
                    <span className="text-[13px] font-semibold text-[#181e18] text-right max-w-[160px]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0d4f47] rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#27c4a0]">Work with us</span>
              </div>
              <h3 className="font-display font-bold text-white text-[18px] mb-2 leading-tight">
                Want results like these?
              </h3>
              <p className="text-white/55 text-[13px] font-light leading-relaxed mb-6">
                Let&apos;s build something great together. Tell us about your project.
              </p>
              <Link href="/contact" className="block bg-[#27c4a0] text-[#051f1c] rounded-xl py-3.5 font-bold text-[14px] hover:bg-[#4dd9b8] transition-all text-center">
                Start a Similar Project
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="bg-[#f8f9f8] py-20 px-[5%] border-t border-[#e0e4e0]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                  <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">More Work</span>
                </div>
                <h2 className="font-display text-[32px] font-bold text-[#181e18] tracking-tight">Related Projects</h2>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0f6b60] hover:text-[#0d4f47] transition-colors">
                View All Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related: any) => (
                <Link key={related._id} href={`/portfolio/${related.slug.current}`} className="group block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                  <div className="h-52 bg-gradient-to-br from-[#0d4f47] to-[#138a7a] relative overflow-hidden">
                    {related.coverImage ? (
                      <img
                        src={urlFor(related.coverImage).width(600).height(350).fit('crop').crop('center').url()}
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '18px 18px'
                      }}></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white/60 text-[11px] font-semibold tracking-widest uppercase">
                        {related.tags && related.tags.slice(0, 2).join(' · ')}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[#9aa49a] text-[12px] font-light mb-1">{related.client}</div>
                    <h3 className="font-display text-[17px] font-bold text-[#181e18] leading-tight mb-3 group-hover:text-[#0f6b60] transition-colors">
                      {related.title}
                    </h3>
                    {related.results && (
                      <div className="flex items-center gap-2 text-[13px] text-[#27c4a0] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0]"></div>
                        {related.results}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM NAV */}
      <section className="bg-white py-10 px-[5%] border-t border-[#e0e4e0]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#5a665a] hover:text-[#0f6b60] text-[14px] font-medium transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All Projects
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0d4f47] text-white px-6 py-3 rounded-xl font-bold text-[14px] hover:bg-[#0f6b60] transition-all">
            Start a Project
          </Link>
        </div>
      </section>

    </main>
  )
}