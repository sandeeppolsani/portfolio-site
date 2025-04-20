import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
        },
      },
    },
  },
  server: {
    host: true,
    port: 3000,
    cors: {
      origin: ['https://sandeeppolsani.online'],
      credentials: true,
    },
    allowedHosts: ['sandeeppolsani.online'],
  },
});