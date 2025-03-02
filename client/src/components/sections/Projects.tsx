
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real Time Weather App",
    description: "Gives Real Time Weather details of cities around the world using React and API.",
    preview: "../public/real-time-weather-app.png",
    url: "https://real-time-weather-tau.vercel.app/",
    technologies: ["React", "API", "Material-UI"]
  },
  {
    title: "GYM Website",
    description: "Fitness-focused website",
    preview: "../public/gym-website.png",
    url: "https://rafitness.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Amazon Clone",
    description: "Pixel perfect clone of Amazon landing page",
    preview: "../public/amazon-clone.png",
    url: "https://amazons-cloneweb.vercel.app/",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive game with logic",
    preview: "../public/tic-tac-toe.png",
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
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-[#FFA94D]"
        >
          Featured Projects
        </motion.h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className="p-8 bg-card rounded-lg border border-border max-w-[70%] mx-auto cursor-none relative group"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title}`}
              />
            </motion.div>
          ))}
        </div>

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

