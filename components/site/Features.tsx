export default function Features() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Smart DOM Parsing",
      description: "Advanced AI analyzes website structure, extracting semantic meaning from HTML elements and CSS styles.",
      details: [
        "Intelligent component detection",
        "Semantic HTML analysis",
        "CSS-to-Tailwind conversion",
        "Asset optimization"
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Component Abstraction",
      description: "Automatically generates reusable React components with proper TypeScript interfaces and props.",
      details: [
        "Modular component architecture",
        "TypeScript interfaces",
        "Props extraction",
        "State management setup"
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Instant Preview",
      description: "See your cloned website come to life in real-time with hot reload and responsive preview modes.",
      details: [
        "Real-time preview",
        "Mobile/desktop views",
        "Hot reload support",
        "Interactive debugging"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Powerful features for modern development
          </h2>
          <p className="text-lg text-zinc-600">
            Built with the latest AI technology to deliver pixel-perfect results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-zinc-500">
                    <svg className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-sm border border-zinc-200">
            <span className="text-sm text-zinc-600">Ready to try it?</span>
            <button className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
              Start cloning →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}