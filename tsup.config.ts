import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outExtension({ format }) {
    return { js: format === 'esm' ? '.js' : '.cjs' };
  },
  external: ['react', 'react/jsx-runtime', 'react-dom', '@tabler/icons-react', 'antd', '@ant-design/icons', 'rc-util', 'rc-field-form', 'rc-picker'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  injectStyle: false,
});
