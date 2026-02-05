#!/bin/bash

# JEVANN AI FIX & DEPLOY SCRIPT
echo "🚀 Deploying JEVANN AI Fix..."

# Update files
node fix-jevann-ai.js

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    npm install
fi

# Build project
npm run build

# Deploy to Vercel
echo "📤 Deploying to Vercel..."
vercel --prod --yes

# Set environment variables
echo "🔧 Setting up environment..."
vercel env add OPENAI_API_KEY <<< "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"

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo "🌐 Live URL: https://jevann-ai.vercel.app"
echo "📊 Status: Protocol X ACTIVE"
echo "🔥 Mode: UNRESTRICTED"
