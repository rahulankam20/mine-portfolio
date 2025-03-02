import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, 
  SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiGit, SiGithub 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub }
];

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Terna Enginnering College, Mumbai University",
    year: "2021-2025",
    details: "Electronics and Telecommunication Engineering"
  },
  {
    degree: "HSC",
    institution: "Andhra Education Society's Junior College",
    year: "2019-2021",
    details: "Computer Science"
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-[#FFA94D]">About Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side - About text */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p>
                Full Stack developer skilled in frontend and backend technologies, including HTML, CSS, JavaScript, 
                React.js, Node.js, Express.js, MongoDB, and Mongoose. Experienced in building responsive applications, 
                integrating RESTful APIs, and optimizing performance. Quick learner, detail-oriented, with a passion for 
                innovation. 
                </p>
                <p>
                  My journey in software development started with a curiosity about how
                  things work on the web. Since then, I've worked with various
                  technologies and frameworks, always staying up-to-date with the
                  latest industry trends.
                </p>
              </div>
            </motion.div>

            {/* Right side - Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <h3 className="text-xl font-medium text-[#FFA94D]">{edu.degree}</h3>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <p className="mt-2">{edu.details}</p>
                </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills section below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0 } }}
                  className="p-4 bg-card rounded-lg flex items-center gap-3"
                >
                  <Icon className="w-8 h-8 text-[#FFA94D]" />
                  <span className="font-medium">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}