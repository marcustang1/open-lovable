export default function Testimonials() {
  const testimonials = [
    {
      content: "SiteCloner AI saved me weeks of development time. I cloned our competitor's landing page and had our version live in under an hour. The generated code is clean and production-ready.",
      author: {
        name: "Sarah Chen",
        role: "Frontend Developer",
        company: "TechStart Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      }
    },
    {
      content: "As a designer who codes, this tool is a game-changer. I can quickly prototype ideas by cloning existing sites and then customize them. The TypeScript support is excellent.",
      author: {
        name: "Marcus Rodriguez",
        role: "Product Designer",
        company: "Design Studio",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      }
    },
    {
      content: "We use SiteCloner AI for rapid prototyping with clients. Being able to show them a working version of their ideas in minutes has transformed our sales process.",
      author: {
        name: "Emily Watson",
        role: "Agency Owner",
        company: "Digital Craft",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      }
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-zinc-600">
            Join thousands of developers who are building faster with SiteCloner AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-zinc-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zinc-200"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Content */}
              <blockquote className="text-zinc-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  loading="lazy"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-zinc-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-8 text-zinc-400">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.9/5 rating</span>
            </div>
            <div className="text-sm">•</div>
            <div className="text-sm">2,500+ developers</div>
            <div className="text-sm">•</div>
            <div className="text-sm">50,000+ sites cloned</div>
          </div>
        </div>
      </div>
    </section>
  );
}