"use client";

import { useState, useMemo } from "react";
import { technicalTestsData } from "@/data/technical-tests-data";
import TechnicalTestCard from "./technical-test-card";
import CategoryFilter from "./category-filter";

const TechnicalTestsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTests = useMemo(() => {
    if (selectedCategory === "all") {
      return technicalTestsData;
    }
    return technicalTestsData.filter(test => test.category === selectedCategory);
  }, [selectedCategory]);

  const getStatsText = () => {
    const totalTests = technicalTestsData.length;
    const filteredCount = filteredTests.length;
    
    if (selectedCategory === "all") {
      return `${totalTests} teste${totalTests !== 1 ? 's' : ''} técnico${totalTests !== 1 ? 's' : ''} concluído${totalTests !== 1 ? 's' : ''}`;
    }
    
    return `${filteredCount} teste${filteredCount !== 1 ? 's' : ''} de ${selectedCategory} concluído${filteredCount !== 1 ? 's' : ''}`;
  };

  return (
    <div className="max-w-[1800px] mx-auto px-4 lg:px-6 xl:px-8">
      {/* Informação sobre Backend */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-mario-red/10 border border-mario-red/20 rounded-lg">
          <div className="w-2 h-2 bg-mario-red rounded-full animate-pulse"></div>
          <p className="text-mario-coin text-sm font-medium">
            O código backend dos projetos fullstack está disponível no card do projeto
          </p>
        </div>
      </div>

      {/* Filtros */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Estatísticas */}
      <div className="text-center mb-8">
        <p className="text-white/70 text-sm">
          {getStatsText()}
        </p>
      </div>

      {/* Grade de Cards */}
      {filteredTests.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="animate-fade-in w-full"
              style={{
                animationDelay: `${(test.id % 6) * 100}ms`
              }}
            >
              <TechnicalTestCard test={test} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-white/50 text-lg mb-2">
            Nenhum teste técnico encontrado
          </div>
          <p className="text-white/30 text-sm">
            Tente selecionar uma categoria diferente
          </p>
        </div>
      )}
    </div>
  );
};

export default TechnicalTestsGrid;
