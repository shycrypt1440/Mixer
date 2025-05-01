import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const isProd = process.env.BUILD === 'production';
const tsconfig = isProd ? './tsconfig.prod.json' : './tsconfig.json'

export default {
  input: 'src/main.ts',
  treeshake: false,
  output: {
    dir: 'dist/Mixer',
    sourcemap: isProd ? false : 'inline',
    sourcemapExcludeSources: isProd,
    format: 'cjs',
    exports: 'default',
  },
  external: ['obsidian'],
  plugins: [
    typescript({ tsconfig }),
    nodeResolve(),
    commonjs(),
    isProd && terser({
          format: {
            comments: false
          },
          sourceMap: false,
          compress: true
        })
  ],
};
