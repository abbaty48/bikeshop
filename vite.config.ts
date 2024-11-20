import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@root": '/',
        "@src": '/src',
        "@libs": "/src/libs",
        "@styles": "/src/styles",
        "@states": "/src/states",
        "@hooks": "/src/hooks",
        "@assets": "/src/assets",
        "@layouts": "/src/layouts",
        "@backend": "/src/_backend",
        "@contexts": "/src/states/contexts",
        "@sections": "/src/layouts/sections",
        "@providers": "/src/states/providers",
        "@components": "/src/layouts/components",
    }
  }
})
