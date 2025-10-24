# Code Illustrated

A comprehensive platform for learning programming through visual illustrations and hands-on practice.

## Project Structure

This is a single Next.js application with multiple route groups:

- **/** - Landing page (root)
- **/academy** - Course platform with educational content
- **/labs** - Interactive coding labs and exercises

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.
- Academy: [http://localhost:3000/academy](http://localhost:3000/academy)
- Labs: [http://localhost:3000/labs](http://localhost:3000/labs)

### Building for Production

```bash
# Build the application
npm run build
# or
pnpm build
```

### Running Production Build

```bash
# Start production server
npm start
# or
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy

**Important:** Do NOT set a Root Directory in Vercel. This is now a single Next.js app at the root level.

### Other Platforms

This is a standard Next.js application. You can deploy it to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- etc.

## Routes

- `/` - Landing page
- `/academy` - Course catalog and learning platform
- `/academy/courses` - Browse all courses
- `/academy/courses/[id]` - Individual course details
- `/academy/about-us` - About the academy
- `/academy/contact-us` - Contact form
- `/labs` - Interactive coding labs

## Tech Stack

- **Framework:** Next.js 15.3
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form + Zod
- **State Management:** Zustand
- **Animations:** Framer Motion

## Development Notes

- All academy components are in `/components`
- Academy pages are in `/app/academy`
- Labs pages are in `/app/labs`
- Shared utilities in `/lib`
- Type definitions in TypeScript files
