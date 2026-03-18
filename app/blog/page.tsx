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
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-[#9aa49a] text-[16px] font-light">No posts published yet. Check back soon.</div>
            </div>
          ) : (
            <>
              {/* Featured post */}
              <Link href={`/blog/${posts[0].slug.current}`} className="group block mb-10">
                <div className="bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all grid grid-cols-1 md:grid-cols-2">
                  <div className={`bg-gradient-to-br ${gradients[0]} relative overflow-hidden min-h-[320px]`}>
                    {posts[0].coverImage ? (
                      <img
                        src={urlFor(posts[0].coverImage).width(800).height(600).fit('crop').url()}
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
                    <div className="absolute top-4 left-4 bg-[#27c4a0] text-[#051f1c] text-[11px] font-bold px-3 py-1 rounded-full z-10">
                      Featured
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full inline-block w-fit mb-4 ${categoryColors[posts[0].category] || 'bg-[#edfdf9] text-[#0f6b60]'}`}>
                      {posts[0].category}
                    </span>
                    <h2 className="font-display text-[24px] font-bold text-[#181e18] leading-tight mb-4 group-hover:text-[#0f6b60] transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-[#5a665a] text-[15px] font-light leading-relaxed mb-6">
                      {posts[0].excerpt}
                    </p>
                    <div className="text-[13px] text-[#9aa49a]">
                      {posts[0].publishedAt ? new Date(posts[0].publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Rest of posts */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.slice(1).map((post: any, i: number) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                      <div className={`h-52 bg-gradient-to-br ${gradients[(i + 1) % gradients.length]} relative overflow-hidden`}>
                        {post.coverImage ? (
                          <img
                            src={urlFor(post.coverImage).width(600).height(400).fit('crop').url()}
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
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-[#edfdf9] text-[#0f6b60]'}`}>
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
                        <div className="text-[12px] text-[#9aa49a]">
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
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