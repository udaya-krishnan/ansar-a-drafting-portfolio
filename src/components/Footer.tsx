const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="section-container text-center">
        <p className="font-display font-semibold text-foreground mb-1">Ansar A</p>
        <p className="text-xs text-muted-foreground mb-3">Civil Draughtsman</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ansar A. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
