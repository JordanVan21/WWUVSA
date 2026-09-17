export type BoardMember = {
  id: string;
  name: string;
  role: string;
  group: "executive" | "board" | "intern";
  imageUrl?: string;
  altText: string;
  displayOrder: number;
  roleColor?: string;
  major?: string;
  accent?: string;
};

const RED = "text-vietnamese-red";
const BLUE = "text-viking-blue";
const GOLD = "text-[color:var(--color-imperial-gold)]";
const INK = "text-on-surface-variant";

const raw: Omit<BoardMember, "altText">[] = [
  {
    id: "co-president-1",
    name: "Kenzie Vu",
    role: "Co-President",
    group: "executive",
    imageUrl: "/images/board/kenzie-vu.jpg",
    displayOrder: 1,
    roleColor: RED,
  },
  {
    id: "co-president-2",
    name: "Tommy Ngo",
    role: "Co-President",
    group: "executive",
    imageUrl: "/images/board/tommy-ngo.jpg",
    displayOrder: 2,
    roleColor: RED,
  },
  {
    id: "vice-president",
    name: "Elizabeth Kirse",
    role: "Vice President",
    group: "executive",
    imageUrl: "/images/board/elizabeth-kirse.jpg",
    displayOrder: 3,
    roleColor: BLUE,
  },
  {
    id: "budget-authority",
    name: "Kristen Le",
    role: "Budget Authority",
    group: "executive",
    displayOrder: 4,
    roleColor: GOLD,
  },
  {
    id: "public-relations",
    name: "David Huynh-Nguyen",
    role: "Public Relations",
    group: "board",
    displayOrder: 5,
    roleColor: BLUE,
  },
  {
    id: "secretary",
    name: "Ellie Nguyen",
    role: "Secretary",
    group: "board",
    displayOrder: 6,
    roleColor: INK,
  },
  {
    id: "visual-content-creator",
    name: "Khoi Tran",
    role: "Visual Content Creator",
    group: "board",
    displayOrder: 7,
    roleColor: GOLD,
  },
  {
    id: "activities-coordinator",
    name: "Star Jaravata",
    role: "Activities Coordinator",
    group: "board",
    displayOrder: 8,
    roleColor: RED,
  },
  {
    id: "community-outreach",
    name: "Amy Huynh",
    role: "Community Outreach Coordinator",
    group: "board",
    displayOrder: 9,
    roleColor: BLUE,
  },
  {
    id: "culture-chair",
    name: "Brendon Le",
    role: "Culture Chair",
    group: "board",
    displayOrder: 10,
    roleColor: GOLD,
  },
  {
    id: "intern-1",
    name: "TBD",
    role: "Board Intern",
    group: "intern",
    displayOrder: 11,
    roleColor: INK,
  },
  {
    id: "intern-2",
    name: "TBD",
    role: "Board Intern",
    group: "intern",
    displayOrder: 12,
    roleColor: INK,
  },
];

export const BOARD_MEMBERS: BoardMember[] = raw
  .map((m) => ({
    ...m,
    altText: `${m.name}, ${m.role}`,
  }))
  .sort((a, b) => a.displayOrder - b.displayOrder);
