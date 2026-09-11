import { GALLERY_USAGE, getCategoryPreview, type GalleryItem } from "@/data/gallery";

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
  sections?: { title: string; body?: string[]; bullets?: string[] }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "acce",
    name: "ACCE",
    category: "Community & Mentorship",
    shortDescription:
      "WWU VSA's family and mentorship program, pairing Em with Anh, Chi, and Chanh for the whole year.",
    fullDescription: [
      "ACCE is WWU VSA's family and mentorship program, designed to help members form meaningful relationships, find support, and become more involved in the VSA community. Participants are matched into families that encourage mentorship, friendship, cultural connection, and a welcoming sense of belonging.",
      "Littles, also known as \u201cEm,\u201d are paired with experienced family leaders who support them throughout the year. Bigs \u2014 known as Anh, Chi, or Chanh \u2014 serve as mentors, resources, and community builders for their Em. Through monthly ACCE gatherings, weekly communication, VSA events, and time spent together outside of meetings, each family has opportunities to build genuine and lasting relationships.",
      "ACCE is a meaningful time commitment. Every participant is expected to be active, inclusive, communicative, and mindful of the experiences of their own family and other ACCE families. The program works best when members answer matching questions honestly, participate consistently, and make an intentional effort to connect with one another.",
    ],
    heroImage: GALLERY_USAGE.acceProgram,
    accentStyle: "image",
    howItWorks: [
      {
        title: "Matching",
        description:
          "Em and family leaders complete a matching form so families are built around shared interests, personalities, and experiences.",
      },
      {
        title: "Family placement",
        description:
          "Each Em is matched with one or more Anh, Chi, or Chanh, forming a family that stays together through the year.",
      },
      {
        title: "Monthly gatherings",
        description:
          "Every family takes part in monthly ACCE activities, plus regular check-ins between family leaders and the ACCE team.",
      },
      {
        title: "Everyday connection",
        description:
          "Families keep in touch weekly and spend time together at VSA events and outside of meetings.",
      },
    ],
    audience: "Any WWU student who wants a smaller community inside VSA",
    experienceLevel: "No experience needed; newcomers are the point",
    typicalSchedule:
      "Matching happens early in Fall quarter; families gather monthly and stay in touch weekly",
    participationDetails:
      "A meaningful year-long commitment with active participation, honest communication, and inclusivity toward every ACCE family",
    sections: [
      {
        title: "Becoming an Em",
        body: [
          "Em are members who want to become more connected with WWU VSA through friendship, mentorship, and family activities. Each Em is matched with one or more Anh, Chi, or Chanh based on their interests, personality, experiences, and responses in the matching form.",
          "Em are expected to:",
        ],
        bullets: [
          "Commit time and effort to the ACCE program",
          "Build relationships with their Anh, Chi, or Chanh outside of regular VSA and ACCE events",
          "Participate in monthly ACCE gatherings",
          "Be active, inclusive, and respectful toward their own family and other ACCE families",
          "Communicate honestly so the ACCE team can create thoughtful matches",
          "Have fun and remain open to meeting new people",
        ],
      },
      {
        title: "Becoming an Anh, Chi, or Chanh",
        body: [
          "Anh, Chi, and Chanh serve as ACCE family leaders and mentors. They help their Em feel welcomed, supported, and connected to the WWU VSA community. Family leaders are expected to build genuine relationships, serve as helpful resources, address concerns within their families, and create an inclusive environment where every member feels comfortable participating.",
          "Applicants should generally:",
        ],
        bullets: [
          "Be in their second year at Western Washington University or beyond",
          "Have prior experience or familiarity with VSA spaces",
          "Be prepared to make a meaningful time commitment",
          "Build relationships with their Em outside of VSA meetings and ACCE events",
          "Connect with their Em regularly, ideally each week",
          "Help plan and participate in monthly ACCE activities",
          "Complete monthly check-ins with the ACCE leadership team and other family leaders",
          "Be active, inclusive, reliable, and mindful of all ACCE families",
          "Help create a safe, supportive, and welcoming family environment",
        ],
      },
      {
        title: "Time commitment and expectations",
        body: [
          "ACCE runs across the academic year, and families get the most out of it when everyone shows up consistently. Plan on a monthly family activity, regular weekly contact with your family, and attending VSA events together when you can.",
          "Beyond scheduling, the expectations are simple: communicate openly, follow through on plans, include everyone in your family, and be considerate of other ACCE families sharing the same space.",
        ],
      },
      {
        title: "Program activities",
        bullets: [
          "Monthly ACCE family gatherings planned by family leaders",
          "Family reveals and icebreakers at the start of the year",
          "Attending general meetings, socials, and cultural events together",
          "Casual hangouts outside of VSA, including study sessions, food runs, and game nights",
          "Monthly check-ins between family leaders and the ACCE team",
        ],
      },
      {
        title: "Applications and interest",
        body: [
          "Em and family leader applications open at the start of the academic year and are announced at general meetings, on our Instagram, and through the WWU VSA calendar. If applications are not currently open, reach out and we'll let you know when the next round begins.",
        ],
      },
    ],
    featuredMediaIds: getCategoryPreview("acce", { limit: 8 }).map((item) => item.id),
  },
  {
    slug: "viet-101",
    name: "Viet 101",
    category: "Culture & Language",
    shortDescription:
      "A casual, student-led workshop series on Vietnamese language, history, and modern identity.",
    fullDescription: [
      "Viet 101 is a recurring workshop series led by VSA members. Each session focuses on one accessible slice of Vietnamese culture: a handful of phrases, a region's food history, or a conversation about diaspora identity.",
      "We offer it because cultural fluency is uneven in our community: some members grew up speaking Vietnamese at home, others are learning their first words at university. Viet 101 is deliberately built so both feel welcome in the same room.",
      "Students walk away with practical vocabulary, pronunciation practice, and historical context that makes VSA's larger cultural events land more deeply.",
    ],
    accentStyle: "neutral",
    howItWorks: [
      {
        title: "Student-led workshops",
        description: "Sessions are prepared and run by members, not lectured from a syllabus.",
      },
      {
        title: "Language & pronunciation",
        description: "Short, practical vocabulary sets with tone and pronunciation practice.",
      },
      {
        title: "History & context",
        description:
          "Regional history and cultural background behind the traditions VSA celebrates.",
      },
      {
        title: "Open discussion",
        description:
          "Casual conversation about modern Vietnamese and Vietnamese-American identity.",
      },
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
      "Performance is one of the clearest ways our community passes culture forward. The movements, music, and costuming carry meaning that a slideshow never could. Teaching it as a group also makes rehearsal a social space, not an audition.",
      "Dancers gain choreography they can perform on a real stage, a rehearsal community that meets consistently, and a hands-on connection to Vietnamese performing arts.",
    ],
    heroImage: GALLERY_USAGE.fanDance,
    accentStyle: "blue",
    howItWorks: [
      {
        title: "Group choreography",
        description: "Members learn the full routine together across weekly rehearsals.",
      },
      {
        title: "Built for Heritage Night",
        description: "Practices are paced toward the troupe's featured performance in late spring.",
      },
      {
        title: "Beginners welcome",
        description: "No prior dance experience is required, and most dancers start with none.",
      },
      {
        title: "Culture through movement",
        description: "Choreography is taught alongside the traditions and music behind it.",
      },
    ],
    audience: "Members who want to perform, at any experience level",
    experienceLevel: "No prior dance experience required",
    typicalSchedule: "Rehearsals run through Winter and Spring quarter ahead of Heritage Night",
    // Real fan dance photos only: Heritage Night stage sets and the Tet performance.
    featuredMediaIds: [
      "heritage-night-2025-img-2063-53686264544-l",
      "heritage-night-2025-img-2064-53685899171-l",
      "heritage-night-2025-img-2065-53685031322-l",
      "heritage-night-2025-img-2074-53686357415-l",
      "heritage-night-2025-img-2089-53685031202-l",
      "heritage-night-2025-img-2090-53686123753-l",
      "heritage-night-2025-img-2110-53686264334-l",
      "heritage-night-2025-img-2124-53686357210-l",
      "tet-2025-dsc09958-54295671111-l",
      "tet-2025-dsc09959-54294790627-l",
      "tet-2025-dsc09987-54295671081-l",
      "tet-2025-dsc09988-54295907924-l",
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function getProgramMedia(program: Program): GalleryItem[] {
  if (!program.featuredMediaIds?.length) return [];
  const media = [
    ...getCategoryPreview("acce", { limit: 200 }),
    ...getCategoryPreview("heritage-night", { limit: 700 }),
    ...getCategoryPreview("tet", { limit: 50 }),
  ];
  return program.featuredMediaIds
    .map((id) => media.find((item) => item.id === id))
    .filter((item): item is GalleryItem => Boolean(item));
}
