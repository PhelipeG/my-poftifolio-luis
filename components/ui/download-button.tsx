"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  function handleDownloadCv() {
    const link = document.createElement("a");
    link.href = "/pdf/LuisCV.pdf";
    link.download = "Luis_Felipe_Guilhao_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleDownloadCv}
      className="bg-white/5 backdrop-blur-sm border border-green-400/30 hover:bg-green-400/20 hover:border-green-400/50 rounded-xl px-8 py-6 uppercase flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      <span>Baixar Currículo</span>
      <FiDownload className="text-xl" />
    </Button>
  );
}