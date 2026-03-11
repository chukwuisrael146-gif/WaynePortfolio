// SocialLinks.jsx
import { FaTwitter, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { icon: <FaTwitter />, url: "https://x.com/IsraelChuk17926" },
    { icon: <FaWhatsapp />, url: "https://wa.me/qr/5SJUJPXUPON3C1" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/israel_chukwu21?utm_source=qr&igsh=MW0xOHk0bmdseGE4dw==" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1CajCBSRcu/" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-10 h-10 
            flex items-center justify-center 
            rounded-full 
            bg-[#1a1a1a] 
            border border-[#333]
            text-white 
            text-lg 
            hover:bg-white 
            hover:text-black
            transition-all 
            duration-300
            cursor-pointer
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
