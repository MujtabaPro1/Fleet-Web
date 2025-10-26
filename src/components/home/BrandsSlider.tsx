'use client';

import React from 'react';
import Image from 'next/image';

// List of brand image URLs
const logos = [
    'https://framerusercontent.com/images/KpnkIMYcgjYnKJzC08Jir571M.png?width=380&height=130',
    'https://framerusercontent.com/images/mpP9nf1J8dg7VIrEf2TjgZhxQjc.png?width=143&height=130',
    'https://framerusercontent.com/images/6JGpx4oKnLD0Ra9WdxkO3jwOL4.png?width=220&height=130',
    'https://framerusercontent.com/images/jV2lJJEissOBVD4OqAlIbfGIko.png?width=380&height=130',
    'https://framerusercontent.com/images/VRuQGt86qzY0F6IZPDwvCPKt0PQ.png?width=380&height=130',
    'https://framerusercontent.com/images/Dg3zhYaPukdTvQhLFl0Bc3zs6kM.png?width=189&height=130',
    'https://framerusercontent.com/images/RZxpbTD8rClXjQeXAkhHZ9xeRbk.png?width=380&height=130',
    'https://framerusercontent.com/images/HqvDlkliJemLOv6TQDvhWIIc1T4.png?width=380&height=130',
    'https://framerusercontent.com/images/RUY5DaOzo59ExMz8RQtdF8u7vaI.png?width=210&height=130',
    'https://framerusercontent.com/images/4YMSTZqWTBVgC3AvmG6iBlAg5s.png?width=160&height=130',
    'https://framerusercontent.com/images/3S1z2Itjs22XkE0eqCrhhQEIk.png?width=235&height=130',
    'https://framerusercontent.com/images/msGLxLR2DGamuVlCmu8qlmBeMM.png?width=380&height=130',
    'https://framerusercontent.com/images/Ut65ll9DSqNS3TrNhMylDEQBY.png?width=380&height=130',
    'https://framerusercontent.com/images/WefIRcQzOs2dZyt1afX5orVYTOc.png?width=126&height=130',
    'https://framerusercontent.com/images/Hifw5R011k67slXkYAdJkVA6k.png?width=144&height=130',
    'https://framerusercontent.com/images/VlQbe7prbWLGd5N0j4u28VGuzX0.png?width=177&height=130',
    'https://framerusercontent.com/images/JIPEvOTqwBOHoGQszHCao8E1ttg.png?width=139&height=130',
    'https://framerusercontent.com/images/l9OS8W9pklhbHmp8QnmrPKABiXY.png?width=172&height=130',
    'https://framerusercontent.com/images/cmqxtObkNEL6H2Sle3i7wUiID3Q.png?scale-down-to=512&width=760&height=260',
    'https://framerusercontent.com/images/O9852GpBtizDgvSZrrbPehKlxsI.png?width=140&height=130',
    'https://framerusercontent.com/images/ZFVZDW5Zmz6TO6BfznrExY9UAMc.png?width=241&height=260',
    'https://framerusercontent.com/images/XwSwnxNIjd4thcKBdpAK4b5otgQ.png?width=129&height=130',
];

export default function BrandsSlider() {
    return (
        <div className="w-full overflow-hidden bg-white py-6">
            <div className="animate-marquee whitespace-nowrap flex gap-12">
                {/* Repeat the logos twice for seamless loop */}
                {[...logos, ...logos].map((src, i) => (
                    <div key={i} className="relative h-[60px] w-[140px] flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Brand ${i}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 40vw, 140px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
