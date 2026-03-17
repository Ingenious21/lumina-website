import Link from 'next/link'

export default function TechnologyPage() {
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
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Technology & Engineering</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Technology that<br />
            <span className="text-[#27c4a0]">powers growth.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed mb-10">
            From custom software to enterprise security — we build, protect, and scale the technology infrastructure your business runs on.
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
            Our technology services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <path d="M8 10L4 14L8 18M20 10L24 14L20 18M15 6L13 22" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
                title: 'Software Development',
                desc: 'Custom web applications, mobile apps, platforms and APIs built to your exact requirements.',
                bullets: ['Web Applications', 'Mobile Apps (iOS & Android)', 'Custom Platforms', 'API Development & Integration'],
              },
              {
                icon: <path d="M12 2L2 7V12C2 16.4 6.4 20.7 12 22C17.6 20.7 22 16.4 22 12V7L12 2Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/>,
                title: 'Cybersecurity',
                desc: 'Protect your business with comprehensive security assessments, monitoring and compliance.',
                bullets: ['Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance & Governance'],
              },
              {
                icon: <><path d="M3 3H9V9H3V3Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/><path d="M15 3H21V9H15V3Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/><path d="M3 15H9V21H3V15Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinejoin="round"/><path d="M15 18H21M18 15V21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/></>,
                title: 'IT Consulting',
                desc: 'Strategic technology advice, infrastructure planning, cloud migration and ongoing IT support.',
                bullets: ['IT Strategy & Roadmap', 'Cloud Migration', 'Infrastructure Planning', 'Managed IT Support'],
              },
              {
                icon: <><path d="M3 3V21H21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/><path d="M7 14L11 10L15 13L21 7" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></>,
                title: 'Data Analysis',
                desc: 'Turn your raw data into actionable insights with dashboards, reports and data strategy.',
                bullets: ['Business Intelligence Dashboards', 'Data Strategy', 'Reporting Pipelines', 'Data Visualization'],
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
            Our process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your business, goals and challenges.' },
              { step: '02', title: 'Planning', desc: 'We define scope, timeline and technical approach.' },
              { step: '03', title: 'Build', desc: 'We design and develop with regular updates.' },
              { step: '04', title: 'Test', desc: 'Rigorous QA before anything goes live.' },
              { step: '05', title: 'Launch & Support', desc: 'We deploy and stay on for ongoing support.' },
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
            Ready to build something?
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