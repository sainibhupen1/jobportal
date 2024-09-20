import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});



// import { defineConfig } from 'vite';

// export default defineConfig({

//   build: {
//     chunkSizeWarningLimit: 5000,

//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return 'vendor';
//           }
//         },
//       },
//     },
//   },
// });














