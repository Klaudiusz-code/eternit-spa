"use client";

import { useState } from "react";
import {
  MessageCircle,
  Award,
  Star,
  X,
  Briefcase,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC } from "@/lib/utils";

// Dane - Rozdzielone na Główną (Head) i Resztę (Team)
const headSpecialist = {
  name: "Anna Kowalska",
  role: "Główna Specjalistka",
  desc: "Założycielka Eternity Spa. Ekspertka w dziedzinie kosmetologii estetycznej z 10-letnim stażem. Jej pasją jest przywracanie naturalnego blasku skórze.",
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

// Oferty pracy do Modala
const jobs = [
  {
    title: "Kosmetolog / Kosmetolog Estetyczny",
    type: "Pełny etat",
    req: "Doświadczenie min. 2 lata, uprawnienia do wykonywania zabiegów, pasja do rozwoju.",
  },
  {
    title: "Masażystka",
    type: "Część etatu / Dorywczo",
    req: "Wykształcenie kierunkowe, mile widziane certyfikaty z masaży egzotycznych.",
  },
];

export default function TeamSection() {
  // --- STANY ---
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
      className="fade-section relative py-32 px-4 md:px-8 overflow-hidden bg-[#050505]"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-10 text-[150px] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        <div className="lg:col-span-5 flex flex-col justify-center group perspective-container">
          <div className="text-left mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-bold block mb-2">
              Dyrektor Estetyki
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Anna <br /> <span className="text-[#C9A84C]">Kowalska</span>
            </h2>
          </div>

          <div
            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl spotlight-card"
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
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex items-center gap-2 text-[#C9A84C] mb-4">
                <Award className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  10 Lat Doświadczenia
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 line-clamp-4">
                {headSpecialist.desc}
              </p>
              <a
                href={waLink("Cześć! Chcę umówić wizytę do Pani Anny.")}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all duration-300 group/btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Umów się
                </span>
              </a>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
              style={{
                borderColor:
                  mousePos.x !== 0 ? "rgba(201,168,76,0.3)" : "transparent",
                transition: "border-color 0.3s",
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center gap-8 mt-12 lg:mt-0">
          <div className="mb-4">
            <h3 className="text-2xl font-serif text-white mb-2">
              Nasi Eksperci
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Zespół certyfikowanych specjalistów, którzy dbają o każdy detal.
            </p>
          </div>

          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative h-40 md:h-48 rounded-2xl overflow-hidden border border-white/5 flex items-center p-1 transition-all duration-300 hover:border-[#C9A84C]/30 hover:shadow-xl hover:bg-white/5 spotlight-card"
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
              <div className="relative z-10 flex items-center w-full h-full p-6 md:p-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#C9A84C] transition-colors flex-shrink-0 mr-6 shadow-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-serif text-white mb-1 group-hover:text-[#C9A84C] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <a
                      href={waLink(
                        `Cześć! Interesuje mnie wizyta u ${member.name.split(" ")[0]}`,
                      )}
                      target="_blank"
                      className="text-[10px] uppercase font-bold text-[#C9A84C] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3" /> Umów wizytę
                    </a>
                    <span className="text-gray-600">|</span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-[#C9A84C]" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
                <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 text-[80px] font-serif text-white/5 font-bold pointer-events-none">
                  0{i + 2}
                </div>
              </div>
            </div>
          ))}

          <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-[#0A0A0A] text-center hover:border-[#C9A84C]/40 transition-colors group">
            <Briefcase className="w-8 h-8 text-[#C9A84C] mx-auto mb-3 opacity-70 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 text-sm mb-4">
              Szukamy utalentowanych osób do zespołu.
            </p>
            <button
              onClick={() => setIsCareerOpen(true)}
              className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-[#C9A84C] pb-0.5"
            >
              Zobacz oferty pracy
            </button>
          </div>
        </div>
      </div>


      {isCareerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={() => setIsCareerOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" />

          <div
            className="relative bg-[#0F0F0F] border border-[#C9A84C]/30 w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all animate-scale-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex justify-between items-start mb-10 relative z-10">
              <div>
                <h3 className="text-3xl font-serif text-white mb-2">
                  Dołącz do nas
                </h3>
                <p className="text-gray-400 text-sm">Twórz z nami piękno.</p>
              </div>
              <button
                onClick={() => setIsCareerOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-[#C9A84C] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mb-10 relative z-10">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-[#C9A84C]/20 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-white group-hover:text-[#C9A84C] transition-colors">
                      {job.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {job.req}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-4">
              <a
                href={waLink(
                  "Cześć! Chcę złożyć CV na stanowisko w Eternity Spa. Mam pytanie dotyczące rekrutacji.",
                )}
                target="_blank"
                className="flex-1 bg-[#C9A84C] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#E5C158] transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4" />
                Aplikuj teraz
              </a>

              <a
                href="mailto:hr@eternityspa.pl"
                className="flex-1 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Wyślij CV
              </a>
            </div>

            <p className="text-center text-xs text-gray-600 mt-6 relative z-10">
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
      `}</style>
    </section>
  );
}
