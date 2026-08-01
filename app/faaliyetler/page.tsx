import type { Metadata } from 'next'
import { CalendarDays } from 'lucide-react'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { FAALIYETLER, KOMISYONLAR } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Faaliyetler',
  description:
    'SK Team Derneği’nin yıl içinde yürüttüğü düzenli ve düzensiz faaliyetleri.',
}

const DURUM_RENK: Record<string, string> = {
  Aktif: 'bg-primary text-primary-foreground',
  Hazırlık: 'bg-accent text-accent-foreground',
  Ertelendi: 'bg-destructive text-primary-foreground',
  'Aday toplanıyor': 'bg-secondary text-secondary-foreground',
}

export default function FaaliyetlerPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Etkinlik takvimi"
        baslik="Faaliyetlerimiz"
        aciklama="Faaliyet takvimi her yıl başında ilan edilir, yıl içinde tamamen göz ardı edilir. Buna rağmen faaliyetlerin büyük bölümü kendiliğinden gerçekleşmektedir."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {FAALIYETLER.map((f) => (
            <article key={f.ad} className="flex flex-col gap-4 bg-background p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {f.donem && (
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-4 text-accent" />
                    {f.donem}
                  </span>
                )}
                <span
                  className={`rounded-sm px-2 py-1 text-[11px] uppercase tracking-wider ${DURUM_RENK[f.durum] ?? 'bg-muted text-muted-foreground'
                    }`}
                >
                  {f.durum}
                </span>
              </div>
              <h2 className="text-balance text-lg font-semibold leading-snug md:text-xl">
                {f.ad}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.aciklama}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary kagit-doku">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Faaliyetleri yürüten komisyonlar
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Her faaliyet, ilgili komisyonun sorumluluğundadır. Sorumluluğun
              kimde olduğu tartışmalıysa faaliyet kendiliğinden iptal edilir.
            </p>
          </div>

          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {KOMISYONLAR.map((k) => (
              <li key={k.ad} className="flex flex-col gap-2 bg-card p-6">
                <h3 className="text-sm font-semibold leading-snug">{k.ad}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {k.ozet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
