const stats = [
  { value: "2014", label: "Desde" },
  { value: "40+", label: "Pratos regionais" },
  { value: "100%", label: "Ingredientes locais" },
]

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Nossa história</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
            Uma flor que resiste e floresce no sertão
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Assim como o mandacaru, que floresce mesmo na seca, nosso bistrô nasceu do desejo de
              celebrar a força e a delicadeza da cozinha nordestina. Trazemos para a mesa o que há de
              melhor na tradição regional, com um toque contemporâneo.
            </p>
            <p>
              Trabalhamos com produtores locais, valorizamos o tempero de raiz e transformamos cada
              refeição em uma viagem afetiva pelo Nordeste do Brasil.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/prato-moqueca.png"
              alt="Moqueca de frutos do mar servida em panela de barro"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-secondary px-6 py-5 text-secondary-foreground shadow-xl sm:block">
            <p className="font-serif text-lg font-bold leading-tight">Feito com afeto</p>
            <p className="text-sm text-secondary-foreground/80">e tempero de família</p>
          </div>
        </div>
      </div>
    </section>
  )
}
