import { MEDIA, type MediaItem } from "@/lib/media";

export type Program = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  heroImage?: string;
  accentStyle?: "image" | "neutral" | "blue";
  howItWorks?: { title: string; description: string }[];
  audience?: string;
  experienceLevel?: string;
  typicalSchedule?: string;
  participationDetails?: string;
  videoUrl?: string;
  featuredMediaIds?: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "acce",
    name: "ACCE",
    category: "Community & Mentorship",
    shortDescription:
      "Our family-style mentorship program pairing new students with upperclassmen for the whole year.",
    fullDescription: [
      "ACCE — A Core Connection Effort — is WWU VSA's mentorship and family system. Members are placed into small, mixed-year \"families\" that stay together through the academic year, giving every new student a handful of familiar faces from their very first meeting.",
      "We run ACCE because arriving at a large campus can be isolating, especially for students navigating Vietnamese-American identity away from home. A family gives newer members someone to ask about classes, housing, internships, or simply where to find decent phở in Bellingham.",
      "Participants leave with mentors, friendships that outlast a single quarter, and a low-pressure entry point into the rest of VSA's programming.",
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOKt9p1ajL1X_TpC_ppJkAD4lgET5s0Vt88sCQYvqNtkI1j3LioOoBYXnyUk9dKj8qj2Twmwvptb5e5uaMz7w3w7GdfgFCux2_UirR-icKRq3eKtyOgfX8Cn3wrSs58dPoZBbGXQLHv9KFjmxdpmRHHzDq-UyQ1mBXoKuCRWSC9FkCslYy7DKXSroA73DGBk78hYtBF6-enP6G-42KQ9TLUCQcieho4n1lq2j6AklFkhusIQyv2CbGePiMldeUFcrdLUqmQOzcwKKI",
    accentStyle: "image",
    howItWorks: [
      { title: "Family placement", description: "Members are grouped into family-style teams that mix first-years with returning students." },
      { title: "Upperclassmen mentors", description: "Experienced members guide their family through campus life, coursework, and VSA traditions." },
      { title: "Family activities", description: "Families attend socials, competitions, and VSA events together throughout the year." },
      { title: "Long-term connection", description: "Families carry over between quarters, so relationships build instead of resetting." },
    ],
    audience: "Any WWU student who wants a smaller community inside VSA",
    experienceLevel: "No experience needed — newcomers are the point",
    typicalSchedule: "Placement happens early in Fall quarter; families meet on their own schedule",
    featuredMediaIds: ["general-meetings-2024-0", "general-meetings-2024-1", "community-events-2024-0"],
  },
  {
    slug: "viet-101",
    name: "Viet 101",
    category: "Culture & Language",
    shortDescription:
      "A casual, student-led workshop series on Vietnamese language, history, and modern identity.",
    fullDescription: [
      "Viet 101 is a recurring workshop series led by VSA members. Each session focuses on one accessible slice of Vietnamese culture — a handful of phrases, a region's food history, or a conversation about diaspora identity.",
      "We offer it because cultural fluency is uneven in our community: some members grew up speaking Vietnamese at home, others are learning their first words at university. Viet 101 is deliberately built so both feel welcome in the same room.",
      "Students walk away with practical vocabulary, pronunciation practice, and historical context that makes VSA's larger cultural events land more deeply.",
    ],
    accentStyle: "neutral",
    howItWorks: [
      { title: "Student-led workshops", description: "Sessions are prepared and run by members, not lectured from a syllabus." },
      { title: "Language & pronunciation", description: "Short, practical vocabulary sets with tone and pronunciation practice." },
      { title: "History & context", description: "Regional history and cultural background behind the traditions VSA celebrates." },
      { title: "Open discussion", description: "Casual conversation about modern Vietnamese and Vietnamese-American identity." },
    ],
    audience: "Heritage speakers, beginners, and anyone curious about Vietnamese culture",
    experienceLevel: "All levels, including complete beginners",
    typicalSchedule: "Held as part of the bi-weekly meeting series during the academic year",
  },
  {
    slug: "wavy-fan-dance",
    name: "Wavy Fan Dance",
    category: "Art & Performance",
    shortDescription:
      "Our traditional fan dance troupe, rehearsing together toward the Heritage Night stage.",
    fullDescription: [
      "Wavy Fan Dance is WWU VSA's performance troupe. Members learn traditional fan choreography together over the course of the year, building toward the group's featured set at Heritage Night.",
      "Performance is one of the clearest ways our community passes culture forward — the movements, music, and costuming carry meaning that a slideshow never could. Teaching it as a group also makes rehearsal a social space, not an audition.",
      "Dancers gain choreography they can perform on a real stage, a rehearsal community that meets consistently, and a hands-on connection to Vietnamese performing arts.",
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8taNmeh1Rp_lSUTYkYh4ZFy80TT21x8KIe9ze--W1miMgEl_5iyEOEnUTKTC-HkxN39Hq7-w04vMjjfSkjgemH_2sfHCHKmOtYRfpJ9Rh2cl542iUxDgNqhX9Z0UO15UBk-kj3sPWXHdn6l-CZmxbecyquF7YyR5nDuM6w-Rak_KqYKBO4yseSQTbQLjaE2N2bTv1ONZXW4o9LQR3ZSiZqacFJM-sVzMq5-45pRKx_0DpOms6qsKYyciLGtRAwuSjZMLfyHjv_RsN",
    accentStyle: "blue",
    howItWorks: [
      { title: "Group choreography", description: "Members learn the full routine together across weekly rehearsals." },
      { title: "Built for Heritage Night", description: "Practices are paced toward the troupe's featured performance in late spring." },
      { title: "Beginners welcome", description: "No prior dance experience is required — most dancers start with none." },
      { title: "Culture through movement", description: "Choreography is taught alongside the traditions and music behind it." },
    ],
    audience: "Members who want to perform, at any experience level",
    experienceLevel: "No prior dance experience required",
    typicalSchedule: "Rehearsals run through Winter and Spring quarter ahead of Heritage Night",
    featuredMediaIds: [
      "heritage-night-2024-0",
      "heritage-night-2024-1",
      "heritage-night-2024-2",
      "heritage-night-2024-3",
      "heritage-night-2024-4",
      "heritage-night-2024-5",
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function getProgramMedia(program: Program): MediaItem[] {
  if (!program.featuredMediaIds?.length) return [];
  return program.featuredMediaIds
    .map((id) => MEDIA.find((m) => m.id === id))
    .filter((m): m is MediaItem => Boolean(m));
}
