"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Connexa?",
    answer:
      "Connexa is a personal networking assistant designed to help you remember the people you meet and the context behind each connection. It combines contact capture, LinkedIn sync, and AI-powered insights.",
  },
  {
    question: "Who is Connexa for?",
    answer:
      "Connexa is built for founders, investors, students, and entrepreneurs who network in-person and want to maintain meaningful professional relationships.",
  },
  {
    question: "Is Connexa free?",
    answer:
      "Yes — Connexa is free to start during our beta phase. We'll introduce premium plans in the future with advanced features.",
  },
  {
    question: "How is Connexa different from a CRM or contacts app?",
    answer:
      "Unlike CRMs designed for sales teams, Connexa belongs to you — not your employer. It centralizes your professional relationships across platforms and events.",
  },
  {
    question: "How long does LinkedIn sync take?",
    answer:
      "Initial sync usually completes within 15–30 minutes. Deep sync processes approximately 300 contacts daily, with automatic daily checks for new connections.",
  },
  {
    question: "Is Connexa a beta product?",
    answer:
      "Yes. Connexa is currently in beta. You may encounter occasional bugs, but your feedback is driving rapid improvements.",
  },
  {
    question: "How can I share feedback or report a bug?",
    answer:
      "You can reply to any Connexa email or message us via WhatsApp. We read every message.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data belongs to you. It's private, never sold, and you can download or request deletion at any time.",
  },
  {
    question: "Why isn't the AI assistant very accurate yet?",
    answer:
      "AI accuracy improves as we sync more of your contacts and gather context. During the initial sync phase, results may be limited.",
  },
  {
    question: "How do I provide feedback?",
    answer:
      "Reply to any Connexa email or reach out via WhatsApp. We love hearing from our users.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-[#64748B] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-[#0F172A] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Everything you need to know about Connexa
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-[#E2E8F0] last:border-b-0`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="text-[#0F172A] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#64748B] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-10 text-center">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-3">
            Still have questions?
          </h2>
          <p className="text-[#64748B] mb-6">
            Our support team is ready to help you out.
          </p>
          <Link
            href="/support"
            className="inline-block bg-[#3B82F6] text-white font-medium px-8 py-3 rounded-full hover:bg-[#2563EB] transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
