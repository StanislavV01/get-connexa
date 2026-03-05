export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
        {/* Decorative gradient blob */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#6366F1]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-[#3B82F6]/10 to-transparent blur-2xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            LinkedIn shows their title.{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent">
              Connexa remembers their story.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#64748B] sm:text-xl">
            We transform how you manage relationships from in-person events.
            Capture contacts, sync with LinkedIn, and never lose a valuable
            connection again.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/connexa-relationship-builder/id6755447170"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#2563EB]"
            >
              {/* Apple icon */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aleksandr.antonenko.mux.Connexa&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0F172A]/20 px-8 py-3.5 text-base font-medium text-[#0F172A] transition hover:border-[#0F172A]/40 hover:bg-[#0F172A]/5"
            >
              {/* Android icon */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.523 15.341a.6.6 0 0 0 .598-.598v-4.71a.6.6 0 0 0-.598-.598h-.295V7.394a4.09 4.09 0 0 0-1.262-2.95l.79-.79a.39.39 0 0 0-.553-.552l-.89.89A4.06 4.06 0 0 0 13.5 3.23V2.6a.6.6 0 0 0-1.2 0v.63a4.06 4.06 0 0 0-2.413.762l-.89-.89a.39.39 0 0 0-.552.553l.79.79a4.09 4.09 0 0 0-1.262 2.95v2.04h-.295a.6.6 0 0 0-.598.598v4.71a.6.6 0 0 0 .598.598h.295v1.06a1.8 1.8 0 0 0 1.8 1.8h.6v2.2a.6.6 0 0 0 1.2 0v-2.2h1.65v2.2a.6.6 0 0 0 1.2 0v-2.2h.6a1.8 1.8 0 0 0 1.8-1.8v-1.06h.295zM9.173 7.394a2.89 2.89 0 0 1 2.89-2.89h.075a2.89 2.89 0 0 1 2.89 2.89v2.04H9.173V7.394z" />
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-[#0F172A]/5 bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center">
          <p className="text-sm font-medium tracking-wide text-[#64748B]">
            Trusted by{" "}
            <span className="font-semibold text-[#0F172A]">2,000+</span>{" "}
            professionals at networking events worldwide
          </p>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              See Connexa in Action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748B]">
              Watch how Connexa helps you capture, organize, and grow your
              professional network effortlessly.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl shadow-2xl shadow-[#0F172A]/10 ring-1 ring-[#0F172A]/5">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/7sdYZayYRIA"
                title="Connexa Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Networking shouldn&apos;t be this hard
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#0F172A]/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Lost in the Shuffle
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Business cards get lost, phone contacts are messy, and you
                forget who&apos;s who within days.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#0F172A]/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <svg
                  className="h-6 w-6 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Follow-up Failures
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                You mean to follow up soon, but weeks pass and the moment is
                gone.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#0F172A]/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <svg
                  className="h-6 w-6 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                LinkedIn Limbo
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                You have hundreds of LinkedIn connections but no context on who
                anyone really is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Everything you need to master networking
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748B]">
              Connexa combines contact capture, LinkedIn integration, and
              AI-powered insights in one app.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: Instant Contact Capture */}
            <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-8 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <svg
                  className="h-6 w-6 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Instant Contact Capture
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                QR codes, business card scanning, and one-tap adding. No more
                fumbling with phones.
              </p>
            </div>

            {/* Feature 2: Real-time Notes */}
            <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-8 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                <svg
                  className="h-6 w-6 text-[#6366F1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Real-time Notes
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Add context during meetings so you never forget where you met or
                what you discussed.
              </p>
            </div>

            {/* Feature 3: LinkedIn Integration */}
            <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-8 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <svg
                  className="h-6 w-6 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                LinkedIn Integration
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Seamlessly sync contacts with LinkedIn profiles and import
                existing connections.
              </p>
            </div>

            {/* Feature 4: Smart Reminders */}
            <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-8 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <svg
                  className="h-6 w-6 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Smart Reminders
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                AI-powered follow-up suggestions based on conversation context
                and optimal timing.
              </p>
            </div>

            {/* Feature 5: Smart Search */}
            <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-8 transition hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                <svg
                  className="h-6 w-6 text-[#6366F1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Smart Search
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Find people you&apos;ve met even if you&apos;ve forgotten their
                names. Search by context, notes, or events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Get started in 3 simple steps
            </h2>
          </div>
          <div className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Dashed connector line (visible on lg+) */}
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden items-center lg:flex">
              <div className="mx-auto w-2/3 border-t-2 border-dashed border-[#3B82F6]/30" />
            </div>

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6] text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
                1
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#0F172A]">
                Install the Extension
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Add the Connexa browser extension to sync your LinkedIn network
                automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6] text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
                2
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#0F172A]">
                Download the App
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Get Connexa on iOS or Android to capture contacts at events.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6] text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
                3
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#0F172A]">
                Never Lose a Connection
              </h3>
              <p className="mt-2 text-[#64748B] leading-relaxed">
                Smart reminders and AI keep your network active and organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0F172A] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-white sm:text-5xl">87%</p>
              <p className="mt-2 text-[#94A3B8]">
                of networkers lose valuable connections
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white sm:text-5xl">
                2,000+
              </p>
              <p className="mt-2 text-[#94A3B8]">Active users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white sm:text-5xl">300+</p>
              <p className="mt-2 text-[#94A3B8]">
                Contacts synced daily per user
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="download"
        className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your networking?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Download Connexa today and never lose a valuable connection again.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/connexa-relationship-builder/id6755447170"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-[#0F172A] shadow-lg transition hover:bg-white/90"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aleksandr.antonenko.mux.Connexa&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.523 15.341a.6.6 0 0 0 .598-.598v-4.71a.6.6 0 0 0-.598-.598h-.295V7.394a4.09 4.09 0 0 0-1.262-2.95l.79-.79a.39.39 0 0 0-.553-.552l-.89.89A4.06 4.06 0 0 0 13.5 3.23V2.6a.6.6 0 0 0-1.2 0v.63a4.06 4.06 0 0 0-2.413.762l-.89-.89a.39.39 0 0 0-.552.553l.79.79a4.09 4.09 0 0 0-1.262 2.95v2.04h-.295a.6.6 0 0 0-.598.598v4.71a.6.6 0 0 0 .598.598h.295v1.06a1.8 1.8 0 0 0 1.8 1.8h.6v2.2a.6.6 0 0 0 1.2 0v-2.2h1.65v2.2a.6.6 0 0 0 1.2 0v-2.2h.6a1.8 1.8 0 0 0 1.8-1.8v-1.06h.295zM9.173 7.394a2.89 2.89 0 0 1 2.89-2.89h.075a2.89 2.89 0 0 1 2.89 2.89v2.04H9.173V7.394z" />
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
