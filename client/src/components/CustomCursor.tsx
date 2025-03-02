import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  useEffect(() => {
    const projectCards = document.querySelectorAll("[data-project-card]");
    
    const onProjectEnter = () => setIsHoveringProject(true);
    const onProjectLeave = () => setIsHoveringProject(false);

    projectCards.forEach(card => {
      card.addEventListener("mouseenter", onProjectEnter);
      card.addEventListener("mouseleave", onProjectLeave);
    });

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener("mouseenter", onProjectEnter);
        card.removeEventListener("mouseleave", onProjectLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
        isHoveringProject ? "scale-[3]" : "scale-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div className="w-3 h-3 bg-[#FFA94D] rounded-full" />
    </div>
  );
}
