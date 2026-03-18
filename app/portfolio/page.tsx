import Link from 'next/link'

const projects = [
  {
    slug: 'lra-tax-portal',
    title: 'Tax Portal Modernization',
    client: 'Liberia Revenue Authority',
    category: 'technology',
    tags: ['Software Development', 'Government'],
    result: 'Reduced manual processing time by 70%',
    color: 'from-[#0d4f47] to-[#138a7a]',
    featured: true,
  },
  {
    slug: 'lbdi-rebrand',
    title: 'Full Brand Identity',
    client: 'LBDI Bank',
    category: 'creative',
    tags: ['Branding', 'Finance'],
    result: 'Complete rebrand across 8 branch locations',
    color: 'from-[#1a2f1a] to-[#2d5a2d]',
    featured: true,
  },
  {
    slug: 'ul-cybersecurity',
    title: 'Security Audit & Remediation',
    client: 'University of Liberia',
    category: 'technology',
    tags: ['Cybersecurity', 'Education'],
    result: '28 critical vulnerabilities resolved',
    color: 'from-[#051f1c] to-[#0a3330]',
    featured: true,
  },
  {
    slug: 'monrovia-city-app',
    title: 'City Services Mobile App',
    client: 'Monrovia City Corporation',
    category: 'technology',
    tags: ['Software Development', 'Government'],
    result: '15,000+ citizens served in first month',
    color: 'from-[#0d4f47] to-[#27c4a0]',
    featured: false,
  },
  {
    slug: 'ngo-media-campaign',
    title: 'Media & Content Campaign',
    client: 'UNICEF Liberia',
    category: 'creative',
    tags: ['Media', 'NGO'],
    result: '2M+ impressions across social platforms',
    color: 'from-[#1a3a5c] to-[#2d6b9e]',
    featured: false,
  },
  {
    slug: 'startup-brand',
    title: 'Brand Identity & Print',
    client: 'Liberian Fintech Startup',
    category: 'creative',
    tags: ['Branding', 'Print', 'Startup'],
    result: 'Full identity from logo to launch materials',
    color: 'from-[#2d1a4a] to-[#5a3d8a]',
    featured: false,
  },
]

export default function PortfolioPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Our Work</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Results that<br />
            <span className="text-[#27c4a0]">speak loudly.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
            A selection of projects we're proud of — spanning technology, branding, and everything in between.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">

          {/* Filter tabs */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {['All', 'Technology', 'Creative'].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
                  filter === 'All'
                    ? 'bg-[#0d4f47] text-white'
                    : 'bg-white border border-[#e0e4e0] text-[#5a665a] hover:border-[#27c4a0] hover:text-[#0f6b60]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/portfolio/${project.slug}`}
                className={`group block rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all ${project.featured ? 'md:col-span-1' : ''}`}
              >
                {/* Image area */}
                <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#27c4a0] text-[#051f1c] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-[#27c4a0]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white/60 text-[11px] font-semibold tracking-widest uppercase mb-1">
                      {project.tags.join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white border border-[#e0e4e0] border-t-0 rounded-b-2xl p-6">
                  <div className="text-[#5a665a] text-[13px] font-light mb-1">{project.client}</div>
                  <h3 className="font-display text-[18px] font-bold text-[#181e18] mb-3 group-hover:text-[#0f6b60] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[13px] text-[#27c4a0] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0]"></div>
                    {project.result}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            Let's talk about what we can build together.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
            Start a Project <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}