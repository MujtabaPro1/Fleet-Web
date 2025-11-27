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
      {
        question: "What is the minimum term for a business lease?",
        answer:
          "The minimum commitment for commercial vehicle finance products such as a Chattel Mortgage or Finance Lease generally starts at 12 months. Most commercial leases are structured over 3 to 5 years (36 to 60 months). Longer terms reduce monthly payments but depend on vehicle use and ATO residual value rules. We help select the shortest suitable term for your cash flow and fleet cycle."
      },
      {
        question: "How quickly can I get approved and take delivery?",
        answer:
          "Approval speed depends on your business structure and documentation.\n• Pre-Approval: Indicative approval in as little as 2 hours for simple ABN applications.\n• Formal Approval: 24–48 hours after submitting full documentation.\n• Delivery: Usually 7–14 days after finance settlement if the vehicle is in stock."
      },
      {
        question: "What is a 'Residual Value' and what are the ATO rules surrounding it?",
        answer:
          "Residual Value (Balloon Payment) is the estimated value of the vehicle at the end of the lease or loan term, reducing monthly payments. The ATO sets minimum residual percentages depending on the term. These must be met for the structure to qualify as a commercial lease or loan for tax purposes."
      },
      {
        question: "Do you manage vehicle servicing and maintenance? (The Full-Service Lease)",
        answer:
          "Yes. A Full-Service Operating Lease bundles all running costs into one fixed monthly payment, including servicing, maintenance, tyres, rego, CTP, roadside assistance, and optional fuel/toll management. This removes fleet admin burden and ensures predictable budgeting."
      }
    ]
  },
  {
    title: "Fleet Finance Solutions",
    questions: [
      {
        question: "What is the key difference between a Chattel Mortgage and a Finance Lease?",
        answer:
          "The key difference is ownership and GST timing. A Chattel Mortgage gives you immediate ownership, allowing GST to be claimed upfront (if cash-based). With a Finance Lease, the financier owns the vehicle and GST is generally claimed progressively on lease payments."
      },
      {
        question: "How does an Operating Lease affect my balance sheet?",
        answer:
          "An Operating Lease is treated as an off-balance-sheet expense. The asset and liability are not recorded, helping financial ratios and supporting compliance with AASB 16 standards."
      },
      {
        question: "Can I include vehicle maintenance, tyres, and registration in the finance?",
        answer:
          "Yes. A Full-Service Operating Lease includes all running costs—servicing, tyres, registration, etc.—in one fixed monthly payment for predictable budgeting."
      },
      {
        question: "Do I have to pay GST on the residual/balloon payment?",
        answer:
          "Yes, for a Finance Lease GST is applied to the final balloon payment. For a Chattel Mortgage, GST is claimed upfront on the full purchase price, so the balloon is generally GST-free."
      }
    ]
  },
  {
    title: "Working Capital Solutions",
    questions: [
      {
        question: "What is the difference between a Business Overdraft and a Line of Credit?",
        answer:
          "A Business Overdraft is attached to your transaction account and is used for short-term cash flow gaps. A Line of Credit is a dedicated separate facility typically used for larger or medium-term purchases such as stock or short-term investment."
      },
      {
        question: "How quickly can I access cash using Invoice Finance?",
        answer:
          "Once approved, Invoice Finance lets you access up to 80% of your outstanding invoices within 24–48 hours, significantly improving cash flow."
      },
      {
        question: "Is Trade Finance only for international import/export transactions?",
        answer:
          "No. While often used for overseas supplier payments, Trade Finance can also fund the purchase and sale of domestic goods and stock."
      },
      {
        question: "Do I pay interest on the full limit of a Line of Credit?",
        answer:
          "No. Interest is only charged on the amount you draw. The unused portion of the limit remains available as a free buffer."
      }
    ]
  },
  {
    title: "Property & Long-Term Loans",
    questions: [
      {
        question: "What types of Commercial Property can be financed with a Commercial Property Loan?",
        answer:
          "Commercial Property Loans can finance offices, warehouses, industrial units, retail spaces, and commercial developments. These loans offer higher borrowing limits and longer terms than residential loans."
      },
      {
        question: "What documentation is required for a Self-Employed Residential Loan?",
        answer:
          "Self-employed borrowers often use Low-Doc or alternative documentation. This includes BAS statements, business bank statements, or an Accountant’s Declaration to verify income."
      },
      {
        question: "Can I buy a commercial property for investment purposes only?",
        answer:
          "Yes. Commercial Property Loans can be used for both owner-occupied premises and investment properties leased to another business."
      }
    ]
  }
];


export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 px-0 py-10 bg-[#f9fafb]">
      <Card className="w-full max-w-[768px] bg-white rounded border border-solid shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-5 p-8">
          <h1 className="font-semibold text-[#c70036] text-5xl text-center tracking-[-0.80px] leading-[48px] font-figtree">
            Frequently Asked Questions
          </h1>
          <p className="font-figtree font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
            Answers to the most common questions from our partners and clients..
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-12 w-full max-w-[768px]">
        {faqSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col items-start gap-[18px] w-full lg:p-0 p-6"
          >
            <h2 className="font-figtree font-semibold text-[#194170] text-3xl tracking-[-0.40px] leading-[37.5px]">
              {section.title}
            </h2>
            <Accordion
              type="multiple"
              className="w-full flex flex-col gap-[18px]"
            >
              {section.questions.map((question, questionIndex) => (
                <AccordionItem
                  key={questionIndex}
                  value={`item-${sectionIndex}-${questionIndex}`}
                  className="bg-white rounded border border-solid shadow-shadow-sm rounded-md"
                >
                  <AccordionTrigger className="font-figtree font-medium text-[#000] bg-[#f3f4f6] text-dark tracking-[0] leading-6 text-left hover:no-underline px-6 py-5">
                    {question.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 font-figtree font-normal text-[#4a5565] text-sm tracking-[0] leading-5 px-6 py-5">
                      {question.answer}
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
