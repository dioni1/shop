import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { id: string; name: string; price: string } | null;
}

export function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      product_name: product?.name,
      product_price: product?.price
    };

    try {
      await emailjs.send(
        'service_8etlehv', // From EmailJS dashboard
        'template_gav3mrc', // From EmailJS dashboard
        templateParams,
        '-Vedm-sX6VmdwT4Pe' // From EmailJS dashboard
      );
      toast({
        title: "Order Submitted! 🎉",
        description: "Thank you for your interest! We'll contact you soon to confirm your order.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-card border-0 shadow-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Order {product.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll get back to you with order details
          </DialogDescription>
        </DialogHeader>

        <div className="bg-secondary/50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-medium">{product.name}</span>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {product.price} + Transport
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="transition-all duration-200 focus:shadow-glow"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="transition-all duration-200 focus:shadow-glow"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="transition-all duration-200 focus:shadow-glow"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Special Requests (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Any special customizations or questions?"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={3}
              className="transition-all duration-200 focus:shadow-glow"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}