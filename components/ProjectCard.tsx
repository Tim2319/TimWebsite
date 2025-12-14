import type { Project } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-slate-800 rounded-lg p-4 space-y-2 bg-slate-900/40">
      <h3 className="text-base font-semibold text-slate-50">
        {project.name}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 text-xs">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-xs pt-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}