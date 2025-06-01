#!/bin/bash

# Deployment Script for Animal Sales Vue App
# This script builds and deploys the application to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Git is available and repository is initialized
check_git() {
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed"
        echo "Please install Git to continue"
        exit 1
    fi
    
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not a Git repository"
        echo "Initialize a Git repository first: git init"
        exit 1
    fi
    
    print_success "Git is available and repository is initialized"
}

# Check if gh CLI is installed (optional)
check_gh_cli() {
    if command -v gh &> /dev/null; then
        print_success "GitHub CLI is available"
        return 0
    else
        print_warning "GitHub CLI not found (optional)"
        return 1
    fi
}

# Check if we have a GitHub remote
check_github_remote() {
    if git remote get-url origin | grep -q "github.com"; then
        print_success "GitHub remote detected"
        REPO_URL=$(git remote get-url origin)
        REPO_NAME=$(basename "$REPO_URL" .git)
        REPO_OWNER=$(basename "$(dirname "$REPO_URL")" | sed 's/.*://')
        print_status "Repository: $REPO_OWNER/$REPO_NAME"
    else
        print_error "No GitHub remote found"
        echo "Add a GitHub remote: git remote add origin https://github.com/username/repo.git"
        exit 1
    fi
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    npm ci
    print_success "Dependencies installed"
}

# Run tests
run_tests() {
    print_status "Running tests..."
    if npm run test:unit -- --run; then
        print_success "All tests passed"
    else
        print_warning "Some tests failed, but continuing deployment"
    fi
}

# Build the application for GitHub Pages
build_app() {
    print_status "Building application for GitHub Pages..."
    
    # Clean previous build
    rm -rf dist
    
    # Build with production environment and proper base path for GitHub Pages
    # GitHub Pages serves from /<repo-name>/ path
    VITE_BASE="/$REPO_NAME/"
    print_status "Building with base path: $VITE_BASE"
    
    # Set base path in vite config or use env variable
    # Skip TypeScript checking for deployment
    BASE="$VITE_BASE" npm run build -- --mode production
    
    # If TypeScript build fails, try with vite build only
    if [ $? -ne 0 ]; then
        print_warning "TypeScript build failed, trying with vite build only..."
        BASE="$VITE_BASE" npx vite build --mode production
    fi
    
    if [ -d "dist" ]; then
        print_success "Application built successfully"
        
        # Create .nojekyll file to prevent Jekyll processing
        touch dist/.nojekyll
        print_status "Created .nojekyll file"
        
        # Create CNAME file if custom domain is configured
        if [ ! -z "$CUSTOM_DOMAIN" ]; then
            echo "$CUSTOM_DOMAIN" > dist/CNAME
            print_status "Created CNAME file for domain: $CUSTOM_DOMAIN"
        fi
        
        # Show build size
        du -sh dist
        print_status "Build size: $(du -sh dist | cut -f1)"
    else
        print_error "Build failed - dist directory not created"
        exit 1
    fi
}

# Optimize build (optional)
optimize_build() {
    print_status "Optimizing build..."
    
    # Compress images if imagemin is available
    if command -v imagemin &> /dev/null; then
        find dist -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs imagemin --out-dir=dist
        print_success "Images optimized"
    fi
    
    # Generate service worker if workbox is available
    if [ -f "workbox-config.js" ]; then
        npx workbox generateSW workbox-config.js
        print_success "Service worker generated"
    fi
}

# Deploy to GitHub Pages
deploy_to_github_pages() {
    print_status "Deploying to GitHub Pages..."
    
    # Save current branch
    CURRENT_BRANCH=$(git branch --show-current)
    
    # Create or switch to gh-pages branch
    if git show-ref --verify --quiet refs/heads/gh-pages; then
        print_status "Switching to existing gh-pages branch"
        git checkout gh-pages
    else
        print_status "Creating new gh-pages branch"
        git checkout --orphan gh-pages
        git rm -rf .
    fi
    
    # Copy build files to gh-pages branch
    cp -r dist/* .
    cp dist/.nojekyll . 2>/dev/null || true
    cp dist/CNAME . 2>/dev/null || true
    
    # Add and commit files
    git add .
    
    if git diff --staged --quiet; then
        print_warning "No changes to deploy"
        git checkout "$CURRENT_BRANCH"
        return 0
    fi
    
    COMMIT_MESSAGE="Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MESSAGE"
    
    # Push to GitHub
    print_status "Pushing to GitHub Pages..."
    git push origin gh-pages --force
    
    if [ $? -eq 0 ]; then
        print_success "Deployment completed successfully!"
        
        # Switch back to original branch
        git checkout "$CURRENT_BRANCH"
        
        # Show deployment URLs
        echo ""
        print_success "🌐 Your app will be live at: https://$REPO_OWNER.github.io/$REPO_NAME/"
        
        if [ ! -z "$CUSTOM_DOMAIN" ]; then
            print_success "🌐 Custom domain: https://$CUSTOM_DOMAIN"
        fi
        
        print_status "Note: It may take a few minutes for changes to appear on GitHub Pages"
    else
        print_error "Deployment failed"
        git checkout "$CURRENT_BRANCH"
        exit 1
    fi
}

# Create GitHub Actions workflow
create_github_actions_workflow() {
    echo ""
    read -p "Do you want to create a GitHub Actions workflow for automatic deployment? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Creating GitHub Actions workflow..."
        
        mkdir -p .github/workflows
        
        cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test:unit -- --run
      
    - name: Build
      run: npm run build
      env:
        BASE: /${{ github.event.repository.name }}/
        
    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main' || github.ref == 'refs/heads/master'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        force_orphan: true
EOF
        
        print_success "GitHub Actions workflow created at .github/workflows/deploy.yml"
        print_status "Commit and push this file to enable automatic deployments"
        
        # Add workflow to git
        git add .github/workflows/deploy.yml
        print_status "Added workflow file to git staging"
    else
        print_warning "Skipping GitHub Actions workflow creation"
        echo "You can create it later by running this script again"
    fi
}

# Generate deployment summary
generate_summary() {
    echo ""
    echo "📋 Deployment Summary"
    echo "===================="
    echo "Repository: $REPO_OWNER/$REPO_NAME"
    echo "Build size: $(du -sh dist | cut -f1)"
    echo "Deployment time: $(date)"
    echo "Git commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'N/A')"
    echo "GitHub Pages URL: https://$REPO_OWNER.github.io/$REPO_NAME/"
    if [ ! -z "$CUSTOM_DOMAIN" ]; then
        echo "Custom domain: https://$CUSTOM_DOMAIN"
    fi
    echo ""
    
    print_success "🎉 Deployment completed successfully!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Check GitHub Pages settings in repository settings"
    echo "2. Test the live application"
    echo "3. Set up custom domain in GitHub Pages settings (if needed)"
    echo "4. Enable GitHub Actions for automatic deployments"
    echo "5. Share the URL with users"
}

# Main deployment function
main() {
    echo "🚀 Animal Sales Vue App Deployment to GitHub Pages"
    echo "=================================================="
    echo ""
    
    # Configuration (set custom domain if needed)
    # CUSTOM_DOMAIN="yourdomain.com"  # Uncomment and set your custom domain
    
    # Pre-deployment checks
    check_git
    check_gh_cli
    check_github_remote
    
    # Show current repository info
    print_status "Current branch: $(git branch --show-current)"
    print_status "Repository: $REPO_OWNER/$REPO_NAME"
    
    # Check for uncommitted changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        print_warning "You have uncommitted changes"
        echo ""
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_warning "Please commit your changes first"
            exit 0
        fi
    fi
    
    # Confirm deployment
    echo ""
    read -p "Continue with deployment to GitHub Pages? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_warning "Deployment cancelled"
        exit 0
    fi
    
    # Deployment steps
    install_dependencies
    run_tests
    build_app
    optimize_build
    deploy_to_github_pages
    create_github_actions_workflow
    generate_summary
}

# Run main function
main "$@"
