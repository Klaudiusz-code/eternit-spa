"use client";

import { Award, ShieldCheck, Gem, Clock, Sparkles } from "lucide-react";
import { GOLD } from "@/lib/utils";

const features = [
  { icon: Award, text: "Certyfikowani specjaliści" },
  { icon: ShieldCheck, text: "Bezpieczeństwo & Higiena" },
  { icon: Gem, text: "Kosmetyki Premium" },
  { icon: Clock, text: "Elastyczne godziny" },
];

export default function CompactStrip() {
  return (
    <div className="w-full border-y border-white/[0.05] bg-[#080808] py-8 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/[0.02] to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center gap-6 md:gap-12">
          
          {features.map((item, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 cursor-default relative"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-[#C9A84C] transition-colors duration-300 relative z-10" />
              </div>

              <span className="text-xs md:text-sm font-light tracking-wide text-gray-400 group-hover:text-white transition-colors duration-300">
                {item.text}
              </span>

              {index !== features.length - 1 && (
                <div className="hidden md:block w-2 h-2 rounded-full border border-[#C9A84C]/20 ml-2 group-hover:border-[#C9A84C]/60 group-hover:bg-[#C9A84C]/20 transition-all duration-300" />
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}