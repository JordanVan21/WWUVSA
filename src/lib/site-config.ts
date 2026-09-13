/**
 * Shared site-wide configuration: official external links and feature flags.
 */

/** Official WWU VSA organization page on Western's WIN platform. */
export const WWU_VSA_WIN_URL = "https://win.wwu.edu/organization/vietnamese-student-association";

/**
 * Feature flags for the public website.
 *
 * Calendar functionality is intentionally hidden for now. All calendar code,
 * data, ICS generation, and subscription UI remain in the project under
 * src/lib/calendar*.ts, src/components/calendar/, and src/routes/calendar.tsx.
 * Set FEATURES.calendar to true when WWU VSA is ready to resume the public
 * calendar and subscription experience.
 */
export const FEATURES = {
  calendar: false,
} as const;
