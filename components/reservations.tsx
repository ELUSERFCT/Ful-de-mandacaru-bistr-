"use client"

import { useState } from "react"
import { Clock, MapPin, Phone } from "lucide-react"

export function Reservations() {
  const [sent, setSent] = useState(false)

  return (
    <section id="reservas" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Reservas</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
            Reserve a sua mesa
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-secondary-foreground/80">
            Garanta o seu lugar e viva uma experiência inesquecível. Para grupos acima de 8 pessoas,
            entre em contato diretamente conosco.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-accent" />
              Rua das Cactáceas, 245 — Centro, Fortaleza/CE
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-accent" />
              (85) 3333-4455
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-accent" />
              Ter a Dom, 18h às 23h
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-background p-6 text-foreground md:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <h3 className="font-serif text-2xl font-bold text-secondary">Reserva recebida!</h3>
              <p className="mt-3 text-muted-foreground">
                Em breve entraremos em contato para confirmar. Obrigado pela preferência.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-muted"
              >
                Fazer outra reserva
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="data" className="mb-1.5 block text-sm font-semibold">
                    Data
                  </label>
                  <input
                    id="data"
                    name="data"
                    type="date"
                    required
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="pessoas" className="mb-1.5 block text-sm font-semibold">
                    Pessoas
                  </label>
                  <select
                    id="pessoas"
                    name="pessoas"
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "pessoa" : "pessoas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contato" className="mb-1.5 block text-sm font-semibold">
                  Telefone
                </label>
                <input
                  id="contato"
                  name="contato"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Confirmar reserva
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
