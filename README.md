
au·to·di·dact
/ˌôdəˈdīˌdak(t),ˌädəˈdīˌdak(t)/
noun
a self-taught person. 

this website will be vercel domain ( https://iautodidact.app/ ) project id ( prj_AemccTFEjP7ztRJivI4wtysSyEfi ) 


- **Nonprofit Site:** [meauxbility.org](https://meauxbility.org) - Public website (migrating to Vercel)
- **E-commerce:** [inneranimals.com](https://inneranimals.com) - Online store (migrating to Vercel)
- **Additional Domain:** [meauxxx.com](https://meauxxx.com) - Reserved for future use

---

## 🏗️ Monorepo Structure

```
meauxbilityfoundation/.org/
├── 📱 apps/
│   ├── admin-portal/          # Next.js 14 admin dashboard
│   ├── meauxbility-org/       # Nonprofit website
│   ├── inneranimals-shop/     # E-commerce platform
│   └── api-gateway/           # Centralized API services
├── 🛠️ packages/
│   ├── ui-components/         # Shared React components
│   ├── database-schemas/      # Supabase migrations
│   ├── auth-system/           # Authentication & RBAC
│   ├── asset-manager/         # Google Drive + Cloudflare R2
│   └── ai-integrations/       # OpenAI, Claude, Analytics
├── 🔧 tools/
│   ├── deployment/            # Vercel configs
│   ├── monitoring/            # Performance tracking
│   └── automation/            # CI/CD scripts
└── 📚 docs/
    ├── api-documentation/     # API references
    ├── deployment-guides/     # Setup instructions
    └── corporate-policies/    # Governance docs
```

---

## 🚀 Current Status

### ✅ Production Ready
- **Admin Portal** - Live at [iaudodidact.com](https://iaudodidact.com/)
  - Next.js 14 with App Router
  - Supabase backend (PostgreSQL, Auth, Real-time)
  - 7 functional modules (GitHub, Brand Lab, Analytics, etc.)
  - Role-based access control (Admin, CTO, CMO, Members)
  - Secure API routes for external integrations

### 🔄 In Migration
- **meauxbility.org** - Moving from Render to Vercel
- **inneranimals.com** - Moving from current host to Vercel
- **Asset Management** - Google Drive + Cloudflare R2 integration

### 📋 Planned
- **AI-Powered Workflows** - OpenAI + Claude integration
- **Advanced Analytics** - Google Analytics + custom metrics
- **Payment Processing** - Stripe integration
- **Team Collaboration** - Real-time features

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** (App Router, Server Components)
- **React 19** (Latest features)
- **Tailwind CSS** (Utility-first styling)
- **Lucide Icons** (Icon system)

### Backend
- **Supabase** (PostgreSQL, Auth, Storage, Real-time)
- **Row Level Security** (Data protection)
- **API Routes** (Secure server-side operations)

### External Services
- **GitHub API** (Repository management)
- **Google Drive API** (Asset management)
- **Cloudflare R2** (CDN + Storage)
- **OpenAI API** (AI content generation)
- **Claude API** (Advanced AI analysis)
- **Google Analytics** (Performance tracking)
- **Stripe API** (Payment processing)

### Deployment
- **Vercel** (Hosting platform)
- **Custom Domains** (iaudodidact.com, meauxbility.org, inneranimals.com)
- **SSL/HTTPS** (Secure connections)

---

## 👥 Team Structure

### Leadership
- **Sam** (CEO) - `sam@meauxbility.org` - Full admin access
- **Fred Williams** (CMO) - `fred@meauxbility.org` - Marketing & campaigns
- **Connor McNeely** (CTO) - `connor@meauxbility.org` - Technical operations

### Access Levels
- **Admin** - Full system access, user management, API keys
- **CTO** - Technical operations, GitHub integration, deployments
- **CMO** - Marketing tools, campaigns, analytics
- **Members** - Basic access, content creation

---

## 🔑 Environment Variables

### Required for All Apps
```bash
# Supabase (Core Backend)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE=...

# GitHub Integration
GITHUB_TOKEN=...

# AI Services
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...

# Google Services
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXT_PUBLIC_GA_MEASUREMENT_ID=...

# Cloudflare R2 (Asset Storage)
CLOUDFLARE_ACCOUNT_ID=...
CLOUDFLARE_ACCESS_KEY_ID=...
CLOUDFLARE_SECRET_ACCESS_KEY=...
CLOUDFLARE_R2_BUCKET=meauxbility-assets
CLOUDFLARE_R2_PUBLIC_URL=https://assets.iaudodidact.com

# Stripe (Payments)
STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- Vercel CLI (optional)
- Supabase account

### Development Setup
```bash
# Clone repository
git clone https://github.com/meauxbilityfoundation/.org.git
cd .org

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Production Deployment
```bash
# Deploy to Vercel
vercel --prod

# Or push to main branch (auto-deploys)
git add .
git commit -m "Deploy to production"
git push origin main
```

---

## 📱 Applications

### 1. Admin Portal (`/apps/admin-portal`)
**Live:** [iaudodidact.com](https://iaudodidact.com/)

**Features:**
- 7 functional modules (GitHub, Brand Lab, Analytics, Campaigns, Grants, Website Builder, Settings)
- Command palette (⌘K) for quick navigation
- Real-time collaboration
- Role-based access control
- Secure API integrations

**Tech:** Next.js 14, Supabase, Tailwind CSS

### 2. Meauxbility.org (`/apps/meauxbility-org`)
**Status:** Migrating to Vercel

**Purpose:** Public nonprofit website
- Mission and impact stories
- Donation processing
- Volunteer opportunities
- Accessibility resources

### 3. Inner Animals Shop (`/apps/inneranimals-shop`)
**Status:** Migrating to Vercel

**Purpose:** E-commerce platform
- Product catalog
- Shopping cart
- Payment processing (Stripe)
- Order management

---

## 🔧 Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature development
- `hotfix/*` - Critical fixes

### Code Standards
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety (planned)
- **Conventional Commits** - Commit messages

### Testing
- **Unit Tests** - Component testing
- **Integration Tests** - API testing
- **E2E Tests** - User flow testing (planned)

---

## 📊 Monitoring & Analytics

### Performance Tracking
- **Vercel Analytics** - Core Web Vitals
- **Google Analytics** - User behavior
- **Custom Metrics** - Business KPIs

### Error Monitoring
- **Vercel Error Tracking** - Runtime errors
- **Supabase Logs** - Database issues
- **Custom Alerts** - Critical failures

---

## 🔒 Security

### Data Protection
- **Row Level Security** (RLS) in Supabase
- **API Key Encryption** - Stored securely
- **OAuth 2.0** - Secure authentication
- **HTTPS Everywhere** - Encrypted connections

### Access Control
- **Role-based permissions** - Granular access
- **API rate limiting** - Abuse prevention
- **Input validation** - XSS protection
- **CORS configuration** - Cross-origin security

---

## 📚 Documentation

### API Documentation
- [Admin Portal API](./docs/api-documentation/admin-portal.md)
- [Supabase Schema](./docs/api-documentation/supabase-schema.md)
- [External Integrations](./docs/api-documentation/external-apis.md)

### Deployment Guides
- [Vercel Setup](./docs/deployment-guides/vercel-setup.md)
- [Environment Variables](./docs/deployment-guides/environment-variables.md)
- [Domain Configuration](./docs/deployment-guides/domains.md)

### Corporate Policies
- [Code of Conduct](./docs/corporate-policies/code-of-conduct.md)
- [Security Guidelines](./docs/corporate-policies/security.md)
- [Access Control](./docs/corporate-policies/access-control.md)

---

## 🤝 Contributing

### For Team Members
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### For External Contributors
1. **Read** our Code of Conduct
2. **Check** open issues
3. **Fork** and contribute
4. **Follow** our coding standards

---

## 📞 Support

### Technical Issues
- **GitHub Issues** - Bug reports and feature requests
- **Slack** - Team communication
- **Email** - `tech@meauxbility.org`

### Business Inquiries
- **Email** - `info@meauxbility.org`
- **Website** - [meauxbility.org](https://meauxbility.org)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Mission Statement

**Meauxbility Foundation** is committed to creating accessible, innovative technology solutions that empower individuals and communities. Through our corporate monorepo, we maintain the highest standards of code quality, security, and user experience while advancing our mission of social impact through technology.

---

**Built with ❤️ by the Meauxbility Foundation Team**

*Last updated: December 2024*
