import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { OrderModal } from "@/components/OrderModal";
import { Instagram, Mail, Phone, MapPin, Heart, Star } from "lucide-react";
import tumbler1 from "@/assets/tumbler-1.jpg";
import tumbler2 from "@/assets/tumbler-2.jpg";
import tumbler3 from "@/assets/tumbler-3.jpg";
import tumbler4 from "@/assets/tumbler-4.jpg";
import tumbler5 from "@/assets/tumbler-5.jpg";
const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ id: string; name: string; price: string } | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const products = [
    {
      id: "1",
      name: "Rose Quartz",
      price: "2200L",
      image: tumbler1,
      description: "1200ml",
      popular: true
    },
    {
      id: "2", 
      name: "Black",
      price: "2200L",
      image: tumbler2,
      description: "1200ml"
    },
    {
      id: "3",
      name: "Sky blue", 
      price: "2200L",
      image: tumbler3,
      description: "1200ml"
    },
    {
      id: "4",
      name: "Tie-dye Blue",
      price: "2400L", 
      image: tumbler4,
      description: "1200ml/pipez metalike/pastruese per pipezen dhe goten"
    },
    {
      id: "5",
      name: "Pink Bow Tulip ",
      price: "2000L", 
      image: tumbler5,
      description: "900ml"
    }
  ];

  const handleOrder = (product: { id: string; name: string; price: string }) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-cover bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-black/30  backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            SipSparks 
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Elevate your beverage experience with our beautifully crafted tumblers. 
            Perfect for hot and cold drinks, designed for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => window.open('https://www.instagram.com/sipsparks_al?igsh=MTdhaW9yZ2JkNTFvcw%3D%3D&utm_source=qr', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of premium tumblers, each designed with attention to detail and crafted for everyday luxury.
            </p>
            <p style={{paddingTop:'10px'}}className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivery
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Albania: 200L
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kosovo/North Macedonia: 5 euro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onOrder={handleOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Tumblers?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Made from high-grade stainless steel with double-wall insulation for optimal temperature retention.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Stylish Design</h3>
              <p className="text-muted-foreground">
                 Aesthetics that complement your lifestyle and personal brand.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and secure shipping to get your new tumbler to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have questions about our tumblers or want to place a custom order? We'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card">
              <Instagram className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">@sipsparks_al</p>
            </div>
            
            {/* <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">hello@tumblers.com</p>
            </div> */}
            
            {/* <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-card">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Premium Tumblers</h3>
          <p className="mb-6 opacity-90">
            Crafting the perfect drinking experience, one tumbler at a time.
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm opacity-70">
            © 2024 Premium Tumblers. Made with ❤️ for tumbler lovers.
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={closeOrderModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default Index;
