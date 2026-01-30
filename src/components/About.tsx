import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="section-title mb-6">
              Engineering the{' '}
              <span className="text-primary">Future</span> of Web3
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an Engineering student at KGISL Institute of Technology, pursuing a Bachelor's
              degree in Computer Science Engineering with a specialization in Cybersecurity.
              My passion lies at the intersection of blockchain technology, AI/ML, and
              cybersecurity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I aspire to apply my problem-solving, research, and project-building skills to
              develop secure and innovative solutions that push the boundaries of what's
              possible in the decentralized world.
            </p>

            {/* Education Card */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    KGISL Institute of Technology
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    B.E. Computer Science Engineering (Cybersecurity)
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>2024 - 2028</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <span>CGPA: 7.98</span>
                    <span className="text-primary/50">|</span>
                    <span>1st Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-hero rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-hero-accent mb-2">5+</div>
              <div className="text-white/70">Projects Built</div>
            </div>
            <div className="bg-muted rounded-2xl p-6 md:p-8 text-center border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Hackathons</div>
            </div>
            <div className="bg-muted rounded-2xl p-6 md:p-8 text-center border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="bg-hero rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-hero-accent mb-2">7+</div>
              <div className="text-white/70">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
