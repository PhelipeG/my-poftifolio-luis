"use client";
import { Button } from "@/components/ui/button";

export default function ContactButton() {
  return (
    <Button
      size="lg"
      className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-xl px-8 py-6 shadow-[0_8px_30px_rgba(74,222,128,0.3)] transition-all duration-300"
      onClick={() => window.location.href = '/contact'}
    >
      Entre em contato
    </Button>
  );
}