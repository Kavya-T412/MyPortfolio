import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-white mb-2 inline-block">
              KAVYA<span className="text-hero-accent"></span>
            </a>
            <p className="text-white/60 text-sm">
              © Kavya T. Open for internships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kavya-T412"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavya-t-9990b2315"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:tkavya402@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            Open for Internships & Collobration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
