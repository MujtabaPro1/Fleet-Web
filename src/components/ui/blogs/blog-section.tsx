'use client';
import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";
import { useRouter } from "next/navigation";
const BannerImage = "../../../assets/images/svg/dummy-image.svg";

const blogPosts = [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: BannerImage,
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: BannerImage,
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: BannerImage,
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: BannerImage,
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: BannerImage,
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: BannerImage,
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: BannerImage,
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: BannerImage,
  },
];

export const BlogSection = (): JSX.Element => {

  const router = useRouter();


  return (
    <section className="flex flex-col w-full items-center gap-6 px-0  py-0 lg:py-12  bg-gray-50">
      <Card className="flex flex-col w-full max-w-[1280px] items-center gap-5 p-8 bg-white rounded border border-solid shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
          <h1 className="font-figtree font-semibold text-[#c70036] text-5xl text-center tracking-[-0.80px] leading-[48px]">
            Our Blog
          </h1>

          <p className="w-full max-w-[502px] font-figtree font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
            Stay up to date with the latest fleet leasing insights, industry
            news, and tips to keep your business moving forward
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1280px] gap-6 px-4 lg:px-0">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="flex flex-col items-center gap-6 p-5 bg-white rounded overflow-hidden border border-solid shadow-shadow-sm"
          >
            <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
              <img
                className="w-full h-52 object-cover"
                alt="Blog post image"
                src={post.image}
              />

              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[0] leading-8 whitespace-pre-line">
                  {post.title}
                </h2>

                <button
                onClick={() => router.push(`/resources/blogs/${post.id}`)}
                className="inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0">
                  <span className="font-figtree font-medium text-[#194170] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                    Read blog
                  </span>

                  <ArrowRightIcon className="w-4 h-4 text-[#194170]" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <Button
        variant="outline"
        className="px-4 py-2.5 bg-white border border-solid inline-flex items-center justify-center gap-1.5 rounded shadow-shadow-xs h-auto"
      >
        <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
          Load more
        </span>

        <ArrowRightIcon className="w-4 h-4 text-[#4a5565]" />
      </Button> */}
    </section>
  );
};
