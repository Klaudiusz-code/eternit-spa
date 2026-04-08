"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GOLD, TEXT_WARM, TEXT_SEC } from "@/lib/utils";
import { BsInstagram } from "react-icons/bs";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
    alt: "Strefa relaksu",
    category: "Relaks",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Masaż",
    category: "Zabiegi",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    alt: "Detale SPA",
    category: "Atmosfera",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
    alt: "Recepcja",
    category: "Wnętrze",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    alt: "Pielęgnacja twarzy",
    category: "Zabiegi",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
    alt: "Kosmetyki",
    category: "Produkty",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const currentImg = galleryImages[currentImageIndex];

  return (
    <>
      <section
        id="galeria"
        className="fade-section relative py-16 md:py-40 px-4 md:px-6 overflow-hidden bg-[#050505]"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-10 right-10 text-[100px] md:text-[150px] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none">
          05
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Nagłówek */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-2">
            <div>
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-2 md:mb-3 block">
                Galeria
              </span>
              <h2 className="text-2xl md:text-[4rem] font-serif leading-none text-white">
                Wnętrza <span className="text-[#C9A84C] italic">salonu</span>
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
              >
                <BsInstagram className="w-3 h-3 md:w-4 md:h-4" /> Instagram
              </a>
            </div>
          </div>

          {/* Grid: Mobile 1 kolumna, Desktop 3 kolumny */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openModal(index)}
                className={`${img.gridClass} relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group border border-white/5`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay na hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A84C]/20 backdrop-blur-md flex items-center justify-center mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
                    <Maximize2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="text-white font-serif text-lg md:text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {img.alt}
                  </h4>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/50 rounded-xl md:rounded-2xl transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black z-50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black z-50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="relative max-w-[95vw] md:max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center">
            <img
              src={currentImg.src}
              alt={currentImg.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-8 md:-bottom-12 left-0 right-0 text-center">
              <p className="text-white/70 text-sm tracking-wide">
                {currentImg.alt}
              </p>
              <p className="text-[#C9A84C]/60 text-[10px] uppercase tracking-widest mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
