import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { formatDate } from "@/lib/utils";

/** Article preview card for blog listings and homepage. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          alt={post.imageAlt}
          label={post.category}
          className="aspect-[16/10] w-full rounded-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden />
            {post.readMinutes} min read
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-charcoal transition-colors group-hover:text-primary-800">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary-700">
            Read
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
