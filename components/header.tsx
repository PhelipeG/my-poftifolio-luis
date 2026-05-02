import Link from "next/link";
import { Sparkles } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import Nav from "./navbar";
import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/72 py-4 text-white backdrop-blur-2xl">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href='/'>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-accent text-primary shadow-[0_0_32px_rgba(29,185,84,0.28)]">
              <Sparkles size={20} />
            </span>
            <div className="leading-none">
              <p className="font-display text-xl font-extrabold tracking-normal">Luis Felipe</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">front-end + mobile</p>
            </div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
            <Link href='https://www.linkedin.com/in/luis-felipe-silv/'>
                <Button className="rounded-full bg-white text-primary hover:bg-accent">Linkedin</Button>
            </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
