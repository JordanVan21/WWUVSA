export type EventSlug =
  | "heritage-night"
  | "tet"
  | "turkey-bowl"
  | "spikefest"
  | "fundraisers"
  | "general-meetings"
  | "community-events"
  | "other";

export type MediaItem = {
  id: string;
  title: string;
  description?: string;
  eventSlug: EventSlug;
  eventName: string;
  year: number;
  mediaType: "photo" | "video";
  thumbnailUrl: string;
  mediaUrl: string;
  altText: string;
  featured?: boolean;
  displayOrder?: number;
};

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
      "Heritage Night is our largest cultural showcase — a night of dance, music, and skits that explore what it means to be Vietnamese-American at Western.",
    happens:
      "A full-scale production in the PAC: traditional fan and lion dances, live music, student-written skits, a family-style Vietnamese dinner, and a closing tribute from the graduating class.",
    meaning:
      "Heritage Night is where the year's work becomes a shared story. Families travel in, alumni come home, and new members see themselves on stage for the first time.",
    location: "Performing Arts Center, WWU",
    audience: "Open to students, families, and the public",
    category: "Cultural Showcase",
    expectations: [
      { icon: "theater_comedy", title: "Student-Led Performances", description: "Fan dance, lion dance, and modern sets choreographed by members over two quarters." },
      { icon: "restaurant", title: "Family-Style Dinner", description: "A catered Vietnamese meal served before the show, shared at round tables." },
      { icon: "history_edu", title: "Original Storyline", description: "A student-written skit tying the night's performances into one Vietnamese-American story." },
      { icon: "school", title: "Senior Send-Off", description: "A closing tribute to graduating members and the alumni who return for it." },
    ],
    sections: [
      {
        title: "Tickets & Admission",
        body: [
          "Heritage Night ticket and admission information is announced each year. Current pricing and registration details can be found in the event's current-year information when available.",
          "WWU VSA works to coordinate transportation and rides so that members who want to participate have a way to attend whenever possible. Ride coordination is announced separately for each event.",
        ],
      },
    ],
    currentYear: {
      note: "This year's date, venue details, and ticket information are announced each year. Check our meetings and social media for the most current information.",
    },
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoVvnWTwHymFaPGud3yjPNzr9LjOz0_xtZpEEe1IwDNfz0KDAjZrkBYHLA9MgC0qCTwfWlr0AoJSzkPNVLc7SBGvTrC0ExneW0-lYtdHJKT9ksPekf7oW0-JZ7KZyFE7MaIJ9K0xwvYMKHQXdLnE7oiKWvbhca2eRXeQ5N1xUKLbirZhX3tmv_bwzzJrnv8E0shtbyx0fbxUIjZ6nralVEfFFn9yHiNZgcuP1XGU51u5NlVBJSIy7GFsGW1KVKCYQwdYt6i1xFC9hd",
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
      { icon: "festival", title: "Cultural Performances", description: "Music, dance, and lion dancing shared by community groups and student performers." },
      { icon: "set_meal", title: "Food & Vendors", description: "Vietnamese food, treats, and vendor booths throughout the celebration." },
      { icon: "diversity_3", title: "Community Organizations", description: "Schools, families, and Vietnamese community organizations celebrating together." },
      { icon: "redeem", title: "New Year Traditions", description: "Lì xì, well-wishes, and traditions that welcome good fortune for the year ahead." },
    ],
    sections: [
      {
        title: "What is Tết?",
        body: [
          "Tết, or Vietnamese Lunar New Year, is one of the most important celebrations in Vietnamese culture. It marks the beginning of the lunar new year and is a time centered around family, community, tradition, good fortune, reflection, and welcoming new beginnings.",
          "Tết is a major Vietnamese cultural celebration in its own right — it is not simply the name of a single event. It is typically observed in February, around Lunar New Year.",
        ],
      },
      {
        title: "How WWU VSA Celebrates",
        body: [
          "WWU VSA celebrates Tết as an opportunity for members to connect with Vietnamese culture, share traditions, and celebrate with both the campus community and the larger Vietnamese community.",
          "On campus, members gather to share food, learn about New Year customs, and welcome the new year together — whether they grew up celebrating Tết or are experiencing it for the first time.",
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSCz0w9mRjH5ga5kiObTs4A2oOBYS16rrvyE5IgR6htUTznOMHQ1VnwGa4ZDGpXTgBIm5i9-Bs4jeP8f7xQI5WIEIJwvja4OCNl1uICToVM43DJDo9O8HPCOs_F7tPNkjd7mqpvP71eHWTzyFnvxBIzPv3tCW9jPS8IXAbZM7U0zRGKfN8_5A7JWkiXOXEyddF3qedXH_4xLQV8oqV9ybBdrpSdKlZ7Rfd5F83jrzA7ms7lxNzEd-8GIMWtA2xC9cbotVmAIvvTNT",
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
      { icon: "sports", title: "Ultimate Frisbee Tournament", description: "Matches run through the day between VSA teams from across the Pacific Northwest." },
      { icon: "groups", title: "Regional VSA Community", description: "A chance to meet, support, and celebrate with students from other schools." },
      { icon: "diversity_3", title: "All Experience Levels", description: "WWU VSA may field both a competitive team and a recreational group." },
      { icon: "restaurant", title: "Turkey Bowl Banquet", description: "An evening celebration with performances, Thanksgiving-style food, and awards." },
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
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXG1WqjA9jCmAtpoLxz4RHcRzjcdl_VfteJ8TZuzibyWE3AiiJGD6f0oHX5hONSG67IsWw5mCjrr8iVFIXWF50NyT4hPXPfxr2Ov7LkGZKJLG94mNcfCcpsctTqgI15THWNtrhzlO0t8IEF2Q2FueumKl3IViJx3e89MJkfXhRRgvvr69LiJy8KR0RWcDMmr9sBofprbSgyLTAu88vWo9Zt9oHEiEUqze1jkRvY0iRwmHKmFZ2o-Yo3_mxjAf7K82bc7tPtKdnyLmt",
    accent: "blue",
  },
  spikefest: {
    slug: "spikefest",
    name: "SpikeFest",
    season: "Spring",
    tagline: "Volleyball Tournament",
    description:
      "A competitive volleyball tournament that brings students and alumni together for a spring day of athletic excellence and fun.",
    happens:
      "Bracket-style volleyball in Carver Gym, food trucks outside, and a members-vs-alumni exhibition match to close out the day.",
    meaning:
      "SpikeFest is our spring homecoming. Alumni return, current members compete, and the community sees VSA at its most spirited.",
    location: "Carver Gym, WWU",
    audience: "Members, alumni, and friends",
    category: "Athletic Tournament",
    expectations: [
      { icon: "sports_volleyball", title: "Bracket Play", description: "Mixed-skill teams compete through a single-day volleyball bracket." },
      { icon: "diversity_3", title: "Alumni Match", description: "A members-vs-alumni exhibition game closes out the tournament." },
      { icon: "storefront", title: "Food Trucks", description: "Local vendors set up outside Carver for the afternoon." },
      { icon: "volunteer_activism", title: "Fundraising Spirit", description: "Entry proceeds go back into next year's cultural programming." },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaqqqy1hzZH3qlyScHHBEb4WcPcg-JquOcNB5eBTcFbJ7ZTzpaLUERJhL1-4CuwMQ6DBKtCH_2uPRSIa0oZUQVVsfAySJkTsdcOZoRPrxbod76EgpugDEYzM809w1Z8nmDC0LSnNTYmbH09RehsWltQ0n61L1ubSIzSsRGDWlRyE4lda-_BW5ucxOcuuYLtCNeJcoaGS3BaluNET-zsj2n6NM1BbUF0DQUlUvpOsMdw3IvwH9syWAFEYzBLWTXihFyXl9xYIzhIUAb",
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

export const MAJOR_EVENT_SLUGS: EventSlug[] = [
  "heritage-night",
  "tet",
  "turkey-bowl",
  "spikefest",
];

const H1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDW5tFk9K3CZ3_mzHRSRTAGDm4H0fS-raQMQA2D5nYcawU6dSDhqJhz7MpT_Ii5CBd-WU-ofdUcfeD9BRiTuxuS0IlMiZsAbWl-2sC9zlDh4LaSQGqFtMzL0n97gy5LGWf49shEI49MsnZpJsqRPgGoLtEdQyU3tTVYDO5SRYHWBIEJAcrFa4LtJEYC8RnnCcwMJmqANDqjXctvMuDNngPaHFlnLylMNHKBwTxd9ajWiYhKC33qT_E2Qkz9YyXr_s-8knViggNaQZR1";
const H2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAoVvnWTwHymFaPGud3yjPNzr9LjOz0_xtZpEEe1IwDNfz0KDAjZrkBYHLA9MgC0qCTwfWlr0AoJSzkPNVLc7SBGvTrC0ExneW0-lYtdHJKT9ksPekf7oW0-JZ7KZyFE7MaIJ9K0xwvYMKHQXdLnE7oiKWvbhca2eRXeQ5N1xUKLbirZhX3tmv_bwzzJrnv8E0shtbyx0fbxUIjZ6nralVEfFFn9yHiNZgcuP1XGU51u5NlVBJSIy7GFsGW1KVKCYQwdYt6i1xFC9hd";
const H3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC95vjnJOVq3r7-oMEzY8BJtxf8Zzo0XB5vKIxIQl3AoPW7LXXLBDC-JeuIqPOhirOXYds_apFTyBEOcuDfUCuvIWMZGOSPhp4wWCFX94Sz9lk8k07YaclCFS8hc_LjfbDHHVUmpHdiEFKRq0B8j9u0bAr5UfgGlG9pfx_RunHsTfqmHBfFEbFZClEe2Ry8F7IC2jQh_gac0BP3SH6-a8uOXYfFAKBO0pq1PY9LNBEYROg2O0EMRpu8dhkC8cJgnFFz5w21yaBifyDO";
const H4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRqhJpH36x8ISR9rn20BAQfFYy7j2EJ-GMCIxAHixNbzfmCOGTie1QRRoCs0kBECA8-J3VECULPz4YUmGSkOMizvE5oBpdcaxT-iQPA3jJdHpVAq2Ln5fbqepXSoubsflwlcjeXMTjKSLynC7Fu7xuUX2cgbPE5DBPYCIa-HSlJoND6MEaaOy9s8LT_8bGpYqOlzD8JsKZjvwowg8IOHlG_4qNNcSRAxSNdw27zUa7T6M4e8uKaMLd7ciT7TlYxOF5BGXAIaxDhIRU";
const H5 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAO1HsrOOAD12Y8uOBrYSf7wokPB8yQwt2dVYfHop6IXdlhHQ55GQcQaDVj0xFG_G2xQgR4drvBe6ARCPRKWt5ixd2SRtF3K5ZV-d5tYNMc2Vtn0SLH0mnLjYGbkfiZS_rEBsfx8ITFNxeXzc2kihek35xSCSMc0cEOsMYYNMupGygOwZnN8RjnzkQzBp1-FNoBIAQHXzTlfifu1pxJydQUP22H5-Lw4Pj2OC8XwnOg7p4Q3Zo_KLseNcVWlsMjPWmAa1NTFyyXFpMO";
const H6 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfX911ngX4FrCv5JghJ27a1rR4XAMci5E2xAuheVNRT58WnLBida3BSK3-icM9g-cpRMH_kqCpXfgH5D-O7MFu1BXbIV10ey6VBwEfun6S9PpUC09u5kTclw7yLzrTsjt1-DZpV4rH297nf8eGUgpN0JYbyWE1kDSfgdy4EaV8-APYwqx41dPLr_j7713bN53Ce0hXj34NVgfbNNT8k37HaFTlOJL8z69QpLFF28IOLz4gLvqxsv-zoFvjNTBLU9y7kORQIXVWC9s2";
const H7 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_C1lFukvKJipGVi9ukS5LdDIPzMFUYDEd5caa4qvTAZs2TubU0a3FDpvg2HuDMCUj0TUbwwo1yKqa1Ol955Dki_SJhe5PqoUTrW1oEIrez6JTuo0T3ApN6oNKV9YJy1THwrYWV2BxHA526NHqTsRJOz6X1Dn5N8QZP5rmGB2LkAuQ-cgWB1A30bcuQ9SefeIIfDupiY4HjU_5wSD439fYaidbLcybc6hY6WObiRp0Gpbj-5Txvfzwi_pEMRwOCi5qtTuMmewKfkj";
const T1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDjtwJ8LxgYzy7NqHc-BcEpJqg16pz417VkLlBvw0FILUWfq87reyQqGT6SXfRncz6ebZgu_2uFo5g-ZwAhtcqKUGxz59hr-6kssFT7lkHeGBBvQ5n54qauzzwNr9FycTlfEnFENTqcMRW11eztctb1ZHmNVGT4kgLDaQAmi7yGFv9kv2gZzHnfgBobjQStUqjZd3XuNt_768Wrg47gCBy_mqm7aRIaeoKO2bbrJcBx4YejeWbHq7Cv7b7QkPvZ7iFgtckhac-foEFj";
const T2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSCz0w9mRjH5ga5kiObTs4A2oOBYS16rrvyE5IgR6htUTznOMHQ1VnwGa4ZDGpXTgBIm5i9-Bs4jeP8f7xQI5WIEIJwvja4OCNl1uICToVM43DJDo9O8HPCOs_F7tPNkjd7mqpvP71eHWTzyFnvxBIzPv3tCW9jPS8IXAbZM7U0zRGKfN8_5A7JWkiXOXEyddF3qedXH_4xLQV8oqV9ybBdrpSdKlZ7Rfd5F83jrzA7ms7lxNzEd-8GIMWtA2xC9cbotVmAIvvTNT";
const TB1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCXG1WqjA9jCmAtpoLxz4RHcRzjcdl_VfteJ8TZuzibyWE3AiiJGD6f0oHX5hONSG67IsWw5mCjrr8iVFIXWF50NyT4hPXPfxr2Ov7LkGZKJLG94mNcfCcpsctTqgI15THWNtrhzlO0t8IEF2Q2FueumKl3IViJx3e89MJkfXhRRgvvr69LiJy8KR0RWcDMmr9sBofprbSgyLTAu88vWo9Zt9oHEiEUqze1jkRvY0iRwmHKmFZ2o-Yo3_mxjAf7K82bc7tPtKdnyLmt";
const SF1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAaqqqy1hzZH3qlyScHHBEb4WcPcg-JquOcNB5eBTcFbJ7ZTzpaLUERJhL1-4CuwMQ6DBKtCH_2uPRSIa0oZUQVVsfAySJkTsdcOZoRPrxbod76EgpugDEYzM809w1Z8nmDC0LSnNTYmbH09RehsWltQ0n61L1ubSIzSsRGDWlRyE4lda-_BW5ucxOcuuYLtCNeJcoaGS3BaluNET-zsj2n6NM1BbUF0DQUlUvpOsMdw3IvwH9syWAFEYzBLWTXihFyXl9xYIzhIUAb";
const SF2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAx6d32ysioFpU0odI_vk-SArWXvys7EW59SFm0_YQLW3bsIEuNUjC_-jnnjnGdTRfZsRywAE1qCI5LOPXCR2K1yC6fHwCc7r77Im64cZWzzQoWYtV1PQcc0V4erUtb-H2brGZAhRpXRmh32wkKgcytwBSK3pL2yY6sHg23hzUNteqR53Ia8APJnY2eKNB__ipHD10aRcaOH8b0MlW7cR_jWue7bd9D-NgjnHqCCbFM1A0otEX5r6s7ra8z95gtQX3qp-zGDB7L17sE";
const M1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCoXaghr936JdqA8cV8WGnvlznNF_KlPs0gC6-npqAvEtxQDzo1fgn6ibvDm8lHLkV59dHtlx26P4BmtPeUgzW8veY8azDEcJxsBe1CkCCybu9DZZv_VXGmTWqhh_OWX07cDIRCmog6gKNO9Pi2Bc3EbwsIHsDaLf1rNV6K72wgULMUEDCO5tGjYEzY6SvWtFN4J8JyecombpaOUKDH5trfFxygcp3cWlATGzjRotP3zZmrY5m_IoXHGXu71OtgGdPfj1lr60bxe1s-";
const M2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDt1SdkMLT_GJ2laY9398cNbbjAJPtyIYm-9P-aDiAbUpgesb2_63H85c8vORu4WoSq2r-tWYOly8lC-witrV7cAAuNmnJ-MGmq_z9gS6Pn0FtqsG0W9R9MlfuGfP9KcCw5PwWx7VRSO22JDOgSFIv9ywiI7FHLcbAeAfFHiJbElmfDdS_TIGujEbcnRrsNc9wlx1hA0ZTAp7a7jIEih_itbpoL3JzMsnHOo504ao7n-qjQp3SbqM8vtM3uKBQN4o_Uv3A3DtvGUA7B";
const C1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuA4XLGnVWM3FeTaeqnf4fJsGayOR_R8Zg_8Ys40jx-mvYnjTHoVaLr_iEOR4wbizALuIGW2ZvqOjzfDEfK62VPIZ_vVHON2ncM8TLNdxysVgBV0CAjY9ijG0WupQ0eiJqFdhADn1nVoDtkVu4SxoJmxdl1CT5Dj-f03FsbShTgifCkAzBBzMzS8v-nDYa41LnuQPULG5b0VR4AVwqXJ3LOFI3BF4cojBASaIexUNZnHtxvlq51tOsRFXcgCA1PApwe8K871d9DOL-VY";

const IMG = {
  heritage: [H1, H2, H3, H4, H5, H6, H7],
  tet: [T1, T2],
  turkey: [TB1],
  spike: [SF1, SF2],
  meetings: [M1, M2],
  community: [C1],
};

function build(slug: EventSlug, urls: string[], year: number, altBase: string): MediaItem[] {
  const name = EVENT_META[slug].name;
  return urls.map((url, i) => ({
    id: `${slug}-${year}-${i}`,
    title: `${name} ${year}`,
    eventSlug: slug,
    eventName: name,
    year,
    mediaType: "photo" as const,
    thumbnailUrl: url,
    mediaUrl: url,
    altText: `${altBase} ${i + 1}`,
    featured: i < 8,
    displayOrder: i,
  }));
}

export const MEDIA: MediaItem[] = [
  ...build("heritage-night", IMG.heritage, 2024, "Heritage Night performance"),
  ...build("tet", IMG.tet, 2024, "Tết celebration"),
  ...build("turkey-bowl", IMG.turkey, 2024, "Turkey Bowl Ultimate Frisbee tournament and banquet"),
  ...build("spikefest", IMG.spike, 2025, "SpikeFest volleyball"),
  ...build("general-meetings", IMG.meetings, 2024, "VSA general meeting"),
  ...build("community-events", IMG.community, 2024, "VSA community event"),
];

export const AVAILABLE_YEARS = Array.from(new Set(MEDIA.map((m) => m.year))).sort((a, b) => b - a);

export function filterMedia(opts: {
  event?: EventSlug | "all";
  year?: number | "all";
  type?: "photo" | "video" | "all";
}): MediaItem[] {
  return MEDIA.filter((m) => {
    if (opts.event && opts.event !== "all" && m.eventSlug !== opts.event) return false;
    if (opts.year && opts.year !== "all" && m.year !== opts.year) return false;
    if (opts.type && opts.type !== "all" && m.mediaType !== opts.type) return false;
    return true;
  });
}

export function getEventMedia(slug: EventSlug): MediaItem[] {
  return MEDIA.filter((m) => m.eventSlug === slug).sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0),
  );
}

export function isEventSlug(v: string): v is EventSlug {
  return v in EVENT_META;
}

export function getFeaturedEventMedia(slug: EventSlug, limit = 12): MediaItem[] {
  const featured = MEDIA.filter((m) => m.eventSlug === slug && m.featured === true);
  const pool = featured.length > 0 ? featured : MEDIA.filter((m) => m.eventSlug === slug);
  return pool
    .slice()
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    .slice(0, limit);
}

export function getRelatedEvents(slug: EventSlug, limit = 3): EventMeta[] {
  return MAJOR_EVENT_SLUGS.filter((s) => s !== slug)
    .slice(0, limit)
    .map((s) => EVENT_META[s]);
}
