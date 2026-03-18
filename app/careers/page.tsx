import Link from 'next/link'

export default function CareersPage() {
  const jobs = [
    { title: 'Full Stack Developer', department: 'Technology', type: 'Full Time', location: 'Monrovia, Liberia', description: 'We are looking for an experienced Full Stack Developer to join our growing technology team. You will work on exciting projects for clients across Liberia and West Africa.', email: 'mailto:careers@luminatechnologies.com?subject=Application%20-%20Full%20Stack%20Developer' },
    { title: 'UI/UX Designer', department: 'Creative', type: 'Full Time', location: 'Monrovia, Liberia', description: 'We need a talented UI/UX Designer who can create beautiful, user-friendly interfaces for web and mobile applications.', email: 'mailto:careers@luminatechnologies.com?subject=Application%20-%20UI%20UX%20Designer' },
    { title: 'Cybersecurity Analyst', department: 'Technology', type: 'Full Time', location: 'Monrovia, Liberia', description: 'Join our cybersecurity team to help protect Liberian businesses from digital threats through assessments, monitoring and consulting.', email: 'mailto:careers@luminatechnologies.com?subject=Application%20-%20Cybersecurity%20Analyst' },
    { title: 'Brand Designer', department: 'Creative', type: 'Full Time', location: 'Monrovia, Liberia', description: 'We are looking for a talented Brand Designer to create compelling visual identities for our clients across Liberia.', email: 'mailto:careers@luminatechnologies.com?subject=Application%20-%20Brand%20Designer' },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Careers</span>
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-extrabold text-white leading-tight tracking-tight mb-6">
              Build Liberia&apos;s<br /><span className="text-[#27c4a0]">digital future.</span>
            </h1>
            <p className="text-white/60 text-[18px] font-light leading-relaxed mb-8">
              Join a team of passionate technologists and creatives working on projects that genuinely matter — right here in Monrovia.
            </p>
            <Link href="#openings" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">View Open Positions</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '10+', label: 'Team Members' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '2025', label: 'Founded' },
              { number: '100%', label: 'Local Team' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="font-display text-[36px] font-extrabold text-[#27c4a0] leading-none mb-2">{stat.number}</div>
                <div className="text-white/50 text-[13px] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-white py-16 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Why Join Us</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M8 12L11 15L16 9" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Impactful Work</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Projects that shape Liberia&apos;s digital future.</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M23 21V19C22.9 17.9 22 17.1 21 17" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M1 21V19C1.1 17.9 2 17.1 3 17" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M16 3.1C17.8 3.6 19 5.2 19 7C19 8.8 17.8 10.4 16 10.9" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M8 3.1C6.2 3.6 5 5.2 5 7C5 8.8 6.2 10.4 8 10.9" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Great Team</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Talented people who love what they do.</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Diverse Projects</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Always challenging, always something new.</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 20V10" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M18 20V4" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M6 20V16" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Career Growth</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Training and mentorship to help you level up.</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M8 21H16M12 17V21" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Modern Tools</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Latest tech to do your best work.</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-5 hover:border-[#27c4a0] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#edfdf9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#0f6b60" strokeWidth="1.8"/>
                  <path d="M12 7V12L15 15" stroke="#0f6b60" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[15px] mb-1">Flexible Hours</div>
                <div className="text-[#5a665a] text-[13px] font-light leading-relaxed">Results focused, not clock watching.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section id="openings" className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Open Positions</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#181e18] leading-tight tracking-tight mb-14">Current openings</h2>
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white border border-[#e0e4e0] rounded-2xl p-8 hover:border-[#27c4a0] hover:shadow-lg transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#edfdf9] text-[#0f6b60] border border-[#c5f7ef]">{job.department}</span>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#f0f2f0] text-[#5a665a] border border-[#e0e4e0]">{job.type}</span>
                      <span className="text-[11px] text-[#9aa49a]">{job.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-[#181e18] text-[22px] mb-3 group-hover:text-[#0f6b60] transition-colors">{job.title}</h3>
                    <p className="text-[#5a665a] text-[14px] font-light leading-relaxed max-w-[600px]">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0 flex gap-3">
                    <Link href={'/careers/' + job.title.toLowerCase().replace(/ /g, '-')} className="inline-flex items-center gap-2 bg-white border border-[#e0e4e0] text-[#181e18] px-5 py-3.5 rounded-xl font-bold text-[13px] hover:border-[#27c4a0] hover:text-[#0f6b60] transition-all whitespace-nowrap">View Role</Link>
                    <a href={job.email} className="inline-flex items-center gap-2 bg-[#0d4f47] text-white px-5 py-3.5 rounded-xl font-bold text-[13px] hover:bg-[#0f6b60] transition-all whitespace-nowrap">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#051f1c] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-white text-[20px] mb-1">Don&apos;t see a role that fits?</h3>
              <p className="text-white/50 text-[14px] font-light">Send us a general application — we&apos;re always looking for great people.</p>
            </div>
            <a href="mailto:careers@luminatechnologies.com?subject=General%20Application" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-7 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#4dd9b8] transition-all whitespace-nowrap">Send General Application</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d4f47] py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-extrabold text-white tracking-tight leading-tight mb-5">Have questions?</h2>
          <p className="text-white/60 text-[18px] font-light mb-11 max-w-[500px] mx-auto">Reach out to our team and we&apos;ll be happy to tell you more about working at Lumina.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}