import { copyFileSync } from 'node:fs';

// GitHub Pages serves 404.html for unknown paths.
// Copying the built index.html lets the React SPA handle client-side routes
// (e.g. /services, /booking) on direct visits and refreshes.
copyFileSync('dist/index.html', 'dist/404.html');
