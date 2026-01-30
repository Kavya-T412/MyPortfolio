import { ExternalLink, Github, Cpu, FileText, Coins, Vote, Shield } from 'lucide-react';

const projects = [
  {
    title: 'AI-Based Traffic Management System',
    description:
      'Built an intelligent traffic management model using YOLOv8, OpenCV, and Raspberry Pi to detect vehicles, accidents, and ambulances in real time.',
    details:
      'Integrated Flask backend and Firebase database with React.js dashboard for monitoring and alerts.',
    icon: Cpu,
    tags: ['YOLOv8', 'OpenCV', 'Flask', 'React.js', 'Firebase', 'Raspberry Pi'],
    color: 'from-blue-500 to-cyan-500',
    codeUrl: 'https://github.com/Kavya-T412/Traffic_Management_Testing.git',
    demoUrl: '',
  },
  {
    title: 'Invoice Tracking WebApp',
    description:
      'Developed a web application to manage and categorize invoices with Flask, MySQL, and voice-based input.',
    details: 'Implemented payment alerts via Gmail and SMS using Twilio API.',
    icon: FileText,
    tags: ['Flask', 'MySQL', 'Twilio API', 'Voice Input'],
    color: 'from-green-500 to-emerald-500',
    codeUrl: 'https://github.com/Kavya-T412/Invoice_Manager.git',
    demoUrl: '',
  },
  {
    title: 'ERC20 Token Factory Dapp',
    description:
      'Built an ERC20 token factory dApp using Solidity and React, enabling permissionless token deployment on Ethereum Mainnet and Sepolia.',
    details:
      'Implemented gas-optimized smart contracts and Web3 wallet integration using Ethers.js, WalletConnect, and Web3Modal.',
    icon: Coins,
    tags: ['Solidity', 'React', 'Ethers.js', 'Web3Modal', 'Ethereum'],
    color: 'from-purple-500 to-pink-500',
    codeUrl: 'https://github.com/Kavya-T412/Create_Own_Token.git',
    demoUrl: 'https://createowntoken.netlify.app/',
  },
  {
    title: 'CivicChain – Decentralized Governance',
    description:
      'Built a blockchain-based governance platform to enable transparent, tamper-proof tracking of citizen service requests using smart contracts.',
    details:
      'Implemented Web3 wallet authentication and immutable audit trails, improving accountability and trust in public service delivery.',
    icon: Vote,
    tags: ['Blockchain', 'Smart Contracts', 'Web3', 'Governance'],
    color: 'from-orange-500 to-amber-500',
    codeUrl: 'https://github.com/Kavya-T412/GovtPlatform.git',
    demoUrl: 'https://govtexp.netlify.app/',
  },
  {
    title: 'MintGuard – Secure NFT Platform',
    description:
      'Built an Ethereum-based NFT platform enabling batch minting, asset management, and enhanced security for creators.',
    details:
      'Added individual NFT pause/unpause functionality to protect assets from unauthorized transfers.',
    icon: Shield,
    tags: ['Ethereum', 'NFT', 'Solidity', 'Security', 'React'],
    color: 'from-red-500 to-rose-500',
    codeUrl: 'https://github.com/Kavya-T412/MintGuard.git',
    demoUrl: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Featured Work
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-4">
            Projects <span className="text-primary">Portfolio</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of blockchain, AI, and web development projects that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 md:p-8">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-6`}
                >
                  <project.icon className="text-white" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-3">{project.description}</p>
                <p className="text-muted-foreground text-sm mb-6">{project.details}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
