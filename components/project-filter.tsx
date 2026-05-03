"use client";

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const projectCategories = [
  { value: "Todos", label: "Todos" },
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" }
];

const ProjectFilter = ({ selectedCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {projectCategories.map((option) => (
        <button
          key={option.value}
          onClick={() => onCategoryChange(option.value)}
          className={`rounded-full border px-6 py-3 text-sm font-bold transition-all duration-300 ${
            selectedCategory === option.value
              ? "border-mario-red bg-mario-red text-white"
              : "border-[#d7deea] bg-white text-[#111318] hover:border-mario-red hover:text-mario-red dark:border-white/15 dark:bg-[#1b0505] dark:text-white/75 dark:hover:border-mario-coin dark:hover:text-mario-coin"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
