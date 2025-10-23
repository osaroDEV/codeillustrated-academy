# Deployment Guide

## Monorepo Structure

Your project is now structured as a monorepo with three separate Next.js applications:

1. **Root** (`/apps/root`) - Landing page for www.codeillustrated.com
2. **Academy** (`/apps/academy`) - Course platform at www.codeillustrated.com/academy
3. **Labs** (`/apps/labs`) - Interactive labs at www.codeillustrated.com/labs

## URL Routing

Each app is configured with appropriate base paths:
- Root: No base path (serves at `/`)
- Academy: Base path `/academy`
- Labs: Base path `/labs`

## Important: Deploy Each App Separately

**You must deploy each app as a separate project.** Deployment platforms expect a single app per deployment, not a monorepo.

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Step 1: Deploy Each App Separately**

For each app (root, academy, labs):

1. Create a new project on Vercel
2. Import your repository
3. **CRITICAL:** In project settings, set the **Root Directory** to:
   - For Root app: `apps/root`
   - For Academy app: `apps/academy`
   - For Labs app: `apps/labs`

   **This is mandatory!** Without setting the Root Directory, Vercel will look at the monorepo root and fail to find Next.js.

4. Vercel will auto-detect Next.js and configure build settings automatically
5. Deploy

**Troubleshooting:**
- If you get "No Next.js version detected" error, verify the Root Directory is set correctly
- The Root Directory should point to the specific app folder, not the monorepo root
- After changing Root Directory, you may need to redeploy

**Step 2: Configure Custom Domain Routing**

On your main domain (www.codeillustrated.com):

1. Point the root domain to the **Root** Vercel project
2. Add a `vercel.json` file to your Root project:

```json
{
  "rewrites": [
    {
      "source": "/academy/:path*",
      "destination": "https://your-academy-project.vercel.app/academy/:path*"
    },
    {
      "source": "/labs/:path*",
      "destination": "https://your-labs-project.vercel.app/labs/:path*"
    }
  ]
}
```

Replace the destination URLs with your actual Vercel project URLs.

**Alternative: Use Vercel's Monorepo Support**

Vercel has built-in monorepo support. For each deployment:
- Set Root Directory to the app folder
- Build Command: `cd ../.. && npm run build:[app-name]`
- Output Directory: `.next` or `out`

### Option 2: Nginx Reverse Proxy

Run all three apps on different ports and use Nginx to route:

```nginx
server {
    listen 80;
    server_name www.codeillustrated.com;

    location /academy {
        proxy_pass http://localhost:3001;
    }

    location /labs {
        proxy_pass http://localhost:3002;
    }

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

### Option 3: Single Build Output

Build all apps and merge their output directories, configuring your web server to serve static files from appropriate paths.

## Environment Variables

Each app maintains its own `.env` file in its directory. Make sure to configure environment variables for each app separately in your deployment platform.

## Building for Production

```bash
npm run build        # Builds all apps
```

Each app will have its own `/out` directory (since using `output: 'export'`):
- `/apps/root/out`
- `/apps/academy/out`
- `/apps/labs/out`
