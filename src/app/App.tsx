import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { CartProvider, Product, useCart } from './contexts/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CartSheet } from './components/CartSheet';
import { CheckoutForm } from './components/CheckoutForm';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import Shop from '../pages/shop';
import OurStory from '../pages/our-story';
import BrewingGuide from '../pages/brewing-guide';

const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    price: 18.99,
    description: 'Bright and floral with notes of jasmine, bergamot, and stone fruit. A classic natural process coffee from the birthplace of coffee.',
    image: 'https://images.unsplash.com/photo-1630861412757-d9743d318312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBjb2ZmZWV8ZW58MXx8fHwxNzY5MjI2NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light',
    origin: 'Ethiopia',
    weight: '12 oz',
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    price: 16.99,
    description: 'Rich and balanced with chocolate, caramel, and nutty notes. A smooth medium roast perfect for any time of day.',
    image: 'https://images.unsplash.com/photo-1552640958-291d4a2e2ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Colombia',
    weight: '12 oz',
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    price: 17.99,
    description: 'Full-bodied and earthy with notes of dark chocolate, tobacco, and cedar. A bold dark roast from Indonesia.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjkyNDQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Dark',
    origin: 'Indonesia',
    weight: '12 oz',
  },
  {
    id: 4,
    name: 'Costa Rican Tarrazu',
    price: 19.99,
    description: 'Clean and crisp with citrus acidity and honey sweetness. A bright medium roast from the Tarrazu region.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZ3xlbnwxfHx8fDE3NjkyNDQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Costa Rica',
    weight: '12 oz',
  },
  {
    id: 5,
    name: 'Brazilian Santos',
    price: 15.99,
    description: 'Smooth and nutty with low acidity and notes of chocolate and caramel. Perfect for espresso or drip.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXB8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Brazil',
    weight: '12 oz',
  },
  {
    id: 6,
    name: 'Kenyan AA',
    price: 20.99,
    description: 'Bold and wine-like with bright acidity and notes of blackcurrant and grapefruit. A complex light roast.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwb3VyJTIwb3ZlcnxlbnwxfHx8fDE3NjkyNDQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light',
    origin: 'Kenya',
    weight: '12 oz',
  },
];

function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <main>
        <Hero />
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Coffees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium coffee beans from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </section>
      </main>

      <ProductDetail
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header onCartClick={() => setIsCartOpen(true)} />
          
          {showCheckout ? (
            <CheckoutForm onBack={() => setShowCheckout(false)} />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/brewing-guide" element={<BrewingGuide />} />
            </Routes>
          )}

          {isCartOpen && (
            <CartSheet
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                setIsCartOpen(false);
                setShowCheckout(true);
              }}
            />
          )}

          <Toaster position="bottom-right" />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
