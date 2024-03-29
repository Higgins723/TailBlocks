import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import react from '@vitejs/plugin-react'

const filename = new URL(import.meta.url).pathname;
const root = resolve(dirname(filename), 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(root, 'components/index.js'),
      name: 'TailBlocks',
      fileName: (format) => `tail-blocks.${format}.js`
    },
    rollupOptions: {
      // Externalize peer dependencies to avoid bundling them
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
  },
  resolve: {
    alias: {
      'helper': resolve(root, 'helper'),
      'components': resolve(root, 'components'),
    },
  }
})
