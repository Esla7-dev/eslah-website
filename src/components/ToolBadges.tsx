const toolEmoji: Record<string, string> = {
  Revit: "🧱",
  AutoCAD: "📐",
  "3ds Max": "🎛️",
  SketchUp: "🧊",
  Unreal: "🎮",
  "Unreal Engine": "🎮",
  Blender: "🍩",
  Rhino: "🦏",
  AI: "✨",
};

export default function ToolBadges({ tools }: { tools: string[] }) {
  if (!tools?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <span
          key={t}
          className="text-xs text-white/70 border border-white/10 rounded px-2 py-1"
          title={t}
        >
          <span className="mr-1">{toolEmoji[t] ?? "•"}</span>
          {t}
        </span>
      ))}
    </div>
  );
}
