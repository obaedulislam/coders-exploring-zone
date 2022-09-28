/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#88e54e",
                  
          "secondary": "#a867e5",
                  
          "accent": "#83dd4f",
                  
          "neutral": "#27303A",
                  
          "base-100": "#FAF9FB",
                  
          "info": "#4CA2DC",
                  
          "success": "#58DA92",
                  
          "warning": "#FAB36B",
                  
          "error": "#E64C4C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
