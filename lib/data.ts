import { Gem, HandMetal, Sparkles, SmilePlus, Scissors, Flower2, Crown, Flame, Gift, Users } from 'lucide-react'

export type PC = 'twarz' | 'masaz' | 'dlonie' | 'brwi' | 'depilacja' | 'cialo'

export const pCats: { k: PC; l: string; ic: typeof Flower2 }[] = [
  { k: 'twarz', l: 'Twarz', ic: Flower2 }, 
  { k: 'masaz', l: 'Masaże', ic: HandMetal },
  { k: 'dlonie', l: 'Dłonie & Stopy', ic: Sparkles }, 
  { k: 'brwi', l: 'Brwi & Rzęsy', ic: SmilePlus },
  { k: 'depilacja', l: 'Depilacja', ic: Scissors }, 
  { k: 'cialo', l: 'Ciało', ic: Gem },
]

export const pList: Record<PC, { n: string; p: string; d?: string; pop?: boolean }[]> = {
  twarz: [
    { n: 'Oczyszczanie twarzy — podstawowe', p: '120 zł', d: '60 min', pop: true },
    { n: 'Oczyszczanie twarzy — pełne', p: '160 zł', d: '90 min' },
    { n: 'Mezoterapia bezigłowa', p: '180 zł', d: '60 min' },
    { n: 'Peeling chemiczny (mild)', p: '140 zł', d: '45 min' },
    { n: 'Peeling chemiczny (medium)', p: '180 zł', d: '60 min' },
    { n: 'Maska nawilżająca z ampułką', p: '90 zł', d: '40 min' },
    { n: 'Zabieg liftingujący', p: '200 zł', d: '75 min', pop: true },
    { n: 'Masaż twarzy + roller', p: '100 zł', d: '45 min' },
  ],
  masaz: [
    { n: 'Masaż relaksacyjny — plecy', p: '100 zł', d: '30 min' },
    { n: 'Masaż relaksacyjny — całe ciało', p: '160 zł', d: '60 min', pop: true },
    { n: 'Masaż gorącymi kamieniami', p: '200 zł', d: '75 min', pop: true },
    { n: 'Masaż tkanek głębokich', p: '180 zł', d: '60 min' },
    { n: 'Drenaż limfatyczny', p: '170 zł', d: '60 min' },
    { n: 'Bańka chińska — plecy', p: '80 zł', d: '20 min' },
    { n: 'Masaż gorącą czekoladą', p: '220 zł', d: '60 min' },
  ],
  dlonie: [
    { n: 'Manicure hybrydowy', p: '90 zł', d: '60 min', pop: true },
    { n: 'Manicure japoński', p: '110 zł', d: '60 min' },
    { n: 'Manicure SPA z peelingiem', p: '120 zł', d: '75 min' },
    { n: 'Pedicure hybrydowy', p: '120 zł', d: '75 min' },
    { n: 'Pedicure SPA', p: '140 zł', d: '90 min' },
    { n: 'Usunięcie hybrydy (obca)', p: '40 zł', d: '20 min' },
  ],
  brwi: [
    { n: 'Regulacja brwi', p: '30 zł', d: '15 min' },
    { n: 'Henna brwi + regulacja', p: '45 zł', d: '25 min' },
    { n: 'Laminacja brwi', p: '100 zł', d: '45 min', pop: true },
    { n: 'Lifting rzęs', p: '110 zł', d: '45 min', pop: true },
    { n: 'Lifting rzęs + farbowanie', p: '130 zł', d: '55 min' },
    { n: 'Laminacja brwi + rzęs PAKIET', p: '180 zł', d: '80 min', pop: true },
  ],
  depilacja: [
    { n: 'Wąsik', p: '25 zł', d: '10 min' }, { n: 'Pachy', p: '40 zł', d: '15 min' },
    { n: 'Ręce (do łokcia)', p: '50 zł', d: '20 min' }, { n: 'Ręce (całe)', p: '70 zł', d: '30 min' },
    { n: 'Nogi (do kolana)', p: '60 zł', d: '25 min' }, { n: 'Nogi (całe)', p: '110 zł', d: '50 min' },
    { n: 'Bikini (basic)', p: '50 zł', d: '20 min' }, { n: 'Bikini (pełne)', p: '80 zł', d: '35 min', pop: true },
  ],
  cialo: [
    { n: 'Peeling ciała — solny', p: '100 zł', d: '40 min' },
    { n: 'Peeling ciała — kawowy', p: '110 zł', d: '40 min' },
    { n: 'Maska modelująca (partia)', p: '130 zł', d: '50 min' },
    { n: 'Maska modelująca (całe ciało)', p: '200 zł', d: '90 min', pop: true },
    { n: 'Zabieg anticellulitowy', p: '160 zł', d: '60 min', pop: true },
    { n: 'Pakiet PEELING + MASKA', p: '180 zł', d: '80 min' },
  ],
}

export const promos = [
  { ic: Crown, t: 'Pakiet Narzeczony', d: 'Pełna pielęgnacja przed wielkim dniem — oczyszczanie, masaż relaksacyjny, manicure i makijaż próbny.', old: '450 zł', nw: '349 zł', tag: 'Bestseller' },
  { ic: Flame, t: 'Poniedziałkowe SPA', d: 'Masaż całe ciało + peeling gratis. Idealny reset na start tygodnia.', old: '260 zł', nw: '160 zł', tag: 'Poniedziałki' },
  { ic: Gift, t: 'Karta Podarunkowa', d: 'Voucher na dowolny zabieg. Elegancka karta w złotym etui.', old: '', nw: 'od 80 zł', tag: 'Prezent' },
  { ic: Users, t: 'SPA we Dwie', d: 'Przyjdź z przyjaciółką — obie otrzymujecie -15% na zabiegi.', old: '', nw: '-15%', tag: 'Zniżka' },
]

export const team = [
  { name: 'Magdalena Kowalczyk', role: 'Właścicielka · Kosmetolog', exp: '8 lat', bio: 'Absolwentka Uniwersytetu Medycznego w Poznaniu. Szeroka wiedza z zakresu anti-aging i kosmetologii klinicznej.', certs: ['Kosmetologia kliniczna', 'Mezoterapia', 'Peelingi medyczne'] },
  { name: 'Anna Nowak', role: 'Masażystka · Terapeuta SPA', exp: '6 lat', bio: 'Holistyczne podejście do ciała. Specjalizuje się w technikach głębokich i drenażu limfatycznego.', certs: ['Tkanki głębokie', 'Drenaż limfatyczny', 'Kamienie'] },
  { name: 'Katarzyna Wiśniewska', role: 'Stylistka · Manicurystka', exp: '5 lat', bio: 'Precyzja i artystyczne podejście. Laminacja, lifting i stylizacja to jej domena.', certs: ['Laminacja', 'Manicure japoński', 'Stylizacja'] },
]

export const gallery = [
  { l: 'Recepcja', big: true }, { l: 'Gabinet I', big: false },
  { l: 'Strefa masażu', big: false }, { l: 'Stylizacja', big: true },
  { l: 'Kącik relaksu', big: false }, { l: 'Gabinet II', big: false },
]