import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // jsconfig
  resolve:{
    alias:{
      // eslint -> env --> node: true 
        '~': path.resolve(__dirname, 'src'),
    }
  }
})
