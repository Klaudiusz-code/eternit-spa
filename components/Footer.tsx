import { MapPin, Phone, Mail, ArrowUpRight, Code } from "lucide-react";
import { GOLD, TEXT_SEC } from "@/lib/utils";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.05] pt-16 pb-8 md:pt-20 overflow-hidden">
      {/* Mniejsze tło na mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[300px] bg-[#C9A84C]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* GRID: 1 kolumna na mobile, 4 na desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* 1. BRAND */}
          <div className="space-y-4 md:space-y-6">
            <a href="#hero" className="flex items-center gap-3 w-fit group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-[#C9A84C]/30">
                <img
                  src="/logoeter.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-serif text-white leading-none">
                  Eternity
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-[#C9A84C] uppercase">
                  SPA
                </span>
              </div>
            </a>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs">
              Miejsce, w którym luksus spotyka się z harmonią. Tworzymy
              przestrzeń dedykowaną Twojemu relaksowi.
            </p>
          </div>

          {/* 2. LINKI */}
          <div>
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: "O nas", href: "#o-nas" },
                { label: "Zespół", href: "#zespół" },
                { label: "Cennik", href: "#cennik" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-gray-500 hover:text-[#C9A84C] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#C9A84C]/20 group-hover:bg-[#C9A84C] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. KONTAKT */}
          <div>
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div className="text-xs md:text-sm text-gray-400">
                  <span className="block text-white font-medium">
                    Eternity Spa
                  </span>
                  Środa Wielkopolska, <br />
                  (dokładny adres po kontakcie)
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C9A84C] flex-shrink-0" />
                <a
                  href="tel:734009380"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  734 009 380
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#C9A84C] flex-shrink-0" />
                <a
                  href="mailto:kontakt@eternityspa.pl"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  kontakt@eternityspa.pl
                </a>
              </li>
            </ul>
          </div>

          {/* 4. SOCIAL & DEV */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-6">
                Obserwuj nas
              </h4>
              <div className="flex gap-3 mb-6 md:mb-8">
                <a
                  href="#"
                  target="_blank"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all duration-300"
                >
                  <FaInstagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all duration-300"
                >
                  <FaFacebook className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              </div>
            </div>

            <div className="pt-4 md:pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                <Code className="w-2.5 h-2.5 md:w-3 md:h-3" />
                Realizacja
              </div>
              <a
                href="https://klaudiuszdev.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400 hover:text-[#C9A84C] transition-all"
              >
                <span className="font-serif italic">KlaudiuszDev.pl</span>
                <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* DOLNA BELKA */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] md:text-xs text-gray-600">
            © {currentYear} Eternity Spa. Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#"
              className="text-[10px] md:text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Polityka Prywatności
            </a>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[10px] md:text-xs text-gray-400 hover:text-[#C9A84C] transition-colors"
            >
              Wróć na górę{" "}
              <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
