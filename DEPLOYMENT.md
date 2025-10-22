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

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Deploy each app as a separate Vercel project and use Vercel's rewrites:

1. Create three separate projects on Vercel
2. Link each to the respective app directory
3. Use Vercel's `vercel.json` rewrite rules to route paths appropriately

Example `vercel.json` in root:
```json
{
  "rewrites": [
    {
      "source": "/academy/:path*",
      "destination": "https://academy.vercel.app/academy/:path*"
    },
    {
      "source": "/labs/:path*",
      "destination": "https://labs.vercel.app/labs/:path*"
    }
  ]
}
```

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
