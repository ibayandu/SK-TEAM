'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { DERNEK, NAV } from '@/lib/veriler'

export function SiteHeader() {
  const pathname = usePathname()
  const [acik, setAcik] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 text-[11px] tracking-wide">
          <p className="uppercase">
            Parodi Kurumsal Portal · Sicil No {DERNEK.sicil}
          </p>
          <p className="text-primary-foreground/70">
            Son güncelleme: 18.07.2026 · Tüm hakları saklıdır (sözlü olarak)
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sktd-amblem.png"
            alt="SK Team Derneği amblemi"
            width={1600}
            height={1600}
            className="h-36 w-36 shrink-0 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight">
              {DERNEK.tamAd}
            </span>
            <span className="text-[11px] tracking-[0.18em] text-muted-foreground">
              {DERNEK.slogan}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {NAV.map((item) => {
            const aktif = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                  aktif
                    ? 'bg-secondary font-medium text-secondary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {item.etiket}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setAcik(!acik)}
          className="flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-sm lg:hidden"
          aria-expanded={acik}
          aria-label="Menüyü aç veya kapat"
        >
          {acik ? <X className="size-4" /> : <Menu className="size-4" />}
          Menü
        </button>
      </div>

      {acik && (
        <nav
          className="border-t border-border bg-card px-4 py-3 lg:hidden"
          aria-label="Mobil menü"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setAcik(false)}
                  className={`block border-b border-border py-3 text-sm ${
                    pathname === item.href
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.etiket}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
