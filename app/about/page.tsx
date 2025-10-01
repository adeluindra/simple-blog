import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Tentang SimpleBlog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mengenal lebih dalam tentang proyek blog sederhana ini.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🚀 Teknologi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Next.js 14 dengan App Router</li>
              <li>• TypeScript untuk type safety</li>
              <li>• Tailwind CSS untuk styling</li>
              <li>• Markdown untuk konten</li>
              <li>• Dark/Light mode toggle</li>
              <li>• Fully responsive design</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⚡ Fitur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Static Site Generation (SSG)</li>
              <li>• Dynamic routing untuk artikel</li>
              <li>• Optimized performance</li>
              <li>• Clean dan modern design</li>
              <li>• Easy content management</li>
              <li>• SEO friendly</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💡 Tujuan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              SimpleBlog dibuat sebagai contoh implementasi blog modern menggunakan 
              teknologi terbaru. Proyek ini menunjukkan bagaimana membuat aplikasi web 
              yang cepat, accessible, dan maintainable dengan stack teknologi modern.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Dengan arsitektur yang sederhana namun powerful, blog ini mudah untuk 
              dikembangkan lebih lanjut sesuai kebutuhan.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}