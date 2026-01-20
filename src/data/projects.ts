export type Project = {
  slug: string;
  title: string;
  projectType: "Villa" | "Duplex" | "Commercial" | "Hospitality" | "Mixed-use" | "Planning" | "Other";
  clientType: "Private" | "Developer" | "Corporate";
  location: string; // city or anonymized: "KSA (Central Region)"
  year?: string;

  scope: string[];        // what you did
  constraints: string[];  // budget/time/regulations/site constraints
  outcome: string[];      // results: approvals, coordination, time saved, etc.

  tags: string[];
  coverImage?: string; // optional later
};

export const projects: Project[] = [
  {
    slug: "villa-modern-01",
    title: "Modern Villa — Concept to Coordinated Package",
    projectType: "Villa",
    clientType: "Private",
    location: "KSA (Anonymized)",
    year: "2025",
    scope: ["Concept design", "Space planning", "Facade direction", "3D visualization"],
    constraints: ["Fast approval timeline", "Client revisions in parallel"],
    outcome: ["Clear option sets for faster decisions", "Coordinated layouts reduced rework"],
    tags: ["Architecture", "Visualization"],
  },
  {
    slug: "duplex-compact-02",
    title: "Compact Duplex — Space Optimization",
    projectType: "Duplex",
    clientType: "Private",
    location: "KSA (Anonymized)",
    year: "2024",
    scope: ["Interior layout optimization", "Material direction", "Detailing support"],
    constraints: ["Tight plot + functional zoning", "High privacy requirements"],
    outcome: ["Improved circulation and room efficiency", "Stronger privacy separation"],
    tags: ["Interior", "Space Planning"],
  },
  {
    slug: "commercial-fitout-03",
    title: "Commercial Fit-out — Client Review Package",
    projectType: "Commercial",
    clientType: "Corporate",
    location: "KSA (Anonymized)",
    year: "2024",
    scope: ["Concept direction", "Interior design", "Presentation package"],
    constraints: ["Brand alignment", "Stakeholder approvals"],
    outcome: ["Presentation-ready deliverables for quick sign-off", "Reduced scope ambiguity"],
    tags: ["Interior", "Brand", "Presentation"],
  },
];
