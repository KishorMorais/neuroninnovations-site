"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "Portfolio enquiry").trim();
    const message = String(form.get("message") || "").trim();

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    window.location.href = `mailto:kishoreugin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with this message prepared.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" required placeholder="How can I help?" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={6} required placeholder="Tell me a little about the opportunity or project." />
      </label>
      <div className="form-footer">
        <button className="button button-primary" type="submit">Compose email <span aria-hidden="true">↗</span></button>
        {status && <p role="status">{status}</p>}
      </div>
    </form>
  );
}
