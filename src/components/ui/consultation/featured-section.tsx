import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-0 py-6 sm:py-8 md:py-10 bg-gray-50">
      <div className="gap-6 sm:gap-8 md:gap-10 flex flex-col w-full max-w-[1280px] items-start px-4 sm:px-6">
        <Card className="w-full bg-white rounded border border-solid shadow-shadow-sm">
          <CardContent className="items-center gap-4 sm:gap-5 p-4 sm:p-6 md:p-8 flex flex-col">
            <h2 className="w-full max-w-[976.41px] [font-family:'Figtree',Helvetica] font-semibold text-[#c70036] text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.80px] leading-tight sm:leading-[48px]">
              Book Your Free 15-Minute Fleet Consultation
            </h2>

            <p className="w-full max-w-[451.11px] text-[#4a5565] text-sm sm:text-base text-center [font-family:'Figtree',Helvetica] font-normal tracking-[0] leading-5 sm:leading-6">
              No cost. No obligation. Just clear, expert advice to help you
              choose the right leasing or finance solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
              <Button className="h-auto px-3 py-2 w-full sm:flex-1 bg-[#194170] hover:bg-[#194170]/90 items-center justify-center gap-1.5 rounded shadow-shadow-xs">
                <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Book a Free Consultation
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="h-auto items-center justify-center gap-1.5 px-3 py-2 w-full sm:flex-1 bg-gray-50 hover:bg-gray-100 rounded border border-solid shadow-shadow-xs"
              >
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Talk to a Fleet Specialist – 1300 FLA FLA
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
