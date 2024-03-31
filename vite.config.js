import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import react from '@vitejs/plugin-react';

const filename = new URL(import.meta.url).pathname;
const root = resolve(dirname(filename), 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(root, 'index.js'),
      name: 'TailBlocks',
      fileName: (format) => `tailblocks.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies to avoid bundling them
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      helper: resolve(root, 'helper'),
      components: resolve(root, 'components'),
    },
  },
});
