# 🔐 Kumar Pachiyappan - Cybersecurity Portfolio

A production-ready, fully functional cybersecurity portfolio with admin dashboard. All features enabled with localStorage persistence - ready to deploy to GitHub Pages!

## ✨ Features

- ✅ **Fully Functional** - All buttons, forms, and CRUD operations work
- ✅ **localStorage Persistence** - Data saved across sessions
- ✅ **Admin Dashboard** - Complete content management system
- ✅ **Responsive Design** - Mobile, tablet, desktop optimized
- ✅ **Production Ready** - Optimized for GitHub Pages deployment
- ✅ **No Backend Required** - Runs completely static

## 🚀 Quick Deploy

```bash
cd /app/frontend
yarn add -D gh-pages
# Update homepage in package.json
yarn deploy
```

**Full guide:** [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md)

## 🎯 What's Working

### User-Facing
- Welcome modal on first visit
- Interactive sections with smooth animations
- Contact form (saves to localStorage)
- Auto-sliding certifications carousel
- All modals and popups

### Admin Dashboard
- Profile & About editor
- Experience CRUD (Create, Read, Update, Delete)
- Certifications CRUD with image upload
- Projects CRUD with image upload
- Upskill progress tracker
- Blog post editor
- Contact & Skills manager
- Admin credentials management

## 📦 Data Storage

All data persists in browser localStorage:
- `portfolioProfile` - Profile information
- `portfolioAbout` - About me content
- `portfolioExperiences` - Work experiences
- `portfolioCertifications` - Certifications
- `portfolioProjects` - Projects
- `portfolioUpskills` - Learning progress
- `portfolioBlogs` - Blog posts
- `portfolioContact` - Contact info
- `portfolioSkills` - Skills lists
- `contactMessages` - Contact form submissions
- `adminEmail` / `adminPassword` - Admin credentials

## 🔑 Default Admin Access

- **URL:** `/admin/login`
- **Email:** `admin@kumar.com`
- **Password:** `admin123`

**⚠️ Important:** Change credentials in Admin Settings after deployment!

## 📚 Documentation

- **[GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md)** - Complete deployment guide
- **[contracts.md](./contracts.md)** - Firebase integration plan
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Additional deployment info

---

Made with ❤️ for cybersecurity professionals
