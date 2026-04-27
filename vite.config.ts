import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@lovchikovmark/pretty-voting']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
});