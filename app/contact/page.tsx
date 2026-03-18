'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Contact Us</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Let's start a<br />
            <span className="text-[#27c4a0]">conversation.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
            Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — Contact Details */}
          <div>
            <h2 className="font-display text-[32px] font-bold text-[#181e18] mb-3">Get in touch</h2>
            <p className="text-[#5a665a] text-[16px] font-light leading-relaxed mb-10">
              Have a project in mind? We'd love to hear about it. Reach out through any of the channels below and we'll respond promptly.
            </p>

            <div className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-center gap-5 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl px-6 py-5 hover:border-[#27c4a0] hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#0d4f47] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f6b60] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">Email Us</div>
                  <a href="mailto:hello@luminatechnologies.com" className="text-[#181e18] font-semibold text-[15px] hover:text-[#0f6b60] transition-colors">
                    hello@luminatechnologies.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl px-6 py-5 hover:border-[#27c4a0] hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#0d4f47] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f6b60] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">Call Us</div>
                  <a href="tel:+231770000000" className="text-[#181e18] font-semibold text-[15px] hover:text-[#0f6b60] transition-colors">
                    +231 770 000 000
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl px-6 py-5 hover:border-[#27c4a0] hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#20b358] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">WhatsApp</div>
                  <a href="https://wa.me/231770000000" target="_blank" rel="noopener noreferrer" className="text-[#181e18] font-semibold text-[15px] hover:text-[#0f6b60] transition-colors">
                    Chat with us instantly
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl px-6 py-5 hover:border-[#27c4a0] hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#0d4f47] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f6b60] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="1.8"/>
                    <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="1.8"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9aa49a] uppercase tracking-[0.15em] mb-1">Our Office</div>
                  <div className="text-[#181e18] font-semibold text-[15px]">Monrovia, Liberia</div>
                  <div className="text-[#5a665a] text-[13px] font-light">Mon – Fri, 8am – 6pm</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="bg-[#f8f9f8] rounded-3xl p-10 border border-[#e0e4e0]">
            <h2 className="font-display text-[24px] font-bold text-[#181e18] mb-2">Send us a message</h2>
            <p className="text-[#5a665a] text-[14px] font-light mb-8">We'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="bg-[#edfdf9] border border-[#27c4a0] rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#27c4a0] flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#181e18] mb-3">Message Sent!</h3>
                <p className="text-[#5a665a] font-light">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#2a322a] uppercase tracking-widest">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5 text-[15px] text-[#181e18] outline-none focus:border-[#27c4a0] focus:ring-2 focus:ring-[#27c4a0]/10 transition-all placeholder:text-[#9aa49a]"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#2a322a] uppercase tracking-widest">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5 text-[15px] text-[#181e18] outline-none focus:border-[#27c4a0] focus:ring-2 focus:ring-[#27c4a0]/10 transition-all placeholder:text-[#9aa49a]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#2a322a] uppercase tracking-widest">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5 text-[15px] text-[#181e18] outline-none focus:border-[#27c4a0] focus:ring-2 focus:ring-[#27c4a0]/10 transition-all placeholder:text-[#9aa49a]"
                      placeholder="+231 ..."
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#2a322a] uppercase tracking-widest">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5 text-[15px] text-[#181e18] outline-none focus:border-[#27c4a0] focus:ring-2 focus:ring-[#27c4a0]/10 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="technology">Technology Services</option>
                      <option value="creative">Creative Services</option>
                      <option value="general">General Enquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="career">Career</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#2a322a] uppercase tracking-widest">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5 text-[15px] text-[#181e18] outline-none focus:border-[#27c4a0] focus:ring-2 focus:ring-[#27c4a0]/10 transition-all resize-none placeholder:text-[#9aa49a]"
                    placeholder="Tell us about your project, timeline and budget..."
                  />
                </div>

                <div className="flex items-center gap-3 bg-white border border-[#e0e4e0] rounded-xl px-4 py-3.5">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                    className="w-4 h-4 accent-[#27c4a0] flex-shrink-0"
                  />
                  <label htmlFor="newsletter" className="text-[14px] text-[#5a665a] font-light cursor-pointer">
                    Subscribe to <strong className="text-[#181e18] font-medium">Lumina Pulse</strong> — our monthly tech newsletter
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#0d4f47] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0f6b60] transition-all hover:-translate-y-0.5 hover:shadow-lg mt-2 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}