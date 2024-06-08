/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
          ulShadow:"2px 2px 20px 0 rgba(0, 0, 0, 0.278)"
      },
      height:{
        navheight:"5rem",
      },
      backgroundImage:{
        "desktopBg":"url('./src/assets/images/image-hero-desktop.png')",
        "mobilepBg":"url('./src/assets/images/image-hero-mobile.png')",
      },
      keyframes:{
        transRight: {
          '0%': { transform: 'width:0px' },
          '100%': { transform: 'width:250px' },
        },
        transUp: {
          '0%': { transform: 'max-height:0px' },
          '100%': { transform: 'max-height:500px' },
        },
      },
    },
    animation: {
      transRight: 'transRight 500ms ease-in',
      transUp: 'transUp 500ms ease-in',
    },
  },
  plugins: [],
}

