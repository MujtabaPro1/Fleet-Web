import React, { useEffect, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type VehiclesCarouselProps<T> = {
  title?: string;
  actionLabel?: string;
  onAction?: () => void;
  cars: T[];
  renderCard: (car: T, index: number) => React.ReactNode;
  getCardKey?: (car: T, index: number) => React.Key;
  className?: string;
  showMultipleColumns?: boolean;
};

const chunkArray = <T,>(items: T[], chunkSize: number): T[][] => {
  if (!items || !items.length) return [];
  if (chunkSize <= 1) return items.map((item) => [item]);

  const result: T[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
};

const createTwoRowLayout = <T,>(items: T[], itemsPerRow: number): T[][] => {
  if (!items || !items.length) return [];
  
  // Calculate total items per slide (2 rows)
  // For small screens (itemsPerRow=1), we'll show 1 item per slide
  // For large screens (itemsPerRow=3), we'll show 6 items per slide (3x2)
  const itemsPerSlide = itemsPerRow === 1 ? 1 : itemsPerRow * 2;
  const result: T[][] = [];
  
  // Group items into slides
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    result.push(items.slice(i, i + itemsPerSlide));
  }
  
  return result;
};

export const VehiclesCarousel = <T,>({
  title,
  actionLabel = "View all",
  onAction,
  cars,
  renderCard,
  getCardKey,
  className = "",
  showMultipleColumns = false,
}: VehiclesCarouselProps<T>) => {
  const [slidesPerPage, setSlidesPerPage] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      if (typeof window === "undefined") return;
      // Small screens: 1 item, Large screens: 3 items per row (6 total in two rows)
      setSlidesPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [slidesPerPage, cars]);

  const slides = useMemo(
    () => showMultipleColumns 
      ? createTwoRowLayout(cars, slidesPerPage) 
      : chunkArray(cars, slidesPerPage),
    [cars, slidesPerPage, showMultipleColumns]
  );

  const disableNavigation = slides.length <= 1;

  const handlePrev = () => {
    if (disableNavigation) return;
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (disableNavigation) return;
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`}>
      {(title || onAction) && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
          {title && (
            <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl leading-tight">
              {title}
            </h2>
          )}
          <div className="flex items-center gap-4">
            {onAction && (
              <Button
                variant="ghost"
                onClick={onAction}
                className="h-auto px-3 py-2 gap-1.5 hover:bg-transparent text-[#194170]"
              >
                <span className="font-medium text-sm">
                  {actionLabel}
                </span>
              </Button>
            )}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full disabled:opacity-40"
                onClick={handlePrev}
                disabled={disableNavigation}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full disabled:bg-gray-300 disabled:hover:bg-gray-300"
                onClick={handleNext}
                disabled={disableNavigation}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {slides.length > 0 ? (
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={slides.length > 1}
          emulateTouch
          swipeable
        >
          {slides.map((chunk, chunkIndex) => {
            if (showMultipleColumns) {
              // For mobile: 1 item per slide
              // For desktop: 3x2 grid (6 items per slide)
              if (slidesPerPage === 1) {
                // On small screens, just show a single item
                return (
                  <div
                    key={`vehicles-slide-${chunkIndex}`}
                    className="px-2"
                  >
                    <div className="w-full">
                      {renderCard(chunk[0], 0)}
                    </div>
                  </div>
                );
              } else {
                // On larger screens, show a 3x2 grid
                const topRow = chunk.slice(0, slidesPerPage);
                const bottomRow = chunk.slice(slidesPerPage);
                
                return (
                  <div
                    key={`vehicles-slide-${chunkIndex}`}
                    className="flex flex-col gap-6 px-2"
                  >
                    {/* Top row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {topRow.map((car, index) => {
                        const key =
                          (getCardKey && getCardKey(car, index)) ?? `${chunkIndex}-top-${index}`;
                        return (
                          <div key={key} className="w-full">
                            {renderCard(car, index)}
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Bottom row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {bottomRow.map((car, index) => {
                        const key =
                          (getCardKey && getCardKey(car, index + slidesPerPage)) ?? `${chunkIndex}-bottom-${index}`;
                        return (
                          <div key={key} className="w-full">
                            {renderCard(car, index + slidesPerPage)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            } else {
              // Original single row layout - now responsive with 1 column on mobile, 3 on desktop
              return (
                <div
                  key={`vehicles-slide-${chunkIndex}`}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
                >
                  {chunk.map((car, index) => {
                    const key =
                      (getCardKey && getCardKey(car, index)) ?? `${chunkIndex}-${index}`;
                    return (
                      <div key={key} className="w-full">
                        {renderCard(car, index)}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </Carousel>
      ) : (
        <div className="w-full py-12 border border-dashed border-gray-300 rounded-lg text-center text-[#4a5565]">
          No vehicles available right now. Check back soon!
        </div>
      )}
    </div>
  );
};


