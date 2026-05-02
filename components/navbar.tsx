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
    <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "bg-accent text-primary shadow-[0_10px_24px_rgba(29,185,84,0.24)]"
                : "text-white/72 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
