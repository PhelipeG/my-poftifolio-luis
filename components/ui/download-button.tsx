import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-6 font-mono text-xs uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
    >
      <a href="/pdf/LuisCV.pdf" download="Luis_Felipe_Guilhao_CV.pdf">
        <span>Baixar Currículo</span>
        <FiDownload className="text-xl" />
      </a>
    </Button>
  );
}
