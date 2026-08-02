import type { Metadata } from 'next'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { DERNEK, UYELER, YONETIM } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Yönetim Kurulu ve Üyeler',
  description:
    'SK Team Derneği yönetim kurulu görev dağılımı ve kayıtlı üye listesi.',
}

const DURUM_RENK: Record<string, string> = {
  Faal: 'bg-primary text-primary-foreground',
  Gözetimde: 'bg-accent text-accent-foreground',
  Fahri: 'bg-secondary text-secondary-foreground',
  İzinli: 'bg-muted text-muted-foreground',
}

export type Yonetici = {
  unvan: string;
  isim: string;
  rumuz: string;
  gorev: string;
  foto?: string; // örn: '/gorseller/yonetim/ahmet-yilmaz.jpg'
};

export default function YonetimPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Teşkilat"
        baslik="Yönetim Kurulu ve Üyeler"
        aciklama="Yönetim Kurulu üyeleri iki yıllık dönem için seçilir. Bugüne kadar seçim yapılmamıştır."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Yönetim Kurulu
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Derneğin işleyişini sürdürmek ve kurumsal ciddiyet görüntüsünü korumak amacıyla faaliyet gösterir.
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {YONETIM.map((y) => (
            <>
              <article key={y.unvan} className="flex flex-col gap-4 bg-background p-6">
                {y.foto ? (
                  <img
                    src={y.foto}
                    alt={`${y.isim} — ${y.unvan}`}
                    loading="lazy"
                    className="size-20 rounded-xl object-cover"
                  />
                ) : (
                  <div
                    className="flex size-12 items-center justify-center rounded-sm bg-primary font-serif text-lg font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {y.unvan.charAt(0)}
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold leading-snug">{y.unvan}</h3>
                  <p className="text-sm text-muted-foreground">{y.isim}</p>
                  {y.unvan !== 'Onursal Üye' && y.unvan !== 'Üye' && (
                    <a
                      className="font-mono text-xs text-accent hover:underline"
                      href={`mailto:${y.rumuz}@${DERNEK.alanAdi}`}
                    >
                      {y.rumuz}@{DERNEK.alanAdi}
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{y.gorev}</p>
              </article >
            </>
          ))}
        </div>
      </section >

      <section className="border-t border-border bg-secondary kagit-doku">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Kayıtlı üye defteri
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Defter, Genel Sekreterlik tarafından tutulur. Kayıtlar yalnızca
              Genel Sekreter tarafından güncellenir; silinme talebi kabul edilmez.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                SK Team Derneği kayıtlı üye listesi
              </caption>
              <thead>
                <tr className="border-b border-border bg-secondary text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Sıra
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Üye rumuzu
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Durum
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Sicil notu
                  </th>
                </tr>
              </thead>
              <tbody>
                {UYELER.map((u, i) => (
                  <tr key={u.rumuz} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(3, '0')}
                    </td>
                    <td className="px-5 py-4 font-mono font-medium">{u.rumuz}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-sm px-2 py-1 text-[11px] uppercase tracking-wider ${DURUM_RENK[u.durum] ?? 'bg-muted text-muted-foreground'
                          }`}
                      >
                        {u.durum}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{u.not}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Listede yer almayan 11 üye, Genel Sekreter not almayı unuttuğu için listenememiştir.
          </p>
        </div>
      </section>
    </>
  )
}
