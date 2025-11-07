
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Zerodha Clone",
    description: "Developed a full-stack Zerodha clone simulating core functionalities of a stock trading platform",
    preview: "/zerodha.png",
    url: "https://zerodha-frontend-tau.vercel.app/",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "TailwindCSS"],
    bullets: [
      "Developed a full-stack Zerodha clone simulating core functionalities of a stock trading platform.",
      "Designed a responsive UI using React.js and Tailwind CSS, ensuring seamless experience across devices.",
      "Used MongoDB and Mongoose for persistent storage of user portfolios and transactions."
    ]
  },
  {
    title: "Real Time Weather App",
    description: "Gives Real Time Weather details of cities around the world using React and API.",
    preview: "/real-time-weather-app.png",
    url: "https://real-time-weather-tau.vercel.app/",
    technologies: ["React", "API", "Material-UI"],
    bullets: [
      "Developed weather application using React.js, Material UI and external APIs to display real-time weather data.",
      "Enhanced performance by optimizing API calls and state management."
    ]
  },
  {
    title: "GYM Website",
    description: "Fitness-focused website",
    preview: "/gym-website.png",
    url: "https://rafitness.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Developed a responsive fitness website using HTML, CSS, and JavaScript.",
      "Improved user engagement with a visually appealing and user-friendly interface."
    ]
  },
  {
    title: "Amazon Clone",
    description: "Pixel perfect clone of Amazon landing page",
    preview: "/amazon-clone.png",
    url: "https://amazons-cloneweb.vercel.app/",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive game with logic",
    preview: "/tic-tac-toe.png",
    url: "https://tic-tac-toe-game-zeta-one.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

export default function Projects() {
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setPreviewPosition({ x: e.clientX, y: e.clientY });
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-[#FFA94D]">Featured Projects</h1>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-0 bg-card rounded-3xl border border-border max-w-4xl mx-auto relative overflow-hidden"
              >
                {/* Thumbnail with hover effect only on image */}
                <div 
                  className="w-full h-48 md:h-56 overflow-hidden cursor-none"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img 
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-[#ffa94d] text-white hover:brightness-95 transition"
                      aria-label={`View ${project.title}`}
                    >
                      Live <ExternalLink size={14} />
                    </a>
                  </div>

                  {Array.isArray((project as any).bullets) ? (
                    <ul className="text-muted-foreground mb-4 space-y-2">
                      {(project as any).bullets.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#FFA94D]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Preview */}
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed pointer-events-none z-50"
            style={{
              left: previewPosition.x,
              top: previewPosition.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden" style={{ width: '300px' }}>
              <div className="relative w-full aspect-video">
                <img 
                  src={projects[activeProject].preview} 
                  alt={projects[activeProject].title}
                  className="object-cover w-full h-full opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-medium bg-[#ffa94d] px-3 py-2 rounded-lg flex items-center gap-2">
                    View Project <ExternalLink size={16} />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

