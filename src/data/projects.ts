export type Project = {
  slug: string;
  title: string;
  titleAr?: string;
  projectType: "Villa" | "Duplex" | "Commercial" | "Hospitality" | "Mixed-use" | "Planning" | "Other";
  clientType: "Private" | "Developer" | "Corporate";
  location: string;
  locationAr?: string;
  year?: string;

  narrative: string;
  narrativeAr?: string;
  scope: string[];
  scopeAr?: string[];
  constraints: string[];
  constraintsAr?: string[];
  outcome: string[];
  outcomeAr?: string[];

  highlights: {
    timeline: string;
    timelineAr?: string;
    stakeholders: string;
    stakeholdersAr?: string;
    stage: string;
    stageAr?: string;
  };
  tools: string[];

  tags: string[];
  tagsAr?: string[];
  coverImage?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "villa-modern-01",
    title: "Modern Villa — Concept to Coordinated Package",
    titleAr: "فيلا عصرية — من الفكرة إلى الحزمة المنسّقة",
    projectType: "Villa",
    clientType: "Private",
    location: "KSA (Anonymized)",
    locationAr: "السعودية",
    year: "2025",
    narrative:
      "Client needed a fast approval-ready concept for a modern villa. We delivered coordinated layouts, facade direction, and clear visualization options. Result: quicker decisions, fewer revision loops, and a cleaner handoff to development.",
    narrativeAr:
      "كان التحدي هو الوصول إلى تصميم معتمد خلال مدة قصيرة مع الحفاظ على وضوح الخيارات. قمنا بتطوير مخططات منسّقة، توجيهات واجهات، وخيارات تصور بصري واضحة. النتيجة: قرارات أسرع، تقليل التعديلات، وتسليم أفضل للمرحلة التالية.",
    scope: ["Concept design", "Space planning", "Facade direction", "3D visualization"],
    scopeAr: ["التصميم المفاهيمي", "تنظيم المساحات", "توجيه الواجهات", "التصور البصري ثلاثي الأبعاد"],
    constraints: ["Fast approval timeline", "Client revisions in parallel"],
    constraintsAr: ["جدول اعتماد ضيق", "تعديلات العميل في مراحل متوازية"],
    outcome: ["Clear option sets for faster decisions", "Coordinated layouts reduced rework"],
    outcomeAr: ["خيارات واضحة لتسريع القرارات", "مخططات منسّقة قللت إعادة العمل"],
    highlights: {
      timeline: "2–3 weeks",
      timelineAr: "٢–٣ أسابيع",
      stakeholders: "Private client + approvals",
      stakeholdersAr: "عميل خاص + جهات اعتماد",
      stage: "Concept → Review Package",
      stageAr: "المرحلة المفاهيمية → حزمة المراجعة",
    },
    tools: ["Revit", "AutoCAD", "3ds Max", "Unreal", "AI"],
    tags: ["Architecture", "Visualization"],
    tagsAr: ["معماري", "تصور بصري"],
  },
  {
    slug: "duplex-compact-02",
    title: "Compact Duplex — Space Optimization",
    titleAr: "دوبلكس مدمج — تحسين المساحات",
    projectType: "Duplex",
    clientType: "Private",
    location: "KSA (Anonymized)",
    locationAr: "السعودية",
    year: "2024",
    narrative:
      "The duplex plan had tight area limits and privacy concerns. We reworked zoning and circulation, aligned interiors with use priorities, and prepared a review package. Result: improved efficiency, better privacy separation, and smoother stakeholder approval.",
    narrativeAr:
      "كان التحدي هو قيود المساحة الضيقة ومتطلبات الخصوصية. قمنا بإعادة تنظيم التوزيع والحركة، ومواءمة التصميم الداخلي مع الأولويات الوظيفية. النتيجة: كفاءة أفضل، فصل أقوى للخصوصية، واعتماد أسهل من الأطراف المعنية.",
    scope: ["Interior layout optimization", "Material direction", "Detailing support"],
    scopeAr: ["تحسين المخطط الداخلي", "توجيه المواد", "دعم التفاصيل"],
    constraints: ["Tight plot + functional zoning", "High privacy requirements"],
    constraintsAr: ["قطعة أرض ضيقة + توزيع وظيفي", "متطلبات خصوصية عالية"],
    outcome: ["Improved circulation and room efficiency", "Stronger privacy separation"],
    outcomeAr: ["تحسين الحركة وكفاءة الغرف", "فصل أقوى للخصوصية"],
    highlights: {
      timeline: "3–4 weeks",
      timelineAr: "٣–٤ أسابيع",
      stakeholders: "Private client + municipality",
      stakeholdersAr: "عميل خاص + البلدية",
      stage: "Design Development",
      stageAr: "تطوير التصميم",
    },
    tools: ["Revit", "AutoCAD", "SketchUp", "3ds Max"],
    tags: ["Interior", "Space Planning"],
    tagsAr: ["داخلي", "تخطيط المساحات"],
  },
  {
    slug: "commercial-fitout-03",
    title: "Commercial Fit-out — Client Review Package",
    titleAr: "تشطيب تجاري — حزمة مراجعة العميل",
    projectType: "Commercial",
    clientType: "Corporate",
    location: "KSA (Anonymized)",
    locationAr: "السعودية",
    year: "2024",
    narrative:
      "Corporate client required brand-aligned fit-out concepts with clear deliverables for stakeholder review. We structured the design process around approvals and prepared presentation-ready packages. Result: faster sign-off and reduced scope ambiguity.",
    narrativeAr:
      "احتاج العميل المؤسسي لتصاميم تشطيب متوافقة مع الهوية البصرية، مع تسليمات واضحة للمراجعة. قمنا بتنظيم عملية التصميم بما يناسب الاعتمادات، وأعددنا حزم عرض جاهزة. النتيجة: اعتماد أسرع، ووضوح أكبر في نطاق العمل.",
    scope: ["Concept direction", "Interior design", "Presentation package"],
    scopeAr: ["توجيه المفهوم", "التصميم الداخلي", "حزمة العرض"],
    constraints: ["Brand alignment", "Stakeholder approvals"],
    constraintsAr: ["التوافق مع الهوية البصرية", "اعتمادات الأطراف المعنية"],
    outcome: ["Presentation-ready deliverables for quick sign-off", "Reduced scope ambiguity"],
    outcomeAr: ["تسليمات جاهزة للعرض لتسريع الاعتماد", "تقليل الغموض في نطاق العمل"],
    highlights: {
      timeline: "2 weeks",
      timelineAr: "أسبوعان",
      stakeholders: "Corporate client + stakeholders",
      stakeholdersAr: "عميل مؤسسي + أطراف معنية",
      stage: "Concept + Presentation",
      stageAr: "المرحلة المفاهيمية + العرض",
    },
    tools: ["AutoCAD", "3ds Max", "Unreal", "AI"],
    tags: ["Interior", "Brand", "Presentation"],
    tagsAr: ["داخلي", "هوية بصرية", "عرض"],
  },
];
