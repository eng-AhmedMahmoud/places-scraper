// ESLint 9 flat config.
// Next 15's `eslint-config-next` ships legacy (eslintrc) configs, so we bridge
// them into flat config via FlatCompat.
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'out/**',
      'public/**',
      'next-env.d.ts',
      'tsconfig.tsbuildinfo',
    ],
  },
];

export default config;
