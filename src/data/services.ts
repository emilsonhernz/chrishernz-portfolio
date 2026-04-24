export const problemsSolved = [
  "Manual copy-paste between systems",
  "Disconnected CRMs, forms, eCommerce, and databases",
  "Failed or unreliable data syncs",
  "Repetitive admin tasks",
  "Lack of visibility in automation failures",
  "Slow manual reporting"
];

export const services = [
  {
    title: "n8n Workflow Automation",
    summary: "Build repeatable workflows that move data, trigger actions, and reduce manual admin work.",
    useCases: ["Lead routing", "Scheduled reporting", "CRM updates", "Internal alerts"],
    tools: ["n8n", "Webhooks", "REST APIs", "JSON"],
    outcome: "A documented automation that can be tested, monitored, and extended."
  },
  {
    title: "API Integration",
    summary: "Connect systems through clean API requests, field mapping, validation, and retry-aware flows.",
    useCases: ["CRM sync", "Order transfer", "Data enrichment", "System handoffs"],
    tools: ["REST API", "SOAP API", "Postman", "Webhooks"],
    outcome: "A reliable bridge between tools that were previously disconnected."
  },
  {
    title: "CRM Automation",
    summary: "Automate contact creation, opportunity updates, appointment scheduling, and follow-up tasks.",
    useCases: ["GoHighLevel setup", "Pipeline automation", "Task creation", "Lead alerts"],
    tools: ["GoHighLevel", "n8n", "REST API", "Webhooks"],
    outcome: "Cleaner CRM data and faster follow-up without repetitive setup work."
  },
  {
    title: "NetSuite Automation",
    summary: "Customize business logic around records, saved searches, sales orders, and operational workflows.",
    useCases: ["Sales order logic", "Validation rules", "Saved search automation", "Backorder alerts"],
    tools: ["NetSuite", "SuiteScript", "Saved Searches", "JavaScript"],
    outcome: "More consistent ERP behavior and less manual review."
  },
  {
    title: "Webhook and Middleware Development",
    summary: "Receive, validate, transform, and forward event data between systems.",
    useCases: ["Form intake", "Order events", "Status updates", "External notifications"],
    tools: ["Webhooks", "n8n", "REST API", "JSON"],
    outcome: "A controlled middleware layer that keeps payloads predictable."
  },
  {
    title: "Data Sync and Monitoring",
    summary: "Create sync workflows and alerting around failures, volume drops, and operational anomalies.",
    useCases: ["Submission monitoring", "Database checks", "Sync alerts", "Trend reporting"],
    tools: ["PostgreSQL", "n8n", "Email Automation", "OpenAI"],
    outcome: "Better visibility into problems before they turn into business issues."
  },
  {
    title: "Automated Reports and Alerts",
    summary: "Turn recurring reporting into scheduled, readable updates sent to the right people.",
    useCases: ["Daily summaries", "Exception reports", "Volume checks", "AI summaries"],
    tools: ["n8n", "SQL", "Email", "OpenAI"],
    outcome: "Consistent reporting without manual compilation."
  },
  {
    title: "Business Process Automation",
    summary: "Map a manual process, identify failure points, and build the practical automation around it.",
    useCases: ["Admin workflows", "Approvals", "Notifications", "Operations handoffs"],
    tools: ["n8n", "APIs", "NetSuite", "GoHighLevel"],
    outcome: "Less repeated work and fewer operational mistakes."
  }
];

export const workflows = [
  {
    title: "Form to CRM",
    label: "Form -> CRM -> Email Alert",
    steps: ["Website form", "CRM contact creation", "Email notification"]
  },
  {
    title: "Order Follow-Up",
    label: "Order -> Contact Update -> Automation",
    steps: ["WooCommerce order", "GoHighLevel contact update", "Post-purchase automation"]
  },
  {
    title: "API Monitoring",
    label: "API -> Database -> Monitoring Alert",
    steps: ["API data sync", "PostgreSQL database", "Monitoring alert"]
  },
  {
    title: "NetSuite Support",
    label: "NetSuite Event -> Case Creation -> Notification",
    steps: ["NetSuite sales order event", "Support case creation", "Email notification"]
  },
  {
    title: "Report Summary",
    label: "Scheduled Report -> AI Summary -> Email",
    steps: ["Scheduled report", "AI summary", "Email delivery"]
  }
];

export const processSteps = [
  "Discover the workflow",
  "Map the data and systems",
  "Build the automation",
  "Test edge cases",
  "Deploy and monitor"
];
