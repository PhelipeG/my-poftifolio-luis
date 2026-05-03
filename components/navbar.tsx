"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resumo",
    path: "/resume",
  },
  {
    name:"Testes Tecnicos",
    path: "/tests-technical",
  },
  {
    name: "Projetos",
    path: "/work",
  },
  {
    name: "Contato",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-2 rounded-2xl border-4 border-mario-brickDark bg-[#f3f5f8] p-1 shadow-[inset_0_-4px_0_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-[#671010] dark:bg-[#220707]">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "bg-mario-red text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)]"
                : "text-[#1f2735] hover:bg-mario-question hover:text-mario-brickDark dark:text-[#f0f2f5] dark:hover:bg-[#8f1414] dark:hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
