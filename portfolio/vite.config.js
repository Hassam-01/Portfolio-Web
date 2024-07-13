import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [react()],
    server: {
      host : true
    },
    build: {
      outDir: 'dist', // Ensure the output directory is set
      rollupOptions: {
        input: '/index.html' // Ensure Vite knows where the entry file is
      }
    }
  }
})