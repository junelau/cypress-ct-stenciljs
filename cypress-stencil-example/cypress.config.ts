import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'cypress-ct-stencil',
      bundler: 'vite',
    },
  },
});
