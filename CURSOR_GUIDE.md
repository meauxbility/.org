# CURSOR_GUIDE.md - Quick AI Assistant Reference

**Fast reference for Cursor AI when working on Meauxbility.org**

---

## 🎯 Project Identity

**What:** 501(c)(3) nonprofit providing mobility grants to SCI survivors in Louisiana  
**Who:** Sam (CEO/Founder, UI/UX Engineer)  
**When:** Launching November 3, 2024  
**Style:** Glassmorphic, mobile-first, <50KB pages  
**Stack:** Static → Supabase/Render (future)

---

## 📁 File Map

```
index.html          → Homepage with TRUTEC Stack
about.html          → Mission/Team
apply.html          → Grant application form
donate.html         → Stripe donations
stories.html        → Success testimonials
contact.html        → Contact form
admin/index.html    → Dashboard (different style)

assets/css/main.css          → Variables, base styles
assets/css/glassmorphic.css  → Glass components
assets/js/main.js            → Utilities, mobile nav
```

---

## 🎨 Design Tokens

```css
/* Use these variables */
var(--brand-primary)    /* #2563eb blue */
var(--brand-accent)     /* #0ea5e9 cyan */
var(--text-primary)     /* white */
var(--glass-bg)         /* rgba(255,255,255,0.1) */
var(--radius-lg)        /* 1.5rem */
var(--space-md)         /* 1.5rem */
```

---

## 🧩 Component Patterns

### Glass Card
```html
<div class="glass-card">
    <h3>Title</h3>
    <p>Content</p>
</div>
```

### Glass Form
```html
<form class="form-group">
    <label class="form-label">Name <span class="form-required">*</span></label>
    <input type="text" class="glass-input" required>
</form>
```

### Glass Button
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
```

### Toast Notification
```javascript
meauxbility.showToast('Success message', 'success');
meauxbility.showToast('Error message', 'error');
```

---

## 🔧 Common Tasks

### Add New Page
1. Copy `index.html` structure
2. Update `<title>` and meta
3. Keep `<nav>` and `<footer>` identical
4. Add page content in `<main>`
5. Link CSS: `main.css` + `glassmorphic.css`
6. Link JS: `main.js`

### Add Navigation Link
Update in ALL pages:
```html
<ul class="nav-menu">
    <li><a href="about.html">About</a></li>
    <li><a href="apply.html">Apply</a></li>
    <!-- Add new link here -->
</ul>
```

### Create Form
```html
<form id="myForm">
    <div class="form-group">
        <label class="form-label">Field Name</label>
        <input type="text" class="glass-input" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

<script>
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (meauxbility.validateForm('myForm')) {
        // Handle submission
        meauxbility.showToast('Form submitted!', 'success');
    }
});
</script>
```

---

## 📏 Rules

### Always
- ✅ Mobile-first responsive
- ✅ Use CSS variables
- ✅ Semantic HTML5
- ✅ Accessible (ARIA labels)
- ✅ Performance (<50KB)
- ✅ Comments for complex logic

### Never
- ❌ Inline styles (use classes)
- ❌ !important (unless critical)
- ❌ jQuery or frameworks
- ❌ Unoptimized images
- ❌ Breaking glassmorphic style
- ❌ Removing accessibility features

---

## 🎭 Two Design Systems

### Public Pages (Glassmorphic)
- Gradient backgrounds
- Blur effects (`backdrop-filter`)
- Soft shadows
- White text on dark
- Rounded corners (`--radius-lg`)

### Admin Dashboard (Corporate)
- White backgrounds
- Blue accents
- Sharp shadows
- Dark text on light
- Professional layout

**Don't mix these styles!**

---

## 🔍 Finding Things

### Need to change colors?
→ `assets/css/main.css` (`:root` variables)

### Need glass components?
→ `assets/css/glassmorphic.css`

### Need JavaScript utilities?
→ `assets/js/main.js` (see `window.meauxbility`)

### Need admin features?
→ `admin/index.html` (self-contained)

### Need form validation?
→ `meauxbility.validateForm('formId')`

### Need mobile menu?
→ Already in `main.js`

---

## 🐛 Debugging Checklist

### Page not loading?
1. Check file paths (relative URLs)
2. Verify CSS/JS links in `<head>`
3. Check browser console (F12)

### Styles not working?
1. CSS variables defined in `:root`?
2. Classes spelled correctly?
3. CSS file loaded before custom styles?

### JavaScript errors?
1. `main.js` loaded before custom scripts?
2. DOM ready before accessing elements?
3. Check `window.meauxbility` exists?

### Mobile menu broken?
1. `.mobile-toggle` button exists?
2. `.nav-menu` element exists?
3. `main.js` loaded?

---

## 💬 Common AI Prompts

```
"Add an about page with team bios"
→ Copy index.html, add team section with glass-cards

"Make the donate button bigger and more prominent"
→ Update .btn-primary padding and font-size in main.css

"Add a contact form with email validation"
→ Use glass-input classes, add email validation in JS

"Create a success stories page with testimonials"
→ Grid of glass-cards with quotes and names

"Fix the mobile navigation not closing"
→ Check main.js mobile-toggle event listeners

"Add a loading spinner to the form submission"
→ Use meauxbility.showLoading('elementId')
```

---

## 📦 Pre-Built Utilities

### Toast Notifications
```javascript
meauxbility.showToast(message, type, duration)
// type: 'success', 'error', 'warning', 'info'
```

### Modals
```javascript
meauxbility.openModal('modalId')
meauxbility.closeModal('modalId')
```

### Form Validation
```javascript
meauxbility.validateForm('formId')
meauxbility.isValidEmail(email)
meauxbility.isValidPhone(phone)
```

### Loading States
```javascript
meauxbility.showLoading('elementId')
meauxbility.hideLoading('elementId')
```

### Performance
```javascript
meauxbility.debounce(function, wait)
```

---

## 🚨 Critical Info

### Sam's Workflow
1. **ChatGPT** - Brainstorming, ideation
2. **Claude** - Code refinement, documentation
3. **Cursor** - Active development, implementation

### November 3rd Launch
- Static site first
- Supabase/Render migration later
- Stripe integration needed for donations
- Admin dashboard ready but not connected

### Performance Budget
- Each page: <50KB HTML/CSS/JS
- Images: WebP, optimized
- Fonts: System fonts only
- No external dependencies

---

## 🎓 Learning Resources

### Glassmorphic Design
- Study `glassmorphic.css` for patterns
- `backdrop-filter: blur()` is key
- Semi-transparent backgrounds
- Subtle borders and shadows

### Accessibility
- Always use semantic HTML
- Include ARIA labels
- Keyboard navigation support
- Focus states visible
- Reduced motion support

### Mobile-First
- Base styles for mobile
- Media queries for larger screens
- Touch-friendly targets (44px min)
- Responsive typography (clamp)

---

## 📞 When Stuck

1. Check `README.md` for full context
2. Review `glassmorphic.css` for components
3. Test in browser dev tools (F12)
4. Verify all file paths are correct
5. Check console for JavaScript errors

---

**Remember:** Sam values complete, production-ready code with clear documentation. Always maintain the glassmorphic design system and mobile-first approach.

---

*Quick Reference v1.0 - October 2024*
