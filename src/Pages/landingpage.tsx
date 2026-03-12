import SocialLinks from "../Components/sociallinks";
import StatsSection from "../Components/staticssection";
import ExperienceSection from "../Components/experiencesection";
import WorkSection from "../Components/worksection";
import FeatureSection from "../Components/featuresection";
import Contact from "../Components/contact";
import BookACall from "../Components/bookacall";
import AboutSection from "../Components/about";
import Profile from "../assets/profile.png";
import TechStack from "../Components/techstack";



export default function LandingPage() {
    return (
        <>
            <section id="home" className="min-h-screen  w-full  text-white flex flex-col justify-center items-center px-4 pt-24">
                <div className="mb-4 text-sm text-white font-medium px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full border border-white rounded-full flex items-center gap-2 w-fit">

                    <span className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>

                    Avalible for Freelance Projects

                </div>
                <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="w-full h-full object-cover bg-black rounded-[20px] "
                    />
                </div>


                <h1 className="text-9xl font-semibold italic">Wayne</h1>
                <p className="mt-2 text-center text-2xl text-gray-300 max-w-md">
                    Hi, I'm Wayne Cooper. Working as Web-designer and Developer.
                </p>


                <div className="flex gap-4 mt-6">
                    <button className="flex items-center bg-white text-black px-6 py-2 rounded-full cursor-pointer">Start a Project <img className="ml-[10px] w-[16px] " src="src\assets\arrow-black.png" alt="" /></button>
                    <button className="flex items-center border border-white px-6 py-2 rounded-full cursor-pointer">View my Works</button>
                </div>
                <div>
                    <SocialLinks />
                </div>
            </section>
            <section id="stats">
                <StatsSection />
            </section>
            <section id="projects">
                <WorkSection />
            </section>
            <FeatureSection />
            <section id="about">
                <AboutSection />
            </section>
            <ExperienceSection />
            <section id="resume">
                <TechStack />
            </section>
            <section id="contact">
                <Contact />
            </section>

            <BookACall />
        </>

    );
}