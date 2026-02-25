import { Ruler, Building2, Users, FileCheck } from "lucide-react";

const highlights = [
  { icon: Ruler, label: "AutoCAD 2D Expert" },
  { icon: Building2, label: "Residential & Commercial" },
  { icon: Users, label: "Architect Collaboration" },
  { icon: FileCheck, label: "Drawing Documentation" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Detail-oriented and creative Civil Draughtsman with over 2 years of hands-on experience in residential and commercial construction projects. Proficient in AutoCAD 2D drafting, architectural elevations, interior and exterior detailing, and comprehensive site coordination.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in supporting architects and engineers with accurate working drawings, as-built documentation, and BOQ support. Committed to delivering precise, code-compliant drawings that meet client expectations and project timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {highlights.map(({ icon: Icon, label }) => (
    <div
      key={label}
      className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all overflow-hidden"
    >
      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary" />
      </div>

      <span className="text-sm font-medium text-foreground leading-snug break-words">
        {label}
      </span>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
