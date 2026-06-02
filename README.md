# Oat Gold — Website

Premium wholesale & bulk oat supplier site. Static HTML/CSS/vanilla-JS, built for **GitHub Pages**. No frameworks, no build step.

## Pages
- `index.html` — Home
- `wholesale-oats.html` — Product lines (Product schema)
- `purity-protocol.html` — Purity Protocol explainer
- `faq.html` — FAQ (FAQPage schema)
- `contact.html` — Request a Quote form (ContactPage schema)

Plus: `sitemap.xml`, `robots.txt`, `favicon.ico`, `CNAME`, and `assets/` (css, js, images).

---

## Deploy to GitHub Pages (first time)

1. **Create the repo.** On GitHub, click **New repository** → name it `oatgold-web` → set **Public** → **Create repository**.
2. **Upload the files.** On the repo page, **Add file → Upload files** → drag in *everything inside this folder* (not the folder itself — the files must sit at the repo root) → **Commit changes**.
3. **Turn on Pages.** Repo **Settings → Pages** → under *Build and deployment*, Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)** → **Save**.
4. Wait 1–2 minutes. GitHub shows your live URL (e.g. `https://<username>.github.io/oatgold-web/`).

## Connect the oatgold.com domain

> Keep your **domain registration** at GoDaddy (cheap); you're only dropping the expensive *Websites + Marketing* plan.

1. In the repo: **Settings → Pages → Custom domain** → enter `oatgold.com` → **Save**. (The included `CNAME` file already sets this.)
2. At your DNS provider, create:
   - Four **A records** for the bare domain `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record: `www` → `<username>.github.io`
3. Back in **Settings → Pages**, wait for the DNS check, then tick **Enforce HTTPS**.
4. Only after the GitHub site is live and verified should you cancel the GoDaddy Websites + Marketing plan — so there's no downtime.

## Update content later
Edit the `.html` files directly on GitHub (pencil icon) or via Claude Code, then commit. Pages redeploys automatically.

---

## Forms note (important)
GitHub Pages is **static** — it can't process form submissions server-side. The quote form currently opens the visitor's email app (mailto fallback). For reliable inbox delivery, sign up for a free form endpoint (e.g. Formspree or Basin) and point the form at it. Ask Claude Code to wire it in.

## Image recommendations
- Replace the CSS gradient placeholders with real photos: golden oat fields, milling/packaging, finished oat products. Aim for authentic, food-safe, professional imagery.
- Export as **WebP** (with JPG fallback), compress to keep each under ~200 KB, and always set descriptive `alt` text (e.g. `alt="Bulk rolled oats ready for wholesale shipment"`).
- Add an `og-oatgold.jpg` (1200×630) in `assets/images/` for rich social/link previews.

## Future expansion ideas
- Per-product spec sheet pages (downloadable PDF cut sheets)
- Certifications / food-safety documentation page (mirrors FAP's Trust page pattern)
- Case studies or buyer testimonials
- Blog / resources for SEO ("how to source bulk oats", "Purity Protocol explained")
- Multilingual pages for export markets

## SEO notes
- Titles, meta descriptions, canonical tags, and Open Graph are set per page.
- Schema.org: Organization + WebSite (home), Product list (wholesale), FAQPage (faq), ContactPage (contact).
- Verify the site in Google Search Console and submit `sitemap.xml` after launch.
