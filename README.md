# Soft Luxe Edit

A complete, static fashion-review blog ready for GitHub Pages.

**Honest reviews of designer-inspired bags, shoes and accessories** with direct links to the original DHgate listings.

## Features

- Clean, responsive editorial design (cream / warm beige / soft black palette)
- Product data stored in a single JSON file (`data/products.json`) — easy to add new items
- Individual review pages with photos, pros/cons, verdict and DHgate links
- Clear status system: **published**, **draft**, **planned**
- Category pages (Bags, Shoes)
- Full archive with filters
- About page explaining the review process
- Newsletter signup section (demo form — connect your own service)
- Mobile-friendly and accessible

## Project structure

```
soft-luxe-edit/
├── index.html              # Homepage
├── about.html
├── archive.html
├── categories/
│   ├── bags.html
│   └── shoes.html
├── reviews/                # One HTML file per product
├── data/
│   └── products.json       # Source of truth for all products
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## How to add a new product

1. Add an entry to `data/products.json` with:
   - `id`, `slug`, `name`, `brand`, `category`, `price`, `dhgate` link
   - `images` array (URLs)
   - `status` (`published` / `draft` / `planned`)
   - `published` date (YYYY-MM-DD)
   - optional `rating`, `tags`, `summary`

2. Create a matching review page at `reviews/{slug}.html`  
   (copy an existing published or draft review as a template).

3. The homepage, archive and category pages will automatically pick it up from the JSON.

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Push this entire folder as the root (or put it in a `/docs` folder).
3. Go to **Settings → Pages** and select the branch + folder.
4. Your site will be live at `https://yourusername.github.io/repo-name/`.

Alternatively use any static host (Netlify, Cloudflare Pages, Vercel, etc.).

## Content notes

- All product images currently point to the original hosting (wsimg). For long-term reliability, download the images and place them in an `/images` folder, then update the paths in `products.json` and the review pages.
- Draft reviews clearly mark missing hands-on testing information. Do not present fictional wear-test results as real.
- Product links go to DHgate short links as supplied by the reference sites.

## Brand

**Soft Luxe Edit**  
Tagline: Honest finds. Soft luxury.  
Audience: Women who love designer aesthetics but want realistic quality notes and accessible pricing.

---

Built as a complete, maintainable GitHub Pages project.
