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

interface TouchState {
  startX: number;
  startY: number;
  currentX: number;
  isDragging: boolean;
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
  const [itemsPerPage, setItemsPerPage] = React.useState(1);
  const [touchState, setTouchState] = React.useState<TouchState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    isDragging: false
  });

  // Calculate items per page based on screen size
  React.useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3); // lg and above
      } else if (width >= 768) {
        setItemsPerPage(2); // md
      } else {
        setItemsPerPage(1); // sm and below
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  }, [totalPages]);

  React.useEffect(() => {
    if (isAutoPlaying && !touchState.isDragging) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, nextSlide, interval, touchState.isDragging]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchState({
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      isDragging: true
    });
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchState.isDragging) return;
    
    const touch = e.touches[0];
    setTouchState(prev => ({
      ...prev,
      currentX: touch.clientX
    }));
  };

  const handleTouchEnd = () => {
    if (!touchState.isDragging) return;

    const deltaX = touchState.startX - touchState.currentX;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchState({
      startX: 0,
      startY: 0,
      currentX: 0,
      isDragging: false
    });
    
    if (autoPlay) {
      setIsAutoPlaying(true);
    }
  };

  return (
    <div 
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(autoPlay)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100)}%)`,
            touchAction: 'pan-y pinch-zoom'
          }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {items.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, itemIndex) => (
                <div key={item.id} className="px-2">
                  <Card className="boxing-card border-0">
                    <CardContent className="p-0 relative group">
                      <img
                        src={item.image}
                        alt={item.title || `Slide ${pageIndex * itemsPerPage + itemIndex + 1}`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                      />
                      {(item.title || item.description || item.subtitle) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 md:opacity-100 smooth-transition flex items-end">
                          <div className="p-3 sm:p-4 md:p-6 text-white">
                            {item.subtitle && (
                              <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">
                                {item.subtitle}
                              </p>
                            )}
                            {item.title && (
                              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-glow">
                                {item.title}
                              </h3>
                            )}
                            {item.description && (
                              <p className="text-xs sm:text-sm text-gray-300">
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
          ))}
        </div>
      </div>

      {showControls && totalPages > 1 && (
        <>
          <Button
            variant="boxing-outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
          </Button>

          <Button
            variant="boxing-outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-3 md:mt-4 space-x-1 md:space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 md:w-3 md:h-3 rounded-full smooth-transition",
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