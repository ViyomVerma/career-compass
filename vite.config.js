import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'career-compass' with your actual GitHub repo name
export default defineConfig({
  base: '/career-compass/',
  plugins: [react()],
})
