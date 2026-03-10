import React from "react";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Strategic Planning",
    description:
      "We align business objectives with technical execution through clear planning and structure.",
  },
  {
    title: "Creative Execution",
    description:
      "Thoughtful design and scalable development focused on performance and clarity.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Solutions engineered to grow efficiently across platforms and devices.",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="w-full text-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            How We Deliver Impact
          </h2>
          <p className="mt-4 text-sm text-neutral-400 md:text-base">
            A structured approach that blends strategy, creativity, and
            technology to produce measurable results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group  relative overflow-hidden rounded-2xl border border-white/10 bg-black p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/30"
            >
              {/* Index */}
              <span className="absolute right-6 top-6 text-xs text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-3 text-xl font-medium">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
