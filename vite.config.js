// vite.config.js

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        injectData: {
          // Inject data if necessary
        },
      },
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
      },
    },
    outDir: 'dist',
  },
});
