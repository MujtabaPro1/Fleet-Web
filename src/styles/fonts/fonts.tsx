import { Figtree } from 'next/font/google';

export const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

// Keep this for backward compatibility, but make it use Figtree
export const inter = figtree;
export const tajawalFont = figtree;
