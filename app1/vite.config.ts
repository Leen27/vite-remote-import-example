import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {
          'remote-app': {
            external: `Promise.resolve("http://localhost:5001/assets/remoteEntry.js")`,
            externalType: "promise"
          },
          'flineV-main-vue': {
            external: `Promise.resolve("http://localhost:5055/flineV-main-vue/assets/remoteEntry.js")`,
            externalType: "promise"
          },
          // "remote-store": "http://localhost:5001/assets/remoteEntry.js"
      },
      shared: {
        vue: {},
        pinia: {}
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
        output: {
            minifyInternalExports: false
        }
    }
  }
})
