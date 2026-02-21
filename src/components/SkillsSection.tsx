import { PenTool, Compass, Home, Building, Paintbrush, FileText, HardHat, Calculator, FolderOpen } from "lucide-react";

const skills = [
  { icon: PenTool, name: "AutoCAD 2D", desc: "Expert-level drafting and design" },
  { icon: Compass, name: "3ds Max", desc: "3D visualization & rendering" },
  { icon: Home, name: "Residential Drawings", desc: "Floor plans & elevations" },
  { icon: Building, name: "Commercial Drawings", desc: "Complex building layouts" },
  { icon: Paintbrush, name: "Interior & Exterior Drafting", desc: "Detailed design drawings" },
  { icon: FileText, name: "Working & As-Built Drawings", desc: "Construction documentation" },
  { icon: HardHat, name: "Site Supervision", desc: "On-site coordination" },
  { icon: Calculator, name: "BOQ & Quantity Support", desc: "Material estimation" },
  { icon: FolderOpen, name: "Drawing Control", desc: "Documentation management" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Skills</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{name}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
