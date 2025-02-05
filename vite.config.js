import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'  // Importando o plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()]  // Adicionando o plugin svgr aqui
})
