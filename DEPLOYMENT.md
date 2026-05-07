# 🚀 Deployment Guide - Vercel Deployment

This guide will help you deploy your portfolio to Vercel with zero errors.

## ✅ Pre-Deployment Checklist

### 1. Clean Install Dependencies

```bash
# Remove old dependencies
rm -rf node_modules
rm package-lock.json

# Fresh install with latest versions
npm install
```

### 2. Verify Build Locally

```bash
# Build the project locally to catch errors early
npm run build

# Test the production build
npm start
```

### 3. Check for Errors

```bash
# Run linter
npm run lint

# Verify TypeScript compilation
npx tsc --noEmit
```

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub:

   ```bash
   git add .
   git commit -m "chore: update dependencies for Vercel deployment"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

### Option 3: Direct Upload

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Or click "New Project" and upload files

## 📋 Environment Variables

### Required Variables

None required for this portfolio (it's a static site)

### Optional Variables (if you add backend features)

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=https://your-api.com
```

For Vercel, add these in:

- Project Settings → Environment Variables

## 🔧 Build Settings on Vercel

Vercel will auto-detect these settings based on `vercel.json`:

- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm ci`
- **Framework Preset**: Next.js

## 📊 Performance Optimization

Your build includes:
✅ SWC Minification (faster builds)
✅ Incremental Static Regeneration ready
✅ Source maps disabled for production
✅ Optimized bundle size

## 🐛 Troubleshooting

### Build Fails with Module Errors

```bash
# Clear build cache
rm -rf .next
npm run build
```

### Memory Issues During Build

```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### ESLint Errors

```bash
# Run ESLint to see all errors
npm run lint

# Fix auto-fixable errors
npx eslint --fix src/
```

### TypeScript Errors

```bash
# Check TypeScript compilation
npx tsc --noEmit

# Build with TypeScript diagnostics
npm run build
```

## 📈 Monitoring Deployment

After deployment:

1. Check build logs on Vercel dashboard
2. Monitor performance in Analytics tab
3. Set up error tracking (Sentry recommended)

## 🔐 Security Checklist

✅ `.env.local` is in `.gitignore`
✅ No secrets in source code
✅ Dependencies are up to date
✅ TypeScript strict mode enabled
✅ ESLint configured

## 🎯 Post-Deployment

1. **Test Your Site**
   - Visit your Vercel URL
   - Test all pages (/projects, /about, /contact)
   - Check responsive design on mobile

2. **Setup Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add custom domain
   - Update DNS records

3. **Setup Analytics** (Recommended)
   - Enable Web Analytics in Vercel
   - Integrate with Google Analytics if needed

4. **Setup Email Notifications** (Recommended)
   - Configure deployments notifications
   - Set up error alerts

## 📚 Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Testing
npm run lint         # Run ESLint
npx tsc --noEmit    # Check TypeScript

# Cleanup
rm -rf .next node_modules package-lock.json  # Clean build artifacts
npm install          # Reinstall dependencies
```

## 🌍 Domain & DNS Setup

If using custom domain:

- Add domain in Vercel dashboard
- Update DNS records at your registrar
- Wait for DNS propagation (5-48 hours)

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Check your repo issues

---

**Last Updated**: May 7, 2026
**Status**: ✅ Ready for Production
**Vercel Build**: Optimized and Tested
