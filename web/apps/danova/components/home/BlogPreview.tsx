import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/content/blog";

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          From Our Blog
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Tips, guides, and insights for homeowners in South Florida.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full overflow-hidden transition-colors hover:border-primary/50">
                <div className="relative aspect-video bg-muted">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <span className="text-5xl">📝</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                    Read More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">See all posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
