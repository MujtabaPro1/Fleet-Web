import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { MyPage } from "@/components/layouts/types";
import axiosInstance from "@/service/api";
import { useRouter } from "next/router";

const bodyTypeCards = [
  {
    title: "Wagon",
    image: "/assets/images/bodytype/vehicle-1.png",
  },
  {
    title: "Ute",
    image: "/assets/images/bodytype/vehicle-2.png",
  },
  {
    title: "Van",
    image: "/assets/images/bodytype/vehicle-3.png",
  },
  {
    title: "Sedan",
    image: "/assets/images/bodytype/vehicle-4.png",
  },
  {
    title: "Bus",
    image: "/assets/images/bodytype/vehicle-5.png",
  },
];


const popularBrands = [
  { name: "Mazda", logo: "/assets/images/brand-logo/mazda.png", hasArrow: true },
  { name: "Toyota", logo: "/assets/images/brand-logo/toyota.png", hasArrow: true },
  { name: "Ford", logo: "/assets/images/brand-logo/ford.png", hasArrow: true },
  { name: "Tesla", logo: "/assets/images/brand-logo/tesla.png", hasArrow: true },
  { name: "Nissan", logo: "/assets/images/brand-logo/nissan.png", hasArrow: true },
  { name: "Mitsubishi", logo: "/assets/images/brand-logo/mitsubishi.png", hasArrow: true },
  { name: "Isuzu", logo: "/assets/images/brand-logo/isuzu.png", hasArrow: true },
  { name: "Volkswagen", logo: "/assets/images/brand-logo/volkswagen.png", hasArrow: true },
  { name: "Hyundai", logo: "/assets/images/brand-logo/hyundai.png", hasArrow: true },
  { name: "Mercedes-Benz", logo: "/assets/images/brand-logo/mercedes.png", hasArrow: true },
];



const ExploreBody: MyPage = () => {

  const [allBrands, setAllBrands] = useState<any>([]);
  const [allBodyTypes, setAllBodyTypes] = useState<any>([]);
  const router = useRouter();

  useEffect(()=>{
    getAllBrands();
    getAllBodyTypes();
  },[]);
    
  const getAllBrands = () => {
 
    // Make the API call
    axiosInstance.get(`/v1/car-brands`)
      .then(response => {
        setAllBrands(response.data || []);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }

  const getAllBodyTypes = () => {
 
    // Make the API call
    axiosInstance.get(`/v1/body-types`)
      .then(response => {
        setAllBodyTypes([{
          name: "Coupe",
          id: 1
        },
        {
          name: "Hatchback",
          id: 2
        }]);
      })
      .catch(error => {
        console.error('Error fetching body types:', error);
      });
  }

  return (
    <div className="flex flex-col items-center gap-8 bg-gray-50 overflow-hidden">
    
      <main className="flex flex-col max-w-full lg:max-w-[1280px] pt-[80px] items-center gap-10 px-4">
        <section className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="font-figtree font-semibold text-[#101828] text-3xl">
              Explore by body type
            </h1>
            <p className="font-figtree font-normal text-[#4a5565] text-lg">
              Select a body type that supports your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {bodyTypeCards.map((card, index) => (
              <Card
                key={index}
                   onClick={() => router.push(`/inventory?bodyType=${card.title}`)}
                className="h-[320px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow relative bg-white rounded-md border border-gray-100"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#194170] text-3xl font-figtree">
                      {card.title}
                    </span>
                    <span className="text-[#194170] text-2xl">
                      →
                    </span>
                  </div>
                  <div className="flex-1 flex items-end justify-center relative mt-4">
                    <img
                      style={{ transform: "scale(1.2)" }}
                      className="w-full h-auto object-contain max-h-[220px]"
                      alt={`${card.title} vehicle`}
                      src={card.image}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-start grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
            {allBodyTypes.map((type: any, index: any) => (
              <Card
                key={index}
                onClick={() => router.push(`/inventory?bodyType=${type.name}`)}
                className="flex-1 bg-white cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-3">
                  <p className="font-figtree font-medium text-[#4a5565] text-lg text-center tracking-[0.40px]">
                    {type.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="font-figtree font-semibold text-[#101828] text-3xl">
              Explore by popular brands
            </h2>
            <p className="font-figtree font-normal text-[#4a5565] text-lg">
              Build a fleet that drives your business forward.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {popularBrands.map((brand, index) => (
              <Card
                key={index}
                 onClick={() => router.push(`/inventory?brand=${brand.name}`)}
                className="cursor-pointer hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-5 flex flex-col items-center gap-6">
                  <img
                    className="w-full h-[100px] object-contain"
                    alt={brand.name}
                    src={brand.logo}
                  />
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span className="font-figtree font-medium text-[#194170] text-lg tracking-[0.40px]">
                      {brand.name}
                    </span>
                    {brand.hasArrow && (
                      <ArrowRightIcon className="w-[18px] h-[18px]" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 w-full pb-[80px]">
          <h2 className="font-figtree font-semibold text-[#101828] text-3xl">
            All brands
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {allBrands.flat().map((brand: any, index: any) => (
              <Card
                key={index}
                onClick={() => router.push(`/inventory?brand=${brand.name}`)}
                className="cursor-pointer  hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-3">
                  <p className="font-figtree font-medium text-[#4a5565] text-lg text-center tracking-[0.40px]">
                    {brand.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default ExploreBody;
ExploreBody.Layout = "Default";
