import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This tells Vite to proxy any request that starts with '/api'
      '/api': {
        // This is the target: your local Apache server
        target: 'http://localhost/~gcamposbriceno',
        changeOrigin: true, // This is recommended
      }
    }
  }
})