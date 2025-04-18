/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E9CD7',        // Bright Blue
        'primary-light': '#5EC3F0', // Lightened version for hovers
        'primary-dark': '#177EAE',  // Slightly deeper tone for buttons
  
        secondary: '#FE861B',       // Vibrant Orange
        'secondary-light': '#FFAC5A', // Lighter for hover effects
        'secondary-dark': '#D76A10',  // Stronger for button or text
  
        'bg-light': '#F5FBFF',      // Very light blue for section backgrounds
        'bg-dark': '#E1F3FA',       // Slightly deeper bg for contrast
  
        'text-dark': '#1F2937',     // Rich dark gray (e.g., for body text)
        'text-light': '#ffffff',    // White text for dark buttons
      },
    },
  },
  plugins: [],
}