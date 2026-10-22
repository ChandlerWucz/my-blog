import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-blog/', // ✅ 新增这一行！
  title: "ChandlerWu.",
  description: "This is my programming park",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: '编程笔记',
          items: [
            { text: 'VitePress 搭建博客', link: '/notes/vitepress' },
            { text: '单片机学习记录', link: '/notes/mcu' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChandlerWucz/my-blog' }
    ],
    search: {
      provider: 'local'
    }
  }
})
