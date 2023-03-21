import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { join } from 'path'
import EnvironmentPlugin from 'vite-plugin-environment'
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [preact(), EnvironmentPlugin('all', { prefix: '' })],
    resolve: {
      alias: {
        '@': join(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
    },
    test: {
      environment: 'happy-dom',
      setupFiles: ['./__test__/test-setup.ts'],
      includeSource: ['src/**/*.{ts,tsx}'],
      reporters: ['default', 'junit'],
      outputFile: 'coverage/unit/xunit.xml',
      coverage: {
        provider: 'c8',
        reporter: ['html-spa']
      },
      mockReset: true,
      restoreMocks: true,
      globals: true,
      silent: true,
    },
  }
})
