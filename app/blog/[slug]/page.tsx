import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      coverImage,
      body,
    }
  `, { slug })
  return post
}

async function getRelatedPosts(category: string, currentId: string) {
  const posts = await client.fetch(`
    *[_type == "post" && category == $category && _id != $currentId] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      coverImage,
    }
  `, { category, currentId })
  return posts
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-[32px] font-bold text-[#181e18] mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#0f6b60] font-medium hover:underline">Back to Blog</Link>
        </div>
      </main>
    )
  }

  const relatedPosts = await getRelatedPosts(post.category || '', post._id)

  const gradients = [
    'from-[#0d4f47] to-[#138a7a]',
    'from-[#1a2f1a] to-[#2d5a2d]',
    'from-[#051f1c] to-[#0a3330]',
  ]

  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <div className="bg-[#f8f9f8] border-b border-[#e0e4e0] pt-[72px]">
        <div className="max-w-[1100px] mx-auto px-[5%] py-4 flex items-center gap-2 text-[13px] text-[#9aa49a]">
          <Link href="/" className="hover:text-[#0f6b60] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0f6b60] transition-colors">Blog</Link>
          <span>/</span>
          {post.category && (
            <>
              <Link href="/blog" className="hover:text-[#0f6b60] transition-colors">{post.category}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-[#5a665a] truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      {/* HERO IMAGE WITH OVERLAID TITLE */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '520px', maxHeight: '620px' }}>

        {/* Background */}
        {post.coverImage ? (
          <img
            src={urlFor(post.coverImage).width(1800).height(620).fit('crop').crop('center').url()}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d4f47] to-[#051f1c]"></div>
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051f1c] via-[#051f1c]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#051f1c]/40 to-transparent"></div>

        {/* Category badge top left */}
        {post.category && (
          <div className="absolute top-8 left-[5%]">
            <span className="text-[11px] font-bold px-4 py-2 rounded-full bg-[#27c4a0] text-[#051f1c] tracking-widest uppercase shadow-lg">
              {post.category}
            </span>
          </div>
        )}

        {/* Share buttons top right */}
        <div className="absolute top-8 right-[5%] flex items-center gap-2">
          <span className="text-white/50 text-[12px] font-light mr-1">Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${post.title}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#27c4a0] hover:border-[#27c4a0] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#27c4a0] hover:border-[#27c4a0] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#27c4a0] hover:border-[#27c4a0] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>

        {/* Title + meta overlaid at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-[5%] pb-12 pt-20">
          <div className="max-w-[1100px] mx-auto">
            <h1 className="font-display text-[clamp(28px,4vw,58px)] font-extrabold text-white leading-[1.05] tracking-tight mb-5 max-w-[780px] drop-shadow-lg">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-white/70 text-[16px] font-light leading-relaxed mb-6 max-w-[620px]">
                {post.excerpt}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Lumina Technologies" className="w-10 h-10 rounded-full object-cover border-2 border-[#27c4a0]/50"/>
                <div>
                  <div className="text-white font-semibold text-[13px]">Lumina Technologies</div>
                  <div className="text-white/50 text-[11px] font-light">Author</div>
                </div>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-white/60 text-[13px] font-light">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-white/60 text-[13px] font-light">5 min read</div>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY + SIDEBAR */}
      <div className="max-w-[1100px] mx-auto px-[5%] py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* MAIN CONTENT */}
          <div className="md:col-span-2">
            {post.body ? (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => <p className="text-[#4a5a4a] text-[17px] font-light leading-[1.9] mb-6">{children}</p>,
                    h2: ({ children }) => (
                      <h2 className="font-display text-[26px] font-bold text-[#181e18] mt-12 mb-5 tracking-tight leading-tight border-l-4 border-[#27c4a0] pl-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-display text-[20px] font-bold text-[#181e18] mt-9 mb-4 tracking-tight">{children}</h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="bg-[#f8f9f8] border-l-4 border-[#27c4a0] rounded-r-2xl px-8 py-7 my-10">
                        <p className="text-[#181e18] text-[18px] font-medium leading-relaxed italic">{children}</p>
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => <ul className="flex flex-col gap-3 mb-8 mt-4">{children}</ul>,
                    number: ({ children }) => <ol className="flex flex-col gap-3 mb-8 mt-4">{children}</ol>,
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="flex items-start gap-4 text-[#4a5a4a] text-[16px] font-light leading-relaxed">
                        <div className="w-6 h-6 rounded-full bg-[#edfdf9] border border-[#c5f7ef] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
                        </div>
                        {children}
                      </li>
                    ),
                    number: ({ children }) => (
                      <li className="flex items-start gap-4 text-[#4a5a4a] text-[16px] font-light leading-relaxed">
                        <div className="w-6 h-6 rounded-full bg-[#0d4f47] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
                        </div>
                        {children}
                      </li>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => <strong className="font-semibold text-[#181e18]">{children}</strong>,
                    em: ({ children }) => <em className="italic text-[#0f6b60]">{children}</em>,
                    link: ({ children, value }) => (
                      <a href={value?.href} className="text-[#0f6b60] underline underline-offset-2 hover:text-[#0d4f47] transition-colors font-medium" target="_blank" rel="noopener noreferrer">{children}</a>
                    ),
                  },
                }}
              />
            ) : (
              <p className="text-[#9aa49a] text-[16px] font-light italic">No content yet.</p>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-12">
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
              <div className="w-2 h-2 rounded-full bg-[#27c4a0]"></div>
              <div className="flex-1 h-px bg-[#e0e4e0]"></div>
            </div>

            {/* Author card */}
            <div className="flex items-center gap-5 p-7 bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl">
              <img src="/logo.jpg" alt="Lumina Technologies" className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-[#c5f7ef]"/>
              <div>
                <div className="font-display font-bold text-[#181e18] text-[16px] mb-1">Lumina Technologies</div>
                <div className="text-[#5a665a] text-[14px] font-light leading-relaxed">
                  Insights and perspectives from Liberia&apos;s leading technology and creative agency.
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-6">

            {/* Newsletter */}
            <div className="bg-[#051f1c] rounded-2xl p-7 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#27c4a0]">Lumina Pulse</span>
              </div>
              <h3 className="font-display font-bold text-white text-[18px] mb-2 leading-tight">
                Get insights like this in your inbox
              </h3>
              <p className="text-white/50 text-[13px] font-light leading-relaxed mb-5">
                Monthly tech tips and business insights for Liberian businesses.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-[#27c4a0] transition-colors mb-3"
              />
              <button className="w-full bg-[#27c4a0] text-[#051f1c] rounded-xl py-3 font-bold text-[13px] hover:bg-[#4dd9b8] transition-all">
                Subscribe Now
              </button>
            </div>

            {/* Category */}
            {post.category && (
              <div className="bg-[#f8f9f8] border border-[#e0e4e0] rounded-2xl p-6">
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#9aa49a] mb-3">Category</div>
                <Link href="/blog" className="inline-block text-[13px] font-semibold text-[#0f6b60] bg-[#edfdf9] border border-[#c5f7ef] px-4 py-2 rounded-full hover:bg-[#c5f7ef] transition-colors">
                  {post.category}
                </Link>
              </div>
            )}

            {/* CTA */}
            <div className="bg-[#0d4f47] rounded-2xl p-6">
              <h3 className="font-display font-bold text-white text-[16px] mb-2">Need help with your business?</h3>
              <p className="text-white/60 text-[13px] font-light leading-relaxed mb-5">
                Let Lumina Technologies help you grow digitally.
              </p>
              <Link href="/contact" className="block bg-[#27c4a0] text-[#051f1c] rounded-xl py-3 font-bold text-[13px] hover:bg-[#4dd9b8] transition-all text-center">
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* RELATED POSTS */}
      <section className="bg-[#f8f9f8] py-20 px-[5%] border-t border-[#e0e4e0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-0.5 bg-[#27c4a0]"></div>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-[#138a7a]">Keep Reading</span>
              </div>
              <h2 className="font-display text-[28px] font-bold text-[#181e18] tracking-tight">Related Articles</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0f6b60] hover:text-[#0d4f47] transition-colors">
              View All Posts
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related: any, i: number) => (
                <Link key={related._id} href={`/blog/${related.slug.current}`} className="group block bg-white border border-[#e0e4e0] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#c5f7ef] transition-all">
                  <div className={`h-48 bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}>
                    {related.coverImage ? (
                      <img
                        src={urlFor(related.coverImage).width(600).height(400).fit('crop').crop('center').url()}
                        alt={related.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '18px 18px'
                      }}></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {related.category && (
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#27c4a0] text-[#051f1c]">
                          {related.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-[12px] text-[#9aa49a] mb-2 font-light">
                      {related.publishedAt ? new Date(related.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''}
                    </div>
                    <h3 className="font-display text-[17px] font-bold text-[#181e18] leading-tight mb-3 group-hover:text-[#0f6b60] transition-colors">
                      {related.title}
                    </h3>
                    {related.excerpt && (
                      <p className="text-[#5a665a] text-[13px] font-light leading-relaxed line-clamp-2">
                        {related.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-[#9aa49a] text-[14px] font-light">More articles coming soon.</p>
              <Link href="/blog" className="inline-flex items-center gap-2 mt-4 text-[13px] font-semibold text-[#0f6b60] hover:text-[#0d4f47] transition-colors">
                Browse all posts
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}