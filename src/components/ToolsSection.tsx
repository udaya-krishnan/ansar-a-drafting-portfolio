import { Monitor, FileSpreadsheet, FolderOpen, Laptop, PenTool } from "lucide-react";

const tools = [
  { icon: PenTool, name: "AutoCAD 2D", level: "Advanced" },
  { icon: Monitor, name: "3ds Max", level: "Intermediate" },
  { icon: FileSpreadsheet, name: "MS Word & Excel", level: "Proficient" },
  { icon: FolderOpen, name: "Drawing Documentation", level: "Advanced" },
  { icon: Laptop, name: "K-Smart", level: "Basic" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Tools & Software</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(({ icon: Icon, name, level }) => (
            <div
              key={name}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{name}</h3>
                <p className="text-xs text-muted-foreground">{level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
