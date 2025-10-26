// components/WhyBusiness.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import CButton from '../common/form/Button';

type StatItem = {
    value: number;
    suffix?: string;
    title: string;
};

const stats: StatItem[] = [
    { value: 1000, suffix: '+', title: 'Vehicles managed' },
    { value: 20, suffix: '+', title: 'Years of expertise' },
    { value: 1000, suffix: '+', title: 'Happy clients' },
    { value: 30, suffix: '%', title: 'Avg Cost Savings' },
];

const animateCount = (
    target: number,
    setFn: (val: number) => void,
    duration = 1500
) => {
    let start = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        setFn(current);

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            setFn(target);
        }
    };

    requestAnimationFrame(step);
};

export default function WhyBusiness() {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!hasAnimated.current) {
            stats.forEach((stat, index) => {
                animateCount(stat.value, (val) =>
                    setCounts((prev) => {
                        const updated = [...prev];
                        updated[index] = val;
                        return updated;
                    })
                );
            });
            hasAnimated.current = true;
        }
    }, []);

    return (
        <section className="bg-customBlue-500 text-white py-16 px-6 md:px-12">
            <div className="container mx-auto ">
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2'>
                        <h2 className="text-4xl md:text-4xl font-medium mb-5">
                            Why Businesses Choose Us
                        </h2>
                        <p className="text-base mx-auto mb-10">
                            We make fleet leasing simple and stress-free, with service you can trust and
                            support that keeps your business moving.
                        </p>
                    </div>
                    <div className='md:w-1/2 lg:text-right'>
                        <CButton className='border-white' label={
                            <span className=''>
                                Talk To a Sepcialist
                            </span>

                        } variant="transparent-blue" />
                    </div>

                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 lg:mt-2">
                    {stats.map((stat, index) => (
                        <li
                            key={index}
                            className={`animate-slide-in-top flex flex-col items-start py-2 
                                ${[0, 1, 2].includes(index) ? "lg:border-r-[1px]" : ""
                                } border-[#ffffff1a]`}
                        >
                            <div className="text-[48px] leading-none font-medium">
                                {counts[index]}
                                {stat.suffix}
                            </div>
                            <p className="text-base mt-5 text-center">{stat.title}</p>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    );
}
