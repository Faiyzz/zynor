"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone as PhoneIcon } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactUs() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    const [, part1, part2, part3] = match;
    return [part1, part2 && `-${part2}`, part3 && `-${part3}`]
      .filter(Boolean)
      .join("");
  };

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = e.target.value;
      if (key === "phone") {
        value = formatPhone(value);
        setPhoneTouched(true);
      }
      setForm((s) => ({ ...s, [key]: value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        throw new Error("Please fill in name, email, and message.");
      }
      if (
        phoneTouched &&
        form.phone &&
        form.phone.replace(/\D/g, "").length !== 10
      ) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }

      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit. Please try again.");

      setSuccess("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setPhoneTouched(false);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const phoneInvalid =
    phoneTouched && form.phone && form.phone.replace(/\D/g, "").length !== 10;

  return (
    <section id="contact" className="relative bg-light text-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:mt-6 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-semibold text-dark">Contact Us</h3>

            <form className="mt-6 space-y-7" onSubmit={onSubmit}>
              <label className="block">
                <span className="text-sm text-dark/80">Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-[var(--color-accent)] focus:ring-0 placeholder:text-neutral-400"
                  placeholder="John Carter"
                />
              </label>

              <label className="block">
                <span className="text-sm text-dark/80">E-mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange("email")}
                  className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-[var(--color-accent)] focus:ring-0 placeholder:text-neutral-400"
                  placeholder="hi@zynor.ai"
                />
              </label>

              <label className="block">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark/80">Phone</span>
                  {phoneInvalid && (
                    <span className="text-xs text-red-600">
                      Enter a 10-digit number
                    </span>
                  )}
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange("phone")}
                  className={`mt-2 block w-full bg-transparent border-0 border-b ${
                    phoneInvalid
                      ? "border-red-400 focus:border-red-600"
                      : "border-neutral-300 focus:border-[var(--color-accent)]"
                  } focus:ring-0 placeholder:text-neutral-400`}
                  placeholder="123-456-7890"
                />
              </label>

              <label className="block">
                <span className="text-sm text-dark/80">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={onChange("message")}
                  className="mt-2 block w-full resize-none bg-transparent border-0 border-b border-neutral-300 focus:border-[var(--color-accent)] focus:ring-0 placeholder:text-neutral-400"
                  placeholder="How can we help?"
                />
              </label>

              {success && (
                <div className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-800 border border-green-200">
                  {success}
                </div>
              )}
              {error && (
                <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800 border border-red-200">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-light px-7 py-3 text-[15px] font-semibold text-dark shadow-sm transition hover:bg-[var(--color-accent)] hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Contact Us"}
                </button>
              </div>
            </form>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-6 text-dark/80">
              {[ 
                { href: "https://facebook.com", icon: <Facebook /> },
                { href: "https://instagram.com", icon: <Instagram /> },
                { href: "https://youtube.com", icon: <Youtube /> },
                { href: "https://tiktok.com", icon: <SiTiktok /> },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--color-accent)] hover:scale-110"
                >
                  <span className="h-6 w-6 inline-flex">{s.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <dl className="space-y-6 text-[15px]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10">
                  <PhoneIcon className="h-4 w-4 text-[var(--color-accent)]" />
                </span>
                <dd className="text-dark/80 hover:text-[var(--color-accent)] transition">
                  <a href="tel:8139211717">(813) 921-1717</a>
                </dd>
              </div>

              <div>
                <dd className="text-dark/80 hover:text-[var(--color-accent)] transition break-all">
                  <a href="mailto:info@zynor.ai">info@zynor.ai</a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-dark">Location</dt>
                <dd className="text-dark/70">Florida</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* accent glow */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
    </section>
  );
}
