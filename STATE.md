# OatGold Website — STATE

**Last updated: 2026-06-02** (updated same session)

## What this is

Rebuild of oatgold.com as a static site on GitHub Pages, migrated off GoDaddy. Oat Gold = premium oat supplier (conventional + gluten-free), century-old family farm in Saskatchewan, Canada.

## Where everything lives

- **Repo:** github.com/MultigrainIntl/oatgold-web (PUBLIC, branch main, root). GitHub Pages ON.
- **Local working folder (George's Mac):** ~/Downloads/Oatgold_files/oatgold
- **Live at:** https://oatgold.com (custom domain). github.io preview: https://multigrainintl.github.io/oatgold-web/
- **Tooling:** Claude Code; gh CLI authenticated as MultigrainIntl org.

## Domain / DNS (managed at GoDaddy)

- A records @ -> 185.199.108.153 / .109 / .110 / .111 (GitHub Pages). CNAME www -> oatgold.com.
- CNAME file in repo contains "oatgold.com". HTTPS certificate issued/approved (valid ~through 2026-08-31).
- Google Workspace email on this domain — MX records point to google. **NEVER touch MX records.**

## Lead form

- Formspree shared endpoint: https://formspree.io/f/xpqeadrq
- Hidden field: site=oatgold (so multi-site leads are tagged). Delivers to george@multigrain.com. Confirmed working.

## Brand / design

- Logo: assets/images/logo.webp (real logo with R trademark). Forest green + warm gold, cream background, Fraunces serif display. Golden-ratio sizing pass applied.
- Real product photos: 50 lb bags (Quick Cooking + Old-Fashioned oat flakes).

## Content facts (accurate — keep precise)

- Two lines: Conventional (rolled, steel cut, groats, coarse oat flour, bulk) and Gluten-Free.
- Oats are naturally gluten-free as a grain; wheat has never been grown on the farm. CERTIFIED Gluten-Free = the lab-verified line (independent third-party testing + field-level traceability). Do NOT claim all oats are "certified."
- Purity Protocol oats: 100% guarantee of no glyphosate or chlormequat. No-chemical policy.
- Packaging: bulk tote bags, 50 lb multi-wall paper bags, custom retail pillow pouches.
- Shipping: worldwide via 20 & 40 ft ocean containers; domestic by truck.
- Contact: hours Mon-Fri 7am-8pm; WhatsApp button live on contact page (wa.me/19704814977); sales@oatgold.com fallback.
- Pages: index, wholesale-oats, purity-protocol, faq, contact + sitemap.xml, robots.txt, CNAME, README.md, favicon.

## DONE

Build, premium design, accurate content, working lead form, domain connected, HTTPS cert issued.

## OPEN — next actions (in order)

1. Confirm https://oatgold.com loads with the lock icon.
2. Enable "Enforce HTTPS": github.com -> MultigrainIntl/oatgold-web -> Settings -> Pages -> tick Enforce HTTPS.
3. **ONLY after the site is confirmed live:** cancel the GoDaddy "Websites + Marketing" plan for oatgold.com (renews Jun 22). Keep the domain registration. Never touch Google MX records.
4. Optional polish: consider additional product/field photography.

## How to resume next session

Open Claude Code in the repo folder and say: "Read STATE.md and tell me where we left off and the next step." (It updates this file at the end of each session.)
