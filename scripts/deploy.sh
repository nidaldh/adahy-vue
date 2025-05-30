#!/bin/bash

# Deployment Script for Animal Sales Vue App
# This script builds and deploys the application to Firebase Hosting

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

# Check if Firebase CLI is installed
check_firebase_cli() {
    if ! command -v firebase &> /dev/null; then
        print_error "Firebase CLI is not installed"
        echo "Install it with: npm install -g firebase-tools"
        exit 1
    fi
    print_success "Firebase CLI is available"
}

# Check if user is logged in to Firebase
check_firebase_auth() {
    if ! firebase projects:list &> /dev/null; then
        print_error "Not logged in to Firebase"
        echo "Run: firebase login"
        exit 1
    fi
    print_success "Firebase authentication confirmed"
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

# Build the application
build_app() {
    print_status "Building application for production..."
    
    # Clean previous build
    rm -rf dist
    
    # Build with production environment
    npm run build
    
    if [ -d "dist" ]; then
        print_success "Application built successfully"
        
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

# Deploy to Firebase Hosting
deploy_to_firebase() {
    print_status "Deploying to Firebase Hosting..."
    
    # Deploy hosting only (not database rules for safety)
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        print_success "Deployment completed successfully!"
        
        # Get the hosting URL
        PROJECT_ID=$(firebase use | grep "active project" | cut -d' ' -f4 | tr -d '()')
        if [ ! -z "$PROJECT_ID" ]; then
            echo ""
            print_success "🌐 Your app is live at: https://$PROJECT_ID.web.app"
            print_success "🌐 Custom domain: https://$PROJECT_ID.firebaseapp.com"
        fi
    else
        print_error "Deployment failed"
        exit 1
    fi
}

# Deploy database rules separately (with confirmation)
deploy_database_rules() {
    echo ""
    read -p "Do you want to deploy database rules? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Deploying database rules..."
        firebase deploy --only database
        
        if [ $? -eq 0 ]; then
            print_success "Database rules deployed successfully"
        else
            print_error "Database rules deployment failed"
        fi
    else
        print_warning "Skipping database rules deployment"
        echo "To deploy rules later, run: firebase deploy --only database"
    fi
}

# Generate deployment summary
generate_summary() {
    echo ""
    echo "📋 Deployment Summary"
    echo "===================="
    echo "Project: $(firebase use | grep "active project" | cut -d' ' -f4 | tr -d '()')"
    echo "Build size: $(du -sh dist | cut -f1)"
    echo "Deployment time: $(date)"
    echo "Git commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'N/A')"
    echo ""
    
    print_success "🎉 Deployment completed successfully!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Test the live application"
    echo "2. Monitor for any errors in Firebase Console"
    echo "3. Update DNS records if using custom domain"
    echo "4. Share the URL with users"
}

# Main deployment function
main() {
    echo "🚀 Animal Sales Vue App Deployment"
    echo "=================================="
    echo ""
    
    # Pre-deployment checks
    check_firebase_cli
    check_firebase_auth
    
    # Show current project
    CURRENT_PROJECT=$(firebase use | grep "active project" | cut -d' ' -f4 | tr -d '()')
    print_status "Deploying to project: $CURRENT_PROJECT"
    
    # Confirm deployment
    echo ""
    read -p "Continue with deployment? (y/N): " -n 1 -r
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
    deploy_to_firebase
    deploy_database_rules
    generate_summary
}

# Run main function
main "$@"
