'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-[5%] h-[72px] flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-[#051f1c]/95 backdrop-blur-xl shadow-sm' : ''}`}>
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo.jpg"
          alt="Lumina Technologies"
          className="h-16 w-16 rounded-full object-cover"
        />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        <li><Link href="/about" className="text-white/75 hover:text-white text-sm transition-colors">About</Link></li>
        <li className="relative group">
          <span className="text-white/75 hover:text-white text-sm transition-colors cursor-pointer">Services ▾</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0a3330] border border-white/8 rounded-xl p-2 min-w-[200px] shadow-2xl hidden group-hover:block">
            <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#27c4a0] px-3 pt-2 pb-1">Technology</span>
            <Link href="/services/technology" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Software Development</Link>
            <Link href="/services/technology" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">IT Consulting</Link>
            <Link href="/services/technology" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Cybersecurity</Link>
            <Link href="/services/technology" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Data Analysis</Link>
            <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#27c4a0] px-3 pt-3 pb-1">Creative</span>
            <Link href="/services/creative" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Branding & Design</Link>
            <Link href="/services/creative" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Print</Link>
            <Link href="/services/creative" className="block px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-lg">Media</Link>
          </div>
        </li>
        <li><Link href="/portfolio" className="text-white/75 hover:text-white text-sm transition-colors">Portfolio</Link></li>
        <li><Link href="/blog" className="text-white/75 hover:text-white text-sm transition-colors">Blog</Link></li>
        <li><Link href="/careers" className="text-white/75 hover:text-white text-sm transition-colors">Careers</Link></li>
        <li>
          <Link href="/contact" className="bg-[#27c4a0] text-[#051f1c] px-5 py-2 rounded-full text-[13px] font-bold hover:bg-[#4dd9b8] transition-colors">
            Get a Quote
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#051f1c]/98 backdrop-blur-xl border-b border-white/6 px-[5%] py-4 flex flex-col gap-3 md:hidden">
          <Link href="/about" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services/technology" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Technology Services</Link>
          <Link href="/services/creative" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Creative Services</Link>
          <Link href="/portfolio" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/blog" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/careers" className="text-white/75 hover:text-white py-2 text-sm" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/contact" className="bg-[#27c4a0] text-[#051f1c] px-5 py-2 rounded-full text-[13px] font-bold text-center mt-2" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </nav>
  )
}