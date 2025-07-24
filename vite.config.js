import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/career-compass/', // 👈 this must match your deployment subpath
  plugins: [react()],
})
