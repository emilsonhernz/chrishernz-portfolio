import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ArticleCard } from "@/components/ArticleCard";
import { getSortedArticles } from "@/data/articles";

export const metadata = {
  title: "Articles",
  description:
    "Articles about back-end engineering, API integration, workflow automation, monitoring, and business systems."
};

export default function ArticlesPage() {
  const sortedArticles = getSortedArticles();

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24">
      <MotionSection>
        <SectionHeader
          eyebrow="Articles"
          title="Notes on APIs, automation, monitoring, and business systems."
          description="A place to publish practical write-ups about integration work, workflow design, and the engineering decisions behind reliable operations."
        />
      </MotionSection>

      <MotionSection className="grid gap-4 lg:grid-cols-3">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </MotionSection>
    </main>
  );
}
