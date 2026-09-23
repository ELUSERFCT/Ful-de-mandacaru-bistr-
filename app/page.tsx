import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Gallery } from "@/components/gallery"
import { Reservations } from "@/components/reservations"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Reservations />
      </main>
      <SiteFooter />
    </>
  )
}
