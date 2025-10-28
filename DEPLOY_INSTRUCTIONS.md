# Meauxbility.org - Deployment Instructions

## 🚀 GitHub Pages Deployment

### Step 1: Create GitHub Repository

```bash
# Navigate to your project folder
cd /path/to/meauxbility.org

# Initialize Git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Meauxbility.org static site"

# Create repository on GitHub.com
# Then connect it:
git remote add origin https://github.com/YOUR-USERNAME/meauxbility.org.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/meauxbility.org/`

### Step 3: Configure Custom Domain (Optional)

1. In GitHub Pages settings, add: `meauxbility.org`
2. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add CNAME record: `www` → `YOUR-USERNAME.github.io`
   - Add A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. Wait 24-48 hours for DNS propagation

### Step 4: Verify Deployment

Visit your site and check:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ CSS/JS loaded properly
- ✅ Mobile responsive
- ✅ Forms display correctly

---

## 📝 Making Updates

```bash
# Make your changes
# Then:
git add .
git commit -m "Description of changes"
git push

# GitHub Actions will auto-deploy
```

---

## 🔧 Local Testing

### Option 1: Python Server
```bash
cd meauxbility.org
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Node.js (http-server)
```bash
npm install -g http-server
cd meauxbility.org
http-server
# Visit http://localhost:8080
```

### Option 3: PHP Server
```bash
cd meauxbility.org
php -S localhost:8000
# Visit http://localhost:8000
```

---

## 📦 What's Included

```
14 files, 183KB total

✅ index.html       - Homepage with TRUTEC Stack
✅ about.html       - Mission/Team page
✅ apply.html       - Grant application form
✅ donate.html      - Donation page (Stripe placeholder)
✅ stories.html     - Success testimonials
✅ contact.html     - Contact form with FAQ
✅ admin/index.html - Admin dashboard (corporate style)

✅ assets/css/main.css          - Core styles & variables
✅ assets/css/glassmorphic.css  - Glass UI components
✅ assets/js/main.js            - Utilities & navigation

✅ README.md           - Full documentation
✅ CURSOR_GUIDE.md     - Quick AI reference
✅ .gitignore          - Git exclusions
✅ .github/workflows/deploy.yml - Auto-deploy config
```

---

## ⚡ Performance

All pages are under 50KB (target met):
- Mobile-first responsive
- No external frameworks
- Optimized CSS/JS
- Fast load times

---

## 🎨 Design System

**Public Pages**: Glassmorphic (your signature style)
- Gradient backgrounds
- Backdrop blur effects
- Soft shadows
- Mobile-first

**Admin Dashboard**: Corporate SaaS
- Clean white cards
- Blue accents
- Professional layout

---

## 🔐 Security Notes

Current setup:
- ✅ Static HTML/CSS/JS (no backend yet)
- ✅ No sensitive data exposed
- ✅ Ready for HTTPS (automatic with GitHub Pages)

For Supabase/Render migration:
- Add environment variables
- Implement auth system
- Secure API endpoints
- Set up CORS properly

---

## 📞 Next Steps

1. **Deploy to GitHub Pages** (follow steps above)
2. **Test all pages** on mobile & desktop
3. **Add real content** (replace placeholder text)
4. **Connect domain** (meauxbility.org)
5. **Integrate Stripe** (donation processing)
6. **Migrate to Supabase/Render** (when ready)

---

## 🐛 Troubleshooting

**CSS not loading?**
- Check file paths in HTML
- Clear browser cache
- Verify GitHub Pages is enabled

**Mobile menu not working?**
- Check JavaScript console (F12)
- Ensure main.js is loaded
- Test on actual mobile device

**Forms not submitting?**
- Forms currently show toast notifications
- Backend integration needed for real submissions
- Plan for Supabase Forms API

**404 errors?**
- Check navigation links
- Ensure all HTML files are in root
- Verify file names match exactly

---

## 💡 Pro Tips

1. **Test locally first** before pushing to GitHub
2. **Use browser dev tools** (F12) for debugging
3. **Keep commits small** and descriptive
4. **Mobile test on real devices** not just emulators
5. **Check accessibility** (keyboard navigation, screen readers)

---

## 📚 Documentation

- Full docs: `README.md`
- AI guide: `CURSOR_GUIDE.md`
- GitHub Pages: https://docs.github.com/pages
- GitHub Actions: https://docs.github.com/actions

---

**Questions?** Check the README or CURSOR_GUIDE files!

🎯 **Launch Target:** November 3, 2024
🚀 **You got this, Sam!**
