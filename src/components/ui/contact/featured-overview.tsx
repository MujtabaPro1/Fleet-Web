import React from "react";

export const FeaturesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-4 sm:px-8 py-16 bg-white">
      <div className="flex flex-col w-full items-start gap-8 px-0 py-8 border-t border-b border-border">
        <p className="text-sm leading-6 text-[#101828] font-figtree font-normal">
          By submitting your details, you consent to Fleet Leasing Australia
          contacting you about our products and services via phone, email, or
          SMS. All information you provide will be treated confidentially and in
          accordance with our{" "}
          <a
            href="/privacy-policy"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};
