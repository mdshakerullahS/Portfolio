import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section id="projects" className="pt-24">
      <div className="container mx-auto px-6 space-y-12">
        <h2 className="text-2xl md:text-5xl text-center font-black italic">
          FEATURED <span className="text-blue-400">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
