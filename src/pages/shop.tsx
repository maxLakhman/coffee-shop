import React, { useState } from 'react';
import { Product, useCart } from '../app/contexts/CartContext';
import { ProductCard } from '../app/components/ProductCard';
import { ProductDetail } from '../app/components/ProductDetail';
import { toast } from 'sonner';

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
  {
    id: 7,
    name: 'Guatemala Antigua',
    price: 18.49,
    description: 'Velvety body with cocoa, spice, and floral notes. A sophisticated medium-dark roast from volcanic soil.',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYWd8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium-Dark',
    origin: 'Guatemala',
    weight: '12 oz',
  },
  {
    id: 8,
    name: 'Jamaican Blue Mountain',
    price: 34.99,
    description: 'Exceptionally smooth and mild with sweet herbal notes. One of the world\'s most sought-after coffees.',
    image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Jamaica',
    weight: '8 oz',
  },
  {
    id: 9,
    name: 'Peru Organic',
    price: 16.49,
    description: 'Sweet and mellow with hints of chocolate and bright citrus. Certified organic and fair trade.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Peru',
    weight: '12 oz',
  },
  {
    id: 10,
    name: 'Rwanda Bourbon',
    price: 19.49,
    description: 'Bright and juicy with red fruit and floral aromatics. A washed process gem from East Africa.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWV8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light',
    origin: 'Rwanda',
    weight: '12 oz',
  },
  {
    id: 11,
    name: 'Mexico Chiapas',
    price: 15.49,
    description: 'Light and delicate with nutty undertones and subtle chocolate. Great for breakfast brewing.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFufGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light-Medium',
    origin: 'Mexico',
    weight: '12 oz',
  },
  {
    id: 12,
    name: 'Tanzania Peaberry',
    price: 21.99,
    description: 'Vibrant and complex with wine-like acidity and hints of black cherry. A rare peaberry selection.',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzZWVkc3xlbnwxfHx8fDE3NjkyNDQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light',
    origin: 'Tanzania',
    weight: '12 oz',
  },
  {
    id: 13,
    name: 'Hawaiian Kona',
    price: 29.99,
    description: 'Incredibly smooth with rich, aromatic flavor and low acidity. Grown on the volcanic slopes of Mauna Loa.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtfGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Hawaii',
    weight: '8 oz',
  },
  {
    id: 14,
    name: 'Nicaragua Jinotega',
    price: 17.49,
    description: 'Balanced and sweet with notes of honey, almond, and milk chocolate. A crowd-pleasing medium roast.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtpbmd8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Nicaragua',
    weight: '12 oz',
  },
  {
    id: 15,
    name: 'Papua New Guinea',
    price: 18.99,
    description: 'Full-bodied and exotic with earthy notes and hints of tropical fruit. A unique Pacific island coffee.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBncmluZGluZ3xlbnwxfHx8fDE3NjkyNDQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium-Dark',
    origin: 'Papua New Guinea',
    weight: '12 oz',
  },
  {
    id: 16,
    name: 'Yemen Mokha',
    price: 26.99,
    description: 'Ancient and wild with complex spice, dried fruit, and chocolate. A historic coffee with incredible depth.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhfGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Medium',
    origin: 'Yemen',
    weight: '8 oz',
  },
  {
    id: 17,
    name: 'El Salvador Pacamara',
    price: 22.49,
    description: 'Exotic and fruit-forward with notes of peach, papaya, and honey. A rare hybrid varietal.',
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBhcnR8ZW58MXx8fHwxNzY5MjQ0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Light',
    origin: 'El Salvador',
    weight: '12 oz',
  },
  {
    id: 18,
    name: 'India Monsooned Malabar',
    price: 17.99,
    description: 'Uniquely processed with low acidity and heavy body. Notes of spice, earth, and nuts.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2OTI0NDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roastLevel: 'Dark',
    origin: 'India',
    weight: '12 oz',
  },
];

const Shop: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop All Coffee</h1>
          <p className="text-gray-600">
            Premium single-origin beans, roasted fresh to order
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
      </main>

      <ProductDetail
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Shop;
