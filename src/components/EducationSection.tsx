import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "ITI Draughtsman Civil (NCVT)",
    year: "2022",
    desc: "National Council for Vocational Training certified program in Civil Draughtsmanship",
  },
  {
    title: "Interior & Exterior Visualization Course",
    year: "2022 – 2023",
    desc: "Specialized training in 3ds Max and visualization techniques",
  },
  {
    title: "Plus Two & SSLC",
    year: "Kerala State Board",
    desc: "Secondary and higher secondary education",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Education</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{edu.title}</h3>
              <p className="text-xs text-primary font-medium mb-2">{edu.year}</p>
              <p className="text-xs text-muted-foreground">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
