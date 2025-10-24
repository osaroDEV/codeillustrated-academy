export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Code Illustrated Labs
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Interactive coding experiments and hands-on learning experiences
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Coming Soon
              </h3>
              <p className="text-slate-400">
                Interactive coding labs are being prepared for you
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Stay Tuned
              </h3>
              <p className="text-slate-400">
                Exciting experiments and learning projects on the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
