import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] mb-8 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#27c4a0]/15 text-[#4dd9b8]">
              Industry Insight
            </span>
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,64px)] font-extrabold text-white leading-tight tracking-tight mb-6">
            The State of Liberia's Digital Economy in 2025
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-[13px]">
            <span>By Lumina Technologies</span>
            <span>·</span>
            <span>March 2025</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <div className="px-[5%]">
        <div className="max-w-[800px] mx-auto -mt-8">
          <div className="w-full h-64 bg-gradient-to-br from-[#0d4f47] to-[#138a7a] rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="bg-white py-16 px-[5%]">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-[#5a665a] text-[17px] font-light leading-relaxed mb-6">
              Liberia's digital economy is at an inflection point. After years of slow adoption, businesses across Monrovia and beyond are beginning to embrace digital tools — not as a luxury, but as a necessity for survival and growth.
            </p>

            <h2 className="font-display text-[28px] font-bold text-[#181e18] mt-10 mb-4">
              The current landscape
            </h2>
            <p className="text-[#5a665a] text-[17px] font-light leading-relaxed mb-6">
              According to recent data, mobile money usage in Liberia has grown by over 60% in the last two years. More businesses are accepting digital payments, more government services are moving online, and more Liberian entrepreneurs are building digital-first businesses.
            </p>

            <h2 className="font-display text-[28px] font-bold text-[#181e18] mt-10 mb-4">
              Where the opportunities are
            </h2>
            <p className="text-[#5a665a] text-[17px] font-light leading-relaxed mb-6">
              Despite the growth, significant gaps remain. Many businesses still lack professional websites, proper cybersecurity practices, or digital marketing strategies. These gaps represent enormous opportunities for businesses willing to invest in their digital presence.
            </p>

            <div className="bg-[#f8f9f8] border-l-4 border-[#27c4a0] rounded-r-xl p-6 my-8">
              <p className="text-[#181e18] text-[17px] font-medium leading-relaxed italic">
                "The businesses that invest in their digital infrastructure today will be the ones that dominate their industries tomorrow."
              </p>
            </div>

            <h2 className="font-display text-[28px] font-bold text-[#181e18] mt-10 mb-4">
              What businesses should do now
            </h2>
            <p className="text-[#5a665a] text-[17px] font-light leading-relaxed mb-6">
              The path forward is clear — businesses need to invest in three core areas: a professional digital presence, secure IT infrastructure, and data-driven decision making. These aren't optional extras anymore — they're the foundation of a competitive business in 2025.
            </p>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#e0e4e0]">
            {['Digital Economy', 'Liberia', 'Business Growth', 'Technology'].map((tag) => (
              <span key={tag} className="text-[12px] font-medium text-[#5a665a] bg-[#f8f9f8] border border-[#e0e4e0] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-5 mt-8 p-6 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl">
            <img
              src="/logo.png"
              alt="Lumina Technologies"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <div className="font-display font-bold text-[#181e18] mb-1">Lumina Technologies</div>
              <div className="text-[#5a665a] text-[14px] font-light">
                Insights and perspectives from Liberia's leading technology and creative agency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f9f8] py-16 px-[5%] border-t border-[#e0e4e0]">
        <div className="max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-display font-bold text-[#181e18] text-[18px] mb-1">Ready to grow your business digitally?</div>
            <div className="text-[#5a665a] text-[14px] font-light">Let's talk about what Lumina can do for you.</div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0d4f47] text-white px-6 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#0f6b60] transition-all whitespace-nowrap">
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  )
}