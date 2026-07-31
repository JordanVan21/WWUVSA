export type CommunityOrganization = {
  id: string;
  acronym: string;
  fullName: string;
  relationship: "campus" | "regional" | "north-american";
  /** Verified official website. Update here if an org changes domains. */
  url: string;
  logoUrl?: string;
  icon?: string;
  accessibleLabel: string;
  displayOrder: number;
};

const ORGS: CommunityOrganization[] = [
  {
    id: "wwu-esc",
    acronym: "WWU ESC",
    fullName: "WWU Ethnic Student Center",
    relationship: "campus",
    url: "https://mss.wwu.edu/esc",
    icon: "groups_2",
    accessibleLabel: "Visit the WWU Ethnic Student Center website",
    displayOrder: 1,
  },
  {
    id: "nwvsa",
    acronym: "NWVSA",
    fullName: "Northwest Vietnamese Student Association",
    relationship: "regional",
    url: "https://northwestvsa.com/",
    icon: "hub",
    accessibleLabel: "Visit the Northwest Vietnamese Student Association website",
    displayOrder: 2,
  },
  {
    id: "unavsa",
    acronym: "UNAVSA",
    fullName: "Union of North American Vietnamese Student Associations",
    relationship: "north-american",
    url: "https://www.unavsa.org/",
    icon: "public",
    accessibleLabel:
      "Visit the Union of North American Vietnamese Student Associations website",
    displayOrder: 3,
  },
];

export const COMMUNITY_ORGANIZATIONS: CommunityOrganization[] = [...ORGS].sort(
  (a, b) => a.displayOrder - b.displayOrder,
);
