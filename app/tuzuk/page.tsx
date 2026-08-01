import type { Metadata } from 'next'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { DERNEK, TUZUK } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Dernek Tüzüğü',
  description:
    'SK Team Derneği tüzüğünün tam metni. On maddeden oluşur ve tek oturumda kaleme alınmıştır.',
}

export default function TuzukPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Resmî belge"
        baslik="Dernek Tüzüğü"
        aciklama="İşbu tüzük, kuruluş gecesinde tek oturumda kaleme alınmış olup hiçbir hukukî danışmanlık alınmamıştır. Metnin bağlayıcılığı yalnızca üyeler arasında geçerlidir."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 rounded-sm border border-accent bg-card p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Belge künyesi
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-medium">{DERNEK.resmiAd}</span> Tüzüğü ·
            Sürüm 1.4 · Son değişiklik: 14 Mayıs 2026 · Kabul: Genel Kurul
            (yeter sayı aranmaksızın)
          </p>
        </div>

        <ol className="flex flex-col">
          {TUZUK.map((m, i) => (
            <li key={m.baslik} className="border-t border-border py-8 last:border-b">
              <div className="grid gap-4 md:grid-cols-[56px_1fr] md:gap-8">
                <span
                  className="font-serif text-2xl font-semibold text-accent"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold md:text-xl">{m.baslik}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {m.metin}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-4 rounded-sm bg-primary p-8 text-primary-foreground">
          <h2 className="text-lg font-semibold">Geçici Madde</h2>
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            İşbu tüzükte hüküm bulunmayan hâllerde, o an masada bulunan en kıdemli
            üyenin görüşü esas alınır. Kıdem, kampüste geçirilen toplam gece
            sayısıyla belirlenir ve beyana dayanır. Yani melmbaz ne derse odur.
          </p>
          <p className="pt-4 text-xs text-primary-foreground/60">
            İmza: Yönetim Kurulu adına Genel Sekreter · Mühür: mevcuttur, yeri
            bilinmemektedir.
          </p>
        </div>
      </section>
    </>
  )
}
