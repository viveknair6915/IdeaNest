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
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        slideUp: 'slideUp 4s linear infinite',
        typewriter: "typewriter 2s steps(11) forwards",
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
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
        btnclr:'#0B93AE',
        bgPrimaryBg: '#8588F1',
        bgblue:'#020617'
      },
    },
  },
  plugins: [],
}
