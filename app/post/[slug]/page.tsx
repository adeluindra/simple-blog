import { getPostData, getSortedPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getSortedPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug).catch(() => null)
  
  if (!post) {
    return {
      title: 'Post Tidak Ditemukan',
    }
  }

  return {
    title: `${post.title} - SimpleBlog`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug).catch(() => null)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="mb-8 -ml-4"
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Beranda
        </Link>
      </Button>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          {post.title}
        </h1>
        <time className="text-lg text-muted-foreground font-medium">
          {formattedDate}
        </time>
      </header>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}