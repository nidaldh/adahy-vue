# Deployment Guide - Animal Sales Vue App

## Overview

This guide covers deploying the Animal Sales Vue application to production using Firebase Hosting and performing data migration from the legacy system.

## Prerequisites

### 1. Firebase CLI Installation
```bash
npm install -g firebase-tools
```

### 2. Firebase Project Setup
- Firebase project: `alfaree-615b6`
- Realtime Database enabled
- Authentication enabled
- Hosting enabled

### 3. Environment Configuration
Ensure all environment variables are set in `.env.production`

## Pre-Deployment Steps

### 1. Data Migration

Before deploying the new Vue application, migrate existing data from global paths to user-specific paths:

```bash
# Install firebase-admin for migration script
npm install firebase-admin

# Download service account key from Firebase Console
# Save as scripts/service-account-key.json

# Run migration script
npm run migrate:data
```

**Migration Process:**
1. Backs up existing data to `firebase-backup.json`
2. Transforms data structure for user-specific storage
3. Migrates data to `/users/{uid}/` paths
4. Validates data integrity

### 2. Environment Setup

Create production environment file:
```bash
cp .env.production.example .env.production
# Edit with your production values
```

### 3. Firebase Authentication

```bash
# Login to Firebase (if not already logged in)
npm run firebase:login

# Initialize project (if not already done)
npm run firebase:init
```

## Deployment Options

### Option 1: Automated Deployment (Recommended)

Use the deployment script for a complete automated deployment:

```bash
npm run deploy
```

This script will:
- ✅ Install dependencies
- ✅ Run tests
- ✅ Build for production
- ✅ Optimize assets
- ✅ Deploy to Firebase Hosting
- ✅ Optionally deploy database rules

### Option 2: Manual Deployment

Step-by-step manual deployment:

```bash
# 1. Install dependencies
npm ci

# 2. Run tests
npm run test:unit

# 3. Build for production
npm run build:prod

# 4. Deploy to Firebase Hosting
npm run deploy:hosting
```

### Option 3: CI/CD Deployment

GitHub Actions workflow is configured for automatic deployment on push to main branch.

**Setup:**
1. Add Firebase service account to GitHub Secrets
2. Add environment variables to GitHub Secrets
3. Push to main branch triggers deployment

## Database Rules Deployment

Deploy security rules separately for safety:

```bash
npm run deploy:rules
```

**Important:** Review database rules before deployment to ensure proper security.

## Post-Deployment Verification

### 1. Application Testing
- [ ] Login functionality works
- [ ] Customer management CRUD operations
- [ ] Payment processing
- [ ] Data persistence
- [ ] Responsive design on mobile

### 2. Performance Monitoring
- [ ] Check Core Web Vitals
- [ ] Monitor Firebase usage
- [ ] Verify caching is working
- [ ] Test load times

### 3. Security Verification
- [ ] Database rules are restrictive
- [ ] User data isolation
- [ ] Authentication required for protected routes
- [ ] No sensitive data exposed

## Environment Variables

### Production Environment (`.env.production`)
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=alfaree-615b6.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://alfaree-615b6-default-rtdb.europe-west1.firebasedatabase.app/
VITE_FIREBASE_PROJECT_ID=alfaree-615b6
VITE_FIREBASE_STORAGE_BUCKET=alfaree-615b6.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=935148742009
VITE_FIREBASE_APP_ID=1:935148742009:web:79b7b2f675b07b2ef2fba8
VITE_FIREBASE_MEASUREMENT_ID=G-0TJ606H9YS
```

### GitHub Secrets (for CI/CD)
Add these secrets to your GitHub repository:
- `FIREBASE_SERVICE_ACCOUNT` - Service account JSON
- `FIREBASE_PROJECT_ID` - Project ID
- `VITE_FIREBASE_*` - All Firebase config variables

## Deployment URLs

After successful deployment:
- **Primary URL:** https://alfaree-615b6.web.app
- **Alternative URL:** https://alfaree-615b6.firebaseapp.com

## Rollback Procedure

If issues occur after deployment:

### 1. Quick Rollback
```bash
# Deploy previous version from Git
git checkout <previous-commit>
npm run deploy:hosting
```

### 2. Data Rollback
```bash
# Restore from backup (if migration issues)
# Use Firebase Console or restore from firebase-backup.json
```

## Performance Optimization

### Build Optimization
- ✅ Code splitting enabled
- ✅ Bundle analysis available (`npm run analyze`)
- ✅ Asset compression
- ✅ Tree shaking

### Runtime Optimization
- ✅ Lazy loading components
- ✅ Virtual scrolling for large lists
- ✅ Debounced search
- ✅ Image lazy loading
- ✅ Service worker (if enabled)

## Monitoring and Maintenance

### 1. Firebase Console Monitoring
- Database usage and performance
- Authentication metrics
- Hosting traffic
- Error reporting

### 2. Performance Monitoring
- Core Web Vitals
- Page load times
- API response times
- User interaction metrics

### 3. Security Monitoring
- Failed authentication attempts
- Unusual database access patterns
- Security rule violations

## Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**Deployment Permission Denied:**
```bash
# Re-authenticate with Firebase
firebase logout
firebase login
```

**Environment Variables Not Working:**
- Check `.env.production` file exists
- Verify variable names start with `VITE_`
- Restart development server after changes

**Database Rules Rejected:**
- Validate JSON syntax in `database.rules.json`
- Test rules in Firebase Console simulator
- Check user authentication state

### Support Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vue.js Documentation](https://vuejs.org)
- [Vite Documentation](https://vitejs.dev)

## Deployment Checklist

Pre-deployment:
- [ ] Data migration completed successfully
- [ ] Environment variables configured
- [ ] Tests passing
- [ ] Firebase CLI authenticated
- [ ] Database rules reviewed

Deployment:
- [ ] Application builds without errors
- [ ] Deployment script completes successfully
- [ ] Application accessible at production URL
- [ ] Authentication works
- [ ] Database operations functional

Post-deployment:
- [ ] Monitor Firebase Console for errors
- [ ] Verify performance metrics
- [ ] Test on multiple devices/browsers
- [ ] Update documentation if needed

---

**Last Updated:** May 30, 2025
**Version:** 1.0.0
