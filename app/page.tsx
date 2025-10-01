import { getSortedPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getSortedPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Selamat Datang di SimpleBlog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tempat berbagi pengetahuan dan pengalaman tentang pengembangan web, 
          teknologi, dan hal-hal menarik lainnya.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Artikel Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Belum ada artikel yang ditulis.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}