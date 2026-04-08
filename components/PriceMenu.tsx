"use client";
import { useState } from "react";
import { PC, pCats, pList } from "@/lib/data";
import { GOLD, TEXT_WARM, TEXT_SEC, TEXT_MUTED } from "@/lib/utils";
import ServiceCard from "./ServiceCard"; // <-- NOWY IMPORT

export default function PriceMenu() {
  const [tab, setTab] = useState<PC>("twarz");
  const items = pList[tab];

  return (
    <section id="cennik" className="fade-section relative py-28 md:py-40 px-6">
      <div
        className="absolute top-8 right-6 md:right-12 text-[180px] font-extralight leading-none pointer-events-none select-none"
        style={{ color: "rgba(201,168,76,0.03)" }}
      >
        03
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 block">
            Cennik
          </span>
          <h2
            className="text-3xl md:text-[2.5rem] font-extralight tracking-tight"
            style={{ color: TEXT_WARM }}
          >
            Karta <span className="text-[#C9A84C] font-light">zabiegów</span>
          </h2>
        </div>

        {/* Taby */}
        <div
          className="flex flex-wrap justify-center gap-1.5 mb-14 p-1.5 rounded-2xl"
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.08)",
          }}
        >
          {pCats.map((c) => (
            <button
              key={c.k}
              onClick={() => setTab(c.k)}
              className={`relative flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 rounded-xl transition-all duration-300 ${
                tab === c.k
                  ? "text-black font-semibold shadow-[0_4px_15px_rgba(201,168,76,0.25)]"
                  : "text-[#8A8278] hover:text-[#F5F0E8]"
              }`}
              style={
                tab === c.k
                  ? {
                      background: `linear-gradient(135deg, ${GOLD} 0%, #D4B85A 100%)`,
                    }
                  : { background: "transparent" }
              }
            >
              <c.ic className="w-3 h-3" />
              {c.l}
            </button>
          ))}
        </div>

        {/* GŁÓWNA KARTA MENU */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0C0B09 0%, #080808 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow:
              "inset 0 0 0 5px #080808, inset 0 0 0 6px rgba(201,168,76,0.12), 0 30px 60px -15px rgba(0,0,0,0.6)",
          }}
        >
          {/* Tekstura tła */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Header karty */}
          <div className="pt-10 pb-6 px-10 text-center relative">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-16 h-px bg-[#C9A84C]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/60" />
              <div className="w-16 h-px bg-[#C9A84C]/40" />
            </div>
            <h3 className="text-lg tracking-[0.25em] uppercase text-[#C9A84C] font-light">
              {pCats.find((c) => c.k === tab)?.l}
            </h3>
          </div>

          {/* LISTA USŁUG - UŻYWAMY NOWEGO KOMPONENTU */}
          <div key={tab} className="menu-list-anim px-8 md:px-12 pb-10">
            {items.map((item, i) => (
              <ServiceCard
                key={item.n}
                name={item.n}
                price={item.p}
                duration={item.d}
                isPopular={item.pop}
                index={i}
              />
            ))}
          </div>

          {/* Stopka karty */}
          <div className="pb-8 px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-px bg-[#C9A84C]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/60" />
              <div className="w-16 h-px bg-[#C9A84C]/40" />
            </div>
            <p
              className="text-[10px] tracking-[0.15em] uppercase"
              style={{ color: TEXT_MUTED }}
            >
              Ceny orientacyjne — ostateczna wycena po konsultacji
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Animacja całej listy przy zmianie taba (podpięta pod key={tab}) */
        .menu-list-anim {
          opacity: 1;
          animation: menuSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
