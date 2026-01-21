export default function Footer({ isArabic = false }: { isArabic?: boolean }) {
  const description = isArabic
    ? "فريق متعدد التخصصات يقدم حلول تصميم منسقة عبر المعماري، الداخلي، التخطيطي، والخارجي."
    : "Multidisciplinary design team delivering coordinated outcomes across architecture, interiors, landscape, and planning.";

  const copyright = isArabic
    ? `© ${new Date().getFullYear()} إصلاح. جميع الحقوق محفوظة.`
    : `© ${new Date().getFullYear()} ESLAH. All rights reserved.`;

  const whatsappLabel = isArabic ? "واتساب" : "WhatsApp";

  return (
    <footer className="border-t border-white/10 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="text-lg font-medium">ESLAH</div>
          <p className="mt-2 text-sm text-white/60 max-w-md">
            {description}
          </p>
        </div>

        <div className="text-sm text-white/60 space-y-2">
          <div>{copyright}</div>
          <div className="text-white/40">Revit • AutoCAD • 3ds Max • SketchUp • Unreal • Rhino • AI</div>
          <a
            href="https://wa.me/971588927001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>{whatsappLabel}:</span>
            <span className="font-medium">+971 58 892 7001</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
