import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Product } from '@/app/contexts/CartContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, isOpen, onClose, onAddToCart }: ProductDetailProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-white text-black hover:bg-white">
              {product.roastLevel}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600">{product.origin}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-gray-500">{product.weight}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Roast Level</h4>
                  <p className="font-medium">{product.roastLevel}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Origin</h4>
                  <p className="font-medium">{product.origin}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Weight</h4>
                  <p className="font-medium">{product.weight}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Type</h4>
                  <p className="font-medium">Whole Bean</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
