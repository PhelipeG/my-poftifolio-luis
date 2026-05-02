import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="pixel-corners flex items-center gap-3 border-4 border-mario-brickDark bg-mario-brick px-8 py-6 font-mono text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-mario-question hover:text-mario-brickDark"
    >
      <a href="/pdf/LuisCV.pdf" download="Luis_Felipe_Guilhao_CV.pdf">
        <span>Baixar Currículo</span>
        <FiDownload className="text-xl" />
      </a>
    </Button>
  );
}
