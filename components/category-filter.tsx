"use client";

import { categoryOptions } from "@/data/technical-tests-data";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categoryOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onCategoryChange(option.value)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
            selectedCategory === option.value
              ? "bg-green-500 text-primary border-green-500 shadow-lg scale-105"
              : "bg-transparent text-white border-white/20 hover:border-green-500 hover:text-green-500 hover:scale-105"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
