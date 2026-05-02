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
              ? "border-accent bg-accent text-black"
              : "border-white/15 bg-transparent text-white/70 hover:border-accent hover:text-accent"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
