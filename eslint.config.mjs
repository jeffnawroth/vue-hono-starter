import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  ignores: ['packages/frontend/src/vite-env.d.ts'],
})
