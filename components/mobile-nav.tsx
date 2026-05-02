
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAtlas, FaHome, FaInfo, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const linksMenu = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome/>
  },
  {
    name: 'Sobre Mim',
    path: '/resume',
    icon: <FaUser/>
    
  },
  {
    name: 'Projetos',
    path: '/work',
    icon: <FaAtlas/>
  },
  {
    name: 'Testes Técnicos',
    path: '/tests-technical',
    icon: <FaAtlas/>
  },
  {
    name: 'Contato',
    path: '/contact',
    icon: <FaInfo/>
  }
]

export function MobileNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <span className="grid size-11 place-items-center rounded-2xl border-4 border-mario-brickDark bg-mario-question">
          <FiMenu className="text-2xl text-mario-brickDark" />
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col border-mario-brickDark bg-mario-sky text-white">
        <div className="mt-28 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="font-display text-4xl font-extrabold text-mario-coin drop-shadow-[2px_2px_0_#7c3418]">
              Luis Felipe<span className="text-white">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {
            linksMenu.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${link.path === pathname ? "bg-mario-red text-white" : "bg-mario-brick/80 text-white hover:bg-mario-question hover:text-mario-brickDark"} flex w-full max-w-[260px] items-center justify-center gap-4 rounded-2xl border-4 border-mario-brickDark px-5 py-3 text-lg font-semibold capitalize transition-all`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}
