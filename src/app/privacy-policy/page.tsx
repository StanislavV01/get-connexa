import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-[#0F172A] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#94A3B8] text-lg">Last Updated: October 9, 2025</p>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 md:p-12">
          {/* Intro */}
          <p className="text-[#64748B] leading-relaxed mb-4">
            This Privacy Policy describes how <strong className="text-[#0F172A]">Harbor International Corp.</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and
            shares information in connection with the Connexa application and services (the &quot;Service&quot;).
          </p>
          <p className="text-[#64748B] leading-relaxed">
            By using Connexa, you agree to the collection and use of information in accordance with this policy.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            1. Information We Collect
          </h2>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Account Information
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            When you create an account, we collect:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Password (securely hashed)</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Contact Data
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            We collect contact information from sources you connect, including:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Names, emails, organizations, and titles from LinkedIn, Google, Outlook, or phone syncs</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            User-Generated Content
          </h3>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Notes, tags, meeting details, and reminders you create within the app</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Support Communications
          </h3>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Messages you send to our customer service team</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Device &amp; Usage Data
          </h3>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Device type, app version, browser, and operating system</li>
            <li>IP address and access times</li>
            <li>Anonymized analytics data</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Cookies and Local Storage
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-4">
            We use cookies and local storage to save your preferences and improve your experience.
          </p>

          <h3 className="text-base font-semibold text-[#0F172A] mt-6 mb-2">
            Integration Data
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-2">
            When you connect third-party services (LinkedIn, Google, Outlook), we may collect:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-1 ml-2 mb-4">
            <li>Contact syncing data</li>
            <li>Meeting history</li>
            <li>Event timelines</li>
            <li>AI-generated summaries</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-2 mb-4">
            <li>Provide and personalize the Service</li>
            <li>Enable contact imports, notes, reminders, and AI summaries</li>
            <li>Sync and update contact and meeting data</li>
            <li>Send service communications and provide support</li>
            <li>Maintain security and integrity of the platform</li>
            <li>Comply with legal obligations</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            3. How We Share Information
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-3 font-medium">
            We do not sell your personal data.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            We may share information with:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-2 mb-4">
            <li><strong className="text-[#0F172A]">Service providers</strong> — hosting, analytics, and email delivery partners who help operate the Service</li>
            <li><strong className="text-[#0F172A]">Legal requirements</strong> — when mandated by law, regulation, or legal process</li>
            <li><strong className="text-[#0F172A]">Business transfers</strong> — in connection with mergers, acquisitions, or asset sales</li>
            <li><strong className="text-[#0F172A]">With your consent</strong> — such as data exports or collaborations you initiate</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            4. Data Retention
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-3">
            We retain your data for as long as your account is active or as needed to provide the Service.
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-2 mb-4">
            <li>You may delete your account at any time</li>
            <li>Upon deletion, your data will be removed or anonymized within a reasonable period, unless retention is required by law</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            5. Your Rights and Choices
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-[#64748B] space-y-2 ml-2 mb-4">
            <li>Access or obtain a copy of your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li>Withdraw consent for processing</li>
            <li>Export your data (data portability)</li>
          </ul>
          <p className="text-[#64748B] leading-relaxed">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:connexa.develop@gmail.com" className="text-[#3B82F6] hover:underline">
              connexa.develop@gmail.com
            </a>.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            6. Data Security
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of
            transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            7. International Data Transfers
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Your data may be processed and stored outside your country of residence, including in the United States. By using Connexa, you
            consent to such transfers.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Connexa is intended for users aged 16 and older. We do not knowingly collect personal information from children under 16. If we
            learn that we have collected such data, we will take steps to delete it promptly.
          </p>

          {/* Section 9 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            9. Policy Changes
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised &quot;Last Updated&quot; date. Your
            continued use of the Service after any changes indicates your acceptance of the updated policy.
          </p>

          {/* Section 10 */}
          <h2 className="text-xl font-semibold text-[#0F172A] mt-10 mb-4">
            10. Contact Us
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-3">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul className="text-[#64748B] space-y-2 ml-2">
            <li><strong className="text-[#0F172A]">Operator:</strong> Harbor International Corp.</li>
            <li>
              <strong className="text-[#0F172A]">Email:</strong>{" "}
              <a href="mailto:connexa.develop@gmail.com" className="text-[#3B82F6] hover:underline">
                connexa.develop@gmail.com
              </a>
            </li>
            <li>
              <strong className="text-[#0F172A]">Website:</strong>{" "}
              <Link href="/" className="text-[#3B82F6] hover:underline">
                getconnexa.app
              </Link>
            </li>
            <li><strong className="text-[#0F172A]">Jurisdiction:</strong> Delaware, USA</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
