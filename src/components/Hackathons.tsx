import { Trophy, Calendar, Users, Zap } from 'lucide-react';

const hackathons = [
  {
    title: 'PyExpo Hackathon',
    organizer: 'KGISL',
    year: '2025',
    description:
      'Developed a Donation Matching Web App (concept stage) using Python, Flask, and MySQL with basic authentication and matching logic.',
    achievement: 'Collaborated in a team to design the prototype, applying problem-solving and rapid development skills.',
    icon: Trophy,
  },
  {
    title: 'Smart India Hackathon (SIH)',
    organizer: 'Government of India',
    year: '2025',
    description:
      'Participated in Smart India Hackathon (SIH) 2025 and qualified at the college-level selection round.',
    achievement:
      'Contributed to the design of an AI-based Smart Traffic Management System using YOLOv8, OpenCV, and Flask.',
    icon: Zap,
  },
  {
    title: 'DUHACKS 5.0',
    organizer: '36-hour Hackathon',
    year: '2026',
    description:
      'Participated in DUHacks 5.0 and collaboratively designed a real-world blockchain solution under strict time constraints.',
    achievement:
      'Demonstrated rapid problem-solving, system design, and end-to-end development skills to deliver a working prototype.',
    icon: Users,
  },
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 md:py-32 bg-hero">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-hero-accent" />
            <span className="text-hero-accent font-medium text-sm tracking-wider uppercase">
              Competitive Experience
            </span>
            <div className="h-px w-12 bg-hero-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathon <span className="text-hero-accent">Journey</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Building under pressure, solving real problems, and collaborating with talented teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />

          <div className="space-y-12">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-colors">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-hero-accent/20">
                        <hackathon.icon className="text-hero-accent" size={24} />
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar size={14} />
                        {hackathon.year}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {hackathon.title}
                    </h3>
                    <p className="text-hero-accent text-sm font-medium mb-4">
                      {hackathon.organizer}
                    </p>

                    {/* Description */}
                    <p className="text-white/70 mb-4">{hackathon.description}</p>

                    {/* Achievement */}
                    <div className="p-4 rounded-xl bg-hero-accent/10 border border-hero-accent/20">
                      <p className="text-white/80 text-sm">
                        <span className="text-hero-accent font-semibold">Achievement: </span>
                        {hackathon.achievement}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-hero-accent border-4 border-hero" />

                {/* Empty Space for layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
