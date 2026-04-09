"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, Home, List, User } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ==============================
          DESKTOP NAVIGATION (Idealnie wyśrodkowane Grid)
      ============================== */}
      <nav className="hidden lg:flex fixed top-6 left-0 right-0 z-50 justify-center transition-all duration-500 px-4">
        <div
          className={`
            grid grid-cols-[auto_1fr_auto] items-center w-full max-w-[1400px]
            px-10 py-4
            transition-all duration-500
            border border-white/5
            rounded-2xl 
            ${
              scrolled
                ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-[#C9A84C]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-3"
                : "bg-black/40 backdrop-blur-md border-white/5 shadow-none py-4"
            }
          `}
        >
          <div className="flex justify-start">
            <a href="#hero" className="flex items-center gap-3 group relative">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 group-hover:border-[#C9A84C] transition-colors duration-300 shadow-lg">
                <img
                  src="/logoeter.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[16px] font-serif text-white font-bold tracking-wide group-hover:text-[#C9A84C] transition-colors">
                  ETERNITY
                </span>
                <span className="text-[10px] tracking-[0.4em] text-[#C9A84C] font-bold uppercase mt-1">
                  SPA
                </span>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-10">
              {["O nas", "Zespół", "Cennik", "Kontakt"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium tracking-[0.2em] text-gray-300 hover:text-white transition-colors group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="hidden xl:flex flex-col items-end leading-tight group cursor-default">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 group-hover:text-[#C9A84C] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="uppercase tracking-wider font-semibold">
                  Otwarte
                </span>
              </div>
              <span className="text-[10px] text-gray-500">Do 19:00</span>
            </div>

            <div className="flex items-center gap-2 border-l border-white/10 pl-6">
              <a
                href="tel:734009380"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                title="Zadzwoń"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://wa.me/?text=Cześć! Chcę umówić wizytę."
              target="_blank"
              className="flex items-center gap-2 bg-[#C9A84C] text-black text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl hover:bg-[#E5C158] hover:scale-105 hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Rezerwacja</span>
            </a>
          </div>
        </div>
      </nav>

    
      <div className="lg:hidden fixed bottom-0 left-0 w-full h-[80px] bg-[#050505]/95 backdrop-blur-xl border-t border-[#C9A84C]/20 z-50 flex justify-around items-center px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <a
          href="#hero"
          className="flex flex-col items-center gap-1 group w-16"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="p-2 rounded-full text-gray-400 group-hover:text-[#C9A84C] group-hover:bg-white/5 transition-all">
            <Home className="w-6 h-6" />
          </div>
          <span className="text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#C9A84C]">
            Start
          </span>
        </a>

        <a
          href="#cennik"
          className="flex flex-col items-center gap-1 group w-16"
        >
          <div className="p-2 rounded-full text-gray-400 group-hover:text-[#C9A84C] group-hover:bg-white/5 transition-all">
            <List className="w-6 h-6" />
          </div>
          <span className="text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#C9A84C]">
            Cennik
          </span>
        </a>

        <a
          href="#hero"
          className="flex flex-col items-center justify-center -mt-8 w-16"
        >
          <div className="w-14 h-14 rounded-full bg-black border-2 border-[#C9A84C] p-1 shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-transform hover:scale-105">
            <img
              src="/logoeter.jpeg"
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </a>

        {/* 4. KONTAKT */}
        <a
          href="#kontakt"
          className="flex flex-col items-center gap-1 group w-16"
        >
          <div className="p-2 rounded-full text-gray-400 group-hover:text-[#C9A84C] group-hover:bg-white/5 transition-all">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#C9A84C]">
            Kontakt
          </span>
        </a>

        <a
          href="https://wa.me/?text=Cześć! Chcę umówić wizytę."
          target="_blank"
          className="flex flex-col items-center gap-1 group w-16"
        >
          <div className="p-2 rounded-full text-gray-400 group-hover:text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#C9A84C] font-bold">
            Rezerwuj
          </span>
        </a>
      </div>
    </>
  );
}
