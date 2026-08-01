export function SayfaBasligi({
  ustBaslik,
  baslik,
  aciklama,
}: {
  ustBaslik: string
  baslik: string
  aciklama?: string
}) {
  return (
    <section className="border-b border-border bg-secondary kagit-doku">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          {ustBaslik}
        </p>
        <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {baslik}
        </h1>
        {aciklama && (
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {aciklama}
          </p>
        )}
        <div className="mt-8 h-px w-24 bg-accent" />
      </div>
    </section>
  )
}
