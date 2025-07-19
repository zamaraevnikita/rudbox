import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: string;
  image: string;
  title?: string;
  description?: string;
  subtitle?: string;
}

interface BoxingCarouselProps {
  items: CarouselItem[];
  className?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const BoxingCarousel = ({ 
  items, 
  className = "", 
  showControls = true, 
  autoPlay = false, 
  interval = 5000 
}: BoxingCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(autoPlay);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  React.useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, nextSlide, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(autoPlay)}
    >
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <Card className="boxing-card border-0">
                <CardContent className="p-0 relative group">
                  <img
                    src={item.image}
                    alt={item.title || `Slide ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {(item.title || item.description || item.subtitle) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 smooth-transition flex items-end">
                      <div className="p-6 text-white">
                        {item.subtitle && (
                          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">
                            {item.subtitle}
                          </p>
                        )}
                        {item.title && (
                          <h3 className="text-xl font-bold mb-2 text-glow">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {showControls && items.length > 1 && (
        <>
          <Button
            variant="boxing-outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="boxing-outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full smooth-transition",
                index === currentIndex
                  ? "bg-primary glow-shadow"
                  : "bg-gray-600 hover:bg-gray-400"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};