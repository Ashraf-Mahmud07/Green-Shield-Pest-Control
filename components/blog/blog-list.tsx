"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { BlogCard } from "@/components/cards/blog-card";
import { cn } from "@/lib/utils";

/**
 * Searchable, category-filterable blog grid.
 */
export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="flex flex-wrap gap-2"
        >
          {["All", ...blogCategories].map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 font-heading text-sm font-medium transition-all",
                category === cat
                  ? "bg-primary-700 text-white shadow-soft"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-primary-50 hover:text-primary-800"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-xs">
          <Search
            className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400"
            aria-hidden
          />
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="rounded-3xl bg-gray-50 py-16 text-center text-gray-500">
          No articles match your search — try a different term or category.
        </p>
      )}
    </div>
  );
}
