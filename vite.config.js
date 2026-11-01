import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Caminhos relativos: funciona em /ornah-home/ e na raiz de um domínio próprio.
  base: './',
  plugins: [react(), tailwindcss()],
})
