


export default function ExperienceSection() {
    const experiences = [
        {
            company: "Krystal Technologies",
            role: "Graphic Designer",
            year: "2025 - Present",
            highlight: true,
        },
        {
            company: "Montsorri Schools",
            role: "Frontend Developer",
            year: "2025 - Present",
            highlight: true,
            
        },
        {
            company: "Self Employed",
            role: "Software Engineer",
            year: "2024 - Present ",
            highlight: true,
        },
    ];

    return (
        <section className="w-full max-w-3xl mx-auto px-6 py-20">
            
            {/* Small Title */}
            <p className="text-sm text-gray-300 mb-2">• Experiences</p>

            {/* Main Description */}
            <h2 className="text-3xl md:text-4xl  leading-snug text-white mb-6">
                Wayne offers more than just a place to live;  
                it’s a space designed to reflect your unique style  
                and inspiration
            </h2>

            {/* Experience List */}
            <div className="flex flex-col  hover:cursor-pointer">
                {experiences.map((item, idx) => (
                    <div key={idx} className="py-6 hover:text-orange-500">
                        <p className="text-orange-500 text-sm">{item.company}</p>

                        <div className="flex items-center justify-between mt-1">
                            <p
                                className={`text-white font-medium text-lg ${
                                    item.highlight ? "text-orange-400" : ""
                                }`}
                            >
                                {item.role}
                            </p>

                            <span
                                className={`text-xs px-3 py-1 rounded-full 
                                bg-white/10 border border-white/20 text-gray-200`}
                            >
                                {item.year}
                            </span>
                        </div>

                        {/* Orange Highlight Line */}
                        {item.highlight && (
                            <div className="w-full h-[2px] bg-orange-700 mt-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
