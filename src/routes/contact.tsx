import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | WWU VSA" },
      { name: "description", content: "Get in touch with WWU VSA: general body meetings, email, and campus location." },
      { property: "og:title", content: "Contact | WWU VSA" },
      { property: "og:description", content: "Reach the WWU Vietnamese Student Association board and community." },
    ],
  }),
  component: ContactPage,
});

type Fields = { name: string; email: string; subject: string; message: string };

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };
const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > LIMITS.email)
    errors.email = "Please enter a valid email address.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > LIMITS.subject)
    errors.subject = `Please keep the subject under ${LIMITS.subject} characters.`;

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  return errors;
}

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [values, setValues] = useState<Fields>(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const configured = isContactFormConfigured();

  const setField = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status === "error" || status === "sent") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending" || !configured) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        // text/plain keeps this a simple request, so Apps Script needs no preflight.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          website: honeypot,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("submission_failed");
      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-rice-paper px-5 md:px-20 pt-16 pb-14">
        <div className="relative z-10 mx-auto max-w-screen-2xl">
          <div className="mb-4 inline-block rounded-full bg-vietnamese-red/10 px-4 py-1 text-xs font-semibold text-vietnamese-red">
            Connect With Us
          </div>
          <h1 className="font-display text-4xl text-ink-black md:text-6xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">
            Whether you're a prospective member, a community partner, or just want to say hi, we're
            here to listen and help you find your place in our community.
          </p>
          <div className="dong-son-divider mt-8 h-px" />
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="rounded-2xl border-t-4 border-vietnamese-red bg-white p-8 shadow-sm md:p-12 lg:col-span-7">
            <h2 className="mb-6 font-display text-3xl text-ink-black md:text-4xl">Send us a Message</h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Lê Văn An" className="w-full rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-low px-4 py-3 outline-none transition focus:border-vietnamese-red focus:ring-4 focus:ring-vietnamese-red/10" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="you@wwu.edu" className="w-full rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-low px-4 py-3 outline-none transition focus:border-vietnamese-red focus:ring-4 focus:ring-vietnamese-red/10" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="General Inquiry" className="w-full rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-low px-4 py-3 outline-none transition focus:border-vietnamese-red focus:ring-4 focus:ring-vietnamese-red/10" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">Your Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" className="w-full rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-low px-4 py-3 outline-none transition focus:border-vietnamese-red focus:ring-4 focus:ring-vietnamese-red/10" />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-10 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] active:scale-95 md:w-auto ${
                  status === "sent" ? "bg-green-600 shadow-green-600/25" : "bg-vietnamese-red shadow-vietnamese-red/25 disabled:opacity-80"
                }`}
              >
                {status === "idle" && (<><span>Send Message</span><span className="material-symbols-outlined">send</span></>)}
                {status === "sending" && (<><span>Sending...</span><span className="material-symbols-outlined animate-spin">sync</span></>)}
                {status === "sent" && (<><span>Message Sent!</span><span className="material-symbols-outlined">check_circle</span></>)}
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="rounded-2xl border-t-4 border-viking-blue bg-white p-8 shadow-sm">
              <h3 className="mb-6 font-display text-2xl text-viking-blue">Contact Information</h3>
              <div className="space-y-6">
                <InfoRow icon="mail" title="Email Us">
                  <a href="mailto:westernvsa@gmail.com" className="text-viking-blue hover:underline">westernvsa@gmail.com</a>
                </InfoRow>
                <InfoRow icon="account_circle" title="Follow our Journey">
                  <a href="#" className="inline-flex items-center gap-1 text-viking-blue hover:underline">
                    @wwuvsa <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </InfoRow>
                <InfoRow icon="calendar_today" title="General Body Meetings">
                  <p className="text-on-surface-variant">Tuesdays at 6:00 PM<br />Viking Union 552</p>
                </InfoRow>
              </div>
              <div className="mt-8 rounded-lg bg-surface-container p-4">
                <p className="italic text-on-surface-variant">
                  "Building a legacy of heritage and leadership on the WWU campus since 1996."
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-t-4 border-imperial-gold bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between px-2">
                <h3 className="text-sm font-semibold text-on-surface">Find Us at WWU</h3>
                <span className="material-symbols-outlined text-[color:var(--color-imperial-gold)]">location_on</span>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-[color:var(--color-outline-variant)] bg-surface-container-high">
                <iframe
                  title="WWU Campus Map"
                  className="h-full w-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Western+Washington+University+Bellingham&output=embed"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-center text-xs text-on-surface-variant">Bellingham, WA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-viking-blue/10">
        <span className="material-symbols-outlined text-viking-blue">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-on-surface">{title}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}