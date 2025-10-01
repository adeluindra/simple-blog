import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Post } from '@/lib/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          <Link 
            href={`/post/${post.slug}`}
            className="hover:underline decoration-2 underline-offset-4"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <time className="text-sm text-muted-foreground font-medium">
          {formattedDate}
        </time>
        <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4">
          <Link
            href={`/post/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Baca selengkapnya →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}