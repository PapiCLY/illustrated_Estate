import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  define: {
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  },

  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    rollupOptions: {
      input: './pages/_app.jsx',
    },
  },
})