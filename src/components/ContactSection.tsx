import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left content */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Let’s build something <span className="text-primary">great</span> together.
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities,
                  or just want to say hi — I’d love to hear from you!
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  Palakkad, Kerala, India
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  ansaransar6012@gmail.com
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex flex-col items-start md:items-end gap-4">
                <a
                  href="mailto:ansaransar6012@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition"
                >
                  <Send size={16} />
                  Send me an Email
                </a>

                {/* Social icons */}
                <div className="flex gap-3">
                  {/* <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
                  >
                    <Github size={18} />
                  </a> */}

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
                  >
                    <Twitter size={18} />
                  </a>

                  <a
                    href="mailto:ansaransar6012@gmail.com"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default ContactSection;