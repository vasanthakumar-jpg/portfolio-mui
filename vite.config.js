import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-mui/',
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false, // Set to true if you want it to auto-open after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 700, // default is 500 kB, raise only if needed
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate large libraries into separate chunks
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          framer: ['framer-motion'],
        },
      },
    },
  },
});