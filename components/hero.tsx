import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Interior aconchegante do Bistrô Flor de Mandacaru ao entardecer"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-end px-5 pb-20 pt-32">
        <span className="mb-4 inline-block rounded-full border border-accent/60 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Sabores do sertão
        </span>
        <h1 className="max-w-2xl text-balance font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          O melhor da culinária nordestina, com alma e sofisticação
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
          No Flor de Mandacaru, cada prato carrega a memória do sertão: ingredientes regionais,
          receitas de família e o calor de quem cozinha com afeto.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#reservas"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Reservar uma mesa
          </a>
          <a
            href="#cardapio"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Ver o cardápio
          </a>
        </div>
      </div>
    </section>
  )
}
