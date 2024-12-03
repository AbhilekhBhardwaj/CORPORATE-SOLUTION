import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path to relative for proper resolution of assets and imports
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      // Optional: Use '@' as a shorthand for the 'src' directory
   
    },
  },
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'],
      input: 'index.html',
    },
  },
});
