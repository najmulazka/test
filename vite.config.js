import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // agar bisa diakses dari luar
    port: 5173,
    allowedHosts: ['whatsapp-private.online'],
  },
});
