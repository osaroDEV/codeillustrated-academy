# Vercel Deployment Setup for Monorepo

## Fix: "No Next.js version detected" Error

This error occurs when Vercel tries to build from the monorepo root instead of the individual app directory.

### Solution: Set Root Directory

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Find the **Root Directory** setting
4. Click **Edit** and set it to:
   - For Academy: `apps/academy`
   - For Labs: `apps/labs`
   - For Root: `apps/root`

5. Click **Save**
6. Redeploy your project

### Screenshot Guide

```
Project Settings → General → Build & Development Settings
┌─────────────────────────────────────────┐
│ Root Directory                          │
│ ┌─────────────────────────────────────┐ │
│ │ apps/academy                        │ │ ← Enter this
│ └─────────────────────────────────────┘ │
│ The directory within your project in   │
│ which your code is located.            │
└─────────────────────────────────────────┘
```

### What This Does

Setting the Root Directory tells Vercel to:
- Look for `package.json` in `apps/academy/` instead of the root
- Run build commands from within that directory
- Properly detect Next.js and its dependencies

## Complete Deployment Steps

### For Academy App

1. **Create New Project** on Vercel
2. **Import Repository**: `github.com/osaroDEV/codeillustrated-academy`
3. **Configure Project**:
   - Root Directory: `apps/academy`
   - Build Command: (leave default - Vercel auto-detects)
   - Output Directory: (leave default - Vercel auto-detects)
4. **Deploy**

### For Labs App

1. **Create New Project** on Vercel
2. **Import Repository**: Same repository
3. **Configure Project**:
   - Root Directory: `apps/labs`
   - Build Command: (leave default)
   - Output Directory: (leave default)
4. **Deploy**

### For Root Landing Page

1. **Create New Project** on Vercel
2. **Import Repository**: Same repository
3. **Configure Project**:
   - Root Directory: `apps/root`
   - Build Command: (leave default)
   - Output Directory: (leave default)
4. **Deploy**

## Environment Variables

If your apps need environment variables:
1. Go to **Settings** → **Environment Variables**
2. Add variables specific to that app
3. Remember: Each Vercel project has its own environment variables

## Custom Domain Setup

Once all apps are deployed:

1. Assign your main domain to the **Root** app
2. Use Vercel's rewrite rules or path-based routing to handle `/academy` and `/labs` paths
3. See `DEPLOYMENT.md` for detailed rewrite configuration

## Notes

- Each app is deployed as a separate Vercel project
- They all use the same GitHub repository
- The Root Directory setting makes them build independently
- In production, the basePath will be applied (`/academy`, `/labs`)
- In development, basePath is empty for easier local development
