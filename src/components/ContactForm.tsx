import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, User, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="boxing-card max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-glow">
          Записаться на тренировку
        </CardTitle>
        <p className="text-muted-foreground">
          Оставьте заявку и мы свяжемся с вами
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 bg-secondary border-border focus:border-primary smooth-transition"
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="tel"
              name="phone"
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={handleChange}
              required
              className="pl-10 bg-secondary border-border focus:border-primary smooth-transition"
            />
          </div>
          
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Textarea
              name="message"
              placeholder="Сообщение (необязательно)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="pl-10 bg-secondary border-border focus:border-primary smooth-transition resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            variant="boxing" 
            size="lg" 
            className="w-full animate-glow-pulse"
          >
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};