import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { getArticleBySlug, getSortedArticles } from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function formatArticleDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

export async function generateStaticParams() {
  return getSortedArticles().map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found"
    };
  }

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto grid max-w-4xl gap-10 px-4 py-16 md:px-6 md:py-24">
      <MotionSection className="space-y-6">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          <ArrowLeft size={16} />
          Back to articles
        </Link>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <span>{article.category}</span>
            <span className="text-zinc-600">{formatArticleDate(article.publishedAt)}</span>
            <span className="text-zinc-600">{article.readTime}</span>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 md:text-6xl">{article.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-300">{article.excerpt}</p>
        </div>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <div className="space-y-6 text-base leading-8 text-zinc-300">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
