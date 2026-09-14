/**
 * WWU VSA Contact form -> Google Sheets
 *
 * Deploy this as a Web App bound to the WWU VSA response spreadsheet, then
 * paste the generated /exec URL into CONTACT_FORM_ENDPOINT in
 * src/lib/site-config.ts on the website.
 */

var SPREADSHEET_ID = '1KUDk45RtHkYwuNEDVTiNuzJWs6vojzHloDOvxGRz9oI';
var SHEET_NAME = 'Form Responses'; // change if your tab has a different name
var TIME_ZONE = 'America/Los_Angeles';
var HEADERS = ['Timestamp', 'Name', 'Email Address', 'Subject', 'Message'];

var LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };

function doPost(e) {
  try {
    var data = parseBody(e);

    // Honeypot: silently accept and drop bot submissions.
    if (String(data.website || '').trim() !== '') {
      return json({ success: true });
    }

    var name = clean(data.name, LIMITS.name);
    var email = clean(data.email, LIMITS.email);
    var subject = clean(data.subject, LIMITS.subject);
    var message = clean(data.message, LIMITS.message);

    if (!name || !email || !subject || !message) {
      return json({ success: false, error: 'missing_fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: 'invalid_email' });
    }

    var fingerprint = email.toLowerCase() + '|' + subject + '|' + message;
    if (isDuplicate(fingerprint)) {
      return json({ success: true, duplicate: true });
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sheet = getSheet();
      sheet.appendRow([new Date(), safe(name), safe(email), safe(subject), safe(message)]);
      var row = sheet.getLastRow();
      sheet.getRange(row, 1).setNumberFormat('mmmm d, yyyy h:mm AM/PM');
      sheet.getRange(row, 2, 1, 4).setNumberFormat('@');
    } finally {
      lock.releaseLock();
    }

    return json({ success: true });
  } catch (error) {
    return json({ success: false, error: 'server_error' });
  }
}

/** No public data is ever returned by this endpoint. */
function doGet() {
  return json({ success: false, error: 'not_supported' });
}

function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    var raw = e.postData.contents;
    try {
      return JSON.parse(raw);
    } catch (err) {
      // fall through to form-encoded parameters
    }
  }
  return (e && e.parameter) || {};
}

function getSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  ss.setSpreadsheetTimeZone(TIME_ZONE);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function clean(value, max) {
  var text = String(value == null ? '' : value).replace(/\u0000/g, '').trim();
  return text.length > max ? text.substring(0, max) : text;
}

/** Blocks spreadsheet formula injection by neutralising leading =, +, -, @. */
function safe(text) {
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

/** Lightweight duplicate guard: same message within 60 seconds. */
function isDuplicate(fingerprint) {
  var cache = CacheService.getScriptCache();
  var key = 'c_' + Utilities.base64EncodeWebSafe(
    Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, fingerprint)
  );
  if (cache.get(key)) return true;
  cache.put(key, '1', 60);
  return false;
}
