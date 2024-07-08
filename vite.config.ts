import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Deific Arts LLC',
      short_name: 'deific-arts-contact',
      description: 'Deific Arts, LLC is Detroit’s go to web development shop for small businesses.',
      theme_color: '#05161f',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})