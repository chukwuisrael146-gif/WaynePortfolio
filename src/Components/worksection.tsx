import React from "react";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  return (
    <section className="py-20 px-20">
      <h1 className="text-white text-4xl font-bold mb-10">
        Selected Work <span className="text-red-500">•</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <WorkCard
          image="https://images.pexels.com/photos/18105/pexels-photo.jpg"
          category="Website Design"
          title="Helve Tica Website Redesign"
          date="May 2025"
        />

        <WorkCard
          image="src\assets\profile.png"
          category="Brand Identity"
          title="Modern Branding Suite"
          date="April 2025"
        />
      </div>
    </section>
  );
}
