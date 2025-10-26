# 🚀 GitHub Pages Deployment Guide - Kumar's Cybersecurity Portfolio

## Complete Setup Instructions

### Prerequisites
- GitHub account
- Git installed on your computer
- Node.js 16+ and Yarn installed

---

## Option 1: Quick Deploy (Recommended)

### Step 1: Prepare Your Repository

1. **Create a new GitHub repository**
   ```
   Repository name: portfolio
   Description: Cybersecurity Professional Portfolio
   Visibility: Public
   ```

2. **Navigate to your project**
   ```bash
   cd /app/frontend
   ```

3. **Add homepage to package.json**
   
   Open `/app/frontend/package.json` and add:
   ```json
   {
     "homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio",
     ...
   }
   ```
   Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 2: Install gh-pages

```bash
cd /app/frontend
yarn add -D gh-pages
```

### Step 3: Add Deploy Scripts

Add these to the `"scripts"` section in `/app/frontend/package.json`:

```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    ...
  }
}
```

### Step 4: Initialize Git and Deploy

```bash
# Initialize git
cd /app
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Cybersecurity Portfolio with Admin Dashboard"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to main
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
cd frontend
yarn deploy
```

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages`
4. Click **Save**
5. Wait 2-3 minutes
6. Visit: `https://YOUR_USERNAME.github.io/portfolio`

---

## Option 2: Manual Build Deploy

### Step 1: Build Production Version

```bash
cd /app/frontend
yarn build
```

This creates an optimized build in `/app/frontend/build/`

### Step 2: Deploy Build Folder

```bash
# Install gh-pages globally
npm install -g gh-pages

# Deploy the build folder
gh-pages -d build
```

---

## Important Configuration Files

### 1. Package.json (Frontend)

Add/verify these settings:

```json
{
  "name": "kumar-cybersecurity-portfolio",
  "version": "1.0.0",
  "homepage": "https://YOUR_USERNAME.github.io/portfolio",
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### 2. Create .gitignore

Create `/app/.gitignore`:

```
# Dependencies
node_modules/
frontend/node_modules/
backend/node_modules/

# Production build
frontend/build/
backend/__pycache__/

# Environment variables
.env
.env.local
.env.production

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/

# Misc
.cache/
```

### 3. Update Backend URL for Production

The app already uses `process.env.REACT_APP_BACKEND_URL` from `.env`

For GitHub Pages (static site), you have two options:

**Option A: Static Portfolio (No Backend)**
- The portfolio works with localStorage
- All CRUD operations persist locally
- Perfect for personal portfolios

**Option B: With Backend API**
Create `/app/frontend/.env.production`:
```env
REACT_APP_BACKEND_URL=https://your-backend-api.com
```

---

## Custom Domain Setup (Optional)

### Step 1: Add CNAME File

Create `/app/frontend/public/CNAME`:
```
yourdomain.com
```

### Step 2: Configure DNS

Add these records at your domain provider:

**For Root Domain:**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 3: Enable HTTPS

1. Go to **Settings** → **Pages**
2. Check **Enforce HTTPS**

---

## Continuous Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd frontend
        yarn install
        
    - name: Build
      run: |
        cd frontend
        yarn build
      env:
        CI: false
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./frontend/build
```

Now every push to `main` automatically deploys!

---

## Testing Before Deployment

### Local Production Build

```bash
cd /app/frontend
yarn build
npx serve -s build -p 5000
```

Visit `http://localhost:5000` to test production build

---

## Deployment Checklist

- [ ] Updated `homepage` in package.json with your GitHub username
- [ ] Added deploy scripts to package.json
- [ ] Installed gh-pages: `yarn add -D gh-pages`
- [ ] Built the project: `yarn build`
- [ ] Initialized git repository
- [ ] Committed all files
- [ ] Added GitHub remote
- [ ] Pushed to main branch
- [ ] Deployed: `yarn deploy`
- [ ] Configured GitHub Pages settings
- [ ] Tested the live site
- [ ] (Optional) Set up custom domain
- [ ] (Optional) Enabled HTTPS

---

## Troubleshooting

### Issue: Blank page after deployment

**Solution 1:** Check homepage in package.json
```json
"homepage": "https://username.github.io/portfolio"
```

**Solution 2:** Check browser console for errors

**Solution 3:** Verify build folder has index.html

### Issue: 404 on page refresh

**Solution:** Add 404.html redirect

Create `/app/frontend/public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Kumar Pachiyappan - Portfolio</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'"></meta>
  </head>
</html>
```

Add to `/app/frontend/public/index.html` `<head>`:
```html
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### Issue: Images not loading

**Solution:** Use relative paths or check homepage configuration

### Issue: API calls failing

**Solution:** Update `.env.production` with correct backend URL or use localStorage mode

---

## Admin Dashboard Access

After deployment, access admin:
```
https://YOUR_USERNAME.github.io/portfolio/admin/login

Default credentials:
Email: admin@kumar.com
Password: admin123
```

**Important:** Change credentials immediately in Admin Settings!

---

## Local Storage Data

The portfolio uses localStorage for data persistence:
- Profile data
- Experience entries
- Certifications
- Projects
- Blog posts
- Contact messages
- Admin credentials

**Note:** Data persists in the browser. For production with backend, integrate Firebase or your API.

---

## File Structure for GitHub

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── 404.html
│   │   └── CNAME (if using custom domain)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── App.js
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

---

## Post-Deployment Tasks

1. **Update Resume**: Upload your actual resume PDF
2. **Replace Profile Image**: Add your professional photo
3. **Update Content**: Customize all sections with your information
4. **Change Admin Credentials**: Go to Admin Settings
5. **Test All Features**: Verify every button and form works
6. **SEO Optimization**: Update meta tags in index.html
7. **Share Your Portfolio**: Add link to resume, LinkedIn, etc.

---

## Support & Updates

**For issues or questions:**
- Check this guide's troubleshooting section
- Review `/app/contracts.md` for Firebase integration
- Check `/app/DEPLOYMENT.md` for additional info

**To update your portfolio:**
```bash
cd /app/frontend
# Make changes
git add .
git commit -m "Update: description"
git push origin main
yarn deploy
```

---

## Quick Command Reference

```bash
# Deploy
cd /app/frontend && yarn deploy

# Update and redeploy
git add . && git commit -m "Update" && git push && cd frontend && yarn deploy

# Test locally
yarn start

# Build
yarn build

# Test production build
npx serve -s build
```

---

🎉 **Your portfolio is now live!** Share it with potential employers and showcase your cybersecurity expertise!
