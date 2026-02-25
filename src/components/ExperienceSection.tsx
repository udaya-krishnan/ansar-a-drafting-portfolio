import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Civil Draughtsman",
    company: "Homekey Architectures & Interior",
    period: "Feb 2025 – Feb 2026",
    tasks: [
     "Prepared interior & exterior drawings for residential and commercial projects",
    "Created 3D visualizations using 3ds Max for client presentations",
    "Supported site supervision and drawing compliance activities",
    "Developed 2D drawings including layouts, elevations, sections, and detailing as per approved designs",
    "Modified drawings based on client feedback, design revisions, and site conditions",
    "Coordinated with architects, site engineers, and interior designers to clarify drawings and resolve execution issues",
    "Assisted in updating as-built drawings and maintaining drawing revisions and documentation",
    "Prepared presentation drawings and material layouts for client meetings and internal reviews",
    "Ensured drawings followed company standards, dimensions, and detailing accuracy while meeting project deadlines",
  ],
  },
  {
    role: "Civil Draughtsman",
    company: "Rekha Developers - Architectures & Builders",
    period: "Jan 2023 – Feb 2025",
    tasks: [
       "Prepared detailed interior and exterior drawings for residential and commercial projects in coordination with architects and designers",
    "Developed 2D drawings including layouts, elevations, sections, and detailed drawings as per approved designs",
    "Created 3D visualization models and rendered views using 3ds Max for client presentations",
    "Modified drawings based on client feedback, design revisions, and site conditions",
    "Supported site supervision activities and ensured execution aligned with approved drawings and specifications",
    "Coordinated with site engineers, contractors, and vendors to resolve drawing-related issues",
    "Updated as-built drawings and maintained drawing revisions and project documentation",
    "Assisted in preparing presentation drawings and material layouts for client meetings",
  
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
              <div className="pb-8">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                <ul className="space-y-1.5">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
