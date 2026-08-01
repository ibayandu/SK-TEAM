import Image from 'next/image'
import type { Metadata } from 'next'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { DERNEK } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'SK Team Derneği’nin kuruluş tarihçesi, kurumsal kimliği ve hayalî statüsüne ilişkin resmî açıklama.',
}

const TARIHCE = [
  {
    yil: '2025 · Sonbahar',
    baslik: 'Kavramın ilk telaffuzu',
    metin:
      'Kampüs kümesinde geç saatlerde çalışan bir grup üye, birbirine yönelttiği samimi hitabı ortak bir kimlik olarak benimsemiştir. O gece herhangi bir tutanak tutulmamış, bu eksiklik sonradan sözlü beyanla giderilmiştir.',
  },
  {
    yil: '2025 · Kış',
    baslik: 'Kısaltmanın kabulü',
    metin:
      'Uzun ifadenin kampüs içinde kullanımının pratik olmadığı tespit edilmiş, iki harflik kısaltmaya geçilmesine oy birliğiyle karar verilmiştir. Karara katılmayan üye bulunmamaktadır, çünkü karar sorulmamıştır.',
  },
  {
    yil: '2025 · İlkbahar',
    baslik: '“Team” ekinin ilavesi',
    metin:
      'Topluluğun uluslararası bir kampüste faaliyet gösterdiği gerçeği dikkate alınarak kısaltmaya İngilizce bir ek yapılmasına karar verilmiştir. Bu, derneğin dış ilişkiler alanındaki ilk ve tek atılımıdır.',
  },
  {
    yil: '2025 · Yaz',
    baslik: 'Dernek statüsüne geçiş',
    metin:
      'Topluluğun bir “dernek” olarak anılmaya başlanmasıyla birlikte tüzük ihtiyacı doğmuş, ilk tüzük tek oturumda ve hiçbir hukukî danışmanlık alınmaksızın kaleme alınmıştır.',
  },
  {
    yil: '2026 · Temmuz',
    baslik: 'Kurumsal altyapının kurulması',
    metin:
      'skteam.network alan adı tescil edilmiş, kurumsal elektronik posta altyapısı devreye alınmış ve bu portal hizmete açılmıştır. Derneğimiz böylece hayalî statüsünü koruyarak dijitalleşmiştir.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Kurumsal"
        baslik="Hakkımızda"
        aciklama={`${DERNEK.resmiAd}, 42 İstanbul Kampüsü bünyesinde faaliyet gösteren, tüzel kişiliği bulunmayan ancak tüzüğü bulunan bir arkadaş topluluğudur.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <Image
              src="/kurucu-portre.png"
              alt="Derneğin kurucu üyesini tasvir eden resmî portre"
              width={700}
              height={860}
              priority
              className="w-full rounded-sm border border-border object-cover"
            />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Derneğin kurucusuna ait resmî portre. Eser, Geminiden sipariş edilmiş, bedeli ortak kasadan
              karşılanmıştır. Kasa hâlen açığını kapatamamıştır.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Resmî beyan
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Derneğimiz, üyeleri arasındaki uzun soluklu dostluğun kurumsal
                bir çerçeveye kavuşturulması amacıyla tamamen şaka yoluyla
                kurulmuştur. Aradan geçen sürede şakanın kendisi kurumsallaşmış,
                kurumun kendisi ise şaka olarak kalmıştır. Bu iki durum arasında
                bir çelişki görülmemektedir.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {DERNEK.kurulusNotu}
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Künye
              </h3>
              <dl className="flex flex-col gap-3 text-sm">
                {[
                  ['Resmî ad', DERNEK.resmiAd],
                  ['Kısa ad', DERNEK.kisaAd],
                  ['Kuruluş yılı', DERNEK.kurulus],
                  ['Sicil no', `${DERNEK.sicil} (kendi kendine verilmiştir)`],
                  ['Merkez', DERNEK.merkez],
                  ['Tüzel kişilik', 'Yok'],
                  ['Alan adı', DERNEK.alanAdi],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-col gap-1 border-b border-border pb-3 last:border-0 last:pb-0 sm:flex-row sm:gap-4"
                  >
                    <dt className="w-40 shrink-0 text-muted-foreground">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary kagit-doku">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-12 flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Tarihçe
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
              Bir şakadan kurumsal yapıya
            </h2>
          </div>

          <ol className="flex flex-col">
            {TARIHCE.map((t, i) => (
              <li
                key={t.yil}
                className="grid gap-4 border-t border-border py-8 last:border-b md:grid-cols-[200px_1fr] md:gap-10"
              >
                <div className="flex items-start gap-3">
                  <span className="font-serif text-sm text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold">{t.yil}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{t.baslik}</h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {t.metin}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
