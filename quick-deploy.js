// QUICK DEPLOY JEVANN AI
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 JEVANN AI Quick Deploy');
console.log('========================');

// Update package.json for better performance
const packageJson = {
  name: "jevann-ai",
  version: "3.0.0",
  private: true,
  scripts: {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "vercel --prod",
    "fix": "node fix-jevann-ai.js"
  },
  dependencies: {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "openai": "^4.20.0",
    "ai": "^2.2.0",
    "lucide-react": "^0.294.0"
  }
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// Create .env.local with your API key
const envContent = `# JEVANN AI CONFIGURATION
OPENAI_API_KEY=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

# SYSTEM SETTINGS
NEXT_PUBLIC_APP_NAME=JEVANN AI
NEXT_PUBLIC_PROTOCOL=X
NEXT_PUBLIC_RESTRICTIONS=NONE

# ALTERNATIVE ENDPOINTS
OPENAI_BASE_URL=https://api.openai-sb.com/v1
ALTERNATIVE_API=https://api.chatanywhere.cn/v1
`;

fs.writeFileSync('.env.local', envContent);

// Create vercel.json for deployment config
const vercelConfig = {
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "functions": {
    "app/api/chat/route.ts": {
      "maxDuration": 30
    }
  }
};

fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));

console.log('📁 Files updated!');

// Run deployment
try {
  console.log('🚀 Deploying to Vercel...');
  execSync('vercel --prod --yes', { stdio: 'inherit' });
  console.log('✅ DEPLOYED!');
  console.log('🌐 URL: https://jevann-ai.vercel.app');
} catch (error) {
  console.log('⚠️  Vercel CLI not found or error');
  console.log('📦 Building for manual deploy...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build complete!');
  console.log('📤 Upload to Vercel manually or run: vercel --prod');
}
