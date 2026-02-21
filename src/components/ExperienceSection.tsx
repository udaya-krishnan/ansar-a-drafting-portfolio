import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Civil Draughtsman",
    company: "Homekey Architectures & Interior",
    period: "Mar 2025 – Dec 2025",
    tasks: [
      "Prepared interior & exterior drawings for residential and commercial projects",
      "Created 3D visualizations using 3ds Max for client presentations",
      "Supported site supervision and drawing compliance activities",
    ],
  },
  {
    role: "Civil Draughtsman",
    company: "Rekha Developers",
    period: "Jan 2023 – Feb 2025",
    tasks: [
      "Produced architectural & construction drawings including floor plans, elevations, and sections",
      "Conducted site visits to ensure drawing compliance and accuracy",
      "Coordinated with clients for design revisions and approvals",
      "Maintained drawing documentation and version control",
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
