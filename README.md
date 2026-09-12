# Sustainable and Resilient Geotechnical Infrastructure Laboratory

Static website for the Lei Wang geotechnical engineering laboratory at the University of Cincinnati. The site uses plain HTML, CSS, and JavaScript, with no package installation or build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage: about, research, open position, news, and contact sections. |
| `publications.html` | Journal and conference publication lists. |
| `position.html` | Graduate assistantship and open position information. |
| `members.html` | Current and previous group member profiles. |
| `assets/js/header.js` | Shared university branding and navigation for all four pages. |
| `assets/js/footer.js` | Shared footer text and home link. |
| `assets/css/style.css` | Site styling and responsive layouts. |
| `assets/images/` | Site images, university logo, and contact icons. |
| `assets/images/members/` | Member profile photos. |
| `CNAME` | Custom domain configuration for GitHub Pages. |

## Editing content

Edit each page's `<main>` section for page-specific content. Update the shared components in one place:

- **Header:** edit `assets/js/header.js` to change the logo, lab name, or navigation links. The script sets `aria-current="page"` on the matching navigation item and uses local section anchors on the homepage.
- **Footer:** edit `assets/js/footer.js` to change the footer text. The home link is hidden on the homepage.
- **Appearance:** edit `assets/css/style.css` for colors, spacing, typography, and responsive layouts. The primary colors are red `#e00122`, black `#000000`, and white `#ffffff`.

Each page loads the header immediately after `<body>`:

```html
<script src="assets/js/header.js"></script>
```

Each page loads the footer after `</main>`, before `</body>`:

```html
<script src="assets/js/footer.js"></script>
```

Keep these script tags in those positions without `async`, `defer`, or `type="module"`: each script replaces its own tag with the shared markup. JavaScript must be enabled to display the header and footer. New pages should be placed in the repository root to use the same relative paths.

## Member profiles

Edit the current or previous member cards in `members.html`. Add photos to `assets/images/members/` and match the image `src` to the exact filename, including capitalization and extension. Match the `alt` text and displayed name to the member.

Profiles use a two-column layout with 120 × 150 px photos and names/details beside them. At viewport widths of 640 px or less, the layout switches to one column with 96 × 120 px photos. Photos are cropped proportionally with top alignment. If an image fails to load, the card shows “Photo coming soon”.

## Local preview and checks

Open `index.html` in a browser, or serve the repository with a local static server. The shared components do not require a fetch request or a build step.

Before publishing:

- Visit all four pages and check the shared navigation and footer.
- Check member photos and the layout at desktop and mobile widths.
- Confirm image paths match filenames exactly, since the deployed site is case-sensitive.
- If Node.js is available, check shared script syntax:

```sh
node --check assets/js/header.js
node --check assets/js/footer.js
```

## Publishing

Publish the repository root with GitHub Pages, including the `assets` directory. This site does not generate a separate build output directory. Keep `CNAME` if continuing to use the configured custom domain.
