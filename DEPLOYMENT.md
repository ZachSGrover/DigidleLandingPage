# Vercel Deployment Guide

This guide will help you deploy the Digidle landing page to Vercel.

## Prerequisites

- Node.js 18+ installed
- Vercel account (free tier available)
- Git repository connected to GitHub

## Deployment Methods

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project directory:**
   ```bash
   vercel
   ```
   Follow the prompts to configure your project.

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `sweep-ai/DigidleLandingPage`
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

## Configuration Details

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x (auto-detected)

### Environment Variables
No environment variables are required for this deployment.

### Custom Domain (Optional)
1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## File Structure

The project is configured with:
- `vercel.json` - Vercel configuration
- `vite.config.ts` - Vite build configuration
- `.gitignore` - Git ignore rules for Vercel

## Performance Optimizations

The build includes:
- Code splitting for vendor and UI libraries
- Asset optimization and compression
- Proper caching headers for static assets
- Security headers

## Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check that `npm run build` works locally
- Verify Node.js version compatibility

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

### Asset Loading Issues
- Check that all assets are in the `public/` directory
- Verify asset paths in components

## Monitoring

After deployment:
- Monitor performance in Vercel Analytics
- Check build logs for any issues
- Use Vercel's preview deployments for testing

## Support

For Vercel-specific issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite + Vercel Guide](https://vercel.com/guides/deploying-vitejs-to-vercel)
