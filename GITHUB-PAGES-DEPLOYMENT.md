# GitHub Pages Deployment Guide

This project has been configured to deploy to GitHub Pages instead of Firebase Hosting.

## Quick Start

1. **Manual Deployment**:
   ```bash
   ./scripts/deploy.sh
   ```

2. **Automatic Deployment** (recommended):
   - The script will offer to create a GitHub Actions workflow
   - Once created, deployments happen automatically on push to main/master

## Configuration

### Base Path
The app is configured to work with GitHub Pages' subdirectory structure (`/<repo-name>/`). The Vite config automatically handles this based on the `BASE` environment variable.

### Custom Domain
To use a custom domain:
1. Uncomment and set `CUSTOM_DOMAIN` in the deploy script
2. Configure DNS to point to GitHub Pages
3. Enable custom domain in GitHub repository settings

## GitHub Actions Workflow

The automatic workflow (`/.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Run tests
3. Build the application
4. Deploy to GitHub Pages

## Manual Setup (if needed)

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Select "/ (root)" folder

2. **Repository Permissions**:
   - Ensure Actions have write permissions
   - Go to Settings → Actions → General
   - Set "Workflow permissions" to "Read and write permissions"

## URLs

- **GitHub Pages URL**: `https://<username>.github.io/<repository-name>/`
- **Custom Domain**: Configure in repository settings

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that tests pass locally
- Verify Vite config supports the base path

### Deployment Issues
- Check GitHub Actions logs
- Verify gh-pages branch exists and has content
- Ensure GitHub Pages is enabled in repository settings

### 404 Errors
- Verify the base path is correctly set
- Check that all internal links use relative paths
- Ensure router is configured for GitHub Pages

## Migration from Firebase

The deployment script has been updated to:
- ✅ Use Git instead of Firebase CLI
- ✅ Deploy to GitHub Pages instead of Firebase Hosting
- ✅ Create GitHub Actions workflow
- ✅ Handle base path configuration
- ❌ No longer deploys database rules (Firebase-specific)

## Development vs Production

- **Development**: `npm run dev` (base path: `/`)
- **Production**: GitHub Pages (base path: `/<repo-name>/`)

The Vite configuration automatically handles both scenarios.
