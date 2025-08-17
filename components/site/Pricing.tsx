import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out SiteCloner AI",
      features: [
        "5 site clones per month",
        "Basic component generation",
        "Standard templates",
        "Community support",
        "Export to GitHub"
      ],
      limitations: [
        "Watermark on generated sites",
        "Limited customization options"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional developers and teams",
      features: [
        "Unlimited site clones",
        "Advanced AI components",
        "Premium templates",
        "Priority support",
        "Custom branding",
        "API access",
        "Team collaboration",
        "Advanced customization",
        "White-label exports"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-600">
            Start free, upgrade when you need more. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-orange-200 ring-2 ring-orange-100' 
                  : 'border-zinc-200 hover:border-orange-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-zinc-900">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-zinc-600">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-zinc-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-zinc-900 mb-4">Limitations:</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-zinc-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-zinc-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600'
                    : 'bg-zinc-900 hover:bg-zinc-800'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Additional Info */}
              {plan.name === 'Pro' && (
                <p className="text-center text-sm text-zinc-500 mt-4">
                  14-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mt-16">
          <h3 className="text-xl font-semibold text-zinc-900 text-center mb-8">
            Frequently asked questions
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h4 className="font-medium text-zinc-900 mb-2">
                Can I cancel my subscription anytime?
              </h4>
              <p className="text-zinc-600 text-sm">
                Yes, you can cancel your Pro subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h4 className="font-medium text-zinc-900 mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-zinc-600 text-sm">
                We offer a 14-day money-back guarantee for Pro subscriptions. If you're not satisfied, contact us for a full refund.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h4 className="font-medium text-zinc-900 mb-2">
                Is the generated code really production-ready?
              </h4>
              <p className="text-zinc-600 text-sm">
                Yes! Our AI generates clean, optimized React/Next.js code with TypeScript, proper component structure, and responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}