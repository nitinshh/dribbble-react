import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   allowedHosts: ['da82-2401-4900-8137-eed9-a167-3169-1104-4727.ngrok-free.app'],
  // },
})
