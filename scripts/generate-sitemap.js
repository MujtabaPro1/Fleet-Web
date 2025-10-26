const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Base URL of your website
const BASE_URL = 'https://fleetleasingaustralia.com.au';

// Function to get all pages
function getPages() {
  // Get all .tsx files in the pages directory
  const pages = glob.sync('src/pages/**/*.tsx');
  
  return pages
    .filter(page => {
      // Exclude Next.js special files
      const filename = path.basename(page);
      return !['_app.tsx', '_document.tsx', '_error.tsx', '404.tsx', '500.tsx'].includes(filename);
    })
    .map(page => {
      // Convert file path to URL path
      let urlPath = page
        .replace('src/pages', '')
        .replace('.tsx', '')
        .replace(/\/index$/, '');
      
      // Handle dynamic routes
      urlPath = urlPath.replace(/\[([^\]]+)\]/g, (_, param) => {
        // For dynamic routes, we'll use placeholders that would be replaced with actual values
        // In a real implementation, you might fetch these values from a database
        switch(param) {
          case 'brand':
            return 'toyota'; // Example brand
          case 'fuel':
            return 'petrol'; // Example fuel type
          case 'body':
            return 'suv'; // Example body type
          default:
            return param;
        }
      });
      
      return {
        url: `${BASE_URL}${urlPath}`,
        lastmod: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
        changefreq: 'weekly',
        priority: urlPath === '/' ? '1.0' : '0.8' // Home page gets highest priority
      };
    });
}

// Generate sitemap XML
function generateSitemap() {
  const pages = getPages();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Run the generator
generateSitemap();
