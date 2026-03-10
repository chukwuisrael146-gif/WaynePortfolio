import React from "react";
import { Globe } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="w-full py-20 flex flex-col items-center">
      {/* Stats Container */}
      <div className="flex max-md:flex-col gap-6">
        
        {/* Card 1 */}
        <div className="
          bg-black/50 backdrop-blur-xl
          border border-white/10
          rounded-[30px] px-10 py-10
          flex flex-col justify-center
          w-[330px] max-md:w-full
          shadow-xl
        ">
          <p className="text-white/70 text-sm mb-10">• Net Worth Gross</p>
          <h1 className="text-5xl font-bold text-white mt-5 ml-[90px]  ">20M+</h1>
        </div>

        {/* Card 2 */}
        <div className="
          bg-black/50 backdrop-blur-xl
          border border-white/10
          rounded-[30px] px-10 py-8
          flex flex-col justify-center
          w-[330px] max-md:w-full
          shadow-xl
        ">
          <p className="text-white/70 text-sm mb-10">• Success Rate</p>
          <h1 className="text-5xl font-bold text-white mt-5 ml-[90px]">98%</h1>
        </div>
      </div>

      {/* Bottom Details */}
      <div className="flex max-md:flex-col items-center justify-between mt-6 w-[700px] max-md:w-full px-4 py-1 border border-white/10 rounded-[50px]">
        
        {/* Left: Avatars + Rating */}
        <div className="flex items-center gap-3">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-8 h-8 rounded-full border border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-8 h-8 rounded-full border border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              className="w-8 h-8 rounded-full border border-black"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white/70 text-xs">50+ Customer</span>
          </div>
        </div>

        {/* Right: Global Project Badge */}
        <div className="
          flex items-center gap-3 
          bg-black/50 border border-white/10
          rounded-full px-4 py-2 mt-3 max-md:mt-6
        ">
          <span className="text-white text-sm">Ready for <b>Global Project</b></span>
          <div className="
            w-8 h-8 rounded-full 
            bg-white/10 flex items-center justify-center 
            border border-white/10
          ">
            <Globe size={16} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
