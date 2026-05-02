import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import Nav from "./navbar";
import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-mario-brickDark bg-mario-sky/90 py-4 text-white backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href='/'>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl border-4 border-mario-brickDark bg-mario-question text-mario-brickDark shadow-[inset_0_-5px_0_rgba(0,0,0,0.18)]">
              <Gamepad2 size={22} />
            </span>
            <div className="leading-none">
              <p className="font-display text-xl font-extrabold tracking-normal drop-shadow-[2px_2px_0_#7c3418]">Luis Felipe</p>
            </div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
            <Link href='https://www.linkedin.com/in/luis-felipe-silv/'>
                <Button className="pixel-corners bg-mario-question px-6 text-mario-brickDark hover:bg-mario-red hover:text-white">Linkedin</Button>
            </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
