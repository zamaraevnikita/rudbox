import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface PricingOption {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

const mensPricing = [
  {
    title: "Пробная тренировка",
    price: "700",
    period: "за занятие",
    description: "Попробуйте наш клуб",
    features: ["1 тренировка", "Консультация тренера", "Использование оборудования"]
  },
  {
    title: "8 тренировок",
    price: "5000",
    period: "в месяц",
    description: "Стандартный пакет для мужчин",
    features: ["8 тренировок в месяц", "Групповые занятия", "Раздевалка и душ"],
    popular: true
  },
  {
    title: "12 тренировок",
    price: "6000",
    period: "в месяц",
    description: "Интенсивные тренировки",
    features: ["12 тренировок в месяц", "Персональная программа", "Все групповые программы"]
  }
];

const womensPricing = [
  {
    title: "Пробная тренировка",
    price: "700",
    period: "за занятие",
    description: "Попробуйте наш клуб",
    features: ["1 тренировка", "Консультация тренера", "Использование оборудования"]
  },
  {
    title: "8 тренировок",
    price: "5000",
    period: "в месяц",
    description: "Фитнес-бокс и самооборона",
    features: ["8 тренировок в месяц", "Женские группы", "Раздевалка и душ"],
    popular: true
  }
];

const kidsPricing = [
  {
    title: "Пробная тренировка",
    price: "Бесплатно",
    period: "",
    description: "Знакомство с боксом",
    features: ["1 тренировка", "Безопасные методики", "Консультация для родителей"]
  },
  {
    title: "8 тренировок",
    price: "4000",
    period: "в месяц",
    description: "Детские группы (6-16 лет)",
    features: ["8 тренировок в месяц", "Возрастные группы", "Безопасные тренировки"],
    popular: true
  },
  {
    title: "12 тренировок",
    price: "5000",
    period: "в месяц",
    description: "Усиленная программа",
    features: ["12 тренировок в месяц", "Подготовка к соревнованиям", "Индивидуальный подход"]
  }
];

const personalPricing = [
  {
    title: "1 тренировка",
    price: "2000",
    period: "за тренировку",
    description: "Индивидуальная работа",
    features: ["Персональный тренер", "Индивидуальная программа", "Гибкий график"]
  },
  {
    title: "4 тренировки",
    price: "7000",
    period: "пакет",
    description: "Месячный курс",
    features: ["4 персональные тренировки", "Программа питания", "Экономия 1000₽"],
    popular: true
  },
  {
    title: "8 тренировок",
    price: "12000",
    period: "пакет",
    description: "Серьёзный результат",
    features: ["8 персональных тренировок", "Полная программа", "Экономия 4000₽"]
  },
  {
    title: "12 тренировок",
    price: "16000",
    period: "пакет",
    description: "Профессиональная подготовка",
    features: ["12 персональных тренировок", "Спортивное питание", "Экономия 8000₽"]
  },
  {
    title: "16 тренировок",
    price: "22000",
    period: "пакет",
    description: "Максимальный результат",
    features: ["16 персональных тренировок", "Полное сопровождение", "Экономия 10000₽"]
  }
];

const renderPricingSection = (title: string, items: PricingOption[]) => (
  <div className="mb-16">
    <h3 className="text-3xl font-bold text-center mb-8 text-glow">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((option, index) => (
        <Card 
          key={index} 
          className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
        >
          {option.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
              Популярный
            </Badge>
          )}
          
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold text-foreground">
              {option.title}
            </CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold text-primary">
                {option.price}
              </span>
              {option.price !== "Бесплатно" && (
                <span className="text-muted-foreground ml-1">₽</span>
              )}
              {option.period && (
                <p className="text-sm text-muted-foreground mt-1">
                  {option.period}
                </p>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {option.description}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {option.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const PricingTable = () => {
  return (
    <Tabs defaultValue="mens" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-12">
        <TabsTrigger value="mens">Мужские группы</TabsTrigger>
        <TabsTrigger value="womens">Женские группы</TabsTrigger>
        <TabsTrigger value="kids">Детские группы</TabsTrigger>
        <TabsTrigger value="personal">Персональные</TabsTrigger>
      </TabsList>
      
      <TabsContent value="mens">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mensPricing.map((option, index) => (
            <Card 
              key={index} 
              className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {option.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {option.price}
                  </span>
                  {option.price !== "Бесплатно" && (
                    <span className="text-muted-foreground ml-1">₽</span>
                  )}
                  {option.period && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {option.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="womens">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {womensPricing.map((option, index) => (
            <Card 
              key={index} 
              className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {option.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {option.price}
                  </span>
                  {option.price !== "Бесплатно" && (
                    <span className="text-muted-foreground ml-1">₽</span>
                  )}
                  {option.period && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {option.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="kids">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kidsPricing.map((option, index) => (
            <Card 
              key={index} 
              className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {option.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {option.price}
                  </span>
                  {option.price !== "Бесплатно" && (
                    <span className="text-muted-foreground ml-1">₽</span>
                  )}
                  {option.period && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {option.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="personal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalPricing.map((option, index) => (
            <Card 
              key={index} 
              className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {option.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {option.price}
                  </span>
                  {option.price !== "Бесплатно" && (
                    <span className="text-muted-foreground ml-1">₽</span>
                  )}
                  {option.period && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {option.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};