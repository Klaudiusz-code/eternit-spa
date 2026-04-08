"use client";

import { useState } from "react";
import {
  MessageCircle,
  Award,
  Star,
  X,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC } from "@/lib/utils";

// Dane
const headSpecialist = {
  name: "Anna Kowalska",
  role: "Główna Specjalistka",
  desc: "Założycielka Eternity Spa. Ekspertka w dziedzinie kosmetologii estetycznej z 10-letnim stażem.",
  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
};

const teamMembers = [
  {
    name: "Magda Nowak",
    role: "Masażystka",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kasia Wiśniewska",
    role: "Manicurystka",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const jobs = [
  {
    title: "Kosmetolog Estetyczny",
    type: "Pełny etat",
    req: "Doświadczenie min. 2 lata, uprawnienia do zabiegów, pasja do rozwoju.",
  },
  {
    title: "Masażystka",
    type: "Część etatu",
    req: "Wykształcenie kierunkowe, mile widziane certyfikaty.",
  },
];

export default function TeamSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="zespół"
      className="fade-section relative py-16 md:py-32 px-4 md:px-8 overflow-hidden bg-[#050505]"
    >
      {/* TŁO */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#C9A84C]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* Numer "02" - mniejszy na mobile */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 text-[100px] md:text-[150px] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 relative z-10">
        {/* LEWA KOLUMNA */}
        <div className="lg:col-span-5 flex flex-col justify-center group perspective-container">
          <div className="text-left mb-6 md:mb-8">
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] font-bold block mb-1 md:mb-2">
              Dyrektor Estetyki
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              Anna <br /> <span className="text-[#C9A84C]">Kowalska</span>
            </h2>
          </div>

          {/* KARTA GŁÓWNA */}
          <div
            className="relative w-full aspect-[3/4] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl spotlight-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            style={{
              background:
                mousePos.x !== 0 || mousePos.y !== 0
                  ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201,168,76,0.06), transparent 40%)`
                  : "transparent",
            }}
          >
            <img
              src={headSpecialist.img}
              alt={headSpecialist.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
              <div className="flex items-center gap-2 text-[#C9A84C] mb-2 md:mb-4">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  10 Lat Doświadczenia
                </span>
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-4">
                {headSpecialist.desc}
              </p>
              <a
                href={waLink("Cześć! Chcę umówić wizytę do Pani Anny.")}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all duration-300 text-xs md:text-sm"
              >
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-bold uppercase tracking-widest">
                  Umów się
                </span>
              </a>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent rounded-2xl md:rounded-3xl pointer-events-none"
              style={{
                borderColor:
                  mousePos.x !== 0 ? "rgba(201,168,76,0.3)" : "transparent",
                transition: "border-color 0.3s",
              }}
            />
          </div>
        </div>

        {/* PRAWA KOLUMNA */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 md:gap-8 mt-12 lg:mt-0">
          <div className="mb-2 md:mb-4">
            <h3 className="text-xl md:text-2xl font-serif text-white mb-1 md:mb-2">
              Nasi Eksperci
            </h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-md">
              Zespół certyfikowanych specjalistów.
            </p>
          </div>

          {/* LISTA ZESPOŁU */}
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative min-h-[120px] md:h-48 rounded-xl md:rounded-2xl overflow-hidden border border-white/5 flex items-center p-2 md:p-4 transition-all duration-300 hover:border-[#C9A84C]/30 hover:shadow-xl hover:bg-white/5 spotlight-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              style={{
                background:
                  mousePos.x !== 0 || mousePos.y !== 0
                    ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201,168,76,0.08), transparent 40%)`
                    : "transparent",
              }}
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover filter blur-sm"
                />
              </div>
              <div className="relative z-10 flex items-center w-full h-full p-2 md:p-6 md:p-8">
                {/* Zdjęcie - mniejsze na mobile */}
                <div className="w-14 h-14 md:w-20 md:h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#C9A84C] transition-colors flex-shrink-0 mr-3 md:mr-6 shadow-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {" "}
                  {/* min-w-0 pozwala na właściwe zawijanie tekstu */}
                  <h4 className="text-lg md:text-2xl font-serif text-white mb-1 group-hover:text-[#C9A84C] transition-colors truncate">
                    {member.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-400 mb-2 md:mb-3 truncate">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-2 md:gap-4">
                    <a
                      href={waLink(
                        `Cześć! Interesuje mnie wizyta u ${member.name.split(" ")[0]}`,
                      )}
                      target="_blank"
                      className="text-[9px] md:text-[10px] uppercase font-bold text-[#C9A84C] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3" /> Umów wizytę
                    </a>
                    <span className="text-gray-600">|</span>
                    <span className="text-[9px] md:text-[10px] text-gray-400 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-[#C9A84C]" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* BOX KARIERA */}
          <div className="p-4 md:p-8 rounded-xl md:rounded-2xl border border-dashed border-white/10 bg-[#0A0A0A] text-center hover:border-[#C9A84C]/40 transition-colors group">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-[#C9A84C] mx-auto mb-2 md:mb-3 opacity-70 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-4">
              Szukamy utalentowanych osób do zespołu.
            </p>
            <button
              onClick={() => setIsCareerOpen(true)}
              className="text-[#C9A84C] text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-[#C9A84C] pb-0.5"
            >
              Zobacz oferty
            </button>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* === MODAL ZOPTYMALIZOWANY === */}
      {/* ========================= */}
      {isCareerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          onClick={() => setIsCareerOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" />

          <div
            className="relative bg-[#0F0F0F] border border-[#C9A84C]/30 w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl p-6 md:p-12 shadow-2xl transform transition-all animate-scale-up overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dekoracja */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A84C]/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6 md:mb-10 relative z-10 flex-shrink-0">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-1 md:mb-2">
                  Dołącz do nas
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Twórz z nami piękno.
                </p>
              </div>
              <button
                onClick={() => setIsCareerOpen(false)}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-[#C9A84C] transition-all flex-shrink-0"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Lista (Scrollowalna jeśli mało miejsca) */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-10 relative z-10 flex-1 overflow-y-auto pr-2">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="p-4 md:p-6 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-[#C9A84C]/20 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base md:text-lg font-medium text-white group-hover:text-[#C9A84C] transition-colors">
                      {job.title}
                    </h4>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-1 rounded whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {job.req}
                  </p>
                </div>
              ))}
            </div>

            {/* Przyciski (Stack na mobile, Row na desktop) */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 mt-auto">
              <a
                href={waLink(
                  "Cześć! Chcę złożyć CV na stanowisko w Eternity Spa.",
                )}
                target="_blank"
                className="flex-1 bg-[#C9A84C] text-black font-bold uppercase tracking-widest py-3 md:py-4 rounded-xl hover:bg-[#E5C158] transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Aplikuj teraz
              </a>
              <a
                href="mailto:hr@eternityspa.pl"
                className="flex-1 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest py-3 md:py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
              >
                <Mail className="w-4 h-4" />
                Wyślij CV
              </a>
            </div>

            <p className="text-center text-[10px] md:text-xs text-gray-600 mt-4 md:mt-6 relative z-10">
              Odpowiemy tylko na wybrane kandydatury.
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Ukrycie paska przewijania w modalu na mobile */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
