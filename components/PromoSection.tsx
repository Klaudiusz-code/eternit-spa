"use client";

import { Sparkles, Flower2, CalendarCheck, Percent } from "lucide-react";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC } from "@/lib/utils";

// Przykładowe dane (Możesz podmienić na te z `lib/data` jeśli chcesz)
const promos = [
  {
    id: 1,
    title: "Pakiet Relaks Totalny",
    desc: "60 min masażu klasycznego + peeling całego ciała + napój witaminowy. Idealny na prezent.",
    price: "220 zł",
    oldPrice: "280 zł",
    tag: "Bestseller",
    icon: Sparkles,
    featured: true, // Ta oferta będzie wyróżniona
  },
  {
    id: 2,
    title: "Rytuał Oczyszczający",
    desc: "Zabieg na twarz z kwasami migdałowymi + algowa maska regenerująca.",
    price: "150 zł",
    tag: "-20%",
    icon: Flower2,
    featured: false,
  },
];

export default function PromosSection() {
  return (
    <section
      id="promocje"
      className="fade-section relative py-28 md:py-40 px-6 overflow-hidden bg-[#050505]"
    >
      {/* Dekoracja tła */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 mb-6">
            <Percent className="w-3 h-3 text-[#C9A84C]" />
            <span className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-bold">
              Oferty Specjalne
            </span>
          </div>
          <h2
            className="text-3xl md:text-[2.5rem] font-serif tracking-tight text-white"
          >
            Tylko w tym <span className="text-[#C9A84C] italic">miesiącu</span>
          </h2>
        </div>

        {/* Grid Kart */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`
                group relative rounded-3xl p-8 md:p-10 
                transition-all duration-500 hover:-translate-y-2
                ${promo.featured 
                  ? "bg-[#0A0A0A] border-2 border-[#C9A84C]/30 shadow-[0_0_40px_rgba(201,168,76,0.1)] hover:shadow-[0_0_50px_rgba(201,168,76,0.2)] hover:border-[#C9A84C]/60" 
                  : "bg-[#0A0A0A]/50 border border-white/5 hover:border-[#C9A84C]/30 hover:bg-[#0A0A0A]"
                }
              `}
            >
              {/* Tło pojawiające się przy hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C9A84C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Tag: Bestseller / Rabat */}
              <div className="absolute top-6 right-6">
                <span
                  className={`
                    text-[10px] font-bold tracking-[0.15em] uppercase border px-3 py-1 rounded-full
                    ${promo.featured 
                        ? "border-[#C9A84C] bg-[#C9A84C] text-black shadow-[0_0_15px_rgba(201,168,76,0.4)]" 
                        : "border-white/10 text-gray-400 bg-white/5"
                    }
                  `}
                >
                  {promo.tag}
                </span>
              </div>

              {/* Ikona */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300
                ${promo.featured ? "bg-[#C9A84C]/10 text-[#C9A84C]" : "bg-white/5 text-gray-500 group-hover:text-[#C9A84C]"}
              `}>
                <promo.icon className="w-7 h-7" />
              </div>

              {/* Treść */}
              <h3 className="text-2xl font-serif text-white mb-3 leading-tight group-hover:text-[#C9A84C] transition-colors">
                {promo.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-8 h-16">
                {promo.desc}
              </p>

              {/* Cena */}
              <div className="flex items-end gap-3 mb-8 relative z-10">
                {promo.oldPrice && (
                  <span className="text-lg text-gray-600 line-through font-light mb-1.5">
                    {promo.oldPrice}
                  </span>
                )}
                <span className="text-4xl font-serif text-white tracking-tight">
                  {promo.price}
                </span>
              </div>

              {/* Przycisk */}
              <a
                href={waLink(`Cześć! Chcę skorzystać z promocji: ${promo.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative w-full flex items-center justify-center gap-2 py-4 rounded-xl overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest text-xs z-10
                  ${promo.featured
                      ? "bg-[#C9A84C] text-black hover:bg-[#E5C158] hover:scale-[1.02] shadow-lg"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#C9A84C]/30"
                  }
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4" />
                  Rezerwuję termin
                </span>
                {/* Efekt błysku na przycisku */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              </a>

            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-12">
          * Oferty ważne do końca miesiąca lub do wyczerpania miejsc.
        </p>

      </div>
    </section>
  );
}