"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Clock,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GOLD } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <nav
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
          scrolled ? "top-4 opacity-100" : "top-8 opacity-100"
        }`}
      >
        <div
          className={`
            flex items-center justify-between px-6 md:px-10 py-4
            transition-all duration-500
            border
            rounded-2xl 
            w-[90%] md:w-[85%] lg:w-[80%] 
            ${
              scrolled
                ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-[#C9A84C]/30 shadow-[0_10px 40px_rgba(0,0,0,0.6)] py-3"
                : "bg-black/40 backdrop-blur-md border-white/5 shadow-none py-4"
            }
          `}
        >
          <a
            href="#hero"
            className="flex items-center gap-3 group relative z-20"
          >
            <div className="absolute inset-0 w-full h-full bg-[#C9A84C] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-white/20 group-hover:border-[#C9A84C] transition-colors duration-300 shadow-lg">
              <img
                src="/logoeter.jpeg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] md:text-[16px] font-serif text-white font-bold tracking-wide group-hover:text-[#C9A84C] transition-colors">
                ETERNITY
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#C9A84C] font-bold uppercase mt-1">
                SPA
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 md:gap-12">
            {["O nas", "Zespół", "Cennik", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-xs md:text-sm font-medium tracking-[0.2em] text-gray-300 hover:text-white transition-colors group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block w-px h-8 bg-white/10 mx-1" />

            <div className="hidden lg:flex items-center gap-5">
              <div className="flex flex-col items-end leading-tight group cursor-default">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 group-hover:text-[#C9A84C] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="uppercase tracking-wider font-semibold">
                    Otwarte
                  </span>
                </div>
                <span className="text-[10px] text-gray-500">Do 19:00</span>
              </div>

              <div className="flex items-center gap-3 border-l border-white/5 pl-4">
                <a
                  href="tel:734009380"
                  className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full"
                  title="Zadzwoń"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full"
                  title="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GŁÓWNY PRZYCISK (CTA) */}
            <a
              href="https://wa.me/?text=Cześć! Chcę umówić wizytę."
              target="_blank"
              className="hidden lg:flex items-center gap-2 bg-[#C9A84C] text-black text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl hover:bg-[#E5C158] hover:scale-105 hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all duration-300 z-20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Rezerwacja</span>
            </a>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all z-20"
              aria-label="Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />

        {["O nas", "Zespół", "Cennik", "Promocje", "Kontakt"].map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-serif text-white/90 hover:text-[#C9A84C] transition-all duration-300 hover:scale-110 cursor-pointer relative z-10"
            style={{
              transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {item}
          </a>
        ))}

        {/* Mobile Quick Actions */}
        <div
          className="flex items-center gap-6 mt-8 opacity-0 transition-opacity duration-500 delay-200"
          style={{ opacity: menuOpen ? 1 : 0 }}
        >
          <a
            href="tel:734009380"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white"
          >
            <Phone className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-widest">
              Zadzwoń
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white"
          >
            <FaInstagram className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-widest">Insta</span>
          </a>
        </div>

        <a
          href="https://wa.me/?text=Cześć!"
          className="mt-8 px-10 py-4 rounded-xl border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold z-10"
          style={{
            opacity: menuOpen ? 1 : 0,
            transitionDelay: menuOpen ? "300ms" : "0ms",
          }}
        >
          Zadzwoń teraz
        </a>
      </div>
    </>
  );
}
