


import {
    Home,
    FolderGit2,
    FileText,
    MessageCircle,
    Mail,
    User,
} from "lucide-react";

export default function RightNav() {
    return (
        <div className="
  fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
  flex-col items-center jusfify-center gap-10 p-5 mr-2 
  bg-black/50 backdrop-blur-md rounded-[50px]
  shadow-xl border border-white/10
  z-50
  max-md:left-2 max-md:p-3
">
            <IconButton icon={<Home size={20} />} link="#home" />
            <IconButton icon={<User size={20} />} link="#about" />
            <IconButton icon={<FolderGit2 size={20} />} link="#projects" />
            <IconButton icon={<FileText size={20} />} link="#resume" />
            <IconButton icon={<MessageCircle size={20} />} link="#services" />
            <IconButton icon={<Mail size={20} />} link= "#contact" />
        </div>
    );
}

function IconButton({ icon, link }: { icon: React.ReactNode; link: string }) {
    return (
        <a href={link}>
            <button className="
      w-10 h-10 flex items-center justify-center 
      rounded-xl bg-white/5 border border-none mt-5 mb-5
      text-white hover:bg-white/10 hover:border-white/20
      transition-all
      max-md:w-8 max-md:h-8 max-md:mt-3 hover:cursor-pointer
    ">
                {icon}
            </button>
        </a>
    );
}
