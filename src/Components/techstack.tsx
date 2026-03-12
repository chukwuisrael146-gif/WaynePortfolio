import { useEffect, useRef } from "react";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiLoom, SiTailwindcss } from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const techStack: Tech[] = [
  {
    name: "Figma",
    icon: <FaFigma size={40} />,
    description: "Leading collaborative design tool",
  },
  {
    name: "Loom",
    icon: <SiLoom size={40} />,
    description: "Instantly share video messages",
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
    description: "Popular JavaScript UI library",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={40} />,
    description: "Utility-first CSS framework",
  },
];

export default function TechStack() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 1;

      if (scroll >= slider.scrollWidth / 2) {
        scroll = 0;
      }

      slider.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">

      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        Tech Stack
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden w-full max-w-[900px]"
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="min-w-[260px] sm:min-w-[300px] md:min-w-[350px] bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-xl"
          >
            <h3 className="text-lg md:text-xl mb-6">{tech.name}</h3>

            <div className="bg-black p-6 rounded-xl mb-6">
              {tech.icon}
            </div>

            <p className="text-gray-400 text-sm text-center">
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[900px] h-[3px] bg-white/20 mt-12 rounded">
        <div className="h-full bg-white w-[30%]"></div>
      </div>

    </section>
  );
}