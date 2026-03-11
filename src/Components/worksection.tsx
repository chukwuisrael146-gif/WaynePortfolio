import WorkCard from "./workcard";

export default function WorkSection() {
  return (
    <section className="bg-black py-50 px-20">
      <h1 className="text-white text-4xl font-bold mb-10">
        Selected Work <span className="text-red-500">•</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-17 ">
        <WorkCard
          image="https://images.pexels.com/photos/18105/pexels-photo.jpg"
          category="Website Design"
          title="Helve Tica Website Redesign"
          date="May 2025"
        />

        <WorkCard
          image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          category="Brand Identity"
          title="Modern Branding Suite"
          date="April 2025"
        />
      </div>
    </section>
  );
}
