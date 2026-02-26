import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-test-netlify",
  description: "A VitePress site deployed to Netlify",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengmk2/vitepress-test-netlify' }
    ]
  }
})
