// Allow importing CSS files in TypeScript
// Next.js already handles global CSS imports in `app/layout` or `pages/_app`.
// This declaration prevents `Cannot find module './globals.css'` errors.

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
