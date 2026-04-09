"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { PC, pCats, pList } from "@/lib/data";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC, TEXT_MUTED } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import PromosSection from "@/components/PromoSection";
import ContactSection from "@/components/ContactSection";
import CompactStrip from "@/components/Marquee"; // Upewnij się, że to jest CompactStrip, jeśli nie, podmień import

export default function EternitySpa() {
  const [showTop, setShowTop] = useState(false);
  const [priceTab, setPriceTab] = useState<PC>("twarz");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 },
    );
    const sections = mainRef.current?.querySelectorAll(".fade-section");
    sections?.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight)
        el.classList.add("vis");
      else obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={mainRef}
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#030303" }}
    >
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== PASEK INFORMACYJNY ===== */}
      <CompactStrip />

      {/* ===== O NAS  ===== */}
      <section
        id="o-nas"
        className="fade-section relative py-16 md:py-40 px-4 md:px-6 overflow-hidden"
      >
        <div
          className="absolute top-8 left-6 md:left-12 text-[100px] md:text-[180px] font-extralight leading-none pointer-events-none select-none"
          style={{ color: "rgba(201,168,76,0.03)" }}
        >
          01
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-48 h-48 md:w-72 md:w-96 border border-[#C9A84C]/[0.07] rotate-45 rounded-sm" />
            <div className="absolute w-32 h-32 md:w-52 md:h-72 border border-[#C9A84C]/[0.04] rotate-45 rounded-sm" />
            <div
              className="relative w-56 h-64 md:w-80 md:h-[420px] rounded-2xl overflow-hidden border border-white/[0.06]"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Salon"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, transparent 50%, rgba(201,168,76,0.05) 100%)",
                }}
              />
            </div>
          </div>
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 block">
              O nas
            </span>
            <h2
              className="text-2xl md:text-[2.5rem] font-extralight tracking-tight mb-6 md:mb-8 leading-[1.15]"
              style={{ color: TEXT_WARM }}
            >
              Przestrzeń stworzona
              <br />
              <span className="text-[#C9A84C] font-light">
                dla Twojego relaksu
              </span>
            </h2>
            <div
              className="space-y-4 md:space-y-5 text-[14px] md:text-[15px] leading-[1.8]"
              style={{ color: TEXT_SEC }}
            >
              <p>
                <strong className="font-medium" style={{ color: TEXT_WARM }}>
                  Eternity Spa
                </strong>{" "}
                to nowo otwarty salon piękności w sercu Środy Wielkopolskiej.
                Tworzymy miejsce, w którym każda wizyta staje się chwilą
                wytchnienia.
              </p>
              <p>
                Nasz zespół to certyfikowane specjalistki z wieloletnim
                doświadczeniem. Pracujemy wyłącznie na kosmetykach klasy
                premium.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/[0.06]">
              {[
                { v: "500+", l: "Klientek" },
                { v: "8+", l: "Lat exp." },
                { v: "25+", l: "Zabiegów" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl md:text-2xl font-light text-[#C9A84C]">
                    {s.v}
                  </div>
                  <div
                    className="text-[10px] md:text-[11px] mt-1 tracking-wide"
                    style={{ color: TEXT_MUTED }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ZESPÓŁ ===== */}
      <TeamSection />

      {/* ===== CENNIK  ===== */}
      <section
        id="cennik"
        className="fade-section relative py-16 md:py-40 px-4 md:px-6"
      >
        <div
          className="absolute top-8 right-6 md:right-12 text-[100px] md:text-[180px] font-extralight leading-none pointer-events-none select-none"
          style={{ color: "rgba(201,168,76,0.03)" }}
        >
          03
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 block">
              Cennik
            </span>
            <h2
              className="text-2xl md:text-[2.5rem] font-extralight tracking-tight"
              style={{ color: TEXT_WARM }}
            >
              Karta <span className="text-[#C9A84C] font-light">zabiegów</span>
            </h2>
          </div>

          <div
            className="flex flex-wrap justify-center gap-1.5 mb-10 md:mb-14 p-1.5 rounded-2xl"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.08)",
            }}
          >
            {pCats.map((c) => (
              <button
                key={c.k}
                onClick={() => setPriceTab(c.k)}
                className={`relative flex items-center gap-1.5 text-[10px] md:text-[11px] tracking-[0.08em] uppercase px-4 md:px-5 py-2 md:py-2.5 rounded-xl transition-all duration-300 ${priceTab === c.k ? "text-black font-semibold shadow-[0_4px_15px_rgba(201,168,76,0.25)]" : "text-[#8A8278] hover:text-[#F5F0E8]"}`}
                style={
                  priceTab === c.k
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

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0C0B09 0%, #080808 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow:
                "inset 0 0 0 5px #080808, inset 0 0 0 6px rgba(201,168,76,0.12), 0 30px 60px -15px rgba(0,0,0,0.6)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="pt-8 md:pt-10 pb-4 md:pb-6 px-6 md:px-10 text-center relative">
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-5">
                <div className="w-12 h-px md:w-16 bg-[#C9A84C]/40" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/60" />
                <div className="w-12 h-px md:w-16 bg-[#C9A84C]/40" />
              </div>
              <h3 className="text-base md:text-lg tracking-[0.25em] uppercase text-[#C9A84C] font-light">
                {pCats.find((c) => c.k === priceTab)?.l}
              </h3>
            </div>

            <div
              key={priceTab}
              className="menu-list-anim px-6 md:px-8 md:px-12 pb-8 md:pb-10"
            >
              {pList[priceTab].map((item, i) => (
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

            <div className="pb-6 md:pb-8 px-6 md:px-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                <div className="w-12 h-px md:w-16 bg-[#C9A84C]/40" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/60" />
                <div className="w-12 h-px md:w-16 bg-[#C9A84C]/40" />
              </div>
              <p
                className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase"
                style={{ color: TEXT_MUTED }}
              >
                Ceny orientacyjne — ostateczna wycena po konsultacji
              </p>
            </div>
          </div>
        </div>
      </section>

      <PromosSection />
      <GallerySection />
      <WhyUsSection />
      <ContactSection />
      <Footer />

      <a
        href={waLink("Cześć! Pytanie o usługi.")}
        target="_blank"
        rel="noopener noreferrer"
        className="hiden md:fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A84C] text-black rounded-full flex items-center justify-center hover:bg-[#D4B85A] hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-[#C9A84C]/30 transition-all duration-500 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        style={{
          background: "rgba(10,10,10,0.8)",
          color: TEXT_MUTED,
          backdropFilter: "blur(12px)",
        }}
        aria-label="Na górę"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .fade-section {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-section.vis {
          opacity: 1;
          transform: translateY(0);
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #030303;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(201, 168, 76, 0.2);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 168, 76, 0.4);
        }
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
    </div>
  );
}
