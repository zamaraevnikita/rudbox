import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BoxingCarousel } from "@/components/BoxingCarousel";

import { PricingTable } from "@/components/PricingTable";
import { MapPin, Phone, Mail, Clock, Users, Trophy, Target, Instagram, Facebook, Youtube, MessageCircle, Send } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-boxing.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainingSession from "@/assets/training-session.jpg";
import equipment from "@/assets/equipment.jpg";

const Index = () => {
  // Gallery carousel data
  const galleryItems = [
    {
      id: "1",
      image: gymInterior,
      title: "Современный зал",
      description: "Профессиональное оборудование для всех уровней подготовки"
    },
    {
      id: "2", 
      image: trainingSession,
      title: "Групповые тренировки",
      description: "Мотивирующая атмосфера и командный дух"
    },
    {
      id: "3",
      image: equipment,
      title: "Качественное оборудование",
      description: "Профессиональные боксёрские снаряды и инвентарь"
    }
  ];

  // Staff carousel data
  const staffItems = [
    {
      id: "1",
      image: trainer1,
      title: "Александр Петров",
      subtitle: "Главный тренер",
      description: "Мастер спорта, опыт 15 лет. Специализация: техника ударов, спарринги"
    },
    {
      id: "2",
      image: trainer2, 
      title: "Мария Волкова",
      subtitle: "Тренер женских групп",
      description: "КМС по боксу, фитнес-инструктор. Специализация: фитнес-бокс, самооборона"
    }
  ];

  // Reviews data
  const reviewsItems = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      title: "Дмитрий К.",
      description: "Отличный зал! Профессиональные тренеры, современное оборудование. За 3 месяца кардинально изменился."
    },
    {
      id: "2", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Анна С.",
      description: "Записалась в женскую группу. Атмосфера супер, тренер Мария - настоящий профессионал!"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      title: "Игорь В.",
      description: "Тренируюсь уже год. Результат превзошёл ожидания. Рекомендую всем!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center hero-gradient"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
            <span className="text-glow">RUD</span>
            <span className="text-primary">BOX</span>

          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            Сила • Стиль • Характер
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Профессиональный бокс-клуб с современным подходом к тренировкам. 
            Развивайте силу, выносливость и уверенность в себе.
          </p>
          <Button variant="boxing" size="lg" className="text-lg px-8 py-4 animate-glow-pulse">
            Записаться на тренировку
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-glow">
                О нас
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RudBox — это не просто спортзал, это место, где рождаются чемпионы. 
                Мы объединяем профессиональный подход к боксу с современными методиками тренировок.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша миссия — помочь каждому человеку раскрыть свой потенциал, развить физическую силу 
                и внутреннюю уверенность. Независимо от вашего уровня подготовки, мы найдём подходящую программу.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Участников</div>
                </div>
                <div className="text-center">
                  <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Побед</div>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={gymInterior} 
                alt="Pink Punch Club interior" 
                className="rounded-lg card-shadow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">
            Галерея
          </h2>
          <BoxingCarousel 
            items={galleryItems} 
            autoPlay={true} 
            interval={4000}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">
            Наши тренеры
          </h2>
          <BoxingCarousel 
            items={staffItems}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">
            Цены
          </h2>
          <div className="animate-fade-in">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">
            Отзывы
          </h2>
          <BoxingCarousel 
            items={reviewsItems}
            autoPlay={true}
            interval={6000}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
            Связаться с нами
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите удобный способ связи. Мы быстро ответим на все ваши вопросы 
            и поможем записаться на тренировку.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            <a 
              href="https://t.me/rudboxgym" 
              target="_blank" 
              rel="noopener noreferrer"
              className="boxing-card p-6 hover:scale-105 transition-transform group"
            >
              <Send className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-white transition-colors" />
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">Telegram</h3>
              <p className="text-sm text-muted-foreground mt-1">@rudbox</p>
            </a>
            
            <a 
              href="https://wa.me/79123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="boxing-card p-6 hover:scale-105 transition-transform group"
            >
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-white transition-colors" />
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mt-1">+7 912 345-67-89</p>
            </a>
            
            <a 
              href="https://instagram.com/rudboxgym" 
              target="_blank" 
              rel="noopener noreferrer"
              className="boxing-card p-6 hover:scale-105 transition-transform group"
            >
              <Instagram className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-white transition-colors" />
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">Instagram</h3>
              <p className="text-sm text-muted-foreground mt-1">@rudbox</p>
            </a>
            
            <a 
              href="https://vk.com/rudboxgym" 
              target="_blank" 
              rel="noopener noreferrer"
              className="boxing-card p-6 hover:scale-105 transition-transform group"
            >
              <div className="h-8 w-8 mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary font-bold text-xl group-hover:text-white transition-colors">ВК</span>
              </div>
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">ВКонтакте</h3>
              <p className="text-sm text-muted-foreground mt-1">vk.com/rudbox</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-darker-surface border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">
                RudBox
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Профессиональный бокс-клуб с современным подходом к тренировкам. 
                Развивайте силу, выносливость и уверенность в себе.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Томск, ул. Ленина, 15</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">info@rudbox.club</span>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span>07:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб-Вс:</span>
                  <span>09:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 RudBox. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
