import Link from 'next/link'

export default function JobPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] mb-8 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Careers
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#27c4a0]/15 text-[#4dd9b8] border border-[#27c4a0]/20">Technology</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/8 text-white/60 border border-white/10">Full Time</span>
            <span className="text-[11px] text-white/40">Monrovia, Liberia</span>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,72px)] font-extrabold text-white leading-tight tracking-tight mb-6">
            Full Stack Developer
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
            Join our technology team and build products that power Liberia&apos;s digital economy.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-12">

            {/* About the role */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">About the Role</span>
              </div>
              <p className="text-[#5a665a] text-[16px] font-light leading-relaxed mb-4">
                We are looking for an experienced Full Stack Developer to join our growing technology team. You will work on exciting, high-impact projects for clients across Liberia and West Africa — from government platforms to fintech applications.
              </p>
              <p className="text-[#5a665a] text-[16px] font-light leading-relaxed">
                You will collaborate closely with our design and product teams to deliver robust, scalable solutions that genuinely improve how people work and live in Liberia.
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Responsibilities</span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Design, build and maintain efficient, reusable and reliable frontend and backend code',
                  'Work with product designers to implement pixel-perfect, responsive user interfaces',
                  'Integrate third-party APIs and internal services',
                  'Write clean, well-documented code and conduct code reviews',
                  'Participate in architecture decisions and technical planning',
                  'Troubleshoot and debug applications in development and production',
                  'Collaborate with the team using Git, Jira and agile workflows',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5a665a] text-[15px] font-light">
                    <div className="w-5 h-5 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#0f6b60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Requirements</span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  '3+ years of experience in full stack development',
                  'Strong proficiency in React, Next.js or similar modern frontend frameworks',
                  'Solid backend experience with Node.js, Python or similar',
                  'Experience with PostgreSQL, MySQL or MongoDB',
                  'Familiarity with REST APIs and GraphQL',
                  'Understanding of cloud platforms (AWS, GCP or Azure)',
                  'Strong communication skills and ability to work in a team',
                  'Passion for building products that make a real difference',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5a665a] text-[15px] font-light">
                    <div className="w-5 h-5 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#0f6b60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Nice to Have</span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Experience working with government or enterprise clients',
                  'Knowledge of mobile development (React Native)',
                  'Experience with DevOps and CI/CD pipelines',
                  'Contributions to open source projects',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5a665a] text-[15px] font-light">
                    <div className="w-5 h-5 rounded-full bg-[#f8f9f8] border border-[#e0e4e0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9aa49a]"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">

            {/* Job details */}
            <div className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-6">
              <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-5">Job Details</div>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Department', value: 'Technology' },
                  { label: 'Type', value: 'Full Time' },
                  { label: 'Location', value: 'Monrovia, Liberia' },
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Posted', value: 'March 2025' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#e0e4e0] last:border-0">
                    <span className="text-[13px] text-[#9aa49a] font-light">{item.label}</span>
                    <span className="text-[13px] font-semibold text-[#181e18]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What we offer */}
            <div className="bg-[#0d4f47] rounded-2xl p-6">
              <div className="text-[11px] font-bold text-[#27c4a0] uppercase tracking-[0.15em] mb-5">What We Offer</div>
              <div className="flex flex-col gap-3">
                {[
                  'Competitive salary',
                  'Flexible working hours',
                  'Training & development',
                  'Collaborative culture',
                  'Exciting client projects',
                  'Career growth path',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-white/70 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0] flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <a href="mailto:careers@luminatechnologies.com?subject=Application%20-%20Full%20Stack%20Developer" className="bg-[#27c4a0] text-[#051f1c] px-6 py-4 rounded-xl font-bold text-[15px] hover:bg-[#4dd9b8] transition-all text-center block">Apply for This Role</a>

            <p className="text-[#9aa49a] text-[12px] font-light text-center leading-relaxed">
              Send your CV and a short note about yourself to careers@luminatechnologies.com
            </p>
          </div>
        </div>
      </section>

      {/* OTHER ROLES */}
      <section className="bg-[#f8f9f8] py-16 px-[5%] border-t border-[#e0e4e0]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div>
            <div className="font-display font-bold text-[#181e18] text-[18px] mb-1">See all open positions</div>
            <div className="text-[#5a665a] text-[14px] font-light">We&apos;re hiring across technology and creative roles.</div>
          </div>
          <Link href="/careers" className="inline-flex items-center gap-2 bg-[#0d4f47] text-white px-6 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#0f6b60] transition-all">View All Roles</Link>
        </div>
      </section>
    </main>
  )
}