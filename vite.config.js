import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',      // Main entry
        service: './service.html'  // Add your service.html here
      }
    }
  }
})