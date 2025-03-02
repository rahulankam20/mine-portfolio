
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      const canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.zIndex = '0';
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      ];

      const particles = [];

      class Particle {
        constructor(x, y, imgSrc) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 10 + 50;
          this.speedX = (Math.random() - 0.5) ;
          this.speedY = (Math.random() - 0.5) ;
          this.image = new Image();
          this.image.src = imgSrc;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x <= 0 || this.x + this.size >= canvas.width) this.speedX *= -1;
          if (this.y <= 0 || this.y + this.size >= canvas.height) this.speedY *= -1;
        }
        draw() {
          ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
      }

      function init() {
        for (let i = 0; i < 15; i++) {
          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;
          let imgSrc = icons[Math.floor(Math.random() * icons.length)];
          particles.push(new Particle(x, y, imgSrc));
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.update();
          p.draw();
        });
        requestAnimationFrame(animate);
      }

      init();
      animate();
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[#FFA94D] text-2xl md:text-3xl font-bold mb-4">
            Hi, I'm Rahul Ankam
          </motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack Developer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg text-muted-foreground mb-8">
            I build exceptional digital experiences that combine beautiful design with powerful functionality
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block bg-[#FFA94D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#FF922B] transition-colors max-sm:px-4 max-sm:py-2">
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


