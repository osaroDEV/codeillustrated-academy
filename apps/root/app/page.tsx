import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Code Illustrated</h1>
            <div className="flex gap-6">
              <Link
                href="/academy"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Academy
              </Link>
              <Link
                href="/labs"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Labs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <section className="py-24 text-center">
          <h2 className="text-6xl font-bold text-slate-900 mb-6">
            Learn. Code. Visualize.
          </h2>
          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Master programming through visual learning and hands-on practice
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/academy"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-lg font-semibold"
            >
              Explore Academy
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold"
            >
              Try Labs
            </Link>
          </div>
        </section>

        <section className="py-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Academy</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive courses and tutorials designed to take you from beginner to expert.
            </p>
            <Link href="/academy" className="text-blue-600 hover:text-blue-700 font-medium">
              Start Learning →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Labs</h3>
            <p className="text-slate-600 mb-4">
              Interactive experiments and coding challenges to practice your skills.
            </p>
            <Link href="/labs" className="text-slate-600 hover:text-slate-700 font-medium">
              Explore Labs →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t mt-24 py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>© 2025 Code Illustrated. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
