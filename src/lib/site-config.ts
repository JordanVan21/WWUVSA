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

/** Public WWU VSA email, used as the direct fallback when the form is unavailable. */
export const WWU_VSA_EMAIL = "westernvsa@gmail.com";

/**
 * Deployed Google Apps Script Web App URL that receives Contact form
 * submissions and appends them to the WWU VSA response spreadsheet.
 *
 * PASTE THE DEPLOYED WEB APP URL HERE (it looks like
 * https://script.google.com/macros/s/AKfy.../exec).
 *
 * While this is an empty string the Contact form stays visible but submission
 * is disabled gracefully and visitors are pointed at the direct email address.
 * The Apps Script source to deploy lives in docs/apps-script/contact-form.gs.
 */
export const CONTACT_FORM_ENDPOINT = "";

/** True once a real Apps Script endpoint has been configured above. */
export const isContactFormConfigured = () =>
  CONTACT_FORM_ENDPOINT.startsWith("https://script.google.com/");
