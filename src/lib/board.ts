export type BoardMember = {
  id: string;
  name: string;
  role: string;
  group: "executive" | "board" | "intern";
  imageUrl: string;
  altText: string;
  displayOrder: number;
  roleColor?: string;
  major?: string;
  accent?: string;
};

const P1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB178x-Fdi11e9WcSxBBTqxapUBKHyOZDDzDlUhOjbTpcJnwKX6EA8mAeITC09NE-gBUV-P8hg8aAktPhXlvKwhMzXSH-LQ5cAZkrvrP02Nfx8I4X_b9JbmuAcmMIrsrfu_ZI1M35NrWDur6MTDKTFZm9y0jRRU56rb3g3LrdbVvfe50s8K1NzhtWJan8PhpPySZa0j-ljuCU-wOM_tjYQ-FoTWTItfAxweB8Dqi6h9Q9kFGtV4I9Mkr4x81WQ3qgrJiyhC56pkhGES";
const P2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDjo2XTfrVusklk3Z5gSs2iavIJdi5ES4Pj2Vab5oRWkTVt2LgRAIukbKXuCNt9C5fk5X5o7WvqsSonFNJ93BGGU6e9x200QAX7UUSF79b2u8Vewk0r1WnU_5IjPBCe6ckggkCItupLF8BhMNO3jcxsdWcN76R2PDw-omonWWGURJH1f254-JBOFBo8LxhaNMVITtlyVm8lwEqShvwanXrv5j_Zssr8B4mA00zjnA6YdOBtcXQ9Kkd36pmAaC0j3ctT2GiSAWA9QdUI";
const P3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDxPiQ37g5Fex9BfKlJ3B1pmRsFukpCJDoOHSGOH46jnjpOYirR74pzSBkqbXV9-NTSHazkytXCBYEoUa-tkAE_Dm_Esppz-WFIO5X7epL_EJm3QXZ4t3MvJcZA5zA_uzpNUWb3TDOz1h5d8DDNGS5i5R_p1UId9VTj9KU1RY2bAUF8yIqP-PqDS7OowTswzeWgvTSw0vLsjUviVXtqY-rO-M1dFkxYfMjSGJCgq3rx1X0lLQoUPlXiWNHpSJko4Dt6XQiE5zrcJxdZ";
const P4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCCdCjGVLD132GUL94UQa8t0vRMH0pZ2xxTw51Rdd7yJGhBoWWENDvQdzrZp-yjenC8O147CrKKK34YwVlvGPKRfef1u-TWfbeRmWHWTlG6rN232-l8nCsopxtNjOhR3pMIfSwq77FYOgXL0peTKBzSRWnPgFEH_BWKzZB9RRZyGe7Md3aC2nOat2yz_VX3yUg5j2uT4bpJEU5KUl3L5zoQX1Ee4mP0qjVPpfZzZSzxO_XVQkDrRkzNviUnJiR7cwakjla29FfPquuV";

const RED = "text-vietnamese-red";
const BLUE = "text-viking-blue";
const GOLD = "text-[color:var(--color-imperial-gold)]";
const INK = "text-on-surface-variant";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="400" height="500" fill="#efeade"/><circle cx="200" cy="205" r="70" fill="#c9c1ad"/><path d="M60 460c0-77 63-140 140-140s140 63 140 140z" fill="#c9c1ad"/></svg>`,
  );

const raw: Omit<BoardMember, "altText">[] = [
  { id: "co-president-1", name: "Kenzie Vu", role: "Co-President", group: "executive", imageUrl: P1, displayOrder: 1, roleColor: RED },
  { id: "co-president-2", name: "Tommy Ngo", role: "Co-President", group: "executive", imageUrl: P2, displayOrder: 2, roleColor: RED },
  { id: "vice-president", name: "Elizabeth Kirse", role: "Vice President", group: "executive", imageUrl: P3, displayOrder: 3, roleColor: BLUE },
  { id: "budget-authority", name: "Kristen Le", role: "Budget Authority", group: "executive", imageUrl: P4, displayOrder: 4, roleColor: GOLD },
  { id: "public-relations", name: "David Huynh-Nguyen", role: "Public Relations", group: "board", imageUrl: P2, displayOrder: 5, roleColor: BLUE },
  { id: "secretary", name: "Ellie Nguyen", role: "Secretary", group: "board", imageUrl: P1, displayOrder: 6, roleColor: INK },
  { id: "visual-content-creator", name: "Khoi Tran", role: "Visual Content Creator", group: "board", imageUrl: P4, displayOrder: 7, roleColor: GOLD },
  { id: "activities-coordinator", name: "Star Jaravata", role: "Activities Coordinator", group: "board", imageUrl: P3, displayOrder: 8, roleColor: RED },
  { id: "community-outreach", name: "Amy Huynh", role: "Community Outreach Coordinator", group: "board", imageUrl: P1, displayOrder: 9, roleColor: BLUE },
  { id: "culture-chair", name: "Brendon Le", role: "Culture Chair", group: "board", imageUrl: P2, displayOrder: 10, roleColor: GOLD },
  { id: "intern-1", name: "TBD", role: "Board Intern", group: "intern", imageUrl: PLACEHOLDER, displayOrder: 11, roleColor: INK },
  { id: "intern-2", name: "TBD", role: "Board Intern", group: "intern", imageUrl: PLACEHOLDER, displayOrder: 12, roleColor: INK },
];

export const BOARD_MEMBERS: BoardMember[] = raw
  .map((m) => ({
    ...m,
    altText:
      m.name === "TBD"
        ? `Placeholder portrait for an open WWU VSA ${m.role} position`
        : `${m.name}, ${m.role} of WWU VSA`,
  }))
  .sort((a, b) => a.displayOrder - b.displayOrder);
