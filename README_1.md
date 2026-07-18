# Personal Portfolio Website

A simple personal website with a "terminal" inspired dark design, built with
**HTML + CSS + JavaScript** only — no framework — for Joud Ali Almuzaini.

🔗 **Live preview (once deployed on GitHub Pages):**
`https://<username>.github.io/<repo-name>/`

---

## 📁 Project structure

```
portfolio/
├── index.html      # Main page (all sections)
├── styles.css       # Full design system (colors, type, responsive layout)
├── script.js         # Terminal typing effect + mobile menu
├── assets/            # Folder for images (optional)
└── README.md          # This file
```

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Terminal window with a typing effect showing name and interests |
| **About** | University, major, GPA, and a short bio |
| **Skills** | Hard skills, soft skills, and languages as tag chips |
| **Projects** | 5 real project cards (Android app, cloud security, restaurant website, ONAS SRS/SDD, Cisco Packet Tracer) |
| **Certificates** | List of completed certifications |
| **Contact** | Email, phone, LinkedIn, GitHub |

---

## 🎨 Colors & fonts

- **Background:** `#0B0D10` (near-black)
- **Surfaces:** `#12151B` / `#171B22`
- **Accent color:** `#3ADBC1` (teal)
- **Text:** `#E7E6E2`
- **Display / mono font:** `JetBrains Mono`
- **Body font:** `Inter`

---

## ✏️ Current status

The site is already filled in with **Joud Ali Almuzaini**'s real information
from her CV (summary, education, projects, certificates, skills, contact info).

**Before publishing, please double-check:**
- [ ] The **LinkedIn** link in the contact section is a best guess
      (`linkedin.com/in/joud-almuzaini`) — confirm it matches your real profile URL and update if needed.
- [ ] The **GitHub** link in the contact section is still a placeholder
      (`github.com/your-username`) — replace it with your real GitHub username once your account is set up.
- [ ] To use a real profile photo instead of the icon, add it to `assets/`
      and replace the `svg` code in `about__avatar` with an `<img>` tag.

## ✏️ How to edit anything later

1. Open `index.html` in any text editor (Notepad or VS Code):
   - Hero section (`<h1>` and description) to update the intro
   - `#about` section for your bio and university info
   - `#skills` section to add/remove skills (each one is a `<span class="chip">`)
   - `#projects` section to add a new project (copy a `<article class="card">` block and edit its content)
   - `#certificates` section to add a new certificate
   - `#contact` section to update your contact details
2. If you change your name, also update `joud-almuzaini` inside `script.js`
   (inside the `runTerminalIntro` function).
3. No installation needed — the site works by simply opening `index.html`
   in a browser.

---

## 🚀 Steps to publish on GitHub

1. Create a GitHub account if you don't have one: **github.com** → **Sign up**.
2. Create a new repository, e.g. named `portfolio` (keep it **Public**, don't
   add a README since one is already included).
3. On the repo page, use **uploading an existing file**, drag in all four
   files (`index.html`, `styles.css`, `script.js`, `README.md`), then
   **Commit changes**.
4. Go to **Settings → Pages**, under **Source** choose branch **main** and
   folder **/ (root)**, then **Save**.
5. Wait a minute, refresh — your live link will appear:
   `https://<username>.github.io/portfolio/`
6. Submit both the repository link and the live GitHub Pages link as your
   task solution.

---

## ✅ Technical highlights

- Fully responsive (Desktop / Tablet / Mobile)
- Left-to-right (English) layout
- Baseline accessibility: visible `focus-visible`, respects `prefers-reduced-motion`
- No external dependencies besides Google Fonts
- Clean, easy-to-edit code structure

---

## 📄 License

Free to use for personal and educational purposes.
