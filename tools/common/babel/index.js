'use strict';

const isProduction = process.env.NODE_ENV === 'production';

const isTest = process.env.NODE_ENV === 'test';
console.log('Babel Config NODE_ENV:', process.env.NODE_ENV);

module.exports = (api) => {
  // Cache the configuration for better performance
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    [
      '@babel/preset-env',
      {
        // Target current LTS Node.js version
        targets: {
          node: '18',
        },
        // Enable polyfill transformation
        useBuiltIns: 'usage',
        // Use core-js@3
        corejs: { version: '3.36', proposals: true },
        // Enable bug fixes for better compatibility
        bugfixes: true,
        // Don't transform modules for better tree-shaking
        modules: isTest ? 'commonjs' : false,
        // Exclude transforms that are now natively supported in Node.js 18+
        exclude: [
          'transform-async-to-generator',
          'transform-template-literals',
          'transform-literals',
          'transform-function-name',
        ],
      },
    ],
  ];

  /** @type {Array<string | [string, Record<string, any>]>} */
  const plugins = [
    // Reuse Babel's helper functions to reduce code duplication
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false, // We're using @babel/preset-env for core-js polyfills
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ];

  // Production-only plugins
  if (isProduction) {
    plugins.push(
      // Remove console.* in production
      ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }],
      // Remove debugger statements
      'babel-plugin-transform-remove-debugger'
    );
  }

  return {
    presets,
    plugins,
    // Better source maps in development
    sourceMaps: !isProduction,
    // Retain line numbers for better error messages
    retainLines: !isProduction,
  };
};

