/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'dental-clinic': "url('./assets/dentail-clinic.jpg)",
    },
    extend: {
      fontFamily : {
        lora: ['lora', 'serif'],
      },
    },
  },
  plugins: [],
}

