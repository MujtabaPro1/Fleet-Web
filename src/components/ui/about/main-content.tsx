import React from "react";

const BannerImage = "../../../assets/images/svg/dummy-image.svg";

export const MainContentSection = (): JSX.Element => {
  const textColumns = [
    {
      content:
        "Every Australian business, from sole traders to large commercial operators, deserves access to fair, transparent, and efficient vehicle finance. Fleet Leasing Australia was founded by professionals with deep experience in fleet management, finance brokering, and vehicle procurement. who saw a gap in the market for independent, product-agnostic advice that puts the client first.",
    },
    {
      content:
        "Instead of being tied to a single lender or manufacturer, we act as your trusted fleet partner, comparing multiple leasing and finance options to find the structure that delivers the most value to your business. Whether you're leasing your first work Ute or managing a national fleet, we handle everything from pre-approval to delivery, ensuring every step is simple, transparent, and tax smart.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-16 bg-white">
      <div className="flex flex-col w-full max-w-[1440px] items-center gap-16">
        <div className="flex flex-col w-full max-w-[1280px] items-start gap-4 px-4">
          <h2 className="font-figtree font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
            Our Story
          </h2>

          <div className="flex w-full items-start gap-16 flex-col lg:flex-row">
            {textColumns.map((column, index) => (
              <p
                key={index}
                className="flex-1 text-base leading-6 font-figtree font-normal text-[#4a5565] tracking-[0]"
              >
                {column.content}
              </p>
            ))}
          </div>
        </div>

        <img
          className="w-full max-w-[1280px] h-96 object-cover px-4"
          alt="Image"
          src={BannerImage}
        />
      </div>
    </section>
  );
};
