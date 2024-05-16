import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://sugor.dev",
  server: {
    host: "162.251.120.210",
    port: 80,
  }
})
