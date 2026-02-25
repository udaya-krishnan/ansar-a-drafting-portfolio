import { Mail, MapPin, Send, Github, Linkedin, Twitter,Phone } from "lucide-react";

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
    aansar36391@gmail.com
  </div>

  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <Phone size={16} className="text-primary" />
    +91 75101 89853
  </div>
</div>

              {/* Right CTA */}
              <div className="flex flex-col items-center md:items-end gap-3">
 <a
  href="https://wa.me/917510189853?text=Hello%20Ansar,%20I%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition"
>
  <Send size={16} />
  Send me a WhatsApp message
</a>

  {/* Social icons */}
  <div className="flex gap-3">
    <a
      href="https://www.linkedin.com/in/ansar-ansar-64b299331/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
    >
      <Linkedin size={16} />
    </a>

    <a
      href="https://x.com/Ansar2034376"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
    >
      <Twitter size={16} />
    </a>

    <a
      href="mailto:aansar36391@gmail.com"
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
    >
      <Mail size={16} />
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