// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/career-compass/', // this matches your repo/folder name
  plugins: [react()]
})
