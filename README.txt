
# Atelier Nocté - Ready-to-deploy Website (Next.js)

This package contains a ready-to-deploy Next.js project for Atelier Nocté (simple storefront + shop pages).
It includes placeholder images and a basic shop flow (client-side cart). Use it as a starting point and replace assets & integrate payment.

## Quick start (locally)
1. Extract the zip.
2. Install dependencies:
   ```
   npm install
   ```
3. Run dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Deploy to Vercel (recommended, quick)
1. Create a GitHub repo and push this project.
2. Sign in to https://vercel.com and import the repo.
3. Vercel auto-detects Next.js. Set environment variables if you add payment/email integration.
4. Deploy and open the provided domain.

## What to change
- Replace images in /public with your production images (hero, products, logo).
- Edit `pages/index.js` SAMPLE_PRODUCTS to match real SKUs.
- Add serverless API routes for payment (Stripe/Midtrans) and transactional email when moving to production.

If you want, I can:
- Create serverless example endpoints for Stripe or Midtrans.
- Set up the GitHub repo and deploy to Vercel for you (I can't perform external deploys from here but I'll provide exact steps).
