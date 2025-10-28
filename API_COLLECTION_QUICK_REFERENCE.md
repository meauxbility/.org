# 🚀 MEAUXBILITY API COLLECTION - QUICK REFERENCE

## ⚡ **SPEED RUN CHECKLIST** (90 minutes total)

### **☕ PRIORITY #1 - EMAIL SETUP** (30 min)
- [ ] Fix .org email billing at domain registrar
- [ ] Activate: sam@meauxbility.org, connor@meauxbility.org, fred@meauxbility.org
- [ ] Test send/receive on each

### **💳 STRIPE** (15 min)
- [ ] Login: https://dashboard.stripe.com/login
- [ ] Collect TEST keys: pk_test_, sk_test_
- [ ] Collect LIVE keys: pk_live_, sk_live_
- [ ] Setup webhook: https://api.meauxbility.org/webhooks/stripe
- [ ] Get webhook secret: whsec_
- [ ] Apply for nonprofit pricing (501c3: EIN 33-4214907)

### **📧 SENDGRID** (15 min)
- [ ] Login: https://app.sendgrid.com/login
- [ ] Verify sender: noreply@meauxbility.org
- [ ] Create API key: SG. (copy immediately!)
- [ ] Set from name: Meauxbility Team

### **🔐 GOOGLE OAUTH** (20 min)
- [ ] Login: https://console.cloud.google.com
- [ ] Create project: Meauxbility
- [ ] Enable APIs: Drive, Sheets, Gmail
- [ ] Setup OAuth consent screen
- [ ] Create OAuth client ID
- [ ] Add redirect URIs for meauxbility.org

### **🐙 GITHUB OAUTH** (10 min)
- [ ] Login: https://github.com/settings/developers
- [ ] Create OAuth app: Meauxbility Admin Portal
- [ ] Set callback: https://api.meauxbility.org/auth/github/callback
- [ ] Copy client ID and secret

### **🗄️ SUPABASE** (10 min)
- [ ] Login: https://supabase.com/dashboard
- [ ] Select Meauxbility project
- [ ] Copy URL, anon key, service key
- [ ] ⚠️ Service key is SECRET - backend only!

### **🔑 SESSION SECRET** (2 min)
- [ ] Generate at: https://www.uuidgenerator.net/
- [ ] Or terminal: `openssl rand -base64 32`

### **🌐 CONFIG VALUES** (2 min)
- [ ] FRONTEND_URL=https://meauxbility.org
- [ ] API_URL=https://api.meauxbility.org
- [ ] NODE_ENV=production

---

## 📋 **MASTER ENV TEMPLATE**

```bash
# ==== SUPABASE (Database) ====
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=

# ==== STRIPE (Payments - TEST MODE) ====
STRIPE_PUBLIC_KEY_TEST=
STRIPE_SECRET_KEY_TEST=
STRIPE_WEBHOOK_SECRET=

# ==== STRIPE (Payments - LIVE MODE) ====
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# ==== SENDGRID (Emails) ====
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=noreply@meauxbility.org
SENDGRID_FROM_NAME=Meauxbility Team

# ==== GOOGLE CLOUD (OAuth) ====
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# ==== GITHUB (OAuth) ====
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# ==== SESSION (Security) ====
SESSION_SECRET=

# ==== URLS (Configuration) ====
FRONTEND_URL=https://meauxbility.org
API_URL=https://api.meauxbility.org
NODE_ENV=production
```

---

## 🎯 **POST-COLLECTION STEPS**

### **1. ADD TO RENDER** (20 min)
- Login to https://dashboard.render.com
- Select Meauxbility service
- Environment → Add each variable
- Save & redeploy

### **2. TEST INTEGRATIONS** (20 min)
- Test Stripe with card: 4242 4242 4242 4242
- Test email sending
- Test Google/GitHub login
- Verify all 17 pages load

### **3. GO LIVE** (10 min)
- Switch Stripe to LIVE keys
- Update team emails
- Final verification
- 🚀 LAUNCH!

---

## ⚠️ **CRITICAL REMINDERS**

- **Keys shown only once** - copy immediately!
- **Service keys are SECRET** - never expose in frontend
- **Store in password manager** - never commit to GitHub
- **Test with test keys first** - then switch to live
- **Apply for nonprofit pricing** - save money!

---

## 🏆 **SUCCESS METRICS**

- ✅ All 19 API values collected
- ✅ All 7 services configured
- ✅ Email addresses working
- ✅ Payment processing live
- ✅ OAuth logins working
- ✅ Database connected
- ✅ Site fully functional

**Total Time: ~2 hours → Production Ready! 🚀**
