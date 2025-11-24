import React from "react";
import { Card, CardContent } from "../card";

export const FeaturedSection = (): JSX.Element => {
  return (
    <section className="w-full items-center px-0 py-10 bg-gray-50 flex flex-col">
      <div className="flex flex-col w-full max-w-[1280px] items-start gap-10 px-4">
        <Card className="w-full bg-white rounded border border-solid shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-5 p-8">
            <h1 className="max-w-[976.41px] font-figtree font-semibold text-[#c70036] text-2xl lg:text-5xl text-center tracking-[-0.80px] leading-[48px]">
              Driving Business Forward with Smarter Fleet and Business Finance
              Solutions
            </h1>

            <p className="max-w-[854.49px] font-figtree font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
              Fleet Leasing Australia simplifies the way businesses lease and
              finance vehicles, combining expert advice, transparent structures,
              and national buying power to help Australian companies grow with
              confidence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
