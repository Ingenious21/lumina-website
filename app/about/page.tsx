import Link from 'next/link'

export default function AboutPage() {
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
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">About Us</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Built in Liberia.<br />
            <span className="text-[#27c4a0]">Built for Liberia.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
            We started with a simple belief — that Liberian businesses deserve world-class digital services, built by people who understand the local context.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Our Story</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#181e18] leading-tight tracking-tight mb-6">
              From a vision to Liberia's leading tech firm
            </h2>
            <p className="text-[#5a665a] text-[16px] font-light leading-relaxed mb-4">
              Lumina Technologies was founded in Monrovia in 2025 with a clear mission — to bridge the gap between the digital tools available globally and the businesses that need them here in Liberia.
            </p>
            <p className="text-[#5a665a] text-[16px] font-light leading-relaxed mb-4">
              From day one, we built Lumina as a full-service technology and creative agency — combining software development, IT consulting, cybersecurity, branding, design, print and media under one roof.
            </p>
            <p className="text-[#5a665a] text-[16px] font-light leading-relaxed">
              In our first year alone, we secured contracts across multiple industries and began building a reputation as the most trusted digital partner in Liberia.
            </p>
          </div>
          <div className="bg-[#0d4f47] rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
            <div className="relative z-10">
              <div className="text-[72px] font-display font-extrabold text-white/10 leading-none mb-4">LR</div>
              <p className="text-white/90 text-[20px] font-light leading-relaxed italic">
                "Built here, for here — with <strong className="text-[#4dd9b8] font-semibold not-italic">global standards</strong> and local understanding."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">What Drives Us</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white border border-[#e0e4e0] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#edfdf9] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#181e18] mb-3">Our Mission</h3>
              <p className="text-[#5a665a] text-[15px] font-light leading-relaxed">
                To deliver world-class technology and creative solutions that empower Liberian businesses to grow, compete, and thrive in the digital economy.
              </p>
            </div>
            <div className="bg-white border border-[#e0e4e0] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#edfdf9] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#0f6b60" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="3" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#181e18] mb-3">Our Vision</h3>
              <p className="text-[#5a665a] text-[15px] font-light leading-relaxed">
                To be the most trusted technology partner in West Africa — known for excellence, integrity, and genuine impact on the communities we serve.
              </p>
            </div>
            <div className="bg-white border border-[#e0e4e0] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#edfdf9] flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M8 12L11 15L16 9" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#181e18] mb-3">Our Values</h3>
              <p className="text-[#5a665a] text-[15px] font-light leading-relaxed">
                Excellence, transparency, local pride, and long-term partnerships. We don't just deliver projects — we invest in your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Our Journey</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#181e18] leading-tight tracking-tight mb-14">
            Key milestones
          </h2>
          <div className="flex flex-col gap-0">
            {[
              { year: '2025', title: 'Lumina Founded', desc: 'Established in Monrovia with a vision to transform Liberia\'s digital landscape.' },
              { year: '2025', title: 'First Contracts Secured', desc: 'Delivered our first projects across software development and creative services.' },
              { year: '2025', title: 'Full-Service Launch', desc: 'Expanded to offer technology, cybersecurity, branding, design, print and media under one roof.' },
            ].map((milestone, i, arr) => (
              <div key={i} className="flex gap-8 pb-10 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#edfdf9] border-2 border-[#27c4a0] flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-[#0f6b60] text-xs">{milestone.year}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-[#e0e4e0] mt-2"></div>}
                </div>
                <div className="pb-4">
                  <h4 className="font-display font-bold text-[#181e18] text-lg mb-1">{milestone.title}</h4>
                  <p className="text-[#5a665a] text-[15px] font-light">{milestone.desc}</p>
                </div>
              </div>
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
            Work with us
          </h2>
          <p className="text-white/60 text-[18px] font-light mb-11 max-w-[500px] mx-auto">
            Ready to start a project or join the team? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
              Get in Touch <span>→</span>
            </Link>
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/75 px-6 py-4 rounded-full border border-white/15 text-[15px] hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}