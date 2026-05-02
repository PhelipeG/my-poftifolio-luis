import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicalTest } from "@/data/technical-tests-data";

interface TechnicalTestCardProps {
  test: TechnicalTest;
}

const TechnicalTestCard = ({ test }: TechnicalTestCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-mario-blue/15 text-mario-blue border-mario-blue/30';
      case 'Backend':
        return 'bg-mario-green/15 text-mario-green border-mario-green/30';
      case 'Mobile':
        return 'bg-mario-red/15 text-mario-coin border-mario-red/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="mario-panel pixel-corners group flex h-full min-h-[800px] w-full flex-col overflow-hidden transition-all duration-300 hover:border-mario-red">
      {/* Imagem */}
      <div className="relative h-72 lg:h-80 xl:h-72 overflow-hidden flex-shrink-0">
        <Image
          src={test.image}
          alt={test.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badge de categoria */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(test.category)}`}>
          {test.category}
        </div>
        
        {/* Status */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-mario-yellow/15 text-mario-yellow border border-mario-yellow/30 text-xs font-medium">
          {test.status}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="text-white group-hover:text-mario-coin transition-colors text-xl lg:text-2xl">
            {test.title}
          </CardTitle>
          <CardDescription className="text-white/70 text-base lg:text-lg leading-relaxed">
            {test.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
          <div className="space-y-4">
            {/* Informações da vaga */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm lg:text-base text-white/80">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-mario-coin flex-shrink-0" />
                <span className="font-medium">{test.position}</span>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="space-y-3">
              <h4 className="text-sm lg:text-base font-medium text-white">Tecnologias:</h4>
              <div className="flex flex-wrap gap-2">
                {test.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-xs lg:text-sm bg-white/10 text-white/90 rounded-md border border-mario-shell/20 hover:border-mario-red hover:bg-white/15 transition-all duration-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex gap-3">
              {test.repositoryUrl && (
                <Link
                  href={test.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-mario-red/20 text-white hover:text-mario-coin rounded-lg transition-all duration-300 text-sm lg:text-base font-medium flex-1 justify-center"
                >
                  <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                  {test.category === "Frontend" ? "Código Frontend" : "Código"}
                </Link>
              )}
              {test.liveUrl && (
                <Link
                  href={test.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-mario-red/20 hover:bg-mario-red text-white rounded-lg transition-all duration-300 text-sm lg:text-base font-medium flex-1 justify-center"
                >
                  <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
                  Demo
                </Link>
              )}
            </div>
            {test.backendRepositoryUrl && (
              <Link
                href={test.backendRepositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-mario-green/15 hover:bg-mario-green/25 text-mario-green rounded-lg transition-all duration-300 text-sm lg:text-base font-medium justify-center border border-mario-green/30"
              >
                <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                Código Backend
              </Link>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default TechnicalTestCard;
