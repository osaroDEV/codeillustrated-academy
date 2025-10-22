# Code Illustrated Monorepo

This is a monorepo containing multiple Next.js applications for the Code Illustrated platform.

## Structure

```
/
├── apps/
│   ├── root/        # Main landing page (www.codeillustrated.com)
│   ├── academy/     # Academy app (www.codeillustrated.com/academy)
│   └── labs/        # Labs app (www.codeillustrated.com/labs)
└── package.json     # Root workspace configuration
```

## Development

### Run individual apps:

```bash
npm run dev              # Run root landing page on port 3000
npm run dev:academy      # Run academy on port 3001
npm run dev:labs         # Run labs on port 3002
npm run dev:all          # Run all apps simultaneously
```

### Build:

```bash
npm run build            # Build all apps
npm run build:root       # Build root only
npm run build:academy    # Build academy only
npm run build:labs       # Build labs only
```

### Start production:

```bash
npm run start            # Start root
npm run start:academy    # Start academy
npm run start:labs       # Start labs
```

## Deployment Notes

The apps are configured with the following base paths:
- **Root**: `/` (no base path)
- **Academy**: `/academy`
- **Labs**: `/labs`

For deployment on a single domain (www.codeillustrated.com), you'll need to configure your hosting platform to:
1. Serve the root app at `/`
2. Serve the academy app at `/academy`
3. Serve the labs app at `/labs`

This can be achieved through:
- Vercel multi-app configuration
- Reverse proxy (Nginx, Caddy, etc.)
- Custom deployment scripts
