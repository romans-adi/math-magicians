// eslint-disable-next-line import/no-extraneous-dependencies, no-global-assign
require = require('esm')(module);
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('vite');
// eslint-disable-next-line import/no-extraneous-dependencies
const react = require('@vitejs/plugin-react-swc');
const sass = require('sass');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './main.jsx',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
