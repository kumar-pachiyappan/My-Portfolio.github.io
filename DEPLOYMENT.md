# 🚀 Kumar Pachiyappan's Cybersecurity Portfolio - Deployment Guide

## GitHub Pages Deployment Instructions

### Prerequisites
- GitHub account
- Git installed locally
- Repository created on GitHub

### Step 1: Configure Package.json

Add the following to `/app/frontend/package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  ...
}
```

Replace `yourusername` with your GitHub username and `portfolio` with your repository name.

### Step 2: Install gh-pages Package

```bash
cd /app/frontend
yarn add -D gh-pages
```

### Step 3: Add Deploy Scripts to Package.json

Add these scripts to the `"scripts"` section:

```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    ...
  }
}
```

### Step 4: Build the Project

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `build` folder.

### Step 5: Initialize Git Repository

```bash
cd /app
git init
git add .
git commit -m "Initial commit: Cybersecurity Portfolio"
```

### Step 6: Connect to GitHub Repository

```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 7: Deploy to GitHub Pages

```bash
cd /app/frontend
yarn deploy
```

This command will:
1. Build your React app
2. Create a `gh-pages` branch
3. Push the build folder to GitHub Pages
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Step 8: Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Click **Settings** > **Pages**
3. Under **Source**, select branch: `gh-pages`
4. Click **Save**
5. Your site will be published in a few minutes

---

## Custom Domain Setup (Optional)

### Step 1: Add CNAME File

Create a file named `CNAME` in `/app/frontend/public/`:

```
yourdomai n.com
```

### Step 2: Configure DNS Settings

Add these DNS records at your domain provider:

**For Root Domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For Subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### Step 3: Update GitHub Settings

1. Go to **Settings** > **Pages**
2. Enter your custom domain
3. Enable **Enforce HTTPS**

---

## Environment Variables for Production

Create `/app/frontend/.env.production`:

```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

Note: For a static GitHub Pages deployment, the portfolio works with mock data. Firebase integration can be added later for dynamic content management.

---

## Testing Before Deployment

### Local Production Build Test

```bash
cd /app/frontend
yarn build
npx serve -s build
```

Visit `http://localhost:3000` to test the production build locally.

---

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:** Add `"homepage"` field to package.json

### Issue: Routing Not Working

**Solution:** Add a `404.html` file in `/app/frontend/public/` that redirects to `index.html`:

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
  <body>
  </body>
</html>
```

And add this to `/app/frontend/public/index.html` in the `<head>`:

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

### Issue: Images Not Loading

**Solution:** Use relative paths or update `homepage` in package.json

---

## Continuous Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

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
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/build
```

Now every push to `main` branch will automatically deploy!

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Navigation works (smooth scrolling)
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] Welcome modal appears on first visit
- [ ] Admin login page is accessible
- [ ] Footer links work
- [ ] Download Resume button works

---

## Firebase Integration (Future Enhancement)

To enable full admin dashboard functionality:

1. Set up Firebase project
2. Configure Firestore and Storage
3. Add Firebase config to frontend
4. Implement authentication
5. Connect admin dashboard to Firebase
6. Deploy backend API (optional)

See `/app/contracts.md` for detailed Firebase integration plan.

---

## Support

For issues or questions:
- Check `/app/contracts.md` for API integration details
- Review component files in `/app/frontend/src/components/`
- Test locally before deploying

---

## Quick Deploy Commands

```bash
# One-time setup
cd /app/frontend
yarn add -D gh-pages

# Every time you want to deploy
cd /app/frontend
yarn deploy
```

That's it! Your portfolio will be live at `https://yourusername.github.io/portfolio` 🎉
