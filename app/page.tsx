import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { TechnicalTests } from "@/components/sections/technical-tests"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechnicalTests />
        <Services />
        <Contact />
      </main>
    </>
  )
}
