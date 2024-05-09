import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Austin Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'notes', link: '/' },
      { text: 'Guide', link: '/guide' },
      {
        text: '分类',
        items: [
          { text: 'redis', link: '/notes/redis' },
          { text: 'docker', link: '/notes/docker' },
          { text: 'springboot', link: '/notes/springboot' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'docker',
        items: [
          { text: 'Docker', link: '/notes/docker/' },
          { text: '部署中间件', link: '/notes/docker/部署中间件' },
          { text: '自动化部署持续集成CI/CD', link: '/notes/docker/自动化部署持续集成CI/CD' },
        ]
      },
      {
        text: 'springboot',
        items: [
          { text: 'Introduction', link: '/notes/springboot/' },
          { text: '多环境开发', link: '/notes/springboot/多环境开发' },
          { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
          { items: [
              { text: 'Introduction', link: '/notes/springboot/' },
              { text: '多环境开发', link: '/notes/springboot/多环境开发' },
              { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
            ] }
        ]
      },
      {
        text: 'redis',
        items: [
          { text: 'Introduction', link: '/notes/redis/' },
          { text: 'redis', link: '/notes/redis/index.md' },
          { text: '整合三方框架', link: '/notes/redis/index.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColaWsl' },
      { icon: 'instagram', link: 'https://github.com/ColaWsl' },
      { icon: 'x', link: 'https://github.com/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Austin Slwang'
    },

    editLink: {
      pattern: 'https://github.com/ColaWsl/ColaWsl.github.io/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
