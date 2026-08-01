import Image from 'next/image'
import Link from 'next/link'
import { DERNEK, NAV } from '@/lib/veriler'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/sktd-amblem.png"
              alt=""
              width={48}
              height={48}
              className="h-20 w-20 object-contain"
            />
            <div>
              <p className="font-serif text-base font-semibold">{DERNEK.tamAd}</p>
              <p className="text-xs text-primary-foreground/70">{DERNEK.slogan}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {DERNEK.kurulus} yılında hayalî olarak kurulmuş,
            fiilen faaliyettedir.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Kurumsal
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {NAV.filter((n) => n.href !== '/').map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  {n.etiket}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            İletişim
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <li>{DERNEK.merkez}</li>
            <li>
              <a
                href={`mailto:${DERNEK.eposta}`}
                className="underline underline-offset-4"
              >
                {DERNEK.eposta}
              </a>
            </li>
            <li>Çalışma saatleri: 22.00 — 05.00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-[11px] text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {DERNEK.kurulus}–2026 {DERNEK.kisaAd}. Bu site bir arkadaş
            topluluğunun şaka amaçlı kurumsal parodisidir.
          </p>
          <p>Resmî hiçbir kurumla ilişkisi yoktur ve olması da beklenmemektedir.</p>
        </div>
      </div>
    </footer>
  )
}
