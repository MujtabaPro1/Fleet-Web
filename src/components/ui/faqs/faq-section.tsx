import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { Card, CardContent } from "../card";

const faqSections = [
  {
    title: "General Questions",
    questions: [
      "What is the minimum term for a business lease?",
      "How quickly can I get approved and take delivery?",
      "What is a 'Residual Value' and what are the ATO rules surrounding it?",
      "Do you manage vehicle servicing and maintenance? (The Full-Service Lease)",
    ],
  },
  {
    title: "Fleet Finance Solutions",
    questions: [
      "What is the key difference between a Chattel Mortgage and a Finance Lease?",
      "How does an Operating Lease affect my balance sheet?",
      "Can I include vehicle maintenance, tyres, and registration in the finance?",
      "Do I have to pay GST on the residual/balloon payment?",
    ],
  },
  {
    title: "Working Capital Solutions",
    questions: [
      "What is the difference between a Business Overdraft and a Line of Credit?",
      "How quickly can I access cash using Invoice Finance?",
      "Is Trade Finance only for international import/export transactions?",
      "Do I pay interest on the full limit of a Line of Credit?",
    ],
  },
  {
    title: "Property & Long-Term Loans",
    questions: [
      "What types of Commercial Property can be financed with a Commercial Property Loan?",
      "What documentation is required for a Self-Employed Residential Loan?",
      "Can I buy a commercial property for investment purposes only?",
    ],
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 px-0 py-10 bg-gray-50">
      <Card className="w-full max-w-[768px] bg-white rounded border border-solid shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-5 p-8">
          <h1 className="font-semibold text-[#c70036] text-5xl text-center tracking-[-0.80px] leading-[48px] [font-family:'Figtree',Helvetica]">
            Frequently Asked Questions
          </h1>
          <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
            Answers to the most common questions from our partners and clients..
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-12 w-full max-w-[768px]">
        {faqSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col items-start gap-[18px] w-full"
          >
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-3xl tracking-[-0.40px] leading-[37.5px]">
              {section.title}
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-[18px]"
            >
              {section.questions.map((question, questionIndex) => (
                <AccordionItem
                  key={questionIndex}
                  value={`item-${sectionIndex}-${questionIndex}`}
                  className="bg-white rounded border border-solid shadow-shadow-sm px-6 py-5"
                >
                  <AccordionTrigger className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-base tracking-[0] leading-6 text-left hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-sm tracking-[0] leading-5">
                      Answer content would go here.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};
