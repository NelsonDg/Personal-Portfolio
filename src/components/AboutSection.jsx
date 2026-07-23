import { Bot, Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student at Simon Fraser University who
              builds full-stack software for real users. I also manage
              operations for a Vancouver food truck, leading a team of 8+
              people, which is where most of my projects start: the
              inventory platform we run on today came out of watching the
              team lose hours a week to spreadsheets, and it cut weekly
              bookkeeping by 70%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Nelson-Dang-Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Backend</h4>
                  <p className="text-muted-foreground">
                    Integrating LLMs into real products — including a
                    Gemini-powered chatbot with emotion classification and
                    a deterministic safety guardrail.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Applying algorithms, design patterns, and automated
                    testing to build reliable software.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Operations & Team Leadership</h4>
                  <p className="text-muted-foreground">
                    Managing an 8+ person team and 6–10 events monthly as
                    a manager at Tochi Desserts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
