import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  popular?: boolean;
  onOrder: (product: { id: string; name: string; price: string }) => void;
}

export function ProductCard({ id, name, price, image, description, popular, onOrder }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-product transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          {popular && (
            <Badge className="absolute top-3 left-3 z-10 bg-gradient-primary text-white border-0">
              Popular
            </Badge>
          )}
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {price}
            </span>
            <Button 
              onClick={() => onOrder({ id, name, price })}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Order Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}