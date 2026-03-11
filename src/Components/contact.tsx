import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null);
  const [budget, setBudget] = useState("");

  const budgets = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000"
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_yk9kuic",
      "template_pvkr0z6",
      form.current,
      "Ql-7_JSlCeyBjoRbw"
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      form.current?.reset();
      setBudget("");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section className="flex justify-center items-center min-h-screen text-white">

      <div className="w-[1000px] bg-zinc-900 p-10 rounded-2xl shadow-xl">

        <p className="text-sm text-gray-400 mb-2">• Contact Form</p>

        <h1 className="text-[80px] font-semibold mb-8">
          Contact For Work
        </h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <div>
            <label className="text-sm text-gray-400">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Your Phone</label>
            <input
              type="text"
              name="user_phone"
              placeholder="Enter your phone number"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {budgets.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBudget(item)}
                className={`px-4 py-2 rounded-full border text-sm transition 
                ${
                  budget === item
                    ? "bg-white text-black"
                    : "border-gray-600 hover:border-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <input type="hidden" name="budget" value={budget} />

          <button
            type="submit"
            className="flex items-center justify-between w-full bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Get Started
            <span>→</span>
          </button>

        </form>
      </div>

    </section>
  );
}