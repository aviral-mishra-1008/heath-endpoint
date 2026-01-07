import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/health/', // This tells Vite to load assets from the /health/ folder important for multiple deployments on same domain
})