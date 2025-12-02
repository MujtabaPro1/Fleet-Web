import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Fleet Plan - Quality Vehicles & Fleet Management',
  description = 'Find the perfect vehicle for your needs with Fleet Plan\'s extensive selection and expert fleet management solutions.',
  keywords = 'fleet management, vehicles, cars, trucks, fleet plan, automotive',
  ogImage = 'https://fleetleasingaustralia.com.au/og-image.jpg',
  ogType = 'website',
  twitterImage = 'https://fleetleasingaustralia.com.au/twitter-image.jpg',
  canonicalUrl,
}) => {
  const router = useRouter();
  const siteUrl = 'https://fleetleasingaustralia.com.au/';
  const currentUrl = `${siteUrl}${router.asPath}`;
  const canonical = canonicalUrl || currentUrl;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
    </Head>
  );
};

export default SEO;
