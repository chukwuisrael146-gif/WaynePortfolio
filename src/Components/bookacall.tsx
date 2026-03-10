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
              src="\src\assets\profile.png"
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
        <div className="flex justify-center gap-4 mt-10 text-gray-300">

          <a href="https://x.com/IsraelChuk17926" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
            X
          </a>

          <a href="https://www.instagram.com/israel_chukwu21?utm_source=qr&igsh=MW0xOHk0bmdseGE4dw==" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
            IG
          </a>

          <a href="https://wa.me/qr/5SJUJPXUPON3C1" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
            WA
          </a>

          <a href="https://www.facebook.com/share/1CajCBSRcu/" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
            FB
          </a>

        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          © Copyright by WordpressRiver
        </p>

      </div>
    </section>
  );
}