/**
 * All site copy lives here — edit this file to update the website
 * without touching any component code.
 */

export const profile = {
  firstName: "Samitha",
  fullName: "Samitha Sheshan Dissanayake",
  role: "Software Engineer",
  location: "Sri Lanka",
  tagline:
    "I build tools that watch networks, move data and make the web feel effortless.",
  about: [
    "I'm a software engineer who likes working close to the wires — the kind of problems where networks, data and infrastructure meet a clean, usable interface. My projects tend to start with a question like “why is there no good tool for this?” and end as one.",
    "Day to day I move between TypeScript on the front, Go and C++ where performance matters, and PowerShell or SQL when the job is wrangling data out of stubborn systems. I care about software that is fast, honest about what it's doing, and pleasant to use.",
    "Away from the keyboard I'm usually behind a camera — the same eye for composition ends up in the interfaces I build.",
  ],
  email: "sheshansamitha@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Obese-Ninja" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samithadissanayake/" },
    { label: "Instagram", href: "https://www.instagram.com/smth.png/" },
  ],
} as const

export type Project = {
  index: string
  name: string
  description: string
  stack: string[]
  href: string
  year: string
}

export const projects: Project[] = [
  {
    index: "01",
    name: "CloudSpider",
    description:
      "An open-source network monitoring tool with both a web dashboard and a CLI — watch your infrastructure from the browser or straight from the terminal.",
    stack: ["TypeScript", "Next.js", "Go", "Tailwind CSS"],
    href: "https://github.com/Obese-Ninja/CloudSpider",
    year: "2022",
  },
  {
    index: "02",
    name: "ms-sql-export",
    description:
      "PowerShell tooling for getting data out of Microsoft SQL Server cleanly and repeatably — built for real-world database operations work.",
    stack: ["PowerShell", "SQL Server"],
    href: "https://github.com/Obese-Ninja/ms-sql-export",
    year: "2025",
  },
  {
    index: "03",
    name: "IP_Project",
    description:
      "A C++ networking project exploring the plumbing of the internet protocol layer. Open source under GPL-3.0.",
    stack: ["C++", "Networking"],
    href: "https://github.com/Obese-Ninja/IP_Project",
    year: "2022",
  },
  {
    index: "04",
    name: "This website",
    description:
      "The site you're reading — a hand-built portfolio in an earth-tone palette, designed to load fast and stay out of the way.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://github.com/Obese-Ninja",
    year: "2026",
  },
]

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "C++", "PowerShell", "SQL"],
  },
  {
    title: "Web",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Systems & data",
    items: ["Networking", "SQL Server", "Linux", "Git", "Vercel"],
  },
] as const
