import Link from 'next/link'

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] mb-8 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Case Study</span>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,72px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[800px]">
            Tax Portal Modernization
          </h1>
          <div className="flex flex-wrap gap-3">
            {['Software Development', 'Government', 'Web Application'].map((tag) => (
              <span key={tag} className="text-[12px] font-medium text-[#4dd9b8] bg-[#27c4a0]/10 border border-[#27c4a0]/20 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="bg-white py-16 px-[5%] border-b border-[#e0e4e0]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Client', value: 'Liberia Revenue Authority' },
            { label: 'Industry', value: 'Government' },
            { label: 'Duration', value: '4 Months' },
            { label: 'Year', value: '2025' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">{item.label}</div>
              <div className="font-display font-bold text-[#181e18] text-[16px]">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-12">

            {/* Cover image placeholder */}
            <div className="w-full h-72 bg-gradient-to-br from-[#0d4f47] to-[#138a7a] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">The Challenge</span>
              </div>
              <p className="text-[#5a665a] text-[16px] font-light leading-relaxed">
                The Liberia Revenue Authority was processing thousands of tax filings manually, leading to long delays, data errors, and frustrated citizens. They needed a modern digital system that could handle the volume, reduce errors, and improve transparency.
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Our Solution</span>
              </div>
              <p className="text-[#5a665a] text-[16px] font-light leading-relaxed">
                We designed and built a comprehensive tax portal that allows citizens to file returns, make payments, and track their status online. The system integrates with the LRA's existing backend and includes an admin dashboard for staff to manage filings and generate reports.
              </p>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">The Results</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { number: '70%', label: 'Reduction in processing time' },
                  { number: '3', label: 'Counties served at launch' },
                  { number: '98%', label: 'System uptime since launch' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-6 text-center">
                    <div className="font-display text-[40px] font-extrabold text-[#0d4f47] leading-none mb-2">{stat.number}</div>
                    <div className="text-[#5a665a] text-[13px] font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-6">
              <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-4">Services Used</div>
              <div className="flex flex-col gap-2">
                {['Software Development', 'UI/UX Design', 'System Integration', 'Training & Support'].map((service) => (
                  <div key={service} className="flex items-center gap-2 text-[14px] text-[#5a665a] font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0] flex-shrink-0"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#0d4f47] rounded-2xl p-6">
              <div className="text-white/80 text-[14px] font-light leading-relaxed italic mb-4">
                "Lumina didn't just build us a system — they understood what we were trying to achieve and engineered a solution that actually fits how our staff works."
              </div>
              <div className="text-[#27c4a0] text-[13px] font-semibold">James Koroma</div>
              <div className="text-white/40 text-[12px] font-light">Director of IT, LRA</div>
            </div>

            {/* CTA */}
            <Link href="/contact" className="bg-[#27c4a0] text-[#051f1c] px-6 py-4 rounded-xl font-bold text-[14px] hover:bg-[#4dd9b8] transition-all text-center">
              Start a Similar Project →
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="bg-[#f8f9f8] py-16 px-[5%] border-t border-[#e0e4e0]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/portfolio" className="text-[#5a665a] hover:text-[#0f6b60] text-[14px] font-medium transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Projects
          </Link>
          <Link href="/contact" className="text-[#0f6b60] hover:text-[#0d4f47] text-[14px] font-medium transition-colors flex items-center gap-2">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}