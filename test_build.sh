#!/bin/bash

echo "Testing local build process..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run build
echo "Running build..."
npm run build

# Check if dist directory was created
if [ -d "dist" ]; then
    echo "✓ Build successful - dist directory created"
    echo "Contents of dist directory:"
    ls -la dist/
else
    echo "✗ Build failed - dist directory not found"
    exit 1
fi

echo "Local build test completed successfully!"