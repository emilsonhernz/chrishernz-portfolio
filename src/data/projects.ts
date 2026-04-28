export type ProjectFilter = "All" | "Back-End" | "Automation" | "Integration";

export type Project = {
  title: string;
  category: string;
  filters: ProjectFilter[];
  problem: string;
  built: string;
  tech: string[];
  result: string;
  overview: string;
  details: string[];
  media: {
    type: "image" | "video";
    label: string;
    src?: string;
    poster?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  featured?: boolean;
};

export const projectFilters: ProjectFilter[] = ["All", "Back-End", "Automation", "Integration"];

export const projects: Project[] = [
  {
    title: "n8n + GoHighLevel CRM Automation",
    category: "Automation / CRM Integration",
    filters: ["Automation", "Integration"],
    problem: "CRM records, appointments, tasks, and opportunities needed to be generated and connected automatically.",
    built: "n8n workflow that creates contacts, opportunities, tasks, and appointments using GoHighLevel APIs.",
    tech: ["n8n", "GoHighLevel API", "REST API", "JSON", "Webhooks"],
    result: "Faster demo data generation and reduced repetitive CRM setup.",
    overview:
      "This workflow turns a repeatable CRM setup process into a controlled automation that creates related records through GoHighLevel APIs.",
    details: [
      "Mapped contact, opportunity, task, and appointment payloads into reusable request steps.",
      "Reduced repeated manual CRM setup for demo and testing scenarios.",
      "Made the workflow easier to adjust by keeping API payloads structured and visible."
    ],
    media: [
      {
        type: "image",
        label: "n8n workflow canvas",
        alt: "Placeholder for n8n and GoHighLevel workflow screenshot"
      }
    ],
    featured: true
  },
  {
    title: "Form Submission Monitoring Agent",
    category: "Automation / Monitoring",
    filters: ["Automation"],
    problem: "Form submissions could drop without the team noticing quickly.",
    built:
      "Daily automation that checks submission trends across 7-day, 14-day, and 30-day windows and sends alerts when volume drops.",
    tech: ["n8n", "PostgreSQL", "Email Automation", "OpenAI"],
    result: "Improved visibility and faster response to marketing or website issues.",
    overview:
      "This automation watches submission volume over multiple time windows and alerts the team when traffic patterns indicate a possible form or website issue.",
    details: [
      "Compared 7-day, 14-day, and 30-day submission windows to avoid overreacting to normal variance.",
      "Queried PostgreSQL for trend data and packaged the result into a readable alert.",
      "Used AI summarization to make the notification faster to understand."
    ],
    media: [
      {
        type: "image",
        label: "Monitoring alert example",
        alt: "Placeholder for form submission monitoring alert"
      },
      {
        type: "image",
        label: "Submission trend query",
        alt: "Placeholder for PostgreSQL submission trend query"
      }
    ],
    featured: true
  },
  {
    title: "API Middleware Integration",
    category: "Back-End / Integration",
    filters: ["Back-End", "Integration", "Automation"],
    problem: "Data from one system needed to be transformed before sending to another platform.",
    built:
      "Middleware flow that receives webhook data, maps fields, validates payloads, and forwards the formatted request to another API.",
    tech: ["n8n", "REST API", "Webhooks", "JSON", "Postman"],
    result: "Created a reliable bridge between disconnected systems.",
    overview:
      "This integration acts as a controlled translation layer between systems with different payload formats and validation requirements.",
    details: [
      "Accepted webhook payloads from the source system and normalized field names.",
      "Validated required data before forwarding to the destination API.",
      "Used Postman to test edge cases and inspect failed requests."
    ],
    media: [
      {
        type: "image",
        label: "Middleware mapping diagram",
        alt: "Placeholder for API middleware mapping diagram"
      }
    ]
  }
];
