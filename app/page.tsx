import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Landmark, ScrollText, Stamp } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { DERNEK, DUYURULAR, ISTATISTIKLER, KOMISYONLAR } from '@/lib/veriler'

export default function AnasayfaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <span className="flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/80">
              <Stamp className="size-3.5" />
              Kuruluş {DERNEK.kurulus} · 42 İstanbul
            </span>

            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              {DERNEK.tamAd}
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {DERNEK.resmiAd} olarak; Karşılıklı laf
              sokma kültürünü ve ortak kasa disiplinini korumak üzere faaliyet
              göstermekteyiz. Derneğimiz hayalî olarak kurulmuş olup, fiilî
              varlığı üyelerimizin ısrarıyla sürdürülmektedir.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <LinkButton
                href="/tuzuk"
                size="lg"
                className="h-11 rounded-sm bg-accent px-5 text-accent-foreground hover:bg-accent/90"
              >
                Tüzüğü inceleyin
                <ArrowRight className="size-4" />
              </LinkButton>
              <LinkButton
                href="/duyurular"
                size="lg"
                variant="outline"
                className="h-11 rounded-sm border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Resmî duyurular
              </LinkButton>
            </div>

            <p className="text-xs text-primary-foreground/55">
              Kurumsal yazışma adresi:{' '}
              <a
                href={`mailto:${DERNEK.eposta}`}
                className="underline underline-offset-4"
              >
                {DERNEK.eposta}
              </a>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-sm border border-primary-foreground/15" />
            <Image
              src="/genel-kurul.png"
              alt="Derneğin olağan genel kurul toplantısından bir kare"
              width={900}
              height={620}
              className="relative h-full w-full rounded-sm object-cover"
              priority
            />
            <p className="relative mt-4 text-[11px] leading-relaxed text-primary-foreground/55">
              Fotoğraf: 2026 yılı Olağan Genel Kurulu’nun açılışı. Toplantı,
              yeter sayı sağlanamadığı gerekçesiyle bu kareden dört dakika sonra
              ertelenmiştir.
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {ISTATISTIKLER.map((s) => (
            <div key={s.etiket} className="flex flex-col gap-1 bg-card p-6 md:p-8">
              <span className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                {s.deger}
              </span>
              <span className="text-sm font-medium">{s.etiket}</span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {s.not}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Misyon / Vizyon / İlkeler */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Kurumsal kimlik
          </p>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-4xl">
            Ciddiyetimizi, ciddiye alınmamaktan alıyoruz
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            {
              ikon: Landmark,
              baslik: 'Misyonumuz',
              metin:
                'Aynı masada başlayan bir şakayı, kurumsal bir yapıya dönüştürerek sürdürülebilir hâle getirmek. Şakanın kendisi korunur, ciddiyeti artırılır.',
            },
            {
              ikon: ScrollText,
              baslik: 'Vizyonumuz',
              metin:
                'Alan adı, kurumsal e-posta ve tüzüğü olan; ancak resmî hiçbir mercide kaydı bulunmayan örnek bir topluluk olmak. Hedefe büyük ölçüde ulaşılmıştır.',
            },
            {
              ikon: FileText,
              baslik: 'İlkelerimiz',
              metin:
                'Dayanışma esastır, laf sokma karşılıklıdır, mazeret kabul edilmez. Alınan her karar tutanağa geçer; tutanaklar hiçbir koşulda silinmez.',
            },
          ].map((k) => (
            <div key={k.baslik} className="flex flex-col gap-4 bg-background p-8">
              <k.ikon className="size-6 text-accent" />
              <h3 className="text-lg font-semibold">{k.baslik}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {k.metin}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Duyurular */}
      <section className="border-y border-border bg-secondary kagit-doku">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Basın bülteni
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
                Son resmî duyurular
              </h2>
            </div>
            <Link
              href="/duyurular"
              className="flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Tüm duyurular
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="flex flex-col gap-px bg-border">
            {DUYURULAR.slice(0, 3).map((d) => (
              <li key={d.no} className="bg-card p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-sm bg-primary px-2 py-1 text-primary-foreground">
                    {d.etiket}
                  </span>
                  <span>Karar No {d.no}</span>
                  <span>{d.tarih}</span>
                </div>
                <h3 className="mb-2 text-balance text-lg font-semibold leading-snug md:text-xl">
                  {d.baslik}
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {d.ozet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Komisyonlar */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Teşkilat yapısı
          </p>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight md:text-4xl">
            Faal komisyonlarımız
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Her komisyon, Yönetim Kurulu’na üç ayda bir rapor sunmakla
            yükümlüdür. Bugüne kadar sunulan rapor sayısı bilinçli olarak
            açıklanmamaktadır.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {KOMISYONLAR.map((k, i) => (
            <article key={k.ad} className="flex flex-col gap-3 bg-background p-6">
              <span className="font-serif text-sm text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-semibold leading-snug">{k.ad}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {k.ozet}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Üyelik hakkında bilgi almak istiyorum
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Derneğe başvuru yapılamaz; üyeler yalnızca uygun görüldükleri takdirde seçilebilir.
              Beşiktaş'ta Yönetim Kurulu üyelerinden biriyle networking yapmış olmak ön değerlendirme için dikkate alınabilir.
              Bununla birlikte söz konusu networking faaliyeti, üyelik ihtimaline dair herhangi bir taahhüt, hak veya ima oluşturmaz.
            </p>
          </div>
          <LinkButton
            href="/iletisim"
            size="lg"
            className="h-11 shrink-0 rounded-sm px-5"
          >
            İletişime geçin
            <ArrowRight className="size-4" />
          </LinkButton>
        </div>
      </section>
    </>
  )
}
