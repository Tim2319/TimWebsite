export type Project = {
  id: string
  name: string
  description: string
  techStack: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "simple-twitter",
    name: "Simple Twitter Clone",
    description:
      "A Twitter-like social app with posts, comments, likes, and real-time chat. Backend built with Node.js, Express, and MySQL.",
    techStack: ["Node.js", "Express", "MySQL", "Socket.IO", "JWT"],
    github: "https://github.com/Tim2319/simple-twitter-backend",
  },
  {
    id: "timwebsite",
    name: "Personal Portfolio (This Site)",
    description:
      "My personal portfolio built with Next.js and TypeScript to showcase my projects and skills.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]