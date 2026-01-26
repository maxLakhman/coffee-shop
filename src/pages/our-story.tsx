import React from "react";

const OurStory: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Every great cup of coffee starts with a story — this is ours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          {/* The Beginning */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Beginning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What began as a simple love for coffee turned into a passion for
              creating meaningful experiences. We believe coffee is more than a
              drink — it's a moment to pause, connect, and recharge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In 2018, we started Roast & Co. in a small garage in Portland,
              Oregon. Armed with a vintage roaster and an obsession with quality,
              we set out to source the finest beans from around the world and
              share them with our community.
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-12 bg-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              From sourcing quality beans to crafting intuitive digital experiences,
              our journey is about care, creativity, and community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work directly with farmers who share our commitment to
              sustainability and quality. Every bean is carefully selected,
              ethically sourced, and roasted in small batches to ensure peak
              freshness and flavor.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every bean is hand-selected
                  and roasted to perfection, bringing out the unique
                  characteristics of each origin.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We're committed to environmental responsibility and ethical
                  sourcing. Our partnerships with farmers ensure fair wages and
                  sustainable practices.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  Coffee brings people together. We're building a community of
                  coffee lovers who appreciate the craft and care behind every cup.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Education
                </h3>
                <p className="text-gray-600">
                  We believe in sharing knowledge. From brewing guides to origin
                  stories, we help our customers deepen their appreciation for
                  specialty coffee.
                </p>
              </div>
            </div>
          </div>

          {/* The Experience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Crafted for You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This platform was built with users in mind — people who value
              simplicity, authenticity, and great design as much as great coffee.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every detail, from the way we present our beans to how you
              experience our website, is intentionally designed to make your
              coffee journey seamless and enjoyable.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-gray-300 mb-6">
              Whether you're a coffee connoisseur or just beginning to explore
              specialty coffee, we invite you to be part of our story.
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Coffees
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2018</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-gray-600">Origin Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Partner Farms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;