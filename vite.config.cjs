// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  build: {
    template: 'index.html',
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
