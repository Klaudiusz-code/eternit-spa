"use client";

import { Crown, Heart, Gem, Flower2 } from "lucide-react";
import { GOLD, TEXT_WARM } from "@/lib/utils";

const features = [
  {
    icon: Crown,
    title: "Eksperci",
    text: "Certyfikowani specjaliści z wieloletnim doświadczeniem.",
  },
  {
    icon: Gem,
    title: "Premium",
    text: "Używamy wyłącznie sprawdzonych, luksusowych marek kosmetyków.",
  },
  {
    icon: Heart,
    title: "Relaks",
    text: "Klimat i atmosfera sprzyjająca pełnemu wyciszeniu.",
  },
  {
    icon: Flower2,
    title: "Naturalność",
    text: "Podejście holistyczne, dbające o harmonię ciała i ducha.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="fade-section relative py-20 md:py-36 px-4 md:px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-4 block">
            Nasze Atuty
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-white">
            Dlaczego warto{" "}
            <span className="text-[#C9A84C] italic">wybrać nas?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 md:gap-6 p-5 md:p-8 rounded-2xl border border-white/5 hover:border-[#C9A84C]/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="relative flex-shrink-0">
                <span className="absolute -top-2 -left-2 text-[60px] md:text-[80px] font-bold text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-[#C9A84C]/10 transition-colors">
                  0{index + 1}
                </span>
                {/* Ikona: Mniejsza na mobile */}
                <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-[#C9A84C] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-300 z-10">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-[#C9A84C]" />
                </div>
              </div>

              <div className="flex-1 pt-1 md:pt-2">
                <h3 className="text-lg md:text-xl font-serif text-white mb-2 md:mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
