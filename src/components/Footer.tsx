export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="text-lg font-medium">ESLAH</div>
          <p className="mt-2 text-sm text-white/60 max-w-md">
            Multidisciplinary design team delivering coordinated outcomes across
            architecture, interiors, landscape, and planning.
          </p>
        </div>

        <div className="text-sm text-white/60 space-y-2">
          <div>© {new Date().getFullYear()} ESLAH. All rights reserved.</div>
          <div className="text-white/40">Revit • AutoCAD • 3ds Max • SketchUp • Unreal • Rhino • AI</div>
        </div>
      </div>
    </footer>
  );
}
