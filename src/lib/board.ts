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

const raw: Omit<BoardMember, "altText">[] = [
  { id: "president", name: "Linh Nguyen", role: "President", group: "executive", imageUrl: P1, displayOrder: 1, roleColor: RED, major: "Behavioral Neuroscience", accent: "bg-vietnamese-red/90" },
  { id: "ivp", name: "Minh Tran", role: "Internal Vice President", group: "executive", imageUrl: P2, displayOrder: 2, roleColor: BLUE, major: "Business Administration", accent: "bg-viking-blue/90" },
  { id: "evp", name: "Anh Le", role: "External Vice President", group: "executive", imageUrl: P3, displayOrder: 3, roleColor: GOLD, major: "Graphic Design", accent: "bg-imperial-gold/90" },
  { id: "secretary", name: "Duy Pham", role: "Secretary", group: "executive", imageUrl: P4, displayOrder: 4, roleColor: INK, major: "Computer Science", accent: "bg-ink-black/90" },
  { id: "treasurer", name: "Mai Vo", role: "Treasurer", group: "board", imageUrl: P3, displayOrder: 5, roleColor: GOLD, major: "Accounting", accent: "bg-imperial-gold/90" },
  { id: "events", name: "Bao Huynh", role: "Events Coordinator", group: "board", imageUrl: P2, displayOrder: 6, roleColor: BLUE, major: "Communication Studies", accent: "bg-viking-blue/90" },
  { id: "culture", name: "Thao Dang", role: "Cultural Chair", group: "board", imageUrl: P1, displayOrder: 7, roleColor: RED, major: "Anthropology", accent: "bg-vietnamese-red/90" },
  { id: "acce", name: "Khanh Bui", role: "ACCE Coordinator", group: "board", imageUrl: P4, displayOrder: 8, roleColor: INK, major: "Psychology", accent: "bg-ink-black/90" },
  { id: "publicity", name: "Trang Ly", role: "Publicity Chair", group: "board", imageUrl: P3, displayOrder: 9, roleColor: GOLD, major: "Design", accent: "bg-imperial-gold/90" },
  { id: "historian", name: "Quang Do", role: "Historian", group: "board", imageUrl: P2, displayOrder: 10, roleColor: BLUE, major: "History", accent: "bg-viking-blue/90" },
  { id: "intern-1", name: "Hà Nguyễn", role: "Board Intern", group: "intern", imageUrl: P1, displayOrder: 11, roleColor: RED, major: "Undeclared", accent: "bg-vietnamese-red/90" },
  { id: "intern-2", name: "Tuấn Phan", role: "Board Intern", group: "intern", imageUrl: P4, displayOrder: 12, roleColor: INK, major: "Environmental Science", accent: "bg-ink-black/90" },
];

export const BOARD_MEMBERS: BoardMember[] = raw
  .map((m) => ({ ...m, altText: `${m.name}, ${m.role} of WWU VSA` }))
  .sort((a, b) => a.displayOrder - b.displayOrder);
