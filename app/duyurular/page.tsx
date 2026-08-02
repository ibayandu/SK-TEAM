import type { Metadata } from 'next'
import { SayfaBasligi } from '@/components/sayfa-basligi'
import { DERNEK, DUYURULAR } from '@/lib/veriler'

export const metadata: Metadata = {
  title: 'Duyurular ve Basın Bültenleri',
  description:
    'SK Team Derneği Yönetim Kurulu kararları, resmî duyuruları ve basın açıklamaları.',
}

export type Duyuru = {
  tarih: string;
  no: string;
  baslik: string;
  ozet: string;
  etiket: string;
  pdfUrl?: string;
  pdfMetin?: string; // link üzerinde görünecek yazı
};

function Ozet({ d }: { d: Duyuru }) {
  const cls = 'text-sm leading-relaxed text-muted-foreground md:text-base';

  if (!d.pdfUrl || !d.ozet.includes('{link}')) {
    return <p className={cls}>{d.ozet}</p>;
  }

  const [once, sonra] = d.ozet.split('{link}');

  return (
    <p className={cls}>
      {once}
      <a href={d.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-primary" >
        {d.pdfMetin ?? 'PDF'}
      </a>
      {sonra}
    </p>
  );
}

export default function DuyurularPage() {
  return (
    <>
      <SayfaBasligi
        ustBaslik="Basın ve halkla ilişkiler"
        baslik="Duyurular ve Basın Bültenleri"
        aciklama="Bu bölümde yayımlanan metinler, Basın ve Halkla İlişkiler Sorumlusu tarafından kaleme alınmakta ve Yönetim Kurulu’nun onayına sunulmaksızın yayımlanmaktadır."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <ol className="flex flex-col gap-10">
          {DUYURULAR.map((d) => (
            <li
              key={d.no}
              className="rounded-sm border border-border bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                <span className="rounded-sm bg-primary px-2 py-1 text-primary-foreground">
                  {d.etiket}
                </span>
                <span>Karar No {d.no}</span>
                <span>{d.tarih}</span>
              </div>

              <h2 className="mb-3 text-balance text-xl font-semibold leading-snug md:text-2xl">
                {d.baslik}
              </h2>
              <Ozet d={d} />
              <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                Konuya ilişkin gelişmeler yakından takip edilmektedir. ·{' '}

                <a href={`mailto:basin@${DERNEK.alanAdi}`}
                  className="underline underline-offset-4"
                >
                  basin@{DERNEK.alanAdi}
                </a>
              </div>
            </li>
          ))}
        </ol >

        <p className="mt-10 rounded-sm border border-border bg-secondary p-6 text-sm leading-relaxed text-muted-foreground">
          Arşivdeki daha eski duyurular, Arşiv ve Ekran Görüntüsü Müdürlüğü’nün
          tasnif çalışmaları tamamlandığında yayımlanacaktır. Tasnif çalışması
          2026 yılında başlamıştır.
        </p>
      </section >
    </>
  )
}
