import { MapPin, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
<section className="relative min-h-[90vh] flex items-center section-padding pt-16 sm:pt-20 md:pt-32">      <div className="section-container w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to GCC Opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-800 text-foreground leading-tight tracking-tight mb-4">
            ANSAR A
          </h1>

          <p className="text-xl sm:text-2xl font-display font-600 text-primary mb-4">
            Civil Draughtsman
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
            Detail-oriented Civil Draughtsman with 2+ years of experience in residential and commercial construction drawings, AutoCAD 2D drafting, and site coordination.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin size={16} className="text-primary" />
            Palakkad, Kerala, India
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Contact Me
            </a>
           <a
  href="/ANSAR _ CV.pdf"
  download
  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
>
  <Download size={16} />
  Download CV
</a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-1/3 h-2/3 bg-accent/50 rounded-l-[4rem] -z-10 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
