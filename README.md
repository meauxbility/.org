# Meauxbility.org - Static Site Repository

**This will hopefully be our last time setting up Meauxbility.org**  
Tech Stack: Render, Stripe, Supabase, Cursor, Claude, OpenAI

---

## 🎯 Project Overview

Meauxbility is a 501(c)(3) nonprofit organization (EIN: 33-4214907) providing mobility grants and accessibility services to spinal cord injury survivors across Louisiana's Acadiana region.

**Launch Target:** November 3, 2024  
**Current Phase:** Static GitHub Pages → Supabase/Render Migration

---

## 📁 Repository Structure

```
meauxbility.org/
├── index.html              # Homepage with TRUTEC Stack
├── about.html              # Mission/Team (glassmorphic)
├── apply.html              # Grant Application Form
├── donate.html             # Donation page (Stripe integration)
├── stories.html            # Success Stories
├── contact.html            # Contact form
├── admin/
│   └── index.html          # Admin Dashboard (corporate style)
├── assets/
│   ├── css/
│   │   ├── main.css        # Shared styles & CSS variables
│   │   ├── glassmorphic.css # Sam's signature glass UI
│   │   └── admin.css       # Admin dashboard styles
│   ├── js/
│   │   ├── main.js         # Core utilities
│   │   ├── forms.js        # Form handling & validation
│   │   └── admin.js        # Admin dashboard logic
│   └── images/
│       └── logo.svg
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy to GitHub Pages
├── README.md               # This file
└── CURSOR_GUIDE.md         # Quick AI assistant guide
```

---

## 🎨 Design System

### Brand Colors
```css
--brand-primary: #2563eb    /* Primary Blue */
--brand-secondary: #4f46e5  /* Indigo */
--brand-accent: #0ea5e9     /* Cyan */
--brand-dark: #111827       /* Dark Gray */
```

### Glassmorphic Style (Public Pages)
- Background: Radial gradients with purple/blue tones
- Cards: `backdrop-filter: blur(12px)` with white borders
- Mobile-first, <50KB per page
- Smooth animations with reduced motion support

### Admin Style (Dashboard)
- Clean corporate SaaS interface
- White cards, blue accents
- Stats grid, modals, toasts
- GitHub API integration

---

## 🚀 Quick Start

### Local Development
```bash
# Clone repository
git clone https://github.com/[username]/meauxbility.org.git
cd meauxbility.org

# Open in browser
open index.html

# Or use a local server
python -m http.server 8000
# Visit http://localhost:8000
```

### GitHub Pages Deployment
1. Push to `main` branch
2. GitHub Actions automatically deploys
3. Site available at: `https://[username].github.io/meauxbility.org`
4. Configure custom domain: `meauxbility.org`

---

## 🛠️ Tech Stack

### Current (Static)
- **HTML5** - Semantic markup
- **CSS3** - Glassmorphic design system
- **Vanilla JS** - No frameworks, performance-first
- **GitHub Pages** - Free hosting

### Future (Post-Migration)
- **Supabase** - PostgreSQL database, auth, storage
- **Render** - Server hosting
- **Stripe** - Payment processing
- **GitHub** - Version control
- **Google Workspace** - Email, Drive, Calendar

---

## 📄 Page Templates

### Public Pages (Glassmorphic)
All public pages follow this structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Meauxbility</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/glassmorphic.css">
</head>
<body>
    <nav class="nav-glass">...</nav>
    <main>
        <!-- Page content -->
    </main>
    <footer class="footer-glass">...</footer>
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Admin Dashboard
- Single-page application
- Modal-based workflows
- GitHub API integration
- Will add Supabase auth later

---

## 🎯 Development Guidelines

### Performance Targets
- **<50KB** per page (excluding external resources)
- **Mobile-first** responsive design
- **Accessible** WCAG 2.1 AA compliance
- **Fast** optimized images, minified code

### Code Style
- **2 spaces** for indentation
- **kebab-case** for CSS classes
- **camelCase** for JavaScript
- **Semantic HTML** always
- **Comments** for complex logic

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari 12+
- Android Chrome 90+

---

## 🤖 AI Assistant Integration

### For Claude/ChatGPT/Cursor
This repository is optimized for AI-assisted development:

1. **Clear Structure** - Logical file organization
2. **CSS Variables** - Easy theme customization
3. **Reusable Components** - Glassmorphic system
4. **Documented Functions** - JSDoc-style comments
5. **Consistent Naming** - Predictable patterns

### Common AI Tasks
```bash
# "Add a new page about our team"
# AI should: Copy template, update nav, add to sitemap

# "Make the donate button more prominent"
# AI should: Update .btn-primary styles in main.css

# "Add a success story card"
# AI should: Use .glass-card from glassmorphic.css

# "Fix mobile menu not closing"
# AI should: Check main.js mobile-toggle event listeners
```

---

## 📋 To-Do List

### Static Site (Current)
- [ ] Complete `about.html` page
- [ ] Create `apply.html` grant form
- [ ] Build `donate.html` with Stripe placeholder
- [ ] Add `stories.html` testimonials
- [ ] Finish `contact.html` form
- [ ] Add social media links
- [ ] Create 404 page
- [ ] Add sitemap.xml
- [ ] SEO meta tags all pages

### Migration Prep (Next Phase)
- [ ] Supabase schema design
- [ ] Render deployment config
- [ ] Stripe integration setup
- [ ] Email service (SendGrid/Resend)
- [ ] Form submission endpoints
- [ ] Admin authentication
- [ ] User roles/permissions
- [ ] Analytics integration

---

## 🔐 Environment Variables (Future)

Will need for Supabase/Render migration:
```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
GITHUB_TOKEN=
SENDGRID_API_KEY=
```

---

## 📞 Team

- **Sam** - CEO/Founder, UI/UX Engineer
- **Connor McNeely** - CTO
- **Fred Williams** - CMO

---

## 📜 License

© 2024 Meauxbility. All rights reserved.  
501(c)(3) Nonprofit Organization - EIN: 33-4214907

---

## 🔗 Links

- **Website:** [meauxbility.org](https://meauxbility.org)
- **Inner Animals:** [inneranimals.com](https://inneranimals.com)
- **GitHub:** [github.com/[username]/meauxbility.org]

---

## 💡 Notes for AI Assistants

### Key Context
- Sam is the founder with SCI experience
- Mobile-first, glassmorphic design is the signature style
- <50KB pages for performance
- November 3rd launch deadline
- Static now, Supabase/Render later

### Design Philosophy
- Accessibility is paramount
- Performance over fancy features
- Reusable components
- Progressive enhancement
- Semantic HTML

### Working with Sam
- Uses ChatGPT for ideation
- Uses Claude (you!) for refinement
- Uses Cursor for development
- Prefers complete, production-ready code
- Values clear documentation

---

*Last Updated: October 2024*
