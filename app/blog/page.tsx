import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

const categoryColors: Record<string, string> = {
  'Industry Insight': 'bg-[#edfdf9] text-[#0f6b60]',
  'Cybersecurity': 'bg-[#fef3c7] text-[#92400e]',
  'Branding': 'bg-[#fce7f3] text-[#9d174d]',
  'Data Analysis': 'bg-[#eff6ff] text-[#1d4ed8]',
  'Lumina Pulse': 'bg-[#f5f3ff] text-[#6d28d9]',
  'Software': 'bg-[#f0fdf4] text-[#15803d]',
}

const gradients = [
  'from-[#0d4f47] to-[#138a7a]',
  'from-[#1a2f1a] to-[#2d5a2d]',
  'from-[#051f1c] to-[#0a3330]',
  'from-[#1a1a2e] to-[#0d4f47]',
  'from-[#0d2d4f] to-[#1a5a8a]',
  'from-[#2d1a4a] to-[#5a3d8a]',
]

async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      coverImage,
    }
  `)
  return posts
}

export default async function BlogPage() {
  const posts = await getPosts()

  const categories = ['All', 'Industry Insight', 'Cybersecurity', 'Branding', 'Data Analysis', 'Lumina Pulse', 'Software']

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#051f1c] pt-[140px] pb-20 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(39,196,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(39,196,160,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#27c4a0]">Blog & Insights</span>
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-extrabold text-white leading-tight tracking-tight mb-4">
              Insights from<br /><span className="text-[#27c4a0]">our team.</span>
            </h1>
            <p className="text-white/60 text-[17px] font-light max-w-[480px] leading-relaxed">
              Tech trends, business tips, and practical guides for Liberian businesses navigating the digital world.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="text-white/40 text-[12px] font-light uppercase tracking-widest">Total Articles</div>
            <div className="font-display text-[56px] font-extrabold text-white leading-none">{posts.length}</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="bg-white border-b border-[#e0e4e0] sticky top-[72px] z-30">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${cat === 'All' ? 'bg-[#0d4f47] text-white' : 'text-[#5a665a] hover:bg-[#f8f9f8] hover:text-[#181e18]'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-32">
          <div className="text-[#9aa49a] text-[16px] font-light">No posts published yet. Check back soon.</div>
        </div>
      ) : (
        <>
          {/* FEATURED + TOP READS */}
          <section className="py-14 px-[5%]">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Featured large post */}
              <Link href={`/blog/${posts[0].slug.current}`} className="group md:col-span-2 block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#c5f7ef] hover:-translate-y-1 transition-all">
                <div className={`h-64 bg-gradient-to-br ${gradients[0]} relative overflow-hidden`}>
                  {posts[0].coverImage ? (
                    <img
                      src={urlFor(posts[0].coverImage).width(900).height(400).fit('crop').crop('center').url()}
                      alt={posts[0].title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#27c4a0] text-[#051f1c]">Featured</span>
                    {posts[0].category && (
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[posts[0].category] || 'bg-[#edfdf9] text-[#0f6b60]'}`}>
                        {posts[0].category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-[12px] text-[#9aa49a] font-light mb-3">
                    {posts[0].publishedAt ? new Date(posts[0].publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''} · 5 min read
                  </div>
                  <h2 className="font-display text-[22px] font-bold text-[#181e18] leading-tight mb-3 group-hover:text-[#0f6b60] transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-[#5a665a] text-[14px] font-light leading-relaxed mb-4">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#0f6b60] text-[13px] font-semibold">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>

              {/* Top reads sidebar */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-0.5 bg-[#27c4a0]"></div>
                  <span className="text-[12px] font-bold tracking-widest uppercase text-[#138a7a]">Top Reads</span>
                </div>
                {posts.slice(1, 4).map((post: any, i: number) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="group flex gap-4 p-4 bg-[#f8f9f8] border border-[#e0e4e0] rounded-xl hover:border-[#27c4a0] hover:shadow-md transition-all">
                    <div className={`w-20 h-20 bg-gradient-to-br ${gradients[(i + 1) % gradients.length]} rounded-lg flex-shrink-0 relative overflow-hidden`}>
                      {post.coverImage ? (
                        <img
                          src={urlFor(post.coverImage).width(160).height(160).fit('crop').crop('center').url()}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                          backgroundSize: '10px 10px'
                        }}></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      {post.category && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-1 ${categoryColors[post.category] || 'bg-[#edfdf9] text-[#0f6b60]'}`}>
                          {post.category}
                        </span>
                      )}
                      <h3 className="font-display font-bold text-[#181e18] text-[14px] leading-snug mb-1 group-hover:text-[#0f6b60] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="text-[11px] text-[#9aa49a] font-light">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* DIVIDER */}
          <div className="max-w-[1100px] mx-auto px-[5%]">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#9aa49a]">Browse by Category</span>
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
            </div>
          </div>

          {/* ALL POSTS GRID */}
          <section className="py-14 px-[5%]">
            <div className="max-w-[1100px] mx-auto">
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.slice(1).map((post: any, i: number) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                      <div className={`h-48 bg-gradient-to-br ${gradients[(i + 1) % gradients.length]} relative overflow-hidden`}>
                        {post.coverImage ? (
                          <img
                            src={urlFor(post.coverImage).width(600).height(320).fit('crop').crop('center').url()}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                            backgroundSize: '18px 18px'
                          }}></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          {post.category && (
                            <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-[#edfdf9] text-[#0f6b60]'}`}>
                              {post.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-[12px] text-[#9aa49a] font-light mb-2">
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''} · 5 min read
                        </div>
                        <h3 className="font-display text-[17px] font-bold text-[#181e18] leading-tight mb-3 group-hover:text-[#0f6b60] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#5a665a] text-[13px] font-light leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-[#0f6b60] text-[12px] font-semibold">
                          Read More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* NEWSLETTER */}
      <section className="bg-[#0d4f47] py-20 px-[5%] relative overflow-hidden">
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
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-white tracking-tight leading-tight mb-4">
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