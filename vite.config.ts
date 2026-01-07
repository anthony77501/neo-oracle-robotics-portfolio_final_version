
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'Home-page' with your repository name if it changes
  base: '/Home-page/',
});
