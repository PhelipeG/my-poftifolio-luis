
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
        <span className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/10">
          <FiMenu className="text-2xl text-accent" />
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col border-white/10 bg-primary text-white">
        <div className="mt-28 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="font-display text-4xl font-extrabold text-accent">
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
                  className={`${link.path === pathname ? "bg-accent text-primary" : "text-white/70 hover:text-white"} flex w-full max-w-[260px] items-center justify-center gap-4 rounded-full px-5 py-3 text-lg font-semibold capitalize transition-all`}
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
