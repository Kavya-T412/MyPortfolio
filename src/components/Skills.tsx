import { Code, Globe, Users } from 'lucide-react';

const skillsData = {
  programming: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ],
  webDev: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ],
  tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Web3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg' },
    { name: 'Ethers.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg' },
  ],
  soft: ['Teamwork', 'Time Management', 'Problem Solving', 'Communication'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Skills & Expertise
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit spanning blockchain development, web technologies, and AI/ML applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skillsData.programming.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-hero-accent/10">
                <Globe className="text-hero-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {skillsData.webDev.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border hover:border-hero-accent/50 hover:bg-hero-accent/5 transition-all duration-300 cursor-default"
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
              ))}
            </div>

            <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider">
              Tools & Frameworks
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {skillsData.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50 hover:border-hero-accent/30 transition-all duration-300"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs font-medium text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-hero rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/10">
                <Users className="text-hero-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {skillsData.soft.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-hero-accent/20 flex items-center justify-center text-hero-accent font-bold">
                    {index + 1}
                  </div>
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-hero-accent/10 border border-hero-accent/20">
              <p className="text-white/80 text-sm">
                "Building bridges between complex technology and real-world solutions through
                collaboration and continuous learning."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
