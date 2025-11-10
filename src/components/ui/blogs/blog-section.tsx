import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";
const BannerImage = "../../../assets/images/svg/dummy-image.svg";

const blogPosts = [
  {
    title:
      "Choosing the Right Vehicle Leasing/Financing Structure for Your Business Fleet",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
  {
    title:
      "Insert Blog Title Here\nTitle displays up to three lines before truncating.",
    image: BannerImage,
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 px-0  py-0 lg:py-12  bg-gray-50">
      <Card className="flex flex-col w-full max-w-[1280px] items-center gap-5 p-8 bg-white rounded border border-solid shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
          <h1 className="[font-family:'Figtree',Helvetica] font-semibold text-[#c70036] text-5xl text-center tracking-[-0.80px] leading-[48px]">
            Our Blog
          </h1>

          <p className="w-full max-w-[502px] [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
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
                <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-2xl tracking-[0] leading-8 whitespace-pre-line">
                  {post.title}
                </h2>

                <button className="inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0">
                  <span className="[font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                    Read blog
                  </span>

                  <ArrowRightIcon className="w-4 h-4 text-[#194170]" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        className="px-4 py-2.5 bg-white border border-solid inline-flex items-center justify-center gap-1.5 rounded shadow-shadow-xs h-auto"
      >
        <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
          Load more
        </span>

        <ArrowRightIcon className="w-4 h-4 text-[#4a5565]" />
      </Button>
    </section>
  );
};
