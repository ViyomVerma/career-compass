import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'career-compass' with your actual GitHub repo name
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: "/career-compass/", // <--- set to your repo name
});
