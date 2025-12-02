# SEO Component

This component helps manage meta tags for SEO and social media sharing across the application.

## Usage

Import the SEO component at the top of your page component:

```tsx
import SEO from "@/components/common/SEO";
```

Then add it to your component's JSX:

```tsx
<SEO 
  title="Your Page Title"
  description="Your page description goes here"
  keywords="keyword1, keyword2, keyword3"
  ogImage="https://yourdomain.com/images/og-image.jpg"
/>
```

## Props

All props are optional and have default values:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Fleet Plan - Quality Vehicles & Fleet Management" | Page title (appears in browser tab and search results) |
| `description` | string | "Find the perfect vehicle for your needs with Fleet Plan's extensive selection and expert fleet management solutions." | Page description for search engines |
| `keywords` | string | "fleet management, vehicles, cars, trucks, fleet plan, automotive" | Keywords for search engines |
| `ogImage` | string | "https://fleetplan.com/og-image.jpg" | Image URL for social media sharing (Facebook, LinkedIn) |
| `ogType` | string | "website" | Open Graph content type |
| `twitterImage` | string | "https://fleetplan.com/twitter-image.jpg" | Image URL for Twitter cards |
| `canonicalUrl` | string | current URL | Canonical URL for SEO |

## Example

```tsx
// In a product page
<SEO 
  title={`${productName} - Fleet Plan`}
  description={`Discover the ${productName} - ${shortDescription}`}
  keywords={`${productName}, ${category}, fleet management, vehicles`}
  ogImage={productImageUrl}
/>
```

## Notes

- Make sure to update the default image URLs to actual images on your domain
- For best results, use unique titles and descriptions for each page
- Keep descriptions between 150-160 characters for optimal display in search results
