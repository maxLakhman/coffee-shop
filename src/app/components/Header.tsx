import { Link } from 'react-router-dom';
import { ShoppingCart, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-semibold">Roast & Co.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/shop" className="text-sm hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link to="/our-story" className="text-sm hover:text-gray-600 transition-colors">
            Our Story
          </Link>
          <Link to="/brewing-guide" className="text-sm hover:text-gray-600 transition-colors">
            Brewing Guide
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {cartCount}
            </Badge>
          )}
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </div>
    </header>
  );
}
