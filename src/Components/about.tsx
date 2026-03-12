import { ChevronLeft, ChevronRight } from "lucide-react";
import Comfort from "../assets/comfort-meets-1.jpg";
import Pizza from "../assets/Pizza-template.jpg";
import Profile from "../assets/profile.png";
import Web from "../assets/Web-design.jpg"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Orange glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.25),transparent_60%)]"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full grid grid-cols-3 border-x border-white/10"></div>
      </div>

      <div className="relative max-w-6xl px-6">

        {/* Section label */}
        <p className="text-sm text-gray-400 mb-6">• About Me</p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Behind every great design is <br />
          an even greater story
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mb-16">
          Every design has a starting point, and for truly impactful visuals.
          It’s the narrative that guides the creative process, ensuring the
          final product resonates with meaning and purpose. We believe that
          understanding the story is paramount.
        </p>

        {/* Glass Project Card */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm bg-white/10 px-4 py-1 rounded-full">
              @Wayne.design
            </span>

            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Project preview grid */}
          <div className="grid grid-cols-4 gap-6">

            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center">
              <img
                src={Comfort}
                alt="project"
                className="rounded-md"
              />
            </div>

            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center">
              <img
                src={Pizza}
                alt="project"
                className="rounded-md"
              />
            </div>

            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center">
              <img
                src={Web}
                alt="project"
                className="rounded-md"
              />
            </div>

            <div className="bg-black rounded-xl p-4 flex items-center justify-center">
              <img
                src={Profile}
                alt="project"
                className="rounded-md"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}