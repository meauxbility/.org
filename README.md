Meauxbility.org$$$$
this will hopefully be our last time setting up Meauxbility.org -- Render, Stripe, Supabase, Cursor, Claude , OpenAi
MEAUXBILITY AUTOMATION SYSTEMS CHECK

# =====================================================
# MEAUXBILITY — ADMIN VAULT (.env.local)
# Personal, local-only. DO NOT COMMIT.
# =====================================================
# Mission (summary)
# 1) Identity + Repo Security
#    - GitHub SSO via Google Workspace (SAML)
#    - Turn on 2FA everywhere (GitHub, Google Admin, Apple)
#    - Create Workspace groups: engineering@, founders@, ops@, contractors@


# 2) Secrets Storage
#    - Local/dev: this .env.local (never commit)
#    - Human storage: iCloud Keychain (primary) + Google Password Manager (backup)
#      Save: value, where used, scopes, rotation date
#    - CI/Prod: GitHub Actions “Secrets” + Hosting provider env vars


# 3) Collect Provider Secrets (names below)

# 4) Enable only the Google APIs you’ll actually use this quarter

# 5) Where to store each:
#      - .env.local → developer runtime values (local only)
#      - Keychain → master secrets
#      - GitHub Actions/Render/Vercel/Supabase → staging/prod

# 6) After collecting: run
#      pnpm install && pnpm bootstrap && pnpm dev:proxy
#      Visit http://localhost:3000/health and /readme

# 7) Trim-the-fat tips
#    - Prefer Cloud Run for cheap scale-to-zero (later)
#    - Don’t duplicate the same secret in multiple places
#    - Disable unused Google APIs
#    - Standardize on Google SSO for all tools
#

# NOTE: Lines starting with # are comments—safe to keep in your local file.


# -----------------------------
# APP / RUNTIME
# -----------------------------
NODE_ENV=development
PORT=3000
APP_URL=https://meauxbility.org
# Generate with: `openssl rand -base64 32` (store copy in Keychain)
SESSION_SECRET=


# -----------------------------
# STRIPE (Donations/Payments)
# Dashboard: https://dashboard.stripe.com/apikeys
# Webhooks: Developers → Webhooks → signing secret (whsec_)
# -----------------------------
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=




# -----------------------------
# ANTHROPIC (Claude)
# https://console.anthropic.com/
# -----------------------------
ANTHROPIC_API_KEY=


# -----------------------------
# OPENAI (Optional)
# https://platform.openai.com/account
# -----------------------------
OPENAI_API_KEY=
OPENAI_ORGANIZATION_ID=


# -----------------------------
# GOOGLE (Workspace + Cloud)
# Console: https://console.cloud.google.com/
# Enable: Gmail, Calendar, Drive, Admin SDK Directory (as needed)
# OAuth Web Client (not service account) for user-based actions
# GA4: https://analytics.google.com/ (Admin → Data Streams)
# -----------------------------
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GA_MEASUREMENT_ID=
GA_API_SECRET=
# If you create a service account JSON: keep ONLY in Keychain/Secret Manager, not here.


# -----------------------------
# SUPABASE (Optional Backend)
# https://app.supabase.com → Project Settings → API
# -----------------------------
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=




COMPLETE API KEYS LIST:
🔥 CRITICAL (7 keys):
1. SUPABASE_SERVICE_ROLE_KEY - ❌ Missing
2. ANTHROPIC_API_KEY - ❌ Missing
3. GITHUB_TOKEN - ❌ Missing
4. RENDER_API_KEY - ❌ Missing
5. STRIPE_SECRET_KEY - ❌ Missing
6. STRIPE_PUBLISHABLE_KEY - ❌ Missing
7. STRIPE_WEBHOOK_SECRET - ❌ Missing
⚠️ OPTIONAL (8 keys):
1. OPENAI_API_KEY - ❌ Missing
2. NOTION_API_KEY - ❌ Missing
3. SENDGRID_API_KEY - ❌ Missing
4. GOOGLE_CLIENT_ID - ❌ Missing
5. GOOGLE_CLIENT_SECRET - ❌ Missing
6. GA_MEASUREMENT_ID - ❌ Missing
7. GA_API_SECRET - ❌ Missing
8. SENTRY_DSN - ❌ Missing
🚀 QUICK START PLAN (20 minutes):
Step 1: Get Critical Keys (15 minutes)
1. Supabase Service Role Key (2 min) → https://supabase.com/dashboard/project/ghiulqoqujsiofsjcrqk
2. Anthropic API Key (5 min) → https://console.anthropic.com/
3. GitHub Token (3 min) → https://github.com/settings/tokens
4. Render API Key (3 min) → https://dashboard.render.com/
5. Stripe Keys (2 min) → https://dashboard.stripe.com/apikeys









# =====================================================
# Helper Notes (local use only)
# =====================================================
# macOS Keychain helpers (optional):
# Save:
#   security add-generic-password -a meaux-OPENAI -s OPENAI_API_KEY -w "<your_key_here>"
# Load to env (no file):
#   export OPENAI_API_KEY="$(security find-generic-password -a meaux-OPENAI -s OPENAI_API_KEY -w)"

# GitHub SSO via Google Workspace (SAML) quick path:
#   Google Admin → Apps → Web and mobile apps → Add app → GitHub Enterprise
#   Copy SSO URL / Entity ID / Certificate
#   GitHub Org → Settings → Security → SAML → paste values → test → enable

# Where each secret ultimately lives:
#   - Dev machine: this .env.local
#   - Staging/Prod: provider's env vars (Render/Vercel/Supabase/GitHub Actions)
#   - Human vault: iCloud Keychain (Face ID/Touch ID), with notes on scopes + rotation date

# After filling values locally:
#   pnpm install
#   pnpm bootstrap
#   pnpm dev:proxy
#   → open http://localhost:3000/health and http://localhost:3000/readme

# DO NOT COMMIT THIS FILE. Add to .gitignore (already recommended):
#   .env
#   .env.*
#   !.env.example
#   .envrc
#   secrets/
