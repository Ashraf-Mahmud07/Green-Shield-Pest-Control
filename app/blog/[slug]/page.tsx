import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, Tag, UserRound } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { buildMetadata, articleSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/motion";
import { JsonLd } from "@/components/shared/json-ld";
import { SiteImage } from "@/components/shared/site-image";
import { blogImages } from "@/data/images";
import { BlogCard } from "@/components/cards/blog-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      >
        <FadeIn delay={0.15}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-100">
            <span className="flex items-center gap-2">
              <UserRound className="size-4" aria-hidden />
              {post.author.name} · {post.author.role}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4" aria-hidden />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4" aria-hidden />
              {post.readMinutes} min read
            </span>
          </div>
        </FadeIn>
      </PageHero>

      <div className="container-site py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Article body */}
          <article className="min-w-0 max-w-3xl">
            <FadeIn>
              {blogImages[post.slug] && (
                <SiteImage
                  image={blogImages[post.slug]}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                  className="mb-10 aspect-[16/9] w-full"
                />
              )}
            </FadeIn>

            {post.content.map((block, i) => (
              <FadeIn key={i}>
                <div className="mb-8">
                  {block.heading && (
                    <h2 className="mb-4 font-heading text-2xl font-bold text-charcoal">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)} className="mb-4 leading-relaxed text-gray-600">
                      {para}
                    </p>
                  ))}
                  {block.list && (
                    <ul className="mb-4 space-y-2.5 rounded-2xl bg-gray-50 p-6">
                      {block.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-6">
              <Tag className="size-4 text-gray-400" aria-hidden />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author box */}
            <FadeIn>
              <div className="mt-10 flex items-center gap-5 rounded-3xl bg-gray-50 p-7">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary-700 font-heading text-xl font-bold text-white">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-heading text-base font-bold text-charcoal">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-gray-500">{post.author.role}, GreenShield Pest Control</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Field expertise from thousands of Central Texas service visits.
                  </p>
                </div>
              </div>
            </FadeIn>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start" aria-label="Article sidebar">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-base font-bold text-charcoal">
                Dealing with this pest right now?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Skip the guesswork — a free inspection identifies exactly what you&apos;re up
                against and what it takes to fix it.
              </p>
              <Button href="/request-inspection" className="mt-5 w-full">
                Book a Free Inspection
              </Button>
            </div>
            <div className="rounded-3xl bg-linear-to-br from-primary-50 to-secondary-50 p-7">
              <h2 className="font-heading text-base font-bold text-charcoal">
                Seasonal pest alerts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                One useful email a month. No spam, ever.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
            <nav className="rounded-3xl border border-gray-100 bg-white p-7 shadow-soft" aria-label="More articles">
              <h2 className="font-heading text-base font-bold text-charcoal">Keep reading</h2>
              <ul className="mt-4 space-y-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <p className="font-heading text-sm font-semibold leading-snug text-gray-700 transition-colors group-hover:text-primary-700">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {p.category} · {p.readMinutes} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        {/* Related grid */}
        <section aria-label="Related articles" className="mt-20">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Related Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </div>

      <CtaBanner />
    </>
  );
}
