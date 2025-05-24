// tailwind.config.js
export default {
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
    ],
    theme: {
      extend: {
        colors:{
            primary: {
                light: '#3B82F6',   // lighter shade, e.g. blue-500
                dark: '#1E3A8A',    // darker shade, e.g. blue-900
            },
      },
    },
    plugins: [],
  }
}
  