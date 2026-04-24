export const profile = {
  name: "Emil Hernaez",
  role: "Back-End Software Engineer | Automation & Integration Specialist",
  intro: "Back-End Software Engineer building reliable APIs, automations, and system integrations.",
  email: "you@example.com",
  links: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    upwork: "https://www.upwork.com/",
    cv: "/emil-hernaez-cv.pdf"
  }
};

export const contactIntents = [
  {
    id: "hiring",
    label: "Hiring / Job Opportunity",
    subject: "Back-End Software Engineer Opportunity",
    placeholder:
      "Hi Emil, I am reaching out about a back-end engineering role. The team is looking for experience with..."
  },
  {
    id: "automation",
    label: "Automation Project",
    subject: "Automation Project Inquiry",
    placeholder:
      "Hi Emil, I need help automating a workflow that currently involves..."
  },
  {
    id: "api",
    label: "API Integration",
    subject: "API Integration Inquiry",
    placeholder:
      "Hi Emil, I need to connect two systems. The source system is... and the destination system is..."
  },
  {
    id: "netsuite",
    label: "NetSuite Support",
    subject: "NetSuite Automation or Integration Support",
    placeholder:
      "Hi Emil, I need help with NetSuite involving sales orders, SuiteScript, saved searches, or integrations..."
  },
  {
    id: "general",
    label: "General Inquiry",
    subject: "General Inquiry",
    placeholder:
      "Hi Emil, I would like to talk about a project involving..."
  }
] as const;

export const commandOptions = [
  {
    label: "Need an API integration?",
    intentId: "api"
  },
  {
    label: "Need workflow automation?",
    intentId: "automation"
  },
  {
    label: "Hiring a back-end developer?",
    intentId: "hiring"
  }
] as const;
