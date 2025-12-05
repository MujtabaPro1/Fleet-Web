'use client';
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { MyPage } from "../../../../components/layouts/types";
import { useRouter } from "next/router";


const blogs: any = {
  1: {
     title: 'Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free',
     blogSections: [
  {
    number: 1,
    title: "What Is a Novated Lease?",
    subtitle: "",
    content:
      "If you’ve ever looked at your payslip and wondered “where did all my money go?”, a novated lease might be the best financial move you ever make. In simple terms, a novated lease lets you pay for a new (or used) car using pre-tax salary. That means you skip income tax and GST on the purchase price and on every running cost — fuel, tyres, servicing, insurance, registration and more.",
    subsections: [
      {
        heading: "What “novated” actually means",
        text: `“Novated” just sounds fancy. It’s a simple three-way agreement:

• You pick the vehicle  
• The leasing company owns it and leases it to your employer  
• Your employer pays the lease and running costs from your pre-tax salary  
• You drive the car exactly as if it were yours  

When you change jobs, the lease simply “novates” (transfers) to the new employer or you take it over yourself.`
      }
    ]
  },

  {
    number: 2,
    title: "Why a Novated Lease Saves So Much Money",
    subtitle: "",
    content:
      "Because the payments come out before tax, you effectively drop into a lower tax bracket. Add the GST saving (you pay zero GST on a $60k+ vehicle) and the numbers get very compelling.",
    subsections: [
      {
        heading: "Real-life example (2025 tax rates)",
        text: `A sparky earning $115,000 packages a $68,000 dual-cab ute with all running costs included over 5 years:

→ Take-home pay only drops by about $420/fortnight  
→ Total tax + GST saved: around $48,000 over the term  
→ Drives away in a brand-new loaded ute for less than most people pay for a 2016 model`
      }
    ]
  },

  {
    number: 3,
    title: "Who Can Use a Novated Lease?",
    subtitle: "",
    content:
      "Anyone on a regular Australian salary can benefit — nurses, teachers, miners, tradies, office workers, and even contractors if they are paid under PAYG.",
    subsections: [
      {
        heading: "Common myths — busted",
        text: `“My boss won’t allow it” → 99% of employers approve because it costs them nothing.  
“Only for executives” → Tradies are actually the biggest users in Australia.  
“I’ll get stung at tax time” → No. The ATO loves novated leasing.`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line",
    subtitle: "",
    content:
      "If you’re paying tax and you need a vehicle, you're probably throwing money away by NOT using a novated lease. The savings are significant, predictable, and fully ATO-compliant.",
    subsections: []
  }
],
processSteps: [
  {
    number: 1,
    title: "Initial Consultation",
    description: "We assess your income, tax position and vehicle preferences."
  },
  {
    number: 2,
    title: "Vehicle Selection",
    description: "Choose any new or used vehicle that suits your lifestyle or work."
  },
  {
    number: 3,
    title: "Approval & Salary Packaging",
    description: "We coordinate with your employer to set up your pre-tax deductions."
  },
  {
    number: 4,
    title: "Lease Activation",
    description: "Your vehicle, insurance and running costs are bundled into one payment."
  },
  {
    number: 5,
    title: "Drive & Save",
    description: "You enjoy the car while saving thousands in tax and GST."
  }
],
readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]

  },
  2: {
   title: 'The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses',
   blogSections: [
  {
    number: 1,
    title: "Why Australian Businesses Lease Instead of Buy",
    subtitle: "",
    content:
      "Cash flow is king. Depreciation rules change. GST is confusing. That’s why the majority of Australian businesses — from one-man sparkies to 200-vehicle fleets — have ditched ownership and moved to leasing.",
    subsections: [
      {
        heading: "The 5 biggest reasons businesses lease instead of buy",
        text: `• 100% tax deductible payments – Every lease payment (and often running costs) can be claimed as a business expense.
• Full GST claim on day one – GST-registered businesses claim the entire GST component immediately in the next BAS.
• Zero or tiny upfront cost – Most commercial leases require no deposit at all.
• Predictable budgeting – Fixed monthly payments mean stable cash flow with no surprise repair bills.
• Upgrade every few years – Newer vehicles offer better fuel economy, latest safety tech and improved staff appeal.`
      }
    ]
  },

  {
    number: 2,
    title: "Commercial Leasing Options in Australia",
    subtitle: "",
    content:
      "Australia offers several leasing structures designed to suit different industries, cash-flow positions, and ownership preferences.",
    subsections: [
      {
        heading: "Finance Lease",
        text: "You pay the lease throughout the term and usually own the vehicle for a small payout at the end."
      },
      {
        heading: "Operating Lease",
        text: "A true ‘all-inclusive’ lease bundling servicing, tyres and maintenance. Off-balance-sheet for many businesses."
      },
      {
        heading: "Chattel Mortgage",
        text: "Extremely popular with sole traders — you own the vehicle immediately, but the lender places a mortgage over it until paid off."
      },
      {
        heading: "Novated Lease",
        text: "Employee-driven leasing paid by the business. A major staff attraction and retention benefit."
      }
    ]
  },

  {
    number: 3,
    title: "Who Gains the Most From Commercial Leasing?",
    subtitle: "",
    content:
      "Any business that relies on vehicles can dramatically improve cash flow, tax position and upgrade frequency through leasing.",
    subsections: [
      {
        heading: "Biggest winners",
        text: `• Tradies and contractors  
• Delivery and logistics fleets  
• Sales reps who drive big kilometres  
• Businesses wanting a professional image without tying up capital`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line",
    subtitle: "",
    content:
      "If your business uses vehicles, leasing isn’t a ‘nice-to-have’ — it’s usually the smartest financial decision you’ll make all year. Better cash flow, better tax outcomes, no big upfront costs, and regular vehicle upgrades.",
    subsections: []
  }
], processSteps: [
  {
    number: 1,
    title: "Discuss Requirements",
    description: "We assess vehicle needs, business structure and tax benefits."
  },
  {
    number: 2,
    title: "Choose the Leasing Product",
    description: "Finance lease, operating lease, chattel mortgage or novated — we help you compare."
  },
  {
    number: 3,
    title: "Get Fast Approval",
    description: "We lodge the application and secure competitive rates with commercial lenders."
  },
  {
    number: 4,
    title: "Settlement & Delivery",
    description: "Once approved, your new vehicle is delivered and your agreement begins."
  },
  {
    number: 5,
    title: "Drive, Work & Save",
    description: "Enjoy predictable monthly payments, strong tax benefits and new-vehicle reliability."
  }
],
readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]


  },
  3: {
    title: 'Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax in Australia?',
    blogSections:[
  {
    number: 1,
    title: "The No-BS Breakdown",
    subtitle: "",
    content:
      "Every business owner has asked this question at some point: should we lease or buy? Here’s the straightforward comparison using a real-world example of a $65,000 dual-cab ute.",
    subsections: [
      {
        heading: "The cold hard numbers – $65,000 dual-cab ute",
        text: `Leasing (5-year finance lease)
• Upfront cost: $0  
• Monthly cost: ~$1,250 (100% deductible)  
• GST treatment: Claim full $5,909 upfront  
• Cash tied up: None  
• Vehicle at end: Pay residual or refinance  
• Total tax + GST advantage: Highest  

Buying outright (cash)
• Upfront cost: $65,000  
• Monthly cost: $0  
• GST treatment: Claim slowly  
• Cash tied up: $65,000  
• Vehicle at end: Yours  
• Total tax + GST advantage: Lowest  

Buying with a business loan
• Upfront cost: $0  
• Monthly cost: ~$1,300 (interest only deductible)  
• GST treatment: Claim slowly  
• Cash tied up: None  
• Vehicle at end: Yours  
• Total tax + GST advantage: Medium`
      }
    ]
  },

  {
    number: 2,
    title: "When Buying Wins",
    subtitle: "",
    content:
      "Buying a vehicle still makes sense in certain situations, especially when long-term ownership matters more than cash flow or tax treatment.",
    subsections: [
      {
        heading: "Buying is better when:",
        text: `• You have spare cash sitting idle  
• You plan to keep the vehicle 8–10+ years  
• You hate paperwork and want a simple one-time purchase`
      }
    ]
  },

  {
    number: 3,
    title: "When Leasing Destroys Buying",
    subtitle: "",
    content:
      "For most Australian businesses, leasing delivers stronger cash-flow outcomes, better tax positions and faster access to newer, safer vehicles.",
    subsections: [
      {
        heading: "Leasing is better when:",
        text: `• You want new, safe, reliable vehicles every 3–5 years  
• Cash flow and tax deductions matter  
• You're GST-registered (the upfront GST reclaim is huge)`
      }
    ]
  },

  {
    number: 4,
    title: "The Real-World Verdict",
    subtitle: "",
    content:
      "Ask 100 successful Australian business owners what they do — and 95+ will say they lease. The few who still buy often wish they hadn’t once they compare tax outcomes, cash impact and upgrade cycles.",
    subsections: []
  }
],
processSteps:[
  {
    number: 1,
    title: "Assess Business Needs",
    description: "We compare lease vs buy outcomes based on cash flow, tax and vehicle usage."
  },
  {
    number: 2,
    title: "Run Cost Comparison",
    description: "We calculate GST impact, monthly payments, and tax deductibility."
  },
  {
    number: 3,
    title: "Select Finance Option",
    description: "Finance lease, operating lease or purchase — whichever benefits you most."
  },
  {
    number: 4,
    title: "Approval & Documentation",
    description: "We coordinate fast approvals and ensure accurate tax treatment."
  },
  {
    number: 5,
    title: "Drive & Optimise Cash Flow",
    description: "You get the vehicle your business needs — without draining capital."
  }
],
readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]


  },
  4: {
    title: 'How Salary Packaging a Vehicle Works for Tradies and Sole Traders in Australia',
    blogSections: [
  {
    number: 1,
    title: "Yes — Tradies and Sole Traders *Can* Salary Package",
    subtitle: "",
    content:
      "You’re a sparky, plumber or chippie with your own ABN. Everyone keeps telling you salary packaging is only for employees. They’re wrong. There are multiple ATO-compliant ways for tradies and sole traders to salary package a work vehicle.",
    subsections: [
      {
        heading: "Three legal ways tradies salary package today",
        text: `• Set up a company and become its employee – The most common and 100% ATO-compliant method. You pay yourself a modest salary and package the vehicle as a novated lease.  
• Use the “Employee Share Scheme” trick within your existing structure – Works particularly well for trusts.  
• Run a fully maintained operating lease through the business – Not technically salary packaging, but results in a nearly identical after-tax benefit.`
      }
    ]
  },

  {
    number: 2,
    title: "Typical Savings for Sole Traders & Tradies",
    subtitle: "",
    content:
      "When structured properly, the tax benefits for sole traders packaging a vehicle can be enormous — often larger than what PAYG employees receive.",
    subsections: [
      {
        heading: "Example: $120k turnover tradie packages a $72,000 loaded ute",
        text: `• Fortnightly cost to take-home pay: ~$380–$480  
• Total tax saved over 5 years: $45,000–$60,000  
• Drives a far better ute than he could afford after-tax`
      }
    ]
  },

  {
    number: 3,
    title: "How Hard Is It to Set Up?",
    subtitle: "",
    content:
      "Much easier than most tradies think. A good accountant can put the correct structure in place quickly — and once it’s running, it requires almost no maintenance.",
    subsections: [
      {
        heading: "Setup requirements",
        text: `• Takes one extra BAS line  
• Requires about 3 hours with an accountant  
• After setup, the structure runs automatically with minimal admin  
• You simply enjoy the tax savings every pay cycle`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line for Tradies",
    subtitle: "",
    content:
      "If you’re a sole trader or tradie using a work ute, you are almost certainly leaving money on the table by NOT salary packaging. The structure is legal, simple to maintain, and provides thousands in annual tax savings.",
    subsections: []
  }
],
  processSteps: [
  {
    number: 1,
    title: "Choose the Right Structure",
    description: "Company setup, trust structure or operating lease — depending on your situation."
  },
  {
    number: 2,
    title: "Calculate Your Savings",
    description: "We model tax outcomes and compare salary packaging vs paying after-tax."
  },
  {
    number: 3,
    title: "Apply for the Vehicle",
    description: "We help secure the best lease or operating agreement for your ute or van."
  },
  {
    number: 4,
    title: "ATO-Compliant Setup",
    description: "Your accountant adds the correct BAS line and sets up salary deductions."
  },
  {
    number: 5,
    title: "Drive & Save Automatically",
    description: "You keep thousands each year while driving a better work vehicle."
  }
],
readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]
  },
  5:{
    title: 'FBT-Exempt Vehicles in Australia: The Complete Guide for Employers and Employees',
    blogSections: [
  {
    number: 1,
    title: "FBT Doesn’t Apply to Certain Vehicles",
    subtitle: "",
    content:
      "Fringe Benefits Tax sounds scary. But for certain vehicles, it’s completely irrelevant. The ATO’s rules make it possible for employers to give staff high-value work vehicles with zero FBT liability when used correctly.",
    subsections: [
      {
        heading: "The golden rule",
        text: `If the vehicle is a “commercial vehicle” and private use is limited to travel between home and work plus minor, incidental use → zero FBT.`
      }
    ]
  },

  {
    number: 2,
    title: "Vehicles That Almost Always Qualify for FBT Exemption",
    subtitle: "",
    content:
      "The ATO’s definitions make many popular work vehicles fully FBT-free, as long as private use remains minor and work-related.",
    subsections: [
      {
        heading: "Common FBT-exempt vehicle categories",
        text: `• Any dual-cab ute (HiLux, Ranger, D-Max, Navara, Triton, Amarok, BT-50, etc.)  
• Single-cab and extra-cab utes  
• Vans with no rear seats (HiAce, Transit, Sprinter, Crafter, LDV, Vito, etc.)  
• Any vehicle designed to carry 1 tonne or more  
• Cab-chassis vehicles with tray or toolbox fit-outs`
      }
    ]
  },

  {
    number: 3,
    title: "The Weekend Test — What Counts as ‘Minor Private Use’?",
    subtitle: "",
    content:
      "Many employers and employees worry about what they can and can’t do with an FBT-exempt work vehicle. The ATO’s interpretation is more flexible than people think.",
    subsections: [
      {
        heading: "Examples the ATO allows",
        text: `• Taking rubbish to the tip on Saturday  
• Picking up a fridge from Gumtree  
• Using the vehicle for minor incidental personal tasks  

As long as these activities are not the *primary purpose* of the vehicle, the ATO classifies them as minor private use → still zero FBT.`
      }
    ]
  },

  {
    number: 4,
    title: "The Massive Advantage for Businesses",
    subtitle: "",
    content:
      "Your employee gets to drive a $70k+ loaded ute home every day. You pay little or nothing in Fringe Benefits Tax. And it becomes a powerful staff attraction and retention tool.",
    subsections: []
  }
],
  processSteps: [
    {
      number: 1,
      title: "Assess Eligibility",
      description: "We check whether your vehicle qualifies under ATO commercial-use rules."
    },
    {
      number: 2,
      title: "Confirm Private-Use Policy",
      description: "We define a compliant home-to-work + minor-use policy for employees."
    },
    {
      number: 3,
      title: "Choose the Vehicle",
      description: "Select an FBT-exempt ute, van or cab-chassis based on business needs."
    },
    {
      number: 4,
      title: "Implement ATO-Compliant Recordkeeping",
      description: "We help document policies so your business remains protected during audit."
    },
    {
      number: 5,
      title: "Deliver Vehicle & Benefit",
      description: "Employees enjoy a premium work vehicle with zero FBT penalties."
    }
  ],
  readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]


  },
  6: {
    title: '7 Hidden Costs of Owning a Work Ute That Most Australian Businesses Never Budget For',
    blogSections: [
  {
    number: 1,
    title: "The Real Cost of Owning a Work Ute",
    subtitle: "",
    content:
      "Everyone sees the sticker price. Very few Australian businesses count the true cost of owning a ute for 5–8 years. When all hidden expenses are included, ownership can be dramatically more expensive than leasing.",
    subsections: [
      {
        heading: "Why most owners underestimate costs",
        text: `Most tradies only factor fuel, insurance and repayments — but never the financial drain of downtime, depreciation, lost GST opportunities and escalating repairs.`
      }
    ]
  },

  {
    number: 2,
    title: "The 7 Hidden Costs of Owning a Work Ute",
    subtitle: "",
    content:
      "These are the costs almost no business budgets for — yet they hit every owner eventually and can erase any savings from buying outright.",
    subsections: [
      {
        heading: "1. Downtime & lost income",
        text: `One week off the road for a turbo or gearbox failure can mean $5,000–$15,000 in lost billing. If your ute isn’t moving, neither is your income.`
      },
      {
        heading: "2. Interest on tied-up capital",
        text: `$70k locked into a vehicle earns you nothing, while your savings could be earning 4–5%. The opportunity cost alone is thousands per year.`
      },
      {
        heading: "3. Massive depreciation in the first 3 years",
        text: `Most dual-cab utes lose 45–55% of their value in 36 months. That’s $30k–$38k gone before you even think about selling.`
      },
      {
        heading: "4. Unexpected repairs after warranty",
        text: `Clutches, DPFs, injectors, turbo failures and dual-mass flywheels often cost $4,000–$12,000 — and they always hit after warranty expires.`
      },
      {
        heading: "5. Rising insurance & rego on older utes",
        text: `Premiums usually increase with age, not decrease, because older utes break more and cost more to insure.`
      },
      {
        heading: "6. Opportunity cost of GST",
        text: `When you buy, you only reclaim 1/11th slowly over time. With leasing, GST is claimed upfront — a major cash-flow advantage.`
      },
      {
        heading: "7. Resale hassle and low-ball offers",
        text: `Selling a high-km ex-work ute privately means tyre-kickers, low-ball offers and weeks of downtime. Businesses underestimate the effort and low resale value.`
      }
    ]
  },

  {
    number: 3,
    title: "The True Financial Impact",
    subtitle: "",
    content:
      "When the above hidden costs are finally added up, most tradies and small businesses discover ownership is thousands more expensive than they realised.",
    subsections: [
      {
        heading: "The real-world difference",
        text: `Most tradies end up $25,000–$40,000 worse off owning than leasing — even after the lease payments are included.`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line",
    subtitle: "",
    content:
      "Buying a ute feels simple upfront, but the financial reality is very different. Leasing gives predictable costs, protects cash flow, avoids big repair bills and eliminates resale headaches — which is why more tradies lease today than ever before.",
    subsections: []
  }
],
processSteps: [
  {
    number: 1,
    title: "Identify Your Total Cost of Ownership",
    description: "We calculate downtime risk, depreciation, GST treatment and repair exposure."
  },
  {
    number: 2,
    title: "Compare Lease vs Buy Financial Outcomes",
    description: "We show real numbers over 3–5 years including tax deductions and GST credits."
  },
  {
    number: 3,
    title: "Select the Best Funding Option",
    description: "Finance lease, operating lease or commercial loan — depending on your goals."
  },
  {
    number: 4,
    title: "Get Fast Approval",
    description: "We secure competitive rates with the right commercial lenders."
  },
  {
    number: 5,
    title: "Drive With Predictable Costs",
    description: "No unexpected bills, no resale stress — just stable monthly expenses."
  }
],
  readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]
  },
  7: {
    title: 'Can You Novated Lease a Dual-Cab Ute? (Yes — And Here’s Why Thousands of Tradies Already Do)',
    blogSections: [
  {
    number: 1,
    title: "Yes — You Absolutely Can Novated Lease a Dual-Cab Ute",
    subtitle: "",
    content:
      "Short answer: Yes, 100%. Dual-cab utes are the #1 most popular novated-leased vehicles in Australia. Thousands of tradies, employees and contractors package their utes every year because the tax benefits are unmatched.",
    subsections: [
      {
        heading: "Why dual-cabs are perfect for novated leasing",
        text: `• They’re usually FBT-exempt (zero tax for the employer)  
• You can bundle all running costs — fuel, tyres, servicing, insurance, rego  
• Private use for the employee is unlimited  
• GST input credits are still claimable if the business is registered`
      }
    ]
  },

  {
    number: 2,
    title: "Most Popular Novated-Leased Dual-Cab Utes",
    subtitle: "",
    content:
      "Almost every major ute on the market is eligible for novated leasing, and most qualify as commercial-use vehicles.",
    subsections: [
      {
        heading: "Top models Aussies are packaging right now",
        text: `• Toyota HiLux  
• Ford Ranger  
• Isuzu D-Max  
• Mazda BT-50  
• Mitsubishi Triton  
• Volkswagen Amarok  
• GWM Cannon  
• LDV T60  

If it has two rows of seats and a tub — it can be novated.`
      }
    ]
  },

  {
    number: 3,
    title: "Real Example: Typical Fortnightly Cost + Total Savings",
    subtitle: "",
    content:
      "The financial benefit of novated leasing a dual-cab is significant — especially once GST and income-tax savings are included.",
    subsections: [
      {
        heading: "Case study: $75,000 Toyota HiLux SR5 (fully loaded, 5-year term)",
        text: `• Employee earning $120k: ~$450–$520 deducted from take-home pay each fortnight  
• Total tax + GST saved over 5 years: $50,000+`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line",
    subtitle: "",
    content:
      "If you pay tax and you drive a dual-cab ute, not using a novated lease means you're volunteering to overpay the ATO. The savings are huge, predictable and ATO-approved — which is why dual-cabs dominate Australia’s novated-lease market.",
    subsections: []
  }
],
processSteps: [
  {
    number: 1,
    title: "Choose Your Dual-Cab",
    description: "Select any eligible ute — HiLux, Ranger, D-Max, Amarok, Triton and more."
  },
  {
    number: 2,
    title: "Calculate Your Savings",
    description: "We show real take-home impact and GST + tax savings for your salary."
  },
  {
    number: 3,
    title: "Set Up the Novated Lease",
    description: "We coordinate everything with your employer and lease provider."
  },
  {
    number: 4,
    title: "Bundle Running Costs",
    description: "Add fuel, tyres, servicing, insurance and rego into one pre-tax payment."
  },
  {
    number: 5,
    title: "Drive & Save",
    description: "You enjoy a fully maintained ute while saving thousands in tax."
  }
],
 readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]

  },
  8: {
    title: 'Commercial Van Leasing Guide: How to Choose (and Lease) the Perfect Van for Your Australian Trade',
    blogSections: [
  {
    number: 1,
    title: "One Size Never Fits All With Work Vans",
    subtitle: "",
    content:
      "Different trades need different vans. Choosing the right size, layout and capacity directly affects productivity, safety and running costs. Here’s how Australian tradies match the right van to their work.",
    subsections: [
      {
        heading: "Small vans (Vito, Caddy, Transporter SWB)",
        text: "Perfect for electricians, locksmiths, alarm installers and city-based trades needing easy parking and low running costs."
      },
      {
        heading: "Medium vans (Transit Custom, HiAce LWB, LDV Deliver 9)",
        text: "The sweet spot for most tradies — 6–8 m³ of usable space, dual sliding doors and room for 3–4 Euro pallets."
      },
      {
        heading: "Large vans (Sprinter, Crafter, Transit LWB high-roof)",
        text: "Best for plumbers, removalists and any trade carrying long pipe, bulky cargo or tall equipment."
      }
    ]
  },

  {
    number: 2,
    title: "Key Questions to Ask Before You Lease a Van",
    subtitle: "",
    content:
      "Choosing the right commercial van isn’t just about brand or size — it’s about matching payload, access, fuel type and warranty to your trade requirements.",
    subsections: [
      {
        heading: "What to consider:",
        text: `• Payload capacity — going even 50 kg over can result in instant fines  
• Roof height & door opening size — affects job accessibility  
• Diesel vs petrol vs electric — depending on kms, torque and charging  
• Warranty length — 5+ years is ideal, especially for high-km trades`
      }
    ]
  },

  {
    number: 3,
    title: "Why Leasing Beats Buying for Commercial Vans",
    subtitle: "",
    content:
      "Vans work harder than almost any other trade vehicle. After 4–5 years the repair bills begin — and they aren’t small. Leasing lets you upgrade before problems start and keeps cash flow predictable.",
    subsections: [
      {
        heading: "The core advantages of leasing vans",
        text: `• You avoid major post-warranty repair costs  
• You upgrade regularly into safer, more efficient vans  
• Every lease payment is 100% tax-deductible  
• No depreciating asset sitting on your balance sheet`
      }
    ]
  },

  {
    number: 4,
    title: "The Bottom Line",
    subtitle: "",
    content:
      "Choosing the right van means choosing the right tool for the job. Leasing helps you stay ahead of repairs, protect cash"

  }
],
processSteps: [
  {
    number: 1,
    title: "Assess Your Trade Requirements",
    description: "We identify the correct van size, payload and configuration for your work."
  },
  {
    number: 2,
    title: "Compare Available Vans",
    description: "Transit, HiAce, Sprinter, Crafter, LDV, VW — we compare cargo space, efficiency and warranty."
  },
  {
    number: 3,
    title: "Model Your Lease Savings",
    description: "We calculate running costs, tax deductions and GST benefits."
  },
  {
    number: 4,
    title: "Secure the Lease Agreement",
    description: "We arrange approvals, documentation and delivery timing."
  },
  {
    number: 5,
    title: "Drive a Van That Works for Your Business",
    description: "Enjoy predictable costs and a vehicle that’s always work-ready."
  }
],
 readNextArticles: [
  {
    id: 1,
    title:
      "Novated Lease Explained: How Australian Employees Can Drive a New Vehicle Tax-Free",
    image: "/assets/images/no-image.png",
  },
  {
    id: 2,
    title:
      "The Ultimate Guide to Commercial Vehicle Leasing for Australian Businesses",
    image: "/assets/images/no-image.png",
  },
  {
    id: 3,
    title:
      "Fleet Leasing vs Buying: Which Is Better for Cash Flow and Tax?",
    image: "/assets/images/no-image.png",
  },
  {
    id: 4,
    title:
      "How Salary Packaging a Vehicle Works for Tradies and Sole Traders",
    image: "/assets/images/no-image.png",
  },
  {
    id: 5,
    title:
      "FBT-Exempt Vehicles in Australia: The Full List and How Businesses Benefit",
    image: "/assets/images/no-image.png",
  },
  {
    id: 6,
    title:
      "7 Hidden Costs of Owning a Work Ute (Most Businesses Never See Coming)",
    image: "/assets/images/no-image.png",
  },
  {
    id: 7,
    title:
      "Can You Novated Lease a Dual-Cab Ute? Everything You Need to Know",
    image: "/assets/images/no-image.png",
  },
  {
    id: 8,
    title:
      "Commercial Van Leasing Guide: Choosing the Right Van for Your Trade",
    image: "/assets/images/no-image.png",
  },
]
}};


const BlogDetails: MyPage = () => {

  const router: any = useRouter();
  const { blogsId } = router.query;

  if(!blogsId) {
    return <div>Not Found</div>
  }

  return (
    <section className="flex flex-col w-full items-center gap-6 px-0 py-12 bg-gray-50">
      <div
      onClick={() => router.back()}
      className="flex w-full max-w-[896px] items-center gap-1.5 px-4">
        <ArrowLeftIcon className="w-4 h-4 text-[#194170]" />
        <button className="[font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
          Back to blogs
        </button>
      </div>

      <Card className="flex flex-col w-full max-w-[896px] items-center gap-6 p-8 bg-white rounded border border-solid shadow-shadow-sm mx-4">
        <CardContent className="flex flex-col gap-6 p-0 w-full">
          <h1 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.80px] leading-[normal]">
            {blogs[blogsId].title}
          </h1>

          <div className="flex justify-between px-0 py-6 w-full border-t border-b border-solid border-gray-100 items-center">
            <div className="inline-flex gap-4 items-center">
              <div className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                5 min read
              </div>
              <div className="w-1 h-1 bg-[#ecf3fb] rounded-sm" />
              <div className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {new Date().toLocaleDateString()}
              </div>
            </div>

            <div className="inline-flex items-center justify-end gap-3">
              <img className="w-5 h-5" alt="Facebook" src={'/assets/images/svg/blogs/facebook.svg'}/>
              <img className="w-5 h-5" alt="X" src={'/assets/images/svg/blogs/X.svg'}/>
              <img className="w-5 h-5" alt="Link" src={'/assets/images/svg/blogs/link.svg'}/>
            </div>
          </div>

          {/* <div className="gap-4 flex flex-col items-start w-full">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl tracking-[-0.80px] leading-[45px]">
              A Practical Guide for Australian Businesses
            </h2>
            <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-7">
              As your business grows, sourcing vehicles becomes more than just
              picking the right make and model. It&apos;s about aligning vehicle
              acquisition with your cash flow, tax strategy, and operational
              needs. At Fleet Leasing Australia we specialise in helping
              Australian SMBs move from pre-approval to settlement with clarity
              and confidence. In this article we break down the three most
              common structures: chattel mortgage, finance lease and operating
              lease and how each can align with a business vehicle.
            </p>
          </div> */}

          {/* <div className="flex flex-col items-center gap-3 px-0 py-9 w-full">
            <img
              className="h-[360px] w-full object-cover"
              alt="Image"
              src="/assets/images/no-image.png"
            />
            <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-sm text-center tracking-[0] leading-[21px]">
              Insert image subtext here
            </p>
          </div> */}

          {blogs[blogsId].blogSections.map((section: any, index: any) => (
            <div key={index} className="flex flex-col items-start gap-5 w-full">
              <div className="[font-family:'Figtree',Helvetica] font-normal text-[#101828] text-3xl leading-[30px]">
                <span className="font-semibold tracking-[-0.24px] leading-[0.1px]">
                  {section.number}. {section.title}
                  <br />
                </span>
                <span className="font-semibold text-2xl tracking-[-0.19px] leading-9">
                  {section.subtitle}
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 pt-0 pb-6 px-0 w-full">
                <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  {section.content}
                </p>

                {section.subsections.map((subsection: any, subIndex: any) => (
                  <div
                    key={subIndex}
                    className="gap-4 flex flex-col items-start w-full"
                  >
                    <h3 className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-xl tracking-[0] leading-7">
                      {subsection.heading}
                    </h3>
                    <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-7 whitespace-pre-line">
                      {subsection.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl tracking-[-0.80px] leading-[45px]">
              4. Choosing the Right Structure for Your Business Vehicle
            </h2>

            <div className="flex flex-col items-start gap-6 pt-0 pb-6 px-0 w-full">
              <div className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  Here are three practical considerations to align structure
                  with business goals:
                  <br />
                  <br />
                </span>
                <span className="font-semibold">
                  Your cash flow and capital budget:
                </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  {" "}
                  If preserving cash is critical, leases (especially operating
                  leases) help.
                  <br />
                </span>
                <span className="font-semibold">
                  Length of vehicle usage and upgrade cycle:{" "}
                </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  If you aim to refresh vehicles every 2–4 years, operating
                  leases or finance leases may suit better than outright
                  ownership or chattel mortgage.
                  <br />
                </span>
                <span className="font-semibold">End of term strategy: </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  Do you want to own the vehicle, or hand it back and upgrade?
                  Ownership → chattel mortgage; upgrade cycle → operating lease;
                  somewhere in between → finance lease.
                  <br />
                  <br />
                  At Fleet Leasing Australia we help businesses evaluate these
                  structures side-by-side, run the numbers, and choose the
                  optimal path from pre-approval through to settlement.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl tracking-[-0.80px] leading-[45px]">
              5. Our Process Making Vehicle Funding Simple
            </h2>

            <div className="flex flex-col items-start gap-4 w-full">
              {blogs[blogsId].processSteps.map((step: any, index: any) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 pl-5 pr-0 py-0 w-full"
                >
                  <div className="inline-flex flex-col items-start gap-2.5 pt-1 pb-0 px-0">
                    <div className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-lg tracking-[0] leading-7 whitespace-nowrap">
                      {step.number}.
                    </div>
                  </div>
                  <div className="flex-1 [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-lg tracking-[0] leading-[18px]">
                    <span className="font-semibold leading-7">
                      {step.title}
                    </span>
                    <span className="font-medium leading-7"> – </span>
                    <span className="leading-7">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg leading-[27px] [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] tracking-[0]">
              Working with an independent broker means you&apos;re not tied to
              one product or brand. you benefit from choice, transparency and
              expert advice.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl tracking-[-0.80px] leading-[45px]">
              6. Summary – Which Product for Which Fleet Scenario?
            </h2>

            <div className="flex flex-col items-start gap-6 pt-0 pb-6 px-0 w-full">
              <div className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                <span className="font-semibold">Chattel Mortgage </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  – You want to own the vehicle, maximise tax deductions, and
                  plan to keep it long term.
                  <br />
                </span>
                <span className="font-semibold">Finance Lease </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  – You want flexibility, predictable payments and eventual
                  ownership, ideal if you may upgrade in the future or
                  refinance.
                  <br />
                </span>
                <span className="font-semibold">Operating Lease </span>
                <span className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-[27px]">
                  – You want the use of the vehicle without the hassle of
                  ownership, disposal or residual risk, especially for high
                  turnover or mobile fleets.
                </span>
              </div>

              <p className="text-lg leading-[27px] [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] tracking-[0]">
                If you&#39;re ready to compare options for your business
                vehicles, talk to the team at Fleet Leasing Australia.
                We&apos;ll guide you through the entire process and get you
                road-ready faster.
              </p>
            </div>
          </div>

          <div className="gap-5 pt-0 pb-6 px-0 flex flex-col items-start w-full">
            <Separator className="w-full" />
            <p className="text-sm leading-4 [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] tracking-[0]">
              This article was created using AI-assisted research and reviewed
              by Fleet Leasing Australia for accuracy. Information is general in
              nature and not financial or tax advice.
            </p>
            <Separator className="w-full" />
          </div>

          <div className="flex items-center justify-between px-0 py-6 w-full border-t border-b border-solid border-gray-100">
            <div className="inline-flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded border border-solid shadow-shadow-xs"
              >
                <img
                  className="w-3.5 h-3.5"
                  alt="Facebook"
                  src="/assets/images/svg/blogs/facebook.svg"
                />
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-xs tracking-[0] leading-5 whitespace-nowrap">
                  Share
                </span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded border border-solid shadow-shadow-xs"
              >
                <img className="w-3.5 h-3.5" alt="X" src="/assets/images/svg/blogs/X.svg" />
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-xs tracking-[0] leading-5 whitespace-nowrap">
                  Tweet
                </span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded border border-solid shadow-shadow-xs"
              >
                <img className="w-3.5 h-3.5" alt="Link" src="/assets/images/svg/blogs/link.svg" />
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-xs tracking-[0] leading-5 whitespace-nowrap">
                  Copy
                </span>
              </Button>
            </div>

            <div className="inline-flex items-center justify-end gap-4">
              <img className="w-5 h-5" alt="Bookmark" src="/assets/images/svg/blogs/share.svg" />
              <img
                className="w-5 h-5"
                alt="Dots horizontal"
                src="/assets/images/svg/blogs/menu.svg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col w-full max-w-[896px] items-center gap-9 p-8 bg-white rounded border border-solid shadow-shadow-sm mx-4">
        <CardContent className="flex flex-col gap-9 p-0 w-full">
          <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.80px] leading-9">
            Read next
          </h2>

          <div className="flex flex-col items-start gap-8 w-full">
            {blogs[blogsId].readNextArticles.map((article: any, index: any) => (
              <div
                key={index}
                className="flex items-start justify-center gap-6 w-full bg-white"
              >
                <img
                  className="flex-1 h-52 object-cover"
                  alt="Image"
                  src={article.image}
                />
                <div className="flex flex-col items-start gap-4 flex-1">
                  <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-2xl tracking-[0] leading-8 whitespace-pre-line">
                    {article.title}
                  </h3>
                  <button className="inline-flex items-center gap-1.5">
                    <span className="[font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                      Read blog
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-[#194170]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BlogDetails;
BlogDetails.Layout = "Default";