export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "1-Click Cloning",
      description: "Just paste a URL and get a complete React application in seconds. No manual coding required."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Production-Ready",
      description: "Generated code follows best practices with TypeScript, responsive design, and optimized performance."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Fully Extensible",
      description: "Own your code completely. Modify, extend, and deploy anywhere without vendor lock-in."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Why developers choose SiteCloner AI
          </h2>
          <p className="text-lg text-zinc-600">
            Skip the tedious work and focus on what matters - building great products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-zinc-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}