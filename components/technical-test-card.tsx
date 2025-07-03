import Image from "next/image";
import Link from "next/link";
import { Calendar, ExternalLink, Github, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicalTest } from "@/data/technical-tests-data";

interface TechnicalTestCardProps {
  test: TechnicalTest;
}

const TechnicalTestCard = ({ test }: TechnicalTestCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Backend':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Mobile':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group overflow-hidden w-full h-full min-h-[800px] flex flex-col">
      {/* Imagem */}
      <div className="relative h-72 lg:h-80 xl:h-72 overflow-hidden flex-shrink-0">
        <Image
          src={test.image}
          alt={test.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badge de categoria */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(test.category)}`}>
          {test.category}
        </div>
        
        {/* Status */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-medium">
          {test.status}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="text-white group-hover:text-accent transition-colors text-xl lg:text-2xl">
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
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-accent flex-shrink-0" />
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
                    className="px-3 py-2 text-xs lg:text-sm bg-white/10 text-white/90 rounded-md border border-white/20 hover:border-accent/50 hover:bg-white/15 transition-all duration-200 font-medium"
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
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-accent/20 text-white hover:text-accent rounded-lg transition-all duration-300 text-sm lg:text-base font-medium flex-1 justify-center"
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
                  className="flex items-center gap-2 px-4 py-3 bg-accent/20 hover:bg-accent text-white hover:text-primary rounded-lg transition-all duration-300 text-sm lg:text-base font-medium flex-1 justify-center"
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
                className="flex items-center gap-2 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 rounded-lg transition-all duration-300 text-sm lg:text-base font-medium justify-center border border-green-500/30"
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
