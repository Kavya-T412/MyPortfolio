import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const scrollingWords = [
  'Blockchain',
  'Cybersecurity',
  'Web3',
  'Smart Contracts',
  'DeFi',
  'AI/ML',
  'React',
  'Solidity',
  'Python',
  'Innovation',
];

const Hero = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % scrollingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hero-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Scrolling Words Background */}
      <div className="absolute left-0 top-0 bottom-0 w-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute left-8 md:left-16 top-0 h-[200%] animate-scroll-text">
          {[...scrollingWords, ...scrollingWords].map((word, index) => (
            <div
              key={index}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold py-4 transition-colors duration-500 ${
                index % scrollingWords.length === activeWordIndex
                  ? 'text-hero-accent'
                  : 'text-white/20'
              }`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-hero-accent" />
              <span className="text-hero-accent font-medium text-sm tracking-wider uppercase">
                Portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-hero-accent">Kavya T</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8 leading-relaxed">
              Engineering student with a strong foundation in{' '}
              <span className="text-white font-medium">Blockchain</span>,{' '}
              <span className="text-white font-medium">Cybersecurity</span>, and{' '}
              <span className="text-white font-medium">AI/ML</span>. Building secure and
              innovative solutions for the decentralized future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={scrollToAbout}
                className="btn-hero flex items-center gap-2"
              >
                Explore My Work
                <ArrowDown size={18} />
              </button>
              <a
                href="/Kavya_Resume.pdf"
                download="Kavya_T_Resume.pdf"
                className="btn-hero-outline flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">Connect:</span>
              <a
                href="https://github.com/Kavya-T412"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kavya-t-9990b2315"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tkavya402@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - LINK Text Like Chainlink */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white/5 leading-none tracking-tighter">
                KT
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-hero-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
                    Specializing in
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-500">
                    {scrollingWords[activeWordIndex]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
