import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-[500px] bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1696350826221-983026d1c627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYWVzdGhldGljfGVufDF8fHx8MTc2OTE5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Artisan Coffee,
            <br />
            Perfectly Roasted
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover our curated selection of premium coffee beans from around the world. 
            Freshly roasted to perfection, delivered to your door.
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-white text-gray-900 hover:bg-gray-100 relative z-20"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
