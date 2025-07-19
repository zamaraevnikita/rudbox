import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const pricingOptions: PricingOption[] = [
  {
    title: "Разовое занятие",
    price: "1500",
    period: "за занятие",
    description: "Попробуйте наш клуб",
    features: [
      "1 тренировка",
      "Консультация тренера",
      "Использование оборудования",
      "Раздевалка и душ"
    ]
  },
  {
    title: "Месячный абонемент",
    price: "8000",
    period: "в месяц",
    description: "Оптимальный выбор для начала",
    features: [
      "8 тренировок в месяц",
      "Персональная программа",
      "Групповые занятия",
      "Раздевалка и душ",
      "Консультации по питанию"
    ],
    popular: true
  },
  {
    title: "3 месяца",
    price: "20000",
    period: "за 3 месяца",
    description: "Серьёзный результат",
    features: [
      "Безлимитные тренировки",
      "Персональный тренер",
      "Все групповые программы",
      "Индивидуальный план питания",
      "Спортивные добавки",
      "Заморозка абонемента"
    ],
    badge: "Скидка 15%"
  },
  {
    title: "6 месяцев",
    price: "35000",
    period: "за 6 месяцев",
    description: "Максимальный результат",
    features: [
      "Безлимитные тренировки",
      "Персональный тренер",
      "Все программы клуба",
      "Индивидуальное питание",
      "Спортивные добавки",
      "Участие в соревнованиях",
      "Массаж и восстановление"
    ],
    badge: "Скидка 25%"
  }
];

const specialCategories = [
  {
    category: "Детские группы (6-16 лет)",
    price: "5000",
    period: "в месяц",
    description: "Безопасные тренировки для детей"
  },
  {
    category: "Женские группы",
    price: "6000",
    period: "в месяц", 
    description: "Фитнес-бокс и самооборона"
  },
  {
    category: "Для начинающих",
    price: "6500",
    period: "в месяц",
    description: "Основы бокса с нуля"
  }
];

export const PricingTable = () => {
  return (
    <div className="space-y-12">
      {/* Main pricing options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingOptions.map((option, index) => (
          <Card 
            key={index} 
            className={`boxing-card relative ${option.popular ? 'ring-2 ring-primary' : ''}`}
          >
            {option.badge && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1">
                {option.badge}
              </Badge>
            )}
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
                <span className="text-muted-foreground ml-1">₽</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {option.period}
                </p>
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
              
              <Button 
                variant={option.popular ? "boxing" : "boxing-outline"} 
                className="w-full mt-6"
              >
                Выбрать план
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Special categories */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8 text-glow">
          Специальные предложения
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialCategories.map((category, index) => (
            <Card key={index} className="boxing-card">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {category.category}
                </h4>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary">
                    {category.price}
                  </span>
                  <span className="text-muted-foreground ml-1">₽</span>
                  <p className="text-sm text-muted-foreground">
                    {category.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="boxing-outline" className="w-full">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};