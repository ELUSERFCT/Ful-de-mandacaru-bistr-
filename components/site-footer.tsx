import { Instagram, Facebook } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg font-bold text-primary">Flor de Mandacaru</p>
          <p className="text-sm text-muted-foreground">Bistrô Nordestino — Fortaleza/CE</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="size-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Flor de Mandacaru. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
