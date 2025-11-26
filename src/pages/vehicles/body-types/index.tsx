import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { MyPage } from "@/components/layouts/types";
import axiosInstance from "@/service/api";
import { useRouter } from "next/router";

const bodyTypeCards = [
  {
    title: "SUV",
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
    title: "Mini bus",
    image: "/assets/images/bodytype/vehicle-5.png",
  },
];

const smallBodyTypes = ["Hatchback", "Coupe", "Convertible", "Wagon", "Sedan"];



const BodyTypeDeals: MyPage = () => {

  const [allBodyTypes, setAllBodyTypes] = useState<any>([]);
  const router = useRouter();

  useEffect(()=>{
    getAllBodyTypes();
  },[]);
    
  const getAllBodyTypes = () => {
 
    // Make the API call
    axiosInstance.get(`/v1/body-types`)
      .then(response => {
        console.log(response.data);
        setAllBodyTypes(response.data || []);
      })
      .catch(error => {
        console.error('Error fetching body types:', error);
      });
  }

  return (
    <div className="flex flex-col items-center gap-8 bg-gray-50 overflow-hidden">
    
      <main className="flex flex-col max-w-full lg:max-w-[1280px] pt-[80px] pb-[80px] items-center gap-10 px-4">
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
                   onClick={() => router.push(`/inventory?bodyType=${card.title.toUpperCase()}`)}
                className="h-[320px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow relative bg-white rounded-xl border border-gray-100"
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

      
      </main>

    </div>
  );
};

export default BodyTypeDeals;
BodyTypeDeals.Layout = "Default";
