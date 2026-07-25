import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "HTML/CSS", category: "languages" },
  { name: "C++", category: "languages" },

  // Frameworks
  { name: "React", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Node.js", category: "tools" },
  { name: "Supabase", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "JUnit", category: "tools" },
  { name: "Maven", category: "tools" },
  { name: "JetBrains", category: "tools" },
];

const categories = ["all", "languages", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize hover:scale-105",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:shadow-[0_0_10px_rgba(139,92,246,0.35)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-3 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-sm sm:text-lg text-left"> {skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
