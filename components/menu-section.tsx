type Dish = {
  name: string
  description: string
  price: string
}

const menu: { category: string; items: Dish[] }[] = [
  {
    category: "Entradas",
    items: [
      { name: "Bolinho de macaxeira", description: "Com carne de sol desfiada e geleia de pimenta", price: "R$ 32" },
      { name: "Dadinho de tapioca", description: "Crocante, com melaço de cana e queijo coalho", price: "R$ 28" },
      { name: "Caldinho de feijão verde", description: "Servido com torresmo artesanal", price: "R$ 24" },
    ],
  },
  {
    category: "Principais",
    items: [
      { name: "Carne de sol na nata", description: "Com macaxeira frita e manteiga de garrafa", price: "R$ 68" },
      { name: "Moqueca de frutos do mar", description: "Camarão e peixe no leite de coco e dendê", price: "R$ 89" },
      { name: "Galinha caipira ao molho pardo", description: "Acompanha arroz de leite e farofa", price: "R$ 62" },
      { name: "Baião de dois especial", description: "Feijão de corda, queijo coalho e carne seca", price: "R$ 54" },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Cartola", description: "Banana frita, queijo, canela e doce de leite", price: "R$ 26" },
      { name: "Cocada cremosa de forno", description: "Com sorvete de rapadura", price: "R$ 24" },
      { name: "Bolo de rolo com goiabada", description: "Servido morno com creme de baunilha", price: "R$ 27" },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="cardapio" className="bg-secondary/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Cardápio</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
            Do sertão para a sua mesa
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Uma seleção que homenageia os sabores mais marcantes da nossa terra.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {menu.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 flex items-center gap-3 font-serif text-xl font-bold text-secondary">
                {group.category}
                <span className="h-px flex-1 bg-border" />
              </h3>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className="whitespace-nowrap font-semibold text-primary">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
