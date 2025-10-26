import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type SeoMetaProps = {
    title: string;
    description: string;
    image?: string;
    slug?: string;
};

export default function SeoMeta({ title, description, image, slug }: SeoMetaProps) {
    const router = useRouter();
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setOrigin(window.location.origin);
        }
    }, []);

    const fullUrl = slug ? `${origin}/vehicles/${slug}` : `${origin}${router.asPath}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={`${title}, car leasing, fleet leasing`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image || '/default-og-image.jpg'} />
                <meta property="og:url" content={fullUrl} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: title,
                        image: image,
                        brand: {
                            "@type": "Brand",
                            name: title.split(' ')[0],
                        },
                        offers: {
                            "@type": "Offer",
                            priceCurrency: "AUD",
                            price: "0",
                            availability: "https://schema.org/InStock",
                        },
                    }),
                }}
            />
        </>
    );
}
