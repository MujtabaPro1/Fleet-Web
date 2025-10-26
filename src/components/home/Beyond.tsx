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
        title: 'Working Capital',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/fleet/chattel-mortgage',
    },
    {
        image: 'https://framerusercontent.com/images/dfSF9LMeXzA92jU8kDQhIqNUafg.png?width=1024&height=1024',
        title: 'Line of Credit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/fleet/operating-lease',
    },
    {
        image: 'https://framerusercontent.com/images/dfSF9LMeXzA92jU8kDQhIqNUafg.png?width=1024&height=1024',
        title: 'Commercial Loans',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/fleet/novated-lease',
    },
];

type BeyondProps = {
    sectionTitle?: string;
    sectionDescription?: string;
};

const Beyond: React.FC<BeyondProps> = ({
    sectionTitle = 'Beyond commercial leasing…  ',
    sectionDescription = 'Browse Australia’s most popular brands with tailored finance and fleet discounts for ABN holders.',
}) => {
    return (
        <section className="animate-slide-up-fade bg-white py-[50px] px-4">
            <div className="container mx-auto">
                {/* Heading + Paragraph */}
                <div className="flex flex-col items-start justify-start gap-4 w-full max-w-full relative overflow-visible mb-10">
                    <h2 className="animate-slide-in-top text-[#171717] font-medium text-[24px] leading-[1.1em] tracking-[-0.03em] capitalize md:text-[24px] sm:text-[20px]">
                        {sectionTitle}
                    </h2>
                    <p className="font-medium animate-slide-in-bottom max-w-lg text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">
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
                            {/* <Image
                                src={solution.image}
                                alt={solution.title}
                                width={350}
                                height={300}
                                className="w-full h-[300px] object-cover object-top"
                            /> */}
                            <div className='p-5'>
                                <span className="text-2xl  font-medium text-[#171717] block mb-2">{solution.title}</span>
                                <p className="text-base text-[#333]">{solution.description}</p>
                                {solution.link && (
                                    <Link
                                        href={""}
                                        className="text-customBlue-500 hover:underline font-medium text-base mt-4 inline-block"
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

export default Beyond;
