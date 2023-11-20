import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    {
  "scripts": {
    "build": "[my-framework] build --output public"
  }
}
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      port:200,
      host:true
    }
  };
});
