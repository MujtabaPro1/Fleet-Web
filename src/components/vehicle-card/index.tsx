import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, HeartIcon, StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const VehicleCard = ({
  image,
  name = "Toyota Corolla Cross",
  type = "SUV",
  fuel = "Petrol, Hybrid",
  price = "288",
  width = "w-full",
  router,
  id,
  tags = [],
  isTrending = false,
}: { 
  image: string; 
  name?: string;
  type?: string;
  fuel?: string;
  price?: string;
  width?: string; 
  router?: any;
  id?: string;
  tags?: string[];
  isTrending?: boolean;
}) => {
  // Check if image is a URL or a CSS class
  console.log(image);
  const isImageUrl = image && (image.startsWith('http') || image.startsWith('/'));
  
  return (
  <Card
    className={`${width} h-full border border-solid shadow-sm overflow-hidden rounded-md bg-white max-w-[400px]`}
  >
    <CardContent className="flex relative bg-white flex-col items-center gap-4 pt-8 pb-4 px-4">
      {isImageUrl ? (
        <img 
          src={image} 
          alt={name}
          className="h-[200px] w-full rounded-md object-cover"
          onError={(e) => {
            e.currentTarget.src = "/assets/images/no-image.png";
          }}
        />
      ) : (
        <div
          className={`h-[200px] ${image} w-full rounded-md bg-contain bg-center`}
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 w-9 h-9 bg-gray-50 rounded-md border border-gray-200 shadow-sm hover:bg-gray-100 z-10"
      >
        <HeartIcon className="w-4 h-4" />
      </Button>

      {isTrending && <Badge className="absolute top-4 left-4 bg-emerald-50 hover:bg-emerald-50 text-emerald-800 gap-1 px-2 py-0.5">
        <StarIcon className="w-3 h-3 fill-current" />
        <span className="font-medium text-xs">
          Trending
        </span>
      </Badge>}

      <div className="flex flex-col items-start gap-3 w-full min-h-[86px]">
        <h3 className="font-semibold text-[#0b1c31] text-lg text-start">
          {name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 w-full">

           {tags && tags.length > 0 && tags.map((tag, index) => <Badge key={index} className="bg-[#c70036] hover:bg-[#c70036] text-white gap-1 px-1.5 py-0.5">
            <span className="font-medium text-xs">
              {tag == 'Limited Time Offer' ? 'Limited-time deal' : tag}
            </span>
          </Badge>)}


          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {type}
          </span>

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {fuel}
          </span>
        </div>
      </div>

      <div className="flex items-end gap-3 p-3 w-full bg-gray-50 rounded mt-2">
        <div className="flex flex-col h-12 items-start gap-1 flex-1">
          <div className="font-medium text-[#4a5565] text-xs">
            STARTING AT
          </div>

          <div className="flex items-end gap-1.5 w-full">
            <div className="font-semibold text-[#c70036] text-2xl md:text-3xl">
              ${price}
            </div>

            <div className="font-medium text-[#4a5565] text-xs self-end mb-1">
              WEEKLY
            </div>
          </div>
        </div>

        <Button 
        onClick={() => router.push('/inventory/' + id)}
        className="h-[48px] bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-1.5 px-3 py-2">
          <span className="font-medium text-white text-xs md:text-sm">
            Get A Quote
          </span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};
