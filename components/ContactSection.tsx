"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Check, Send } from "lucide-react";
import { waLink, GOLD, TEXT_WARM, TEXT_SEC, TEXT_MUTED } from "@/lib/utils";
import { pCats, pList } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const m = [
        `✨ Nowa Rezerwacja (Web)`,
        ``,
        `👤 ${form.name}`,
        `📞 ${form.phone}`,
        form.service ? `💅 ${form.service}` : "",
        form.date ? `📅 ${form.date}` : "",
        form.msg ? `💬 ${form.msg}` : "",
      ]
        .filter(Boolean)
        .join("\n");
      window.open(waLink(m), "_blank");
      setSent(true);
      setLoading(false);
      setForm({ name: "", phone: "", service: "", date: "", msg: "" });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Adres",
      desc: "Środa Wielkopolska,\nul. Przykładowa 12",
    },
    {
      icon: Phone,
      title: "Telefon",
      desc: "734 009 380",
      action: "tel:734009380",
    },
    {
      icon: Clock,
      title: "Godziny",
      desc: "Pon–Pt: 9:00 – 19:00\nSob: 9:00 – 15:00",
    },
  ];

  return (
    <section
      id="kontakt"
      className="fade-section relative py-16 md:py-40 px-4 md:px-6 overflow-hidden bg-[#050505]"
    >
      {/* Mniejsze tło na mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-24 z-10">
        {/* Lewa: Informacje */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-[#C9A84C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" /> Kontakt{" "}
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6 leading-tight">
            Zacznij swoją
            <br />
            <span className="text-[#C9A84C] italic">transformację</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
            Masz pytania? Napisz do nas. Chętnie doradzimy.
          </p>

          {/* Lista Kontaktów - Zmniejszone gap-y */}
          <div className="space-y-4 md:space-y-6">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.action || "#"}
                className="group flex items-start gap-4 p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#C9A84C] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C9A84C]/20 flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#C9A84C] group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#C9A84C]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium text-xs md:text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm whitespace-pre-line leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Prawa: Formularz */}
        <div className="relative order-2 lg:order-2">
          <div className="absolute -inset-1 bg-gradient-to-b from-[#C9A84C]/30 via-[#C9A84C]/5 to-[#C9A84C]/30 rounded-[2rem] blur opacity-30" />

          {/* Zmniejszony padding formularza na mobile */}
          <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
            <div className="flex justify-center mb-6 md:mb-8 opacity-50">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C] flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
                  Wysłano!
                </h3>
                <p className="text-sm text-gray-400">
                  Otworzyliśmy WhatsApp z Twoją rezerwacją.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="group/input">
                    <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-1 md:mb-2 group-focus-within/input:text-[#C9A84C] transition-colors">
                      Imię
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/10 py-1.5 md:py-2 text-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600 text-sm"
                      placeholder="Jan"
                    />
                  </div>
                  <div className="group/input">
                    <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-1 md:mb-2 group-focus-within/input:text-[#C9A84C] transition-colors">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/10 py-1.5 md:py-2 text-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600 text-sm"
                      placeholder="500 600 700"
                    />
                  </div>
                </div>

                <div className="group/input relative">
                  <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-1 md:mb-2 group-focus-within/input:text-[#C9A84C] transition-colors">
                    Usługa
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 py-1.5 md:py-2 text-white focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none cursor-pointer text-sm"
                  >
                    <option value="" className="bg-[#0A0A0A] text-gray-500">
                      Wybierz...
                    </option>
                    {pCats.map((cat) => (
                      <optgroup
                        key={cat.k}
                        label={` ${cat.l} `}
                        className="bg-[#0A0A0A] text-gray-300"
                      >
                        {pList[cat.k].map((p) => (
                          <option
                            key={p.n}
                            value={p.n}
                            className="bg-[#0A0A0A] pl-4"
                          >
                            {p.n} - {p.p}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <div className="absolute right-0 bottom-2 md:bottom-3 text-gray-500 pointer-events-none">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="group/input">
                  <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-1 md:mb-2 group-focus-within/input:text-[#C9A84C] transition-colors">
                    Wiadomość
                  </label>
                  <textarea
                    rows={2}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-1.5 md:py-2 text-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600 resize-none text-sm"
                    placeholder="Preferowany termin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full bg-[#C9A84C] text-black font-bold uppercase tracking-widest py-3 md:py-4 rounded-xl overflow-hidden mt-2 md:mt-4 hover:bg-[#E5C158] transition-all duration-300 disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[11px] md:text-xs">
                    {loading ? (
                      <span>Przetwarzanie...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Wyślij na WhatsApp
                      </>
                    )}
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </button>

                <p className="text-[9px] md:text-[10px] text-center text-gray-600 mt-2 md:mt-4">
                  Przekierowanie do WhatsApp.
                </p>
              </form>
            )}

            <div className="flex justify-center mt-4 md:mt-8 opacity-50">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
