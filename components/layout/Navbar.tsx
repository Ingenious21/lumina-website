'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#051f1c]/98 backdrop-blur-2xl shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-[5%] h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo.jpg" alt="Lumina Technologies" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#27c4a0]/30"/>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-white text-[16px] tracking-widest uppercase">Lumina</span>
              <span className="text-[#27c4a0] text-[9px] tracking-[0.22em] uppercase font-medium">Technologies</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            <li>
              <Link href="/about" className="text-white/70 hover:text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-white/8 transition-all">
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-full transition-all ${servicesOpen ? 'text-white bg-white/8' : 'text-white/70 hover:text-white hover:bg-white/8'}`}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-[#0a3330]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/40 w-[480px]">
                  <div className="grid grid-cols-2 gap-2">

                    {/* Technology column */}
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#27c4a0] px-3 py-2">Technology & Engineering</div>
                      {[
                        { label: 'Software Development', desc: 'Web, mobile & custom apps' },
                        { label: 'IT Consulting', desc: 'Infrastructure & cloud' },
                        { label: 'Cybersecurity', desc: 'Protect & secure your business' },
                        { label: 'Data Analysis', desc: 'Insights & BI dashboards' },
                      ].map((item) => (
                        <Link key={item.label} href="/services/technology" className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/6 transition-all group">
                          <span className="text-[13px] font-medium text-white/85 group-hover:text-white transition-colors">{item.label}</span>
                          <span className="text-[11px] text-white/35 group-hover:text-white/50 transition-colors">{item.desc}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Creative column */}
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#27c4a0] px-3 py-2">Creative & Brand</div>
                      {[
                        { label: 'Branding', desc: 'Identity & brand systems' },
                        { label: 'Design', desc: 'UI/UX & graphic design' },
                        { label: 'Print', desc: 'Cards, flyers & banners' },
                        { label: 'Media', desc: 'Photo, video & content' },
                      ].map((item) => (
                        <Link key={item.label} href="/services/creative" className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/6 transition-all group">
                          <span className="text-[13px] font-medium text-white/85 group-hover:text-white transition-colors">{item.label}</span>
                          <span className="text-[11px] text-white/35 group-hover:text-white/50 transition-colors">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-2 pt-3 border-t border-white/8 flex items-center justify-between px-3">
                    <span className="text-[12px] text-white/40 font-light">Full-service technology & creative agency</span>
                    <Link href="/services/technology" className="text-[12px] font-semibold text-[#27c4a0] hover:text-[#4dd9b8] transition-colors flex items-center gap-1">
                      View all
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/portfolio" className="text-white/70 hover:text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-white/8 transition-all">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white/70 hover:text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-white/8 transition-all">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-white/70 hover:text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-white/8 transition-all">
                Careers
              </Link>
            </li>
          </ul>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="text-white/70 hover:text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-white/8 transition-all">
              Contact
            </Link>
            <Link href="/contact" className="bg-[#27c4a0] text-[#051f1c] px-5 py-2.5 rounded-full font-bold text-[13px] hover:bg-[#4dd9b8] transition-all hover:shadow-lg hover:shadow-[#27c4a0]/20 hover:-translate-y-0.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#051f1c]/98 backdrop-blur-2xl border-t border-white/8 px-[5%] py-6 flex flex-col gap-2">
            <Link href="/about" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services/technology" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Technology Services</Link>
            <Link href="/services/creative" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Creative Services</Link>
            <Link href="/portfolio" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="/blog" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/careers" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link href="/contact" className="text-white/75 hover:text-white py-3 text-[15px] font-medium border-b border-white/6" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/contact" className="mt-3 bg-[#27c4a0] text-[#051f1c] px-6 py-3.5 rounded-full font-bold text-[14px] text-center hover:bg-[#4dd9b8] transition-all" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  )
}