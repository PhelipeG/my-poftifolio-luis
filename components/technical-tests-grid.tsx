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
    <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-10">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="animate-fade-in"
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
