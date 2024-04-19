export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include components directory
  ],
  
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        slideUp: 'slideUp 4s linear infinite',
        typewriter: "typewriter 2s steps(11) forwards",
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      fontFamily: {
        'abc': ['Teko', 'sans-serif'],
        'titleFont': ['Fjalla One', 'sans-serif'],
        'primaryFont': ['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        selectColor: '#FDA228',
        bgPrimary: '#666BED',
        fgPrimary: '#080808',
        bgPrimaryBg: '#8588F1'
      },
    },
  },
  plugins: [],
}
