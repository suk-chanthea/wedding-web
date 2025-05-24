import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  css: [
    '~/assets/css/tailwind.css'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})