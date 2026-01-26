import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from '../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden cursor-pointer transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100" onClick={() => onViewDetails(product)}>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-white text-black hover:bg-white">
          {product.roastLevel}
        </Badge>
      </div>
      
      <CardContent className="p-4" onClick={() => onViewDetails(product)}>
        <div className="mb-1">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.origin}</p>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mt-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{product.weight}</span>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
