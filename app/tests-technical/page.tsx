import { Metadata } from "next";
import TechnicalTestsGrid from "@/components/technical-tests-grid";

export const metadata: Metadata = {
  title: "Testes Técnicos | Portfólio",
  description: "Confira os testes técnicos que desenvolvi para diferentes empresas e posições, incluindo projetos frontend, backend e mobile.",
};

const TechnicalTestsPage = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="h1 mb-4">
            Testes <span className="text-green-400">Técnicos</span>
          </h1>
          <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed">
            Uma coleção dos testes técnicos que desenvolvi para diferentes empresas e posições. 
            Cada projeto demonstra diferentes habilidades e tecnologias, desde desenvolvimento 
            frontend e backend até aplicações mobile.
          </p>
        </div>

        {/* Grid de Testes */}
        <TechnicalTestsGrid />
      </div>
    </section>
  );
};

export default TechnicalTestsPage;
