// @ts-check
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  // Site settings
  lang: 'en-US',
  title: 'GitExec',
  description: 'GitHub dependency explorer',

  // Specify the bundler
  bundler: webpackBundler(),

  // Theme configuration
  theme: defaultTheme({
    // Theme options
    logo: '/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/neopilot/gitexec' },
    ],
    // Enable last updated
    lastUpdated: true,
    // Theme color for mobile
    themePlugins: {
      activeHeaderLinks: true,
    },
  }),

  // Markdown configuration
  markdown: {
    code: {
      lineNumbers: true,
    },
  },

  // Head tags
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#F06292' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#F06292' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#F06292' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
  ],

  // Build configuration
  shouldPrefetch: true,
  shouldPreload: true,

  // Development server options
  host: '0.0.0.0',
  port: 8080,
  open: false,

  // Plugins
  plugins: [],
})

