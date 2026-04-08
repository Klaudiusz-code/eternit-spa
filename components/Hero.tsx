"use client";

import { MessageCircle, ArrowRight, MapPin } from "lucide-react";

// Helper linku
const waLink = (text: string) =>
  `https://wa.me/?text=${encodeURIComponent(text)}`;

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* 1. TŁO Z EFEKTEM KINOWYM (Ken Burns) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Eternity Spa Background"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* 2. TEKSTURA (Noise) - Nadaje filmowego charakteru */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none noise-bg mix-blend-overlay" />

      {/* 3. WINIETA I ŚWIATŁO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* 4. ZAWARTOŚĆ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* DEKORACJA: Lokalizacja */}
        <div
          className="flex justify-center items-center gap-2 mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <MapPin className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-medium">
            Środa Wielkopolska
          </span>
        </div>

        {/* LOGO Z OBRACAJĄCYM SIĘ PIERŚCIENIEM */}
        <div
          className="relative inline-flex justify-center items-center mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Pierścień */}
          <div className="absolute w-[140px] h-[140px] md:w-[180px] md:h-[180px] border border-[#D4AF37]/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] border-t border-b border-[#D4AF37]/40 rounded-full animate-spin-slow-reverse" />

          <img
            src="/logoeter.jpeg"
            alt="Logo"
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[#D4AF37] object-cover shadow-[0_0_40px_rgba(212,175,55,0.3)] z-10 bg-black/50"
          />
        </div>

        {/* ZŁOTA LINIA (Rysująca się) */}
        <div
          className="flex justify-center mb-10 animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-expand-line" />
        </div>

        {/* GŁÓWNY TYTUŁ (Mix fontów) */}
        <h1
          className="mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8E1] via-[#D4AF37] to-[#8A6E2F] drop-shadow-2xl tracking-tight leading-[0.9]">
            Eternity
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-[0.4em] text-white mt-2">
            SPA
          </span>
        </h1>

        {/* PODTYTUŁ */}
        <p
          className="mb-12 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          Odkryj niezwykłe doznania relaksu. Twój azyl spokoju, gdzie
          profesjonalizm spotyka się z luksusem.
        </p>

        {/* PRZYCISKI */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          {/* Przycisk 1: Złoty z efektem Shine */}
          <a
            href={waLink("Cześć! Chcę umówić wizytę w Eternity.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.15em] rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Umów wizytę
            </span>
          </a>

          {/* Przycisk 2: Elegancki obrys */}
          <a
            href="#cennik"
            className="group w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-white/5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Zobacz ofertę</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* DOLNY GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* STYLIZACJA I ANIMACJE */}
      <style jsx global>{`
        /* Kinowy Zoom */
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-ken-burns {
          animation: kenBurns 25s ease-out infinite alternate;
        }

        /* Obracanie pierścienia */
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spinSlow 25s linear infinite reverse;
        }

        /* Rysowanie linii */
        @keyframes expandLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }
        .animate-expand-line {
          animation: expandLine 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Wejścia */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Noise Texture (Base64 SVG) */
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
