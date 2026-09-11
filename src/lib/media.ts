import { GALLERY_USAGE } from "@/data/gallery";
import type { EventSlug } from "@/lib/event-types";

export type { EventSlug } from "@/lib/event-types";

export type EventMeta = {
  slug: EventSlug;
  name: string;
  season: string;
  tagline: string;
  description: string;
  happens: string;
  meaning: string;
  heroImage: string;
  accent: "red" | "gold" | "blue";
  location?: string;
  audience?: string;
  category?: string;
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  expectations?: { icon: string; title: string; description: string }[];
  /** Evergreen, year-independent long-form sections. */
  sections?: { title: string; body?: string[]; bullets?: string[] }[];
  /**
   * Yearly logistics. Board members: edit ONLY this block each year.
   * Leave `details` empty to show the "announced closer to the event" message.
   */
  currentYear?: {
    note?: string;
    details?: { label: string; value: string }[];
    link?: { label: string; url: string };
  };
};

/** Shared, site-wide language about how WWU VSA handles rides. */
export const TRANSPORTATION_POLICY =
  "WWU VSA works to coordinate transportation and rides so that members who want to participate have a way to attend whenever possible. Transportation details and ride coordination are announced separately for each event.";

export const EVENT_META: Record<EventSlug, EventMeta> = {
  "heritage-night": {
    slug: "heritage-night",
    name: "Heritage Night",
    season: "Late Spring",
    tagline: "Roots & Wings",
    description:
      "WWU VSA's cultural showcase at the Viking Union featuring performances, storytelling, community, and celebration of Vietnamese culture.",
    happens:
      "Hosted at the Viking Union (VU) at Western Washington University: traditional fan and lion dances, live music, student performances and storytelling, a keynote speaker, and Vietnamese food.",
    meaning:
      "Heritage Night is where the year's work becomes a shared story. Families travel in, alumni come home, and new members see themselves on stage for the first time.",
    location: "Viking Union (VU) at Western Washington University",
    audience: "Open to students, families, and the public",
    category: "Cultural Showcase",
    expectations: [
      {
        icon: "theater_comedy",
        title: "Student-Led Performances",
        description:
          "Fan dance, lion dance, and modern sets choreographed by members over two quarters.",
      },
      {
        icon: "restaurant",
        title: "Food & Shared Tables",
        description: "Vietnamese food shared together before and around the show.",
      },
      {
        icon: "history_edu",
        title: "Storytelling",
        description: "Student-written storytelling that ties the night's performances together.",
      },
      {
        icon: "campaign",
        title: "Keynote Speaker",
        description:
          "A featured speaker shares reflections on Vietnamese culture, identity, community, and leadership.",
      },
    ],
    sections: [
      {
        title: "About Heritage Night",
        body: [
          "Heritage Night is one of WWU VSA's largest cultural celebrations, bringing students, families, friends, and community members together for an evening centered around Vietnamese culture, storytelling, performances, food, and community.",
          "Hosted at the Viking Union, Heritage Night gives WWU VSA members an opportunity to share Vietnamese culture through creative performances and experiences while celebrating the work and community built throughout the year.",
        ],
      },
      {
        title: "Tickets & Admission",
        body: [
          "Heritage Night ticket and admission information is announced each year. Check the current-year event details for pricing and registration information.",
        ],
      },
    ],
    currentYear: {
      note: "Board members: update this block each year with the exact date, time, Viking Union room, ticket price and link, performance and check-in information, and accessibility notes.",
      details: [
        { label: "Venue", value: "Viking Union (VU), Western Washington University" },
        { label: "Room", value: "Room details coming soon" },
        { label: "Date & Time", value: "To be announced" },
        { label: "Tickets", value: "Ticket and admission information announced each year" },
        { label: "Check-In", value: "To be announced" },
        {
          label: "Accessibility",
          value: "Accessibility details announced with this year's location",
        },
      ],
    },

    heroImage: GALLERY_USAGE.heritageNightHero,
    accent: "red",
  },
  tet: {
    slug: "tet",
    name: "Tết",
    season: "Around Lunar New Year",
    tagline: "Lunar New Year",
    description:
      "Tết celebrates Vietnamese Lunar New Year through culture, community, tradition, performances, food, and the excitement of welcoming a new year together.",
    happens:
      "Tết, or Vietnamese Lunar New Year, is one of the most important celebrations in Vietnamese culture. It marks the beginning of the lunar new year and is a time centered around family, community, tradition, good fortune, reflection, and welcoming new beginnings.",
    meaning:
      "WWU VSA celebrates Tết as an opportunity for members to connect with Vietnamese culture, share traditions, and celebrate with both the campus community and the larger Vietnamese community.",
    location: "On campus, and with the Vietnamese community in Seattle",
    audience: "Members and guests welcome",
    category: "Cultural Celebration",
    expectations: [
      {
        icon: "festival",
        title: "Cultural Performances",
        description:
          "Music, dance, and lion dancing shared by community groups and student performers.",
      },
      {
        icon: "set_meal",
        title: "Food & Vendors",
        description: "Vietnamese food, treats, and vendor booths throughout the celebration.",
      },
      {
        icon: "diversity_3",
        title: "Community Organizations",
        description:
          "Schools, families, and Vietnamese community organizations celebrating together.",
      },
      {
        icon: "redeem",
        title: "New Year Traditions",
        description:
          "Lì xì, well-wishes, and traditions that welcome good fortune for the year ahead.",
      },
    ],
    sections: [
      {
        title: "What is Tết?",
        body: [
          "Tết, or Vietnamese Lunar New Year, is one of the most important celebrations in Vietnamese culture. It marks the beginning of the lunar new year and is a time centered around family, community, tradition, good fortune, reflection, and welcoming new beginnings.",
          "Tết is a major Vietnamese cultural celebration in its own right, and it is not simply the name of a single event. It is typically observed in February, around Lunar New Year.",
        ],
      },
      {
        title: "How WWU VSA Celebrates",
        body: [
          "WWU VSA celebrates Tết as an opportunity for members to connect with Vietnamese culture, share traditions, and celebrate with both the campus community and the larger Vietnamese community.",
          "On campus, members gather to share food, learn about New Year customs, and welcome the new year together, whether they grew up celebrating Tết or are experiencing it for the first time.",
        ],
      },
      {
        title: "Tết in Seattle",
        body: [
          "WWU VSA also brings members together to experience Tết with the broader Vietnamese community in Seattle. Tết in Seattle brings community organizations, schools, performers, families, and visitors together for a day filled with Vietnamese and Lunar New Year traditions.",
          "Attending Tết in Seattle gives members an opportunity to celebrate beyond campus, support Vietnamese community organizations, meet others in the community, and welcome the new year together.",
        ],
        bullets: [
          "Cultural performances, music, and lion dancing",
          "Food, vendors, and family activities",
          "Community organizations and other festivities throughout the celebration",
        ],
      },
      {
        title: "Cultural Performances",
        body: [
          "WWU VSA may also participate through cultural performances, giving members an opportunity to represent our organization while sharing Vietnamese culture with the greater community. In some years, WWU VSA members perform as part of the celebration; participation depends on interest and planning each year.",
          "Performance schedules are part of each year's event information and are announced separately.",
        ],
      },
      {
        title: "Transportation",
        body: [
          "Because Tết in Seattle is typically an all-day experience away from campus, WWU VSA works to coordinate rides for members who want to attend. Participants may be asked to complete an attendance or transportation form in advance so organizers can arrange carpools and transportation as effectively as possible.",
          "Transportation details, form deadlines, departure times, return plans, and driver assignments are announced separately for each year's event.",
        ],
      },
      {
        title: "Personal Expenses",
        body: [
          "WWU VSA does not charge members admission for attending Tết in Seattle, and rides coordinated by WWU VSA are not a paid transportation service.",
          "Members should plan for any personal purchases they choose to make during the event, such as food, merchandise, or items from vendors.",
        ],
      },
    ],
    currentYear: {
      note: "This year's date, location, performance schedule, transportation form, and deadlines are announced separately each year. Check our meetings and social media for the most current information.",
    },
    heroImage: GALLERY_USAGE.tetHero,
    accent: "gold",
  },
  "turkey-bowl": {
    slug: "turkey-bowl",
    name: "Turkey Bowl",
    season: "Late November",
    tagline: "Regional Ultimate Frisbee Tournament",
    description:
      "An annual late-November Ultimate Frisbee tournament primarily hosted by Seattle University VSA, bringing VSAs from across the Pacific Northwest together for friendly competition, community, and an evening banquet.",
    happens:
      "Turkey Bowl is an annual Ultimate Frisbee tournament primarily hosted by Seattle University VSA that brings Vietnamese Student Associations from across the Pacific Northwest together around late November, before Thanksgiving. Throughout the tournament, VSA communities compete, meet students from other schools, support one another, and strengthen connections across the region.",
    meaning:
      "Although Ultimate Frisbee is at the center of the tournament, Turkey Bowl is ultimately about bringing different VSA communities together through friendly competition, school spirit, and regional community.",
    location: "Hosted in the Seattle area by Seattle University VSA",
    audience: "WWU VSA members of all experience levels",
    category: "Regional Tournament",
    expectations: [
      {
        icon: "sports",
        title: "Ultimate Frisbee Tournament",
        description:
          "Matches run through the day between VSA teams from across the Pacific Northwest.",
      },
      {
        icon: "groups",
        title: "Regional VSA Community",
        description: "A chance to meet, support, and celebrate with students from other schools.",
      },
      {
        icon: "diversity_3",
        title: "All Experience Levels",
        description: "WWU VSA may field both a competitive team and a recreational group.",
      },
      {
        icon: "restaurant",
        title: "Turkey Bowl Banquet",
        description:
          "An evening celebration with performances, Thanksgiving-style food, and awards.",
      },
    ],
    sections: [
      {
        title: "What is Turkey Bowl?",
        body: [
          "Turkey Bowl is an annual Ultimate Frisbee tournament primarily hosted by Seattle University VSA that brings Vietnamese Student Associations from across the Pacific Northwest together around late November, before Thanksgiving.",
          "Throughout the tournament, VSA communities compete, meet students from other schools, support one another, and strengthen connections across the region.",
        ],
      },
      {
        title: "Seattle University VSA and the Regional Tournament",
        body: [
          "Turkey Bowl is primarily organized by Seattle University VSA. WWU VSA participates as one of the VSA communities attending the regional tournament, alongside chapters from throughout the Pacific Northwest.",
        ],
      },
      {
        title: "Competitive and Recreational Play",
        body: [
          "Turkey Bowl welcomes players with a wide range of experience levels. Players of different experience levels are encouraged to participate. Depending on interest and team organization, WWU VSA may have both competitive and recreational groups so members can participate in the way that feels most comfortable to them.",
        ],
        bullets: [
          "Members who play Ultimate Frisbee competitively",
          "Members who are just learning the game",
          "Members who mainly want to participate socially",
          "Members who want to cheer on WWU VSA and other VSA communities",
        ],
      },
      {
        title: "Transportation",
        body: [
          "WWU VSA works to coordinate rides and carpools for members participating in Turkey Bowl whenever possible. Participants may be asked to complete attendance or transportation information ahead of time so organizers can plan vehicles, drivers, and departure arrangements.",
          "Transportation details and deadlines are announced separately for each year's tournament.",
        ],
      },
      {
        title: "Turkey Bowl Banquet",
        body: [
          "After the tournament, participating VSA communities traditionally come together for the Turkey Bowl Banquet, an evening celebration that closes out the day.",
          "The banquet brings students from the participating schools together for performances, Thanksgiving-style food, recognition of each VSA community, celebration of the tournament winners, and time to connect with people from across the Pacific Northwest.",
          "The banquet makes Turkey Bowl more than an Ultimate Frisbee competition. It ends the event with a regional celebration centered around community, school spirit, friendship, and the relationships built between VSAs.",
        ],
      },
      {
        title: "Banquet Cost",
        body: [
          "Attendance at the Turkey Bowl Banquet typically requires a separate banquet fee. The exact cost and registration information are announced each year, and tournament participation does not automatically include banquet admission.",
          "Rides coordinated by WWU VSA are not a paid transportation service.",
        ],
      },
    ],
    currentYear: {
      note: "This year's tournament date, location, schedule, banquet pricing, registration links, and transportation form are announced each year. Check our meetings and social media for the most current information.",
    },
    heroImage: GALLERY_USAGE.turkeyBowlHero,
    accent: "blue",
  },
  spikefest: {
    slug: "spikefest",
    name: "SpikeFest",
    season: "Spring",
    tagline: "Regional Volleyball Tournament",
    description:
      "An annual volleyball tournament hosted by VSAUWB that brings Northwest VSA communities together for competitive and casual play, school spirit, and community.",
    happens:
      "SpikeFest is an annual volleyball tournament hosted by the Vietnamese Student Association at the University of Washington Bothell (VSAUWB) that brings Vietnamese Student Associations and friends of VSA from across the Northwest together for a day of competition, community, and fun. WWU VSA attends as one of the participating VSA communities.",
    meaning:
      "Teams compete in a tournament environment while players and spectators connect with students from other VSA communities. Whether participants are experienced volleyball players or simply looking to enjoy the game with friends, SpikeFest provides opportunities for different levels of competition.",
    location: "Hosted by VSAUWB in the greater Seattle area",
    audience: "Players and spectators from the Northwest VSA community",
    category: "Regional Tournament",
    expectations: [
      {
        icon: "sports_volleyball",
        title: "Volleyball Tournament",
        description: "Teams play through a tournament bracket across the day.",
      },
      {
        icon: "diversity_3",
        title: "Northwest VSA Community",
        description: "VSA communities from across the region come together in one gym.",
      },
      {
        icon: "emoji_events",
        title: "Competitive & Casual Play",
        description: "Divisions let participants choose the level that fits them best.",
      },
      {
        icon: "campaign",
        title: "School Spirit",
        description: "Friends and supporters cheer on their schools from the sidelines.",
      },
    ],
    sections: [
      {
        title: "What is SpikeFest?",
        body: [
          "SpikeFest is an annual volleyball tournament hosted by the Vietnamese Student Association at the University of Washington Bothell, VSAUWB. It brings Vietnamese Student Associations and friends of VSA from across the Northwest together for a day of competition, community, and fun.",
          "Teams compete in a tournament environment while players and spectators have the opportunity to connect with students from other VSA communities. WWU VSA participates as one of the attending VSA communities rather than as the host.",
        ],
      },
      {
        title: "Who Participates?",
        body: [
          "SpikeFest welcomes participants who are connected with the Northwest VSA community. Players typically register as part of a team and must meet the current year's age and eligibility requirements.",
          "Participants are generally expected to be at least 18 years old and affiliated with NWVSA or one of its participating communities. Exact eligibility requirements are confirmed by the organizers each year.",
        ],
      },
      {
        title: "Competitive and Casual Divisions",
        body: [
          "SpikeFest offers different levels of competition so participants can choose an environment that best matches their experience and comfort level.",
          "More experienced teams may compete in the competitive division, while recreational teams can participate in a more casual environment focused on having fun and enjoying the event. Some team groups may also have flexibility to choose between competitive and casual play depending on tournament organization for that year.",
        ],
        bullets: [
          "A Teams: competitive division",
          "B Teams: may choose competitive or casual depending on that year's tournament structure",
          "C Teams: casual division",
        ],
      },
      {
        title: "Team Format",
        body: [
          "Teams are generally made up of six to eight players, allowing groups to rotate players while maintaining a full volleyball lineup throughout the tournament.",
          "Roster requirements are set by the organizers and can change from year to year, so the current tournament's exact team size appears in the current-year details below.",
        ],
      },
      {
        title: "Tournament Format",
        body: [
          "SpikeFest typically follows a double-elimination format, giving teams another opportunity to continue competing after their first loss.",
          "Formats can change between years, so the confirmed format for the current tournament is announced with that year's event information.",
        ],
      },
      {
        title: "Spectators and Community",
        body: [
          "Friends, supporters, and members of participating VSA communities are also encouraged to attend and support their schools. SpikeFest is as much about regional VSA community and school spirit as it is about volleyball.",
          "Members who are not competing can still come along to cheer, meet students from other schools, and be part of the day.",
        ],
      },
      {
        title: "Registration",
        body: [
          "Player registration typically requires a small tournament fee, and teams register together. Current registration pricing, deadlines, and payment details are announced each year by the event organizers.",
        ],
      },
      {
        title: "Transportation",
        body: [
          "WWU VSA does its best to coordinate rides and carpools for members who want to participate in SpikeFest. Participants may be asked to complete attendance or transportation information ahead of time so organizers can coordinate vehicles, drivers, and departure plans.",
          "Transportation is not guaranteed, and rides coordinated by WWU VSA are not a paid service. Departure and return details are announced separately for each year's event.",
        ],
      },
    ],
    currentYear: {
      note: "Details coming soon. This year's date, venue, registration cost and deadline, team-size requirement, division structure, tournament format, and transportation form are announced by the organizers each year.",
      details: [
        { label: "Date", value: "TBA" },
        { label: "Venue", value: "TBA" },
        { label: "Registration Deadline", value: "TBA" },
        { label: "Registration Cost", value: "TBA" },
        { label: "Team Size", value: "TBA" },
        { label: "Tournament Format", value: "TBA" },
      ],
    },
    heroImage: GALLERY_USAGE.spikefestHero,
    accent: "red",
  },
  fundraisers: {
    slug: "fundraisers",
    name: "Fundraisers",
    season: "Year-round",
    tagline: "Community Support",
    description: "Bake sales, boba pop-ups, and merch drops that fund our programs.",
    happens: "Student-run pop-ups around campus and Bellingham.",
    meaning: "Every dollar makes Heritage Night and Tết possible.",
    heroImage: "",
    accent: "gold",
  },
  "general-meetings": {
    slug: "general-meetings",
    name: "General Meetings",
    season: "Bi-weekly",
    tagline: "Our Weekly Home",
    description: "Bi-weekly meetings for members and newcomers alike.",
    happens: "Announcements, workshops, and community time.",
    meaning: "Where the friendships start.",
    heroImage: "",
    accent: "blue",
  },
  "community-events": {
    slug: "community-events",
    name: "Community Events",
    season: "Year-round",
    tagline: "In Bellingham & Beyond",
    description: "Collaborations with ESC, NWVSA, and community partners.",
    happens: "Volunteering, festivals, and inter-chapter socials.",
    meaning: "VSA extends past campus.",
    heroImage: "",
    accent: "blue",
  },
  other: {
    slug: "other",
    name: "Other",
    season: "",
    tagline: "",
    description: "",
    happens: "",
    meaning: "",
    heroImage: "",
    accent: "red",
  },
};

export const MAJOR_EVENT_SLUGS: EventSlug[] = ["heritage-night", "tet", "turkey-bowl", "spikefest"];

export function isEventSlug(v: string): v is EventSlug {
  return v in EVENT_META;
}

export function getRelatedEvents(slug: EventSlug, limit = 3): EventMeta[] {
  return MAJOR_EVENT_SLUGS.filter((s) => s !== slug)
    .slice(0, limit)
    .map((s) => EVENT_META[s]);
}
