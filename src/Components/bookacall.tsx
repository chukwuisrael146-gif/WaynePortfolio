import SocialLinks from "./sociallinks";
import Profile from "../assets/profile.png";


export default function BookCall() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-orange-900 opacity-60"></div>

      <div className="relative text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full bg-black-600 p-1">
            <img
              src={Profile}
              alt="profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold">Wayne Cooper</h3>
        <p className="text-sm text-gray-400 mb-6">
            Web Designer & Developer
        </p>

        {/* Script Text */}
        <h2 className="text-5xl font-[cursive] mb-6">
          Wayne
        </h2>

        {/* Big CTA */}
        <button className="px-14 py-6 text-4xl rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition">
          Book A Call • Book A Call
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-gray-300">
          <SocialLinks />

        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          © Copyright by Wayne Cooper. All rights reserved.
        </p>

      </div>
    </section>
  );
}