import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#051f1c] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Lumina Technologies"
                className="h-12 w-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-[18px] tracking-widest uppercase">Lumina</span>
                <span className="text-[#27c4a0] text-[11px] tracking-[0.2em] uppercase font-medium">Technologies</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
              Illuminating Liberia's digital future through world-class technology and creative services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-colors">
                <span className="text-white/60 text-xs">in</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-colors">
                <span className="text-white/60 text-xs">X</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center hover:bg-[#27c4a0]/15 hover:border-[#27c4a0]/30 transition-colors">
                <span className="text-white/60 text-xs">fb</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-white text-[13px] font-bold tracking-widest uppercase mb-5">Services</div>
            <ul className="flex flex-col gap-3">
              {['Software Development', 'IT Consulting', 'Cybersecurity', 'Data Analysis', 'Branding & Design', 'Print', 'Media'].map((item) => (
                <li key={item}>
                  <Link href="/services/technology" className="text-white/40 hover:text-white/90 text-sm font-light transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-white text-[13px] font-bold tracking-widest uppercase mb-5">Company</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog & Insights', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/40 hover:text-white/90 text-sm font-light transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-white text-[13px] font-bold tracking-widest uppercase mb-5">Lumina Pulse</div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-4">
              Monthly tech insights for Liberian businesses.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/6 border border-white/12 rounded-full px-4 py-2.5 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#27c4a0] transition-colors"
              />
              <button className="bg-[#27c4a0] text-[#051f1c] rounded-full px-4 py-2.5 text-sm font-bold hover:bg-[#4dd9b8] transition-colors whitespace-nowrap">
                Join
              </button>
            </div>
            <div className="mt-6">
              <div className="text-white text-[13px] font-bold tracking-widest uppercase mb-3">Contact</div>
              <div className="text-white/40 text-sm font-light leading-loose">
                <div>hello@luminatechnologies.com</div>
                <div>+231 770 000 000</div>
                <div>Monrovia, Liberia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/6 gap-4">
          <div className="text-white/30 text-sm font-light">
            © 2025 Lumina Technologies Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/70 text-sm font-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/70 text-sm font-light transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}