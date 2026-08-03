export type CommunityOrganization = {
  id: string;
  acronym: string;
  fullName: string;
  /** Compact label used in the footer. */
  shortName: string;
  scope: "Campus" | "Regional" | "North American";
  relationship: "campus" | "regional" | "north-american";
  description: string;
  connectionDescription: string;
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
    shortName: "Ethnic Student Center",
    scope: "Campus",
    relationship: "campus",
    description:
      "The WWU Ethnic Student Center supports cultural identity, community-building, and student leadership for historically underrepresented students and student organizations at Western Washington University.",
    connectionDescription:
      "WWU VSA is part of the broader cultural community connected through the ESC. This connection supports collaboration, student involvement, campus resources, and opportunities to build community with other cultural organizations at WWU.",
    url: "https://mss.wwu.edu/esc",
    icon: "groups_2",
    accessibleLabel: "Visit the WWU Ethnic Student Center website",
    displayOrder: 1,
  },
  {
    id: "nwvsa",
    acronym: "NWVSA",
    fullName: "Northwest Vietnamese Student Association",
    shortName: "Northwest Vietnamese\nStudent Association",
    scope: "Regional",
    relationship: "regional",
    description:
      "NWVSA connects Vietnamese Student Associations and Vietnamese student leaders throughout the Pacific Northwest through regional programs, leadership development, cultural events, and community-building opportunities.",
    connectionDescription:
      "WWU VSA participates in the wider Northwest VSA community through regional events, leadership opportunities, collaboration, and relationships with Vietnamese student organizations at other schools.",
    url: "https://northwestvsa.com/",
    icon: "hub",
    accessibleLabel: "Visit the Northwest Vietnamese Student Association website",
    displayOrder: 2,
  },
  {
    id: "unavsa",
    acronym: "UNAVSA",
    fullName: "Union of North American Vietnamese Student Associations",
    shortName: "Union of North American\nVietnamese Student Associations",
    scope: "North American",
    relationship: "north-american",
    description:
      "UNAVSA is a North American network that brings together Vietnamese student organizations, leaders, alumni, and community members through leadership development, cultural engagement, philanthropy, and collaboration.",
    connectionDescription:
      "WWU VSA is connected to the broader North American VSA community through the regional VSA network and shared opportunities for cultural exchange, leadership growth, and collaboration.",
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
