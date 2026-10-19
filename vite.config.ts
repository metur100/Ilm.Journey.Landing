import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Served from https://metur100.github.io/Ilm.Journey.Landing/
export default defineConfig({
  base: '/Ilm.Journey.Landing/',
  plugins: [react()],
});
