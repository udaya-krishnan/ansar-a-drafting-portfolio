import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tools: string[];
  link:string;
};

const projects: Project[] = [
 {
  title: "Residential Plan & Permission Drawings",
  description:
    "Prepared detailed architectural plans and statutory permission drawings for the proposed residential building of Mrs. Saleeka A.K., Ambalamkunnath, Panamanna, Kothakurussi, Palakkad. The work includes floor plans, elevations, sections, site layout, and drawings compliant with local authority approval requirements.",
  tools: ["AutoCAD 2D"],
  link: "https://drive.google.com/drive/folders/1Vn_nYE4WeY8cAJ39OS-pOzzc2eh9Htzz?usp=sharing",
},
  {
  title: "Residential Detailed Drawings – Complete Working Set",
  description:
    "This project includes a complete set of detailed residential drawings prepared using AutoCAD. The drawing package covers ground floor and first floor plans, elevations, sections, stair details, door and window schedules, and other working drawings required for construction execution.",
  tools: ["AutoCAD 2D"],
  link: "https://drive.google.com/drive/folders/1icGcj5-geEK56vkpgWKFT5L0bHzcDYs-?usp=sharing",
},
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Projects
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all flex flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm text-primary">
                  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
>
  <ExternalLink size={14} />
  <span>View project</span>
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;