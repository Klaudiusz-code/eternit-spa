'use client'
import { useState } from 'react'
import { CalendarCheck, MessageCircle, MapPin, Phone, Clock, Check, Sparkles } from 'lucide-react'
import { pCats, pList, promos } from '@/lib/data'
import { waLink, GOLD, TEXT_WARM, TEXT_SEC, TEXT_MUTED } from '@/lib/utils'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', msg: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const m = [`✨ Rezerwacja Eternity Spa`, '', `👤 ${form.name}`, `📞 ${form.phone}`, form.service ? `💅 ${form.service}` : '', form.date ? `📅 ${form.date}` : '', form.msg ? `💬 ${form.msg}` : ''].filter(Boolean).join('\n')
    window.open(waLink(m), '_blank'); setSent(true); setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="kontakt" className="fade-section relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 block">Kontakt</span>
          <h2 className="text-3xl md:text-[2.5rem] font-extralight tracking-tight mb-8 leading-[1.15]" style={{ color: TEXT_WARM }}>
            Umów się<br /><span className="text-[#C9A84C] font-light">na wizytę</span>
          </h2>
          <p className="text-[15px] leading-[1.9] mb-14" style={{ color: TEXT_SEC }}>
            Wypełnij formularz — wiadomość trafi bezpośrednio na nasz WhatsApp. Odpowiemy w ciągu godziny.
          </p>

          <div className="space-y-10">
            {[
              { ic: MapPin, t: 'Lokalizacja', d: 'Środa Wielkopolska\n(dokładny adres po umówieniu)' },
              { ic: Phone, t: 'Telefon', d: '734 009 380', href: 'tel:734009380' },
              { ic: Clock, t: 'Godziny otwarcia', d: 'Pon–Pt: 9:00 – 19:00\nSob: 9:00 – 15:00\nNd: Zamknięte' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.04)' }}>
                  <item.ic className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-[12px] font-medium tracking-wide mb-1.5" style={{ color: TEXT_WARM }}>{item.t}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm hover:text-[#C9A84C] transition-colors" style={{ color: TEXT_SEC }}>{item.d}</a>
                  ) : (
                    <div className="text-sm whitespace-pre-line leading-relaxed" style={{ color: TEXT_SEC }}>{item.d}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-px rounded-[25px] pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.02) 50%, rgba(201,168,76,0.2) 100%)' }} />
          
          <div className="relative rounded-3xl border border-white/[0.06] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0C0B08 0%, #0A0A0A 100%)' }}>
            
            <div className="flex items-center gap-3 px-8 pt-7">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]/40" />
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, rgba(201,168,76,0.3), transparent)' }} />
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-28 px-8 text-center">
                <div className="w-20 h-20 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-8 animate-pulse" style={{ background: 'rgba(201,168,76,0.06)' }}>
                  <Check className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-3" style={{ color: TEXT_WARM }}>Dziękujemy</h3>
                <p className="text-sm max-w-xs leading-relaxed" style={{ color: TEXT_SEC }}>Otworzyliśmy czat WhatsApp — wkrótce potwierdzimy termin.</p>
              </div>
            ) : (
              <div className="p-8 pt-6">
                <div className="flex items-center gap-2 mb-1 mt-4">
                  <CalendarCheck className="w-4 h-4 text-[#C9A84C]/60" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]/60">Rezerwacja online</span>
                </div>
                <p className="text-[11px] mb-10" style={{ color: TEXT_MUTED }}>Odpowiemy w ciągu godziny</p>

                <form onSubmit={submit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: TEXT_MUTED }}>Imię *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Twoje imię"
                        className="w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors duration-500" 
                        style={{ borderBottomColor: 'rgba(255,255,255,0.08)', color: TEXT_WARM }}
                        onFocus={e => e.target.style.borderBottomColor = GOLD}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: TEXT_MUTED }}>Telefon *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Twój numer"
                        className="w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors duration-500" 
                        style={{ borderBottomColor: 'rgba(255,255,255,0.08)', color: TEXT_WARM }}
                        onFocus={e => e.target.style.borderBottomColor = GOLD}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: TEXT_MUTED }}>Usługa</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors duration-500 appearance-none cursor-pointer pr-8"
                        style={{ borderBottomColor: 'rgba(255,255,255,0.08)', color: form.service ? TEXT_WARM : TEXT_MUTED }}
                        onFocus={e => e.target.style.borderBottomColor = GOLD}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.08)'}>
                        <option value="" style={{ background: '#0A0A0A' }}>Wybierz usługę</option>
                        {pCats.map((cat) => (
                          <optgroup key={cat.k} label={`— ${cat.l} —`} style={{ background: '#0A0A0A' }}>
                            {pList[cat.k].map((p) => <option key={p.n} value={p.n} style={{ background: '#0A0A0A', color: '#F5F0E8' }}>{p.n} — {p.p}</option>)}
                          </optgroup>
                        ))}
                        <optgroup label="— Promocje —" style={{ background: '#0A0A0A' }}>
                          {promos.map((pr) => <option key={pr.t} value={`⭐ ${pr.t}`} style={{ background: '#0A0A0A', color: GOLD }}>⭐ {pr.t} — {pr.nw}</option>)}
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: TEXT_MUTED }}>Termin</label>
                      <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="np. czwartek, 15:00"
                        className="w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors duration-500" 
                        style={{ borderBottomColor: 'rgba(255,255,255,0.08)', color: TEXT_WARM }}
                        onFocus={e => e.target.style.borderBottomColor = GOLD}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase mb-3 font-medium" style={{ color: TEXT_MUTED }}>Wiadomość</label>
                    <textarea rows={3} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Dodatkowe uwagi…"
                      className="w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors duration-500 resize-none" 
                      style={{ borderBottomColor: 'rgba(255,255,255,0.08)', color: TEXT_WARM }}
                      onFocus={e => e.target.style.borderBottomColor = GOLD}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  <button type="submit"
                    className="group relative w-full bg-[#C9A84C] text-black font-semibold text-[12px] uppercase tracking-[0.15em] py-4 rounded-xl overflow-hidden transition-all duration-500 hover:bg-[#D4B85A] hover:shadow-[0_0_35px_rgba(201,168,76,0.25)] flex items-center justify-center gap-2.5 mt-4">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    <MessageCircle className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Wyślij rezerwację</span>
                  </button>

                  <p className="text-center text-[10px] tracking-wide leading-relaxed" style={{ color: TEXT_MUTED }}>
                    Kliknięcie otwiera WhatsApp z gotową wiadomością.<br />Nie przechowujemy żadnych danych.
                  </p>
                </form>
              </div>
            )}

            <div className="flex items-center gap-3 px-8 pb-7 pt-2">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]/40" />
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, rgba(201,168,76,0.3), transparent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}