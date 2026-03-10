import React from "react";
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
      fixed right-4 top-1/2 -translate-y-1/2
      flex flex-col items-center jusfify-center gap-10 p-5 mr-2 
      bg-black/50 backdrop-blur-md rounded-[50px]
      shadow-xl border border-white/10
      z-50
      max-md:right-2 max-md:p-3 
    ">
            <IconButton icon={<Home size={20} />}  />
            <IconButton icon={<User size={20} />} />
            <IconButton icon={<FolderGit2 size={20} />} />
            <IconButton icon={<FileText size={20} />} />
            <IconButton icon={<MessageCircle size={20} />} />
            <IconButton icon={<Mail size={20} />} />
        </div>
    );
}

function IconButton({ icon }) {
    return (
        <button className="
      w-10 h-10 flex items-center justify-center 
      rounded-xl bg-white/5 border border-none
      text-white hover:bg-white/10 hover:border-white/20
      transition-all
      max-md:w-8 max-md:h-8 hover:cursor-pointer
    ">
            {icon}
        </button>
    );
}
