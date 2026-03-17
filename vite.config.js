import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vike from 'vike/plugin'

export default {
  plugins: [tailwindcss(), react(), vike()],
}