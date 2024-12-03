import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Relative path for assets
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Optional shorthand for 'src' directory
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Specify the entry point
    },
  },
});
