module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#10B981',
        accent: '#FACC15',
        background: '#F3F4F6',
        light: '#FFFFFF',
        dark: '#1E293B',
        danger: '#DC2626',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
