/**
 * All site copy lives here — edit this file to update the website
 * without touching any component code.
 */

export const profile = {
  firstName: "Samitha",
  fullName: "Samitha Sheshan Dissanayake",
  role: "Cybersecurity Engineer",
  location: "Sri Lanka",
  tagline:
    "Senior System Engineer at Sanfer Technologies — securing enterprise and banking environments with CrowdStrike, Zscaler, Cymulate and Orca Security.",
  about: [
    "I'm a cybersecurity engineer with hands-on experience defending enterprise and banking environments against modern threats — across endpoint protection, network security and cloud security. I hold an MSc in Cyber Security (Merit) and a BSc (Hons) in Computer Networks.",
    "Day to day I work across the full consulting arc: pre-sales and post-sales engineering, incident response on the CrowdStrike Falcon platform, health checks and configuration reviews, and hands-on platform training for partners and customers.",
    "I started out administering security estates inside a bank — CrowdStrike, Trellix, Check Point, Forescout — and I still build software on the side: web tools, game projects and the occasional script that should have existed already.",
  ],
  email: "sheshansamitha@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Obese-Ninja" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samithadissanayake/" },
    { label: "Instagram", href: "https://www.instagram.com/smth.png/" },
  ],
} as const

export type Role = {
  title: string
  company: string
  note?: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Senior System Engineer",
    company: "Sanfer Technologies (Pvt) Ltd",
    note: "System Engineer, Apr 2024 – May 2026 · Colombo",
    period: "May 2026 — Present",
    points: [
      "Pre-sales and post-sales technical consultation for CrowdStrike, Zscaler, Cymulate and Orca Security offerings.",
      "Incident response services on the CrowdStrike Falcon platform.",
      "Knowledge-sharing and platform training for partners, customers and the team.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "South Asian Technologies (Pvt) Ltd",
    period: "Sep 2023 — Apr 2024",
    points: [
      "Technical support for CrowdStrike customers and partners.",
      "Health checkups and configuration reviews across customer estates.",
    ],
  },
  {
    title: "Graduate Intern — Networks & Communications",
    company: "Hatton National Bank PLC",
    period: "Feb 2023 — Sep 2023",
    points: [
      "Administered CrowdStrike Falcon NGAV & EDR across the bank's endpoint estate.",
      "Managed Trellix ePO & DLP, Check Point Firewall, Bluecoat Proxy, Forescout NAC and SCCM.",
    ],
  },
  {
    title: "Developer",
    company: "90S Play (startup)",
    period: "2020 — Present",
    points: [
      "Hyper-casual game development and ERP solutions with a local startup.",
    ],
  },
]

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
      "A web-based tool that measures and compares the latency of cloud-provider servers across geographic regions — grown out of my final-year research on how network latency affects cloud applications.",
    stack: ["TypeScript", "Next.js", "Go", "Networking"],
    href: "https://github.com/Obese-Ninja/CloudSpider",
    year: "2022",
  },
  {
    index: "02",
    name: "90S Play",
    description:
      "A local startup building hyper-casual games and ERP solutions — I've contributed as a developer since 2020.",
    stack: ["Games", "ERP", "Web"],
    href: "https://90splayweb.vercel.app",
    year: "2020 —",
  },
  {
    index: "03",
    name: "ms-sql-export",
    description:
      "PowerShell tooling for getting data out of Microsoft SQL Server cleanly and repeatably — built for real-world operations work.",
    stack: ["PowerShell", "SQL Server"],
    href: "https://github.com/Obese-Ninja/ms-sql-export",
    year: "2025",
  },
  {
    index: "04",
    name: "This website",
    description:
      "The site you're reading — a hand-built portfolio drawn in pen and paper, designed to load fast and stay out of the way.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://github.com/Obese-Ninja/personalweb",
    year: "2026",
  },
]

export const skillGroups = [
  {
    title: "Security platforms",
    items: [
      "CrowdStrike Falcon",
      "Zscaler",
      "Cymulate",
      "Orca Security",
      "Trellix ePO & DLP",
      "Check Point",
      "Forescout NAC",
    ],
  },
  {
    title: "Cloud & infrastructure",
    items: ["Microsoft Azure", "Linux", "SCCM", "Data center ops", "System administration"],
  },
  {
    title: "Certifications",
    items: [
      "CCSE · CrowdStrike Certified SIEM Engineer",
      "CCFA · CrowdStrike Falcon Administrator",
      "ZDTA · Zscaler Digital Transformation Admin",
      "ZTA · Zscaler Technical Associate",
      "AZ-900 · Azure Fundamentals",
    ],
  },
] as const

export const education = [
  {
    degree: "MSc in Cyber Security — Merit",
    school: "APIIT · Staffordshire University, UK",
  },
  {
    degree: "BSc (Hons) in Computer Networks — 2:1",
    school: "NSBM Green University · University of Plymouth, UK",
  },
] as const
