'use client'
import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useRouter } from "next/router";


export const VehicleDisplaySection = (): JSX.Element => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center w-full py-8 md:py-12">
      <div className="flex flex-col items-center w-full max-w-[750px] mx-auto px-4 md:px-6 lg:px-8 bg-white rounded-lg border border-gray-200 shadow-sm relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-8 py-10 md:py-12 w-full max-w-[800px]" style={{
          zIndex: 100
        }}>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight">
              <span className="text-[#101828]">
                Smarter Leasing. Bigger Saving.
              </span>
              <br />
              <span className="text-[#c70036]">
                Faster Approvals.
              </span>
            </h1>

            <p className="text-base text-[#4a5565] text-center max-w-[600px] mx-auto">
              Grow your fleet with quick approvals and finance options built for
              Australian businesses.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-[600px]">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-col w-full md:w-1/2 gap-2">
                <Label
                  htmlFor="vehicle-brand"
                  className="font-medium text-[#101828] text-sm"
                >
                  Vehicle brand
                </Label>
                <Select>
                  <SelectTrigger
                    id="vehicle-brand"
                    className="w-full bg-white shadow-sm border border-gray-200"
                  >
                    <SelectValue placeholder="All brands" />
                  </SelectTrigger>
                  <SelectContent style={{
                    zIndex: 1000
                  }}>
                    <SelectItem value="all">All brands</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col w-full md:w-1/2 gap-2">
                <Label
                  htmlFor="body-type"
                  className="font-medium text-[#101828] text-sm"
                >
                  Body type
                </Label>
                <Select>
                  <SelectTrigger
                    id="body-type"
                    className="w-full bg-white shadow-sm border border-gray-200"
                  >
                    <SelectValue placeholder="All body types" />
                  </SelectTrigger>
                  <SelectContent style={{
                    zIndex: 1000
                  }}>
                    <SelectItem value="all">All body types</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                    <SelectItem value="ute">Ute</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
            onClick={() => router.push('/inventory')}
            className="w-full h-auto bg-[#194170] hover:bg-[#194170]/90 shadow-sm py-3 gap-2 mt-2 cursor-pointer">
              <SearchIcon className="w-5 h-5 text-white" />
              <span className="font-medium text-white">
                Show all vehicles
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-12 relative" style={{ height: '200px', marginBottom: '-40px' }}>
          <div 
            className="w-full h-[180px] md:h-[220px] flex items-end justify-center absolute bottom-0 left-0 right-0" 
            style={{
              backgroundImage: `url(/assets/images/banner.png)`,
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              transform: 'scale(1.6)', // Makes the image larger to extend outside the card
              transformOrigin: 'bottom center',
              zIndex: 10 // Ensures the image appears above other elements
            }}
          />
        </div>
      </div>
    </section>
  );
};
