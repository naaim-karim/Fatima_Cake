# Fatima Cake redesign

## What changed

- Cream and berry theme with serif headings, quieter navigation, and a consistent photo style.
- Cake-led homepage with four menu collections, featured treats, and a short WhatsApp ordering guide.
- Eight matching AI-generated product photos. Original generated PNGs are preserved without resizing or recompression.
- Search and category filters, prefiltered collection links, responsive product grids, and clearer product details.
- Fixed the async client-component product page by rendering it on the server. WhatsApp messages include the chosen item.
- Added keyboard focus styles, skip-to-content navigation, and reduced-motion support.
- Enabled TypeScript build checks; replaced the unsupported Next.js lint script with `typecheck`. Removed an unused calendar component that depended on an uninstalled package.
- Removed generic social URLs and unsupported homepage claims. No new dependencies were added.

## Files changed

`app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `app/menu/page.tsx`, `app/menu/[id]/page.tsx`, `components/navbar.tsx`, `components/footer.tsx`, `components/menu-catalog.tsx` (new), `lib/menu-data.ts`, `next.config.mjs`, `package.json`, `tsconfig.json`, `README.md`, `docs/image-prompts.json` (new), and eight files in `public/images/` (new). Unused `components/ui/calendar.tsx` was removed.

## Run locally

Requires Node.js 20.9 or newer.

```sh
cd /Users/naaimkarim/Documents/Fatima_Cake
npm ci
npm run dev -- --port 3002
```

Open http://localhost:3002/. For the source ZIP, extract it and run these commands from its `Fatima_Cake` folder instead.

Production verification:

```sh
npm run typecheck
npm run build
npm run start -- --port 3002
```

A production preview is currently running at http://127.0.0.1:3002/. Stop that process before starting another server on the same port.

## Editing later

- Products, prices, ingredients, and image paths: `lib/menu-data.ts`.
- Homepage text and featured products: `app/page.tsx`.
- Theme and responsive layouts: bakery styles in `app/globals.css`.
- WhatsApp destination: currently `905528535323`, retained from the original site. Links are in the navbar, footer, homepage, and product page.
- Images: `public/images/`. Generation used the built-in image_gen tool; the exact prompts are saved in `docs/image-prompts.json`.

## Content still to confirm

- The photographs are illustrative AI-generated samples. Replace with real product photos when available; the site currently labels them as illustrative.
- Confirm the existing dollar prices, ingredients, and WhatsApp number with the business owner.
- The existing dashboard remains an in-memory editor; it does not persist catalog changes. Edit `lib/menu-data.ts` for permanent changes.
- The live Vercel site has not been deployed with this update.

## Checks completed

TypeScript and production build passed. Browser checks covered desktop, 390px phone, and 820px tablet layouts; menu categories, collection navigation, search and empty states, product detail pages, image loading, and item-specific WhatsApp URLs. No customer message was sent.

## References

The layout direction was informed by real bakeries that put product photography and collections first: [Buttercream Bakery](https://www.buttercream.com.au/home) and [Butter Cakery](https://buttercakery.com/). The design and copy here are original.
