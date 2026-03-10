import React from "react";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  link?: string;
}

export default function WorkCard({
  image,
  category,
  title,
  date,
  link = "#",
}: WorkCardProps) {
  return (
    <a
      href={link}
      className="block rounded-3xl bg-[#0d0d0d] p-2 shadow-xl shadow-black/40 hover:scale-[1.02] transition duration-300"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover rounded-2xl"
        />
      </div>

      {/* GLASS BOTTOM BAR */}
      <div className="mt-[-70px] mx-4 p-5 rounded-2xl backdrop-blur-xl bg-black/50 border border-white/10 flex justify-between items-center">
        <div>
          <p className="text-gray-300 text-xs">{category}</p>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 text-xs mt-1">{date}</p>
        </div>

        {/* ARROW BUTTON */}
        <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
          <ArrowUpRight size={25} color="white" />
        </div>
      </div>
    </a>
  );
}
