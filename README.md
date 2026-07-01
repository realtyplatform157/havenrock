# Realy — Texas Distressed Property Intelligence

Static marketing site for [Realy](https://realy.io) — a Texas-focused distressed property intelligence platform for real estate investors.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — hero, how it works, features, counties, waitlist |

## Stack

- Vanilla HTML, CSS, JavaScript — zero dependencies, zero build step
- Fonts via Google Fonts (DM Serif Display, Inter, JetBrains Mono)
- Deployed via GitHub Pages

## Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/realy-site.git
cd realy-site

# Open in browser (any of these work)
open index.html
python3 -m http.server 8080   # then visit http://localhost:8080
npx serve .                   # if you have Node installed
```

## Deployment — GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/realy-site`

To use a custom domain:
1. Add a `CNAME` file to the repo root containing your domain (e.g. `realy.io`)
2. Point your DNS `A` records to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## Waitlist Form

The form currently saves emails to `localStorage` as a placeholder.
To connect a real backend, replace the form handler in `js/main.js` with:

**Option A — Formspree (free tier, no backend needed)**
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

**Option B — Netlify Forms** (if you deploy to Netlify instead)
Add `netlify` attribute to the form tag:
```html
<form netlify name="waitlist" ...>
```

## Project Structure

```
realy-site/
├── index.html          # Landing page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, form, scroll-reveal
└── README.md
```

## License

Private — all rights reserved.
