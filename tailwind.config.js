/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00acff",
        
"secondary": "#00a2ff",
        
"accent": "#001dff",
        
"neutral": "#071123",
        
"base-100": "#fffdff",
        
"info": "#00b5d3",
        
"success": "#52bd41",
        
"warning": "#ff9f00",
        
"error": "#ff436c",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 

