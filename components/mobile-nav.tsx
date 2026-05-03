
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAtlas, FaHome, FaInfo, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ThemeToggle from "./theme-toggle";

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
      <SheetContent className="flex flex-col border-mario-brickDark bg-[#f3f5f8] text-[#111318] dark:border-[#671010] dark:bg-[#120303] dark:text-white">
        <div className="mt-4 flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-28 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="font-display text-4xl font-extrabold text-mario-red dark:text-mario-coin">
              Luis Felipe<span className="text-[#111318] dark:text-white">.</span>
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
                  className={`${link.path === pathname ? "bg-mario-red text-white" : "bg-white text-[#111318] hover:bg-mario-question hover:text-mario-brickDark dark:bg-[#2a0a0a] dark:text-white dark:hover:bg-[#8f1414]"} flex w-full max-w-[260px] items-center justify-center gap-4 rounded-2xl border-4 border-mario-brickDark px-5 py-3 text-lg font-semibold capitalize transition-all dark:border-[#671010]`}
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
