export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "designing-api-integrations-that-dont-break-operations",
    title: "Designing API Integrations That Don't Break Operations",
    excerpt:
      "A practical look at field mapping, validation, retries, and monitoring when one business system hands data to another.",
    category: "API Integration",
    publishedAt: "2026-04-22",
    readTime: "5 min read",
    tags: ["REST API", "Webhooks", "Validation", "Operations"],
    body: [
      "The hardest part of an integration is rarely making the first successful request. The real work starts when the payload changes, a required field goes missing, or a downstream system behaves differently than expected.",
      "A stable integration usually needs a clear translation layer. That means validating incoming data, normalizing field names, and deciding what should happen when the destination system cannot accept the payload as-is.",
      "Retries should also be intentional. Some failures are temporary and worth retrying. Others are data-quality issues that should be surfaced quickly so the team can fix them instead of silently repeating the same bad request.",
      "If the integration matters to operations, monitoring should be treated as part of the build rather than an afterthought. A useful notification is often the difference between a short delay and a workflow that stays broken for hours."
    ]
  },
  {
    slug: "when-n8n-is-a-good-fit-for-business-automation",
    title: "When n8n Is a Good Fit for Business Automation",
    excerpt:
      "Where n8n works well, where it needs structure, and how to keep workflows understandable as they grow.",
    category: "Automation",
    publishedAt: "2026-04-18",
    readTime: "4 min read",
    tags: ["n8n", "Automation", "Workflows", "Monitoring"],
    body: [
      "n8n is a strong fit when a workflow needs to connect APIs, react to events, and move data through a few understandable steps. It is especially useful when a team needs visibility into the workflow rather than a hidden script that only one person can maintain.",
      "The tradeoff is that workflows can become messy if they grow without naming conventions, validation steps, or a clear split between transformation logic and side effects.",
      "A good n8n build usually keeps each workflow focused, documents the purpose of important nodes, and adds alerts around the parts of the process that would hurt the business if they failed silently.",
      "The goal is not just to automate something once. The goal is to leave behind a workflow that another person can still reason about a few months later."
    ]
  },
  {
    slug: "building-monitoring-into-automation-from-day-one",
    title: "Building Monitoring Into Automation From Day One",
    excerpt:
      "Why alerts, trend checks, and failure visibility should be part of the initial build instead of a later fix.",
    category: "Operations",
    publishedAt: "2026-04-10",
    readTime: "4 min read",
    tags: ["Monitoring", "Alerts", "PostgreSQL", "Reliability"],
    body: [
      "Many automations appear successful because they run without throwing visible errors. That does not always mean they are healthy. A workflow can still drift, process incomplete data, or stop delivering the outcome the team expects.",
      "Monitoring helps close that gap by checking the effect of the automation, not just whether the task executed. In practice this can mean watching submission volume, comparing expected record counts, or flagging unusual changes in downstream data.",
      "The earlier this is included, the easier it is to trust the system later. Adding monitoring only after something breaks usually means reconstructing what should have been observed from the start.",
      "Reliable automation is not just automation that runs. It is automation that gives the team confidence when something changes."
    ]
  }
];

export function getSortedArticles() {
  return [...articles].sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
