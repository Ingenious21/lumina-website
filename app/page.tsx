import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen bg-[#051f1c] relative flex items-center overflow-hidden">
        
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Glow orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-20" style={{background: 'radial-gradient(circle, #1aab97 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #3dd68c 0%, transparent 70%)'}}></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-[5%] pt-[72px] w-full">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#27c4a0]/12 border border-[#27c4a0]/25 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#27c4a0] animate-pulse"></div>
            <span className="text-[#4dd9b8] text-xs font-medium tracking-widest uppercase">Monrovia, Liberia — Est. 2025</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(46px,7vw,96px)] font-extrabold text-white leading-[0.95] tracking-tight mb-7">
            Illuminating<br />
            <span className="text-transparent" style={{WebkitTextStroke: '1.5px #27c4a0'}}>Liberia's</span><br />
            <span className="text-[#27c4a0]">Digital Future</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-[clamp(15px,2vw,18px)] font-light max-w-[540px] leading-relaxed mb-11">
            We build technology, craft brands, and drive growth for businesses across Liberia and West Africa — with world-class expertise, rooted locally.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
              Explore Our Services
              <span>→</span>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/75 px-6 py-4 rounded-full border border-white/15 text-[15px] hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
              View Our Work
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="bg-[#0a3330] py-7 overflow-hidden border-b border-white/5">
        <div className="text-center text-[11px] font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
          Trusted by organizations across Liberia
        </div>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {['Central Bank of Liberia', 'Liberia Revenue Authority', 'University of Liberia', 'Monrovia City Corp', 'LBDI Bank', 'UNICEF Liberia', 'Liberia Telecom', 'Ministry of Finance', 'Central Bank of Liberia', 'Liberia Revenue Authority', 'University of Liberia', 'Monrovia City Corp', 'LBDI Bank', 'UNICEF Liberia', 'Liberia Telecom', 'Ministry of Finance'].map((client, i) => (
            <span key={i} className="text-white/25 font-bold text-sm tracking-wide">{client}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-10 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">What We Do</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-[#181e18] leading-tight tracking-tight">
                Two disciplines.<br />One partner.
              </h2>
            </div>
            <p className="text-[#5a665a] text-[17px] font-light max-w-[520px] leading-relaxed">
              Technology and creativity aren't separate worlds — at Lumina, they work in concert to build businesses that are powerful and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/technology" className="bg-white border border-[#e0e4e0] rounded-2xl p-11 hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all group block">
              <div className="w-14 h-14 rounded-2xl bg-[#edfdf9] flex items-center justify-center mb-7 group-hover:bg-[#c5f7ef] transition-colors">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#181e18] mb-3">Technology & Engineering</h3>
              <p className="text-[#5a665a] text-[15px] font-light leading-relaxed mb-7">
                From custom software to enterprise security — we build, protect, and scale the technology infrastructure your business runs on.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Software Development', 'IT Consulting', 'Cybersecurity', 'Data Analysis'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#0f6b60] bg-[#edfdf9] border border-[#c5f7ef] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <span className="text-[14px] font-bold text-[#0f6b60] font-display group-hover:gap-4 flex items-center gap-2">
                Explore Technology <span>→</span>
              </span>
            </Link>

            <Link href="/services/creative" className="bg-white border border-[#e0e4e0] rounded-2xl p-11 hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all group block">
              <div className="w-14 h-14 rounded-2xl bg-[#edfdf9] flex items-center justify-center mb-7 group-hover:bg-[#c5f7ef] transition-colors">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#181e18] mb-3">Creative & Brand</h3>
              <p className="text-[#5a665a] text-[15px] font-light leading-relaxed mb-7">
                Your brand is what the world sees first. We craft identities, visuals, and media that make sure it's unforgettable.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Branding', 'Design', 'Print', 'Media'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#0f6b60] bg-[#edfdf9] border border-[#c5f7ef] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <span className="text-[14px] font-bold text-[#0f6b60] font-display group-hover:gap-4 flex items-center gap-2">
                Explore Creative <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0d4f47] py-16 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '5+', label: 'Years of Excellence' },
            { number: '12', label: 'Industries Served' },
          ].map((stat, i) => (
            <div key={i} className={`text-center py-5 px-10 ${i < 3 ? 'border-r border-white/10' : ''}`}>
              <div className="font-display text-[clamp(42px,5vw,64px)] font-extrabold text-white leading-none tracking-tight mb-2">
                {stat.number}
              </div>
              <div className="text-white/50 text-[13px] uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0d4f47] py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold text-white tracking-tight leading-tight mb-5">
            Ready to build<br />something great?
          </h2>
          <p className="text-white/60 text-[18px] font-light mb-11 max-w-[500px] mx-auto">
            Whether you have a project in mind or just want to explore what's possible — let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#27c4a0] text-[#051f1c] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5">
              Start a Conversation <span>→</span>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/75 px-6 py-4 rounded-full border border-white/15 text-[15px] hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}