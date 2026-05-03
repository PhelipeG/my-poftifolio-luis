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
              ? "bg-mario-red text-white border-mario-red shadow-lg scale-105"
              : "bg-white text-[#111318] border-[#d7deea] hover:border-mario-red hover:text-mario-red hover:scale-105 dark:bg-[#1b0505] dark:text-white dark:border-white/15 dark:hover:border-mario-coin dark:hover:text-mario-coin"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
