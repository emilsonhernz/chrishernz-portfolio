import Link from "next/link";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

function formatArticleDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        <span>{article.category}</span>
        <span className="text-zinc-600">{formatArticleDate(article.publishedAt)}</span>
        <span className="text-zinc-600">{article.readTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-zinc-50">
        <Link href={`/articles/${article.slug}`} className="hover:text-cyan-200">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{article.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/articles/${article.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
        Read article
      </Link>
    </article>
  );
}
