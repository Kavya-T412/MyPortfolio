import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Introduction to Ethical Hacking',
    issuer: 'Great Learning',
    category: 'Cybersecurity',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera',
    category: 'Blockchain',
  },
  {
    title: 'Fundamentals of Java Programming',
    issuer: 'Coursera',
    category: 'Programming',
  },
  {
    title: 'Blockchain: The Future',
    issuer: 'Techara',
    category: 'Blockchain',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Credentials
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-4">
            Certifications & <span className="text-primary">Learning</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and skill validation through recognized industry certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border card-hover"
            >
              {/* Icon */}
              <div className="p-4 rounded-xl bg-primary/10 inline-flex mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Category Badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                {cert.category}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-muted-foreground text-sm mb-4">Issued by {cert.issuer}</p>

              {/* Link */}
              <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                View Certificate
                <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {[
                  'Blockchain',
                  'Cybersecurity',
                  'Smart Contracts',
                  'Web3',
                  'React',
                  'Python',
                  'Solidity',
                  'AI/ML',
                  'Flask',
                  'Ethereum',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="text-4xl md:text-5xl font-bold text-muted-foreground/20 whitespace-nowrap"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
