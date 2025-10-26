import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Solution = {
    image: string;
    title: string;
    description: string;
    link?: string;
};

const solutions: Solution[] = [
    {
        image: 'https://framerusercontent.com/images/dfSF9LMeXzA92jU8kDQhIqNUafg.png?width=1024&height=1024',
        title: 'Chattel Mortgage',
        description:
            'A business loan where your company owns the vehicle from day one. You make regular repayments and can claim GST, depreciation, and interest, with flexible balloon options to manage cash flow.',
        link: '/fleet/chattel-mortgage',
    },
    {
        image: 'https://framerusercontent.com/images/dfSF9LMeXzA92jU8kDQhIqNUafg.png?width=1024&height=1024',
        title: 'Finance Lease',
        description:
            'Lets your business use the vehicle while the lender retains ownership. You make fixed monthly payments over the lease term, which are generally tax-deductible. At the end of the lease, you can choose to return the vehicle, refinance the residual, or pay out the residual to take ownership.',
        link: '/fleet/operating-lease',
    },
    {
        image: 'https://framerusercontent.com/images/dfSF9LMeXzA92jU8kDQhIqNUafg.png?width=1024&height=1024',
        title: 'Operating Lease',
        description:
            'A full-service rental agreement where the financier owns the vehicle. You pay a fixed monthly amount with no residual risk at the end of the term, making it ideal for businesses wanting predictable costs and easy upgrades.',
        link: '/fleet/novated-lease',
    },
];

type FleetSolutionsProps = {
    sectionTitle?: string;
    sectionDescription?: string;
};

const FleetSolutions: React.FC<FleetSolutionsProps> = ({
    sectionTitle = 'Fleet Solutions',
    sectionDescription = 'Choose the right finance and leasing structure for your ABN tailored to your cash flow, tax benefits, and fleet growth',
}) => {
    return (
        <section className="animate-slide-up-fade bg-white pt-[50px] pb-[100px] px-4">
            <div className="container mx-auto">
                {/* Heading + Paragraph */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full relative overflow-visible mb-12">
                    <h2 className="animate-slide-in-top text-[#171717] font-medium text-[30px] leading-[1.1em] tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px]">
                        {sectionTitle}
                    </h2>
                    <p className="animate-slide-in-bottom font-medium text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">
                        {sectionDescription}
                    </p>
                </div>

                {/* Solutions Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {solutions.map((solution, index) => (
                        <li
                            key={index}
                            className="bg-[#fafafa] rounded-xl shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition"
                        >
                            <Image
                                src={solution.image}
                                alt={solution.title}
                                width={350}
                                height={300}
                                className="w-full h-[300px] object-cover object-top"
                            />
                            <div className='pt-0 pb-5 px-5'>
                                <span className="text-2xl  font-medium text-[#171717] mb-3 block">{solution.title}</span>
                                <p className="text-base text-[#333]">{solution.description}</p>
                                {solution.link && (
                                    <Link
                                        href={""}
                                        className="text-customBlue-500 hover:gap-x-1 hover:underline font-medium text-base mt-4 inline-block"
                                    >
                                        Learn More →
                                    </Link>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FleetSolutions;
