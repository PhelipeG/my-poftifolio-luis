import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full bg-accent px-8 py-6 font-bold text-black shadow-[0_14px_38px_rgba(29,185,84,0.24)] transition-all duration-300 hover:bg-accent-hover hover:text-black"
    >
      <Link href="/contact">Entre em contato</Link>
    </Button>
  );
}
