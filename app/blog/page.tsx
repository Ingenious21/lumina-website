import Link from 'next/link'

const posts = [
  {
    slug: 'liberia-digital-economy-2025',
    title: 'The State of Liberia\'s Digital Economy in 2025',
    excerpt: 'A comprehensive look at how Liberian businesses are adopting digital tools — and where the biggest opportunities still lie untapped.',
    category: 'Industry Insight',
    date: 'March 2025',
    readTime: '6 min read',
    color: 'from-[#0d4f47] to-[#138a7a]',
  },
  {
    slug: 'cybersecurity-smes-liberia',
    title: '5 Cybersecurity Basics Every Liberian SME Should Have in 2025',
    excerpt: 'You don\'t need an enterprise budget to protect your business. Here\'s what every small business should have in place right now.',
    category: 'Cybersecurity',
    date: 'February 2025',
    readTime: '5 min read',
    color: 'from-[#1a2f1a] to-[#2d5a2d]',
  },
  {
    slug: 'brand-identity-mistakes',
    title: '7 Brand Identity Mistakes That Are Costing You Clients',
    excerpt: 'From inconsistent logos to fonts that don\'t match your audience — the branding errors we see most often, and how to fix them.',
    category: 'Branding',
    date: 'January 2025',
    readTime: '4 min read',
    color: 'from-[#051f1c] to-[#0a3330]',
  },
  {
    slug: 'why-liberian-businesses-need-websites',
    title: 'Why Every Liberian Business Needs a Professional Website in 2025',
    excerpt: 'Still running your business on Facebook? Here\'s why a professional website is no longer optional for businesses in Liberia.',
    category: 'Industry Insight',
    date: 'January 2025',
    readTime: '5 min read',
    color: 'from-[#1a1a2e] to-[#0d4f47]',
  },
  {
    slug: 'data-analysis-small-business',
    title: 'How Small Businesses in Liberia Can Use Data to Grow',
    excerpt: 'You don\'t need a data science team to make smarter decisions. Here\'s how simple data analysis can transform your business.',
    category: 'Data Analysis',
    date: 'December 2024',
    readTime: '7 min read',
    color: 'from-[#0d2d4f] to-[#1a5a8a]',
  },
  {
    slug: 'lumina-pulse-march-2025',
    title: 'Lumina Pulse — March 2025',
    excerpt: 'This month: Liberia\'s new digital payment regulations, why AI won\'t replace your team, and a spotlight on a Monrovia startup.',
    category: 'Lumina Pulse',
    date: 'March 2025',
    readTime: '8 min read',
    color: 'from-[#2d1a4a] to-[#5a3d8a]',
  },
]

const categoryColors: Record<string, string> = {
  'Industry Insight': 'bg-[#edfdf9] text-[#0f6b60]',
  'Cybersecurity': 'bg-[#fef3c7] text-[#92400e]',
  'Branding': 'bg-[#fce7f3] text-[#9d174d]',
  'Data Analysis': 'bg-[#eff6ff] text-[#1d4ed8]',
  'Lumina Pulse': 'bg-[#f5f3ff] text-[#6d28d9]',
}

export default function BlogPage() {
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
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Blog & Insights</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[700px]">
            Insights from<br />
            <span className="text-[#27c4a0]">our team.</span>
          </h1>
          <p className="text-white/60 text-[18px] font-light max-w-[580px] leading-relaxed">
            Tech trends, business tips, and practical guides for Liberian businesses navigating the digital world.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-[#f8f9f8] py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">

          {/* Featured post */}
          <Link href={`/blog/${posts[0].slug}`} className="group block mb-10">
            <div className="bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all grid grid-cols-1 md:grid-cols-2">
              <div className={`h-64 md:h-auto bg-gradient-to-br ${posts[0].color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="absolute top-4 left-4 bg-[#27c4a0] text-[#051f1c] text-[11px] font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full inline-block w-fit mb-4 ${categoryColors[posts[0].category]}`}>
                  {posts[0].category}
                </span>
                <h2 className="font-display text-[24px] font-bold text-[#181e18] leading-tight mb-4 group-hover:text-[#0f6b60] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-[#5a665a] text-[15px] font-light leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-[13px] text-[#9aa49a]">
                  <span>{posts[0].date}</span>
                  <span>·</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '18px 18px'
                  }}></div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[17px] font-bold text-[#181e18] leading-tight mb-3 group-hover:text-[#0f6b60] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#5a665a] text-[14px] font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[12px] text-[#9aa49a]">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#0d4f47] py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
            <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Lumina Pulse</span>
            <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-extrabold text-white tracking-tight leading-tight mb-4">
            Get monthly insights delivered
          </h2>
          <p className="text-white/60 text-[16px] font-light mb-8">
            Tech news, practical tips, and Lumina updates — straight to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/8 border border-white/15 rounded-full px-5 py-3.5 text-white text-[14px] placeholder:text-white/35 outline-none focus:border-[#27c4a0] transition-colors"
            />
            <button className="bg-[#27c4a0] text-[#051f1c] px-6 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#4dd9b8] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}