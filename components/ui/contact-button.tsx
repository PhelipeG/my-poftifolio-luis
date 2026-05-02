import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Button
      asChild
      size="lg"
      className="pixel-corners bg-mario-red px-8 py-6 font-bold text-white shadow-[inset_0_-5px_0_rgba(0,0,0,0.28),0_16px_42px_rgba(229,37,33,0.28)] transition-all duration-300 hover:bg-mario-question hover:text-mario-brickDark"
    >
      <Link href="/contact">Entre em contato</Link>
    </Button>
  );
}
