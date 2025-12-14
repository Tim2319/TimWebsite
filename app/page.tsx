import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/ProjectCard"

const backendSkills = [
  "Node.js",
  "Express",
  "Next.js API Routes",
  "RESTful API",
  "MySQL",
  "JWT Auth",
  "Socket.IO",
]

const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS"]

const otherSkills = ["Git", "Postman", "API Integration", "Basic Linux"]

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero 區塊 */}
      <section className="space-y-6">
        <div>
          <p className="text-sm text-sky-400 uppercase tracking-[0.25em]">
            Backend / Full-stack Developer
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Tim Chen
          </h1>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
            I&apos;m a Node.js &amp; Next.js developer who enjoys building APIs,
            backend systems, and full-stack web apps. I want to prove my value
            by delivering real projects for clients and companies.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-sky-500 text-sm font-medium hover:bg-sky-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md border border-slate-600 text-sm hover:border-sky-400 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects 區塊 */}
      <section id="projects" className="space-y-4">
        <header>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-slate-300">
            Some of the projects I&apos;ve built to practice backend and
            full-stack development.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills 區塊 */}
      <section id="skills" className="space-y-4">
        <header>
          <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            These are the main technologies I use to build APIs, backend
            services, and full-stack apps.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <SkillGroup title="Backend" items={backendSkills} />
          <SkillGroup title="Frontend" items={frontendSkills} />
          <SkillGroup title="Others" items={otherSkills} />
        </div>
      </section>

      {/* Contact 區塊 */}
      <section id="contact" className="space-y-4">
        <header>
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
            I&apos;m a Node.js &amp; Next.js developer who enjoys building APIs,
            backend systems, and full-stack web apps. I want to prove my value
            by delivering real projects for clients and companies.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Based in Taiwan, open to remote work.
          </p>
        </header>

        <ul className="space-y-2 text-sm text-slate-200">
          <li>
            <span className="text-slate-400">Email: </span>
            <a
              href="destiny65740@gmail.com"
              className="text-sky-400 hover:text-sky-300"
            >
              destiny65740@gmail.com
            </a>
          </li>
          <li>
            <span className="text-slate-400">GitHub: </span>
            <a
              href="https://github.com/Tim2319"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300"
            >
              https://github.com/Tim2319
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

type SkillGroupProps = {
  title: string
  items: string[]
}

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <ul className="space-y-1 text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}