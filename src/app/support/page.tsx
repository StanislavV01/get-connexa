"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type Subject = "general" | "bug" | "feature" | "account";

interface FormState {
  name: string;
  email: string;
  subject: Subject;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "general",
  message: "",
};

const subjectOptions: { value: Subject; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "account", label: "Account Issue" },
];

export default function SupportPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-[#0F172A] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How can we help?
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Need help? We&apos;re here for you. We typically respond within 24 hours.
        </p>
      </section>

      {/* Info Cards */}
      <section className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-[#0F172A] font-semibold mb-1">Email Us</h3>
            <a href="mailto:connexa.develop@gmail.com" className="text-[#3B82F6] text-sm hover:underline">
              connexa.develop@gmail.com
            </a>
          </div>

          {/* Response Time Card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[#0F172A] font-semibold mb-1">Response Time</h3>
            <p className="text-[#64748B] text-sm">We typically respond within 24 hours</p>
          </div>

          {/* Bug Reports Card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.047.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a.75.75 0 01-.164 1.44H3.957a.75.75 0 01-.164-1.44A23.73 23.73 0 0112 12.75zM9.75 8.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6 10.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V10.5zm10.5 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5z" />
              </svg>
            </div>
            <h3 className="text-[#0F172A] font-semibold mb-1">Bug Reports</h3>
            <p className="text-[#64748B] text-sm">
              Include relevant details and screenshots so we can help faster
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-2">Message Sent!</h2>
            <p className="text-[#64748B] mb-6">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm(initialFormState);
              }}
              className="text-[#3B82F6] font-medium hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-1">Send us a message</h2>
            <p className="text-[#64748B] mb-8">Fill out the form below and we&apos;ll be in touch.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition appearance-none"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition resize-none"
                />
                <p className="text-right text-xs text-[#94A3B8] mt-1">
                  {form.message.length}/1000
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#3B82F6] text-white font-medium py-3.5 rounded-full hover:bg-[#2563EB] active:scale-[0.98] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        )}

        {/* Link to FAQ */}
        <div className="text-center mt-10">
          <p className="text-[#64748B]">
            Looking for answers?{" "}
            <Link href="/faq" className="text-[#3B82F6] font-medium hover:underline">
              Check our FAQ
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
