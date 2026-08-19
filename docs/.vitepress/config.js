import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基础信息
  lang: 'zh-CN',
  title: "Banana博客",
  description: "banana.zqxcc.dpdns.org 个人博客",

  // 你的自定义域名，Cloudflare Pages不需要改base！
  base: '/',

  // head头部，可以放图标等
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // 主题配置
  themeConfig: {
    siteTitle: 'Banana Blog',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章列表', link: '/posts/' },
      // 后台入口，跳转到可视化编辑器
      { text: '写文章', link: '/admin/' }
    ],

    // 侧边栏（博客文章）
    sidebar: {
      '/posts/': [
        { text: '博客文章', link: '/posts/' }
      ]
    },

    // 页脚
    footer: {
      message: 'Powered by VitePress + Decap‑CMS',
      copyright: '© 2026 Banana'
    }
  }
})
