import type { Metadata } from 'next'
import { LinkButton } from '@/components/link-button'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { SSS } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular',
  description:
    'SK Team Derneği hakkında en sık iletilen sorular ve resmî cevapları.',
}

export default function SssPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Bilgilendirme"
        baslik="Sıkça Sorulan Sorular"
        aciklama="Aşağıdaki cevaplar Basın ve Halkla İlişkiler Sorumluluğu tarafından hazırlanmıştır. Cevapların doğruluğu, sorunun kime sorulduğuna göre değişebilir."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-px bg-border">
          {SSS.map((s, i) => (
            <details
              key={s.soru}
              className="group bg-card p-6 md:p-7"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h2 className="text-balance text-base font-semibold leading-snug md:text-lg">
                  {s.soru}
                </h2>
                <span
                  className="mt-0.5 shrink-0 font-serif text-xl leading-none text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.cevap}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-sm border border-border bg-secondary p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Cevabını bulamadığınız bir soru mu var?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Sorunuzu kurumsal e-posta adresimize iletebilirsiniz. Yanıt süresi
            ortalama iki iş günüdür; gece 03.00 sonrası gönderilen iletiler
            genellikle dört dakikada yanıtlanır.
          </p>
          <LinkButton href="/iletisim" className="h-10 rounded-sm px-4">
            İletişim sayfasına gidin
          </LinkButton>
        </div>
      </section>
    </>
  )
}
