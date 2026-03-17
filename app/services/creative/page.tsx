import Link from 'next/link'

export default function CreativePage() {
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
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Creative & Brand</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Brands that<br />
            <span className="text-[#27c4a0]">leave a mark.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed mb-10">
            Your brand is what the world sees first. We craft identities, visuals, and media that make sure it's unforgettable.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
            Start a Project <span>→</span>
          </Link>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">What We Offer</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#181e18] leading-tight tracking-tight mb-14">
            Our creative services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <><circle cx="12" cy="12" r="3" stroke="#0f6b60" strokeWidth="1.8"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#0f6b60" strokeWidth="1.8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/></>,
                title: 'Branding',
                desc: 'Complete brand identity systems that tell your story and set you apart from the competition.',
                bullets: ['Logo Design', 'Brand Identity Systems', 'Brand Guidelines', 'Naming & Positioning'],
              },
              {
                icon: <><rect x="3" y="3" width="18" height="14" rx="2" stroke="#0f6b60" strokeWidth="1.8"/><path d="M8 21H16M12 17V21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/></>,
                title: 'Design',
                desc: 'Beautiful, purposeful design for digital and print — from UI/UX to social media visuals.',
                bullets: ['UI/UX Design', 'Graphic Design', 'Social Media Visuals', 'Presentation Decks'],
              },
              {
                icon: <><path d="M4 6H20M4 10H20M4 14H14" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/><path d="M16 17L19 20M19 17L16 20" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/></>,
                title: 'Print',
                desc: 'High-quality print materials that represent your brand professionally in the physical world.',
                bullets: ['Business Cards', 'Flyers & Brochures', 'Banners & Signage', 'Packaging Design'],
              },
              {
                icon: <><path d="M15 10L19.553 7.724A.5.5 0 0120 8.162v7.676a.5.5 0 01-.553.438L15 14M5 8h10v8H5a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/></>,
                title: 'Media',
                desc: 'Professional photography, videography and social content that brings your brand to life.',
                bullets: ['Photography', 'Videography', 'Social Media Content', 'Promotional Videos'],
              },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-[#e0e4e0] rounded-2xl p-10 hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#edfdf9] flex items-center justify-center mb-7">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{service.icon}</svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[#181e18] mb-3">{service.title}</h3>
                <p className="text-[#5a665a] text-[15px] font-light leading-relaxed mb-6">{service.desc}</p>
                <ul className="flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[14px] text-[#5a665a] font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0] flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">How We Work</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#181e18] leading-tight tracking-tight mb-14">
            Our creative process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Brief', desc: 'We understand your brand, audience and goals.' },
              { step: '02', title: 'Research', desc: 'We study your market and competitors.' },
              { step: '03', title: 'Concepts', desc: 'We present multiple creative directions.' },
              { step: '04', title: 'Refine', desc: 'We perfect the chosen direction together.' },
              { step: '05', title: 'Deliver', desc: 'Final files in all formats you need.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#edfdf9] border-2 border-[#27c4a0] flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-[#0f6b60] text-sm">{step.step}</span>
                </div>
                <h4 className="font-display font-bold text-[#181e18] mb-2">{step.title}</h4>
                <p className="text-[#5a665a] text-[14px] font-light leading-relaxed">{step.desc}</p>
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
            Ready to build your brand?
          </h2>
          <p className="text-white/60 text-[18px] font-light mb-11 max-w-[500px] mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
            Get a Quote <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}