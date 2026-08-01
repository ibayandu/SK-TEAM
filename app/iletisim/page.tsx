import type { Metadata } from 'next'
import { AtSign, Clock, MapPin, ShieldAlert } from 'lucide-react'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { DERNEK } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'SK Team Derneği kurumsal e-posta adresleri, merkez adresi ve başvuru kanalları.',
}

const BIRIMLER = [
  {
    birim: 'Başkanlık',
    kutu: 'baskan',
    aciklama: 'Genel nitelikli tüm yazışmalar. Cevap süresi belirsizdir.',
  },
  {
    birim: 'Genel Sekreterlik',
    kutu: 'sekreter',
    aciklama: 'Tutanak talepleri, üyelik kayıt işlemleri ve klasör şikâyetleri.',
  },
  {
    birim: 'Sayman',
    kutu: 'sayman',
    aciklama: 'Aidat, ortak kasa ve “ben o gün ödemiştim” beyanları.',
  },
  {
    birim: 'Disiplin Kurulu',
    kutu: 'disiplin',
    aciklama: 'İhbar, savunma ve ceza itirazları. İtirazlar arşive alınır.',
  },
  {
    birim: 'Basın ve Halkla İlişkiler',
    kutu: 'iletisim',
    aciklama: 'Röportaj talepleri ve derneğin adının açılımına dair sorular.',
  },
  {
    birim: 'Teknik İşler',
    kutu: 'teknik',
    aciklama: 'Alan adı, kurumsal e-posta ve bu sitedeki aksaklıklar.',
  },
]

export default function IletisimPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Kurumsal iletişim"
        baslik="İletişim"
        aciklama={`Derneğimizle tüm yazışmalar ${DERNEK.alanAdi} uzantılı kurumsal e-posta adresleri üzerinden yürütülür. Sözlü başvurular yalnızca kampüs içinde ve yüz yüze kabul edilir.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            {
              ikon: MapPin,
              baslik: 'Merkez',
              satirlar: [DERNEK.merkez, 'Küme alanı, pencere kenarı masa'],
            },
            {
              ikon: AtSign,
              baslik: 'Kurumsal e-posta',
              satirlar: [DERNEK.eposta, `Alan adı: ${DERNEK.alanAdi}`],
            },
            {
              ikon: Clock,
              baslik: 'Çalışma saatleri',
              satirlar: [
                'Hafta içi 22.00 — 05.00',
                'Hafta sonu: gündeme göre değişir',
              ],
            },
          ].map((k) => (
            <div key={k.baslik} className="flex flex-col gap-3 bg-background p-8">
              <k.ikon className="size-5 text-accent" />
              <h2 className="text-base font-semibold">{k.baslik}</h2>
              {k.satirlar.map((s) => (
                <p key={s} className="text-sm leading-relaxed text-muted-foreground">
                  {s}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary kagit-doku">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Birim e-posta adresleri
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Yazışmanızı doğru birime iletmeniz, cevap alma olasılığınızı
              artırmaz; ancak arşivleme sürecini kolaylaştırır.
            </p>
          </div>

          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {BIRIMLER.map((b) => (
              <li key={b.kutu} className="flex flex-col gap-2 bg-card p-6">
                <h3 className="text-sm font-semibold">{b.birim}</h3>
                <a
                  href={`mailto:${b.kutu}@${DERNEK.alanAdi}`}
                  className="font-mono text-xs text-accent underline underline-offset-4"
                >
                  {b.kutu}@{DERNEK.alanAdi}
                </a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {b.aciklama}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-sm border border-border bg-card p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Üyelik başvurusu nasıl yapılır?
            </h2>
            <ol className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">1.</span> Başvuru yapmaya çalışmayın. Dernek üyelik başvurusu kabul etmemektedir.
              </li>
              <li>
                <span className="font-medium text-foreground">2.</span> Beşiktaş'ta Yönetim Kurulu üyelerinden biriyle networking yapmanız ön değerlendirmede dikkate alınabilir.
              </li>
              <li>
                <span className="font-medium text-foreground">3.</span> Networking yapmış olmanız, değerlendirmeye alınacağınız veya seçileceğiniz anlamına gelmez.
              </li>
              <li>
                <span className="font-medium text-foreground">4.</span> Uygun görülmeniz hâlinde sizinle iletişime geçilir. Uygun görülmemeniz hâlinde de iletişime geçilmeyebilir.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-4 rounded-sm border border-accent bg-background p-8">
            <ShieldAlert className="size-5 text-accent" />
            <h2 className="text-xl font-semibold tracking-tight">
              Yasal uyarı ve şeffaflık beyanı
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {DERNEK.resmiAd}, resmî hiçbir mercide kayıtlı bir tüzel kişilik
              değildir. Bu site, 42 İstanbul Kampüsü’ndeki bir arkadaş
              topluluğunun kendi iç şakasını kurumsal bir dille sunduğu bir
              parodidir.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sitede yer alan tüm kararlar, komisyonlar, cezalar ve mazeretler
              kurgudur. Herhangi bir kurum, kuruluş veya resmî yapıyla ilişkisi
              bulunmamaktadır. Aidat toplandığı iddiası ise maalesef doğrudur.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
