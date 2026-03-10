import React, { useState } from "react";
import { Menu, X } from "lucide-react";


export default function NavBar() {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <nav className="w-full fixed top-0 left-0 
             z-50 bg-black/40 backdrop-blur-lg text-white 
             px-6 py-4 flex justify-between items-center 
             border-b border-white/20">
                <h1 className="text-[30px] font-semibold">Wayne</h1>


                {/* Desktop */}
                <div className="hidden md:flex gap-6 items-center">
                    <button className="text-sm">Home</button>
                    <button className="text-sm">Projects</button>
                    <button className="text-sm">Contact</button>
                </div>


                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>


                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-full left-0 w-full bg-black/70 backdrop-blur-lg flex flex-col gap-4 py-4 px-6 md:hidden">
                        <button className="text-sm text-left">Home</button>
                        <button className="text-sm text-left">Projects</button>
                        <button className="text-sm text-left">Contact</button>
                    </div>
                )}
            </nav>
        </div>

    );
}