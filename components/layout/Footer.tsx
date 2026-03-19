import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#030f0d] relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#27c4a0]/40 to-transparent"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-[5%]">

        {/* CTA Banner */}
        <div className="py-20 border-b border-white/6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#27c4a0]">Let&apos;s Work Together</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-white leading-tight tracking-tight">
                Ready to build something<br />
                <span className="text-[#27c4a0]">extraordinary?</span>
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <p className="text-white/50 text-[15px] font-light leading-relaxed md:text-right max-w-[360px]">
                From software to branding — we&apos;re your all-in-one digital partner in Liberia.
              </p>
              <div className="flex gap-3">
                <Link href="/contact" className="bg-[#27c4a0] text-[#051f1c] px-7 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#4dd9b8] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27c4a0]/20">
                  Start a Project
                </Link>
                <Link href="/portfolio" className="text-white/70 border border-white/15 px-7 py-3.5 rounded-full text-[14px] font-medium hover:text-white hover:border-white/35 hover:bg-white/5 transition-all">
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/6">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="Lumina Technologies" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#27c4a0]/20"/>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-white text-[18px] tracking-widest uppercase">Lumina</span>
                <span className="text-[#27c4a0] text-[10px] tracking-[0.2em] uppercase font-medium">Technologies Inc.</span>
              </div>
            </Link>
            <p className="text-white/40 text-[14px] font-light leading-relaxed mb-8 max-w-[280px]">
              Illuminating Liberia&apos;s digital future through world-class technology and creative services. Based in Monrovia. Serving West Africa.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a href="mailto:hello@luminatechnologies.com" className="flex items-center gap-3 text-[13px] text-white/45 hover:text-[#27c4a0] transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#27c4a0]/10 group-hover:border-[#27c4a0]/20 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
                hello@luminatechnologies.com
              </a>
              <a href="tel:+231770000000" className="flex items-center gap-3 text-[13px] text-white/45 hover:text-[#27c4a0] transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#27c4a0]/10 group-hover:border-[#27c4a0]/20 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
                </div>
                +231 770 000 000
              </a>
              <div className="flex items-center gap-3 text-[13px] text-white/45">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>
                </div>
                Monrovia, Liberia
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2">
              {[
                { label: 'LinkedIn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>, circle: <circle cx="4" cy="4" r="2"/> },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-all group">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" className="group-hover:stroke-[#27c4a0] transition-colors">
                    {social.icon}
                    {social.circle}
                  </svg>
                </a>
              ))}
              <a href="#" aria-label="X / Twitter" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-all group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" className="group-hover:fill-[#27c4a0] transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-all group">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" className="group-hover:stroke-[#27c4a0] transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/231770000000" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#25D366]/15 hover:border-[#25D366]/30 transition-all group">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" className="group-hover:fill-[#25D366] transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white mb-5">Technology</div>
            <ul className="flex flex-col gap-3">
              {['Software Development', 'IT Consulting', 'Cybersecurity', 'Data Analysis'].map((item) => (
                <li key={item}>
                  <Link href="/services/technology" className="text-[13px] text-white/40 hover:text-[#27c4a0] transition-colors font-light">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white mb-5">Creative</div>
            <ul className="flex flex-col gap-3">
              {['Branding', 'Design', 'Print', 'Media'].map((item) => (
                <li key={item}>
                  <Link href="/services/creative" className="text-[13px] text-white/40 hover:text-[#27c4a0] transition-colors font-light">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white mb-5">Company</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-white/40 hover:text-[#27c4a0] transition-colors font-light">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white mb-5">Lumina Pulse</div>
            <p className="text-[13px] text-white/40 font-light leading-relaxed mb-4">
              Monthly insights for Liberian businesses. No spam.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[13px] placeholder:text-white/25 outline-none focus:border-[#27c4a0]/50 transition-colors"
              />
              <button className="w-full bg-[#27c4a0] text-[#051f1c] rounded-xl py-3 font-bold text-[13px] hover:bg-[#4dd9b8] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-white/25 font-light">
            © 2025 Lumina Technologies Inc. All rights reserved. Monrovia, Liberia.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[12px] text-white/25 hover:text-white/60 font-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[12px] text-white/25 hover:text-white/60 font-light transition-colors">Terms of Use</Link>
            <Link href="/sitemap" className="text-[12px] text-white/25 hover:text-white/60 font-light transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a href="https://wa.me/231770000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all z-50" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}