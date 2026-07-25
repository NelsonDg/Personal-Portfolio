import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tochi Storage App",
    description:
      "Full-stack inventory and finance management platform for a food truck business, with a real-time COGS/margin dashboard and role-based access control that cut bookkeeping time by 70%.",
    image: "/projects/project1.png",
    video: "/projects/TochiStorageVideo.mp4",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    demoUrl: "https://tochi-storage.vercel.app/dashboard",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Escape Prison Break Game",
    description:
      "A 4-level 2D grid-based prison escape game in Java with a Swing GUI, featuring BFS-driven enemy AI, a Factory Method level system, and 22 JUnit suites covering ~80% of the engine.",
    image: "/projects/project2.png",
    video: "/projects/PrisonEscapeGame.mp4",
    tags: ["Java", "Swing", "JUnit", "Maven"],
    demoUrl: null,
    githubUrl: "https://github.com/NelsonDg/Prison-Escape-Game",
  },
  {
    id: 3,
    title: "Mental Health Chatbot",
    description:
      "Full-stack mental health support chatbot classifying messages into 20+ emotional states, with a Gemini-powered LLM layer and a deterministic crisis-detection safety net.",
    image: "/projects/project3.png",
    video: "/projects/MentalHealthChatbot.mp4",
    tags: ["Python", "Flask", "Gemini API", "SQLite"],
    demoUrl: null,
    githubUrl: "https://github.com/NelsonDg/Mental-Health-Chatbot",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Three things I built end-to-end, one of them runs a business everyday.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-80 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NelsonDg"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
