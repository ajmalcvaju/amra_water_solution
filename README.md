# Amra Water Solution — Official Website

A modern, visually stunning, and professional website built for **Amra Water Solution**, a premier water treatment and purification company based in Kerala (Vaikom, Kottayam & Kozhikode).

The platform communicates engineering expertise, water purity, and environmental responsibility, generating enquiries for domestic purifiers, commercial RO systems, industrial treatment plants, STP/ETP, water softeners, and Pollution Control Board (PCB) consultancy.

---

## 🚀 Key Features & Highlights

- **Framework & Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, and Zod.
- **Static Export Ready:** Pre-configured with `output: 'export'` for fast, secure static deployment on Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront.
- **Cinematic Sliding Hero Carousel:** Full-width 3-slide auto carousel with slide indicators, touch swipe, pause on hover, and smooth entrance text transitions.
- **Interactive 12-Product Catalog:** Client-side live search, category filtering, clean empty state, and an accessible product detail modal with full technical specifications.
- **Direct WhatsApp Lead Generation:** Every product card and solution section features pre-filled, URL-encoded WhatsApp links (`wa.me`) targeting the official office number.
- **Authentic Business Details & BNI Integration:** Populated with real business details from official flyers:
  - **Key Contact:** Nejumal
  - **Direct Phones:** `+91 8075129422` & `+91 9072919041`
  - **Kerala Branches:** Vadakkenada, Udhayanapuram, Vaikom, Kottayam (HQ) and Kozhikode Branch
  - **BNI Proud Member** affiliation badge
- **Dual-Mode Enquiry Form:**
  - Connects to any hosted form service (e.g. Formspree, Web3Forms) via `NEXT_PUBLIC_FORM_ENDPOINT`.
  - If no endpoint is configured, provides a transparent 1-click fallback to pre-filled Email or direct WhatsApp without false positive claims.
  - Celebratory confetti feedback and inline validation messages.
- **Technical & Local SEO:**
  - Semantic HTML5 hierarchy with single `<h1>` per page.
  - JSON-LD Structured Data (`LocalBusiness`, `Organization`, `WebSite`).
  - Auto-generated `sitemap.xml` and `robots.txt`.
  - Open Graph and Twitter card preview metadata.

---

## 📂 Exact 5-Page Architecture

1. **Home (`/`)**:
   - Sticky navbar with scroll transparency detection and mobile drawer.
   - 3-slide automatic hero carousel.
   - 4-item horizontal trust strip.
   - Featured products grid with WhatsApp CTAs.
   - Alternating application solutions overview.
   - Why choose Amra Water Solution dark engineering section.
   - 4-step consultative process workflow.
   - Authentic BNI member and Kerala branch trust banner.
   - High-impact quote request CTA and comprehensive 4-column footer.
2. **About Us (`/about`)**:
   - Company profile, role across Kerala, mission and vision.
   - 6 core expertise domains.
   - Design section highlighting laboratory water testing before equipment prescription.
3. **Products (`/products`)**:
   - Responsive grid (4-column on desktop, 2-column on tablet, 1/2 on mobile).
   - 12 realistic sample products (Domestic RO, UV, Commercial RO 250–1,000 LPH, Industrial RO 3,000–50,000 LPH, Water Softener, Iron Removal Filter, Water Cooler, Multimedia Filter, Carbon Filter, Ultrafiltration, Accessories, Custom Skids).
   - Category filtering, live search, and accessible modal with specs table.
4. **Water Treatment Solutions (`/solutions`)**:
   - 8 comprehensive domains (Residential, Commercial, Industrial, Softening, Iron Removal, STP & ETP Plants, Water Testing & PCB Consultancy, AMC Support).
   - "How We Approach Your Requirements" methodology section.
   - 8-question accessible FAQ accordion.
5. **Contact Us (`/contact`)**:
   - Split layout with contact cards, branch addresses, working hours, and phone links.
   - Validated React Hook Form with loading states and external endpoint integration.

---

## 🛠️ Project Structure

```
├── app/
│   ├── about/page.tsx         # About Us page
│   ├── contact/page.tsx       # Contact Us page
│   ├── products/page.tsx      # Products Catalog page
│   ├── solutions/page.tsx     # Water Treatment Solutions page
│   ├── globals.css            # Tailwind CSS v4 styling & animations
│   ├── layout.tsx             # Root layout, metadata & JSON-LD schema
│   ├── page.tsx               # Home page
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic XML sitemap
├── components/
│   ├── contact/               # ContactForm & ContactInfo
│   ├── home/                  # HeroSlider, TrustStrip, FeaturedProducts, etc.
│   ├── layout/                # Navbar & Footer
│   ├── products/              # ProductCard, ProductCatalog, ProductModal
│   ├── shared/                # Logo, SectionHeading, Breadcrumb, WhatsAppFloat
│   └── solutions/             # SolutionsList, ProcessSection, FaqAccordion
├── data/
│   ├── faqs.ts                # Technical and support FAQs
│   ├── navigation.ts          # Nav links and categories
│   ├── products.ts            # 12-item product catalog data source
│   └── solutions.ts           # 8-domain solutions data source
├── lib/
│   ├── siteConfig.ts          # Central configuration (phones, addresses, SEO)
│   ├── types.ts               # TypeScript data models
│   └── whatsapp.ts            # WhatsApp URL encoder and call utilities
└── public/
    ├── favicon.svg            # Brand favicon
    └── images/                # Local optimized product & hero imagery
```

---

## ⚙️ Installation & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
The static HTML export will be generated in the `out/` folder, ready for zero-backend hosting.

---

## 🔧 Configuration

All company details, phone numbers, branch addresses, and metadata are centralized in [`lib/siteConfig.ts`](file:///d:/amra_water_solution/lib/siteConfig.ts):

```typescript
export const siteConfig = {
  name: "Amra Water Solution",
  contactPerson: "Nejumal",
  phones: {
    primary: "+91 8075129422",
    office: "+91 9072919041",
  },
  whatsapp: {
    number: "919072919041", // international format without spaces or '+'
  },
  email: "contact@amrawatersolution.com",
  branches: [
    {
      name: "Head Office & Service Center",
      city: "Vaikom, Kottayam",
      address: "Vadakkenada, Udhayanapuram, Vaikom, Kottayam, Kerala 686143",
    },
    {
      name: "North Kerala Branch",
      city: "Kozhikode",
      address: "Kozhikode Branch Office, Kerala",
    },
  ],
};
```

### Form Endpoint Configuration
Create a `.env.local` file in the project root:

```env
# Optional: Formspree, Web3Forms, or Getform endpoint
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Production Domain for canonical URLs and sitemap
NEXT_PUBLIC_SITE_URL=https://amrawatersolution.com
```

*If `NEXT_PUBLIC_FORM_ENDPOINT` is omitted, the form gracefully provides users with one-click direct email and WhatsApp submission options with their form fields pre-filled.*

---

## 📱 WhatsApp Integration

Product and solution WhatsApp links use the official WhatsApp Click-to-Chat standard:
```
https://wa.me/919072919041?text=Hello%20Amra%20Water%20Solution,%20I%20am%20interested%20in%20the%20[Product%20Name]...
```
This requires no backend and works across iOS, Android, and WhatsApp Web.
