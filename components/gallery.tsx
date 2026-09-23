const photos = [
  { src: "/images/prato-carne-sol.png", alt: "Carne de sol com macaxeira" },
  { src: "/images/prato-moqueca.png", alt: "Moqueca de frutos do mar na panela de barro" },
  { src: "/images/prato-sobremesa.png", alt: "Cartola: sobremesa de banana com queijo e canela" },
  { src: "/images/hero.png", alt: "Ambiente interno do bistrô ao entardecer" },
]

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Galeria</span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">Um convite aos sentidos</h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`overflow-hidden rounded-2xl border border-border bg-muted ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
