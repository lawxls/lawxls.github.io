module.exports = {
  purge: {
    enabled: true,
    content: ['../../*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Noto Sans', 'ui-monospace']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
