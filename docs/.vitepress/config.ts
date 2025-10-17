import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-cn',
  title: 'Phi Recorder',
  description: '你的下一个渲染器',
  lastUpdated: true,

  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],

  markdown: {
    lineNumbers: true,
    theme: 'one-dark-pro'
  },

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',

    footer: {
      message: [
        'Documentation released under the MIT License, all rights reserved.',
        `<br>`,
        `<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">赣ICP备2025074193号</a>`,
        `<span style="margin: 0 8px; color: #999">|</span>`,
        `<a href="https://beian.mps.gov.cn/#/query/webSearch?code=36012202000590" target="_blank" rel="noopener noreferrer">`,
        `<img src="https://www.beian.gov.cn/img/ghs.png" alt="公安备案图标" style="width:16px;height:16px;margin-right:4px;vertical-align:-3px;">`,
        `赣公网安备36012202000590号</a>`
      ].join(''),
      copyright: 'Copyright © 2025 - Phi Recorder'
    },

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarGuide(),
      '/writing/': sidebarGuide(),
    },

    nav: [
      { text: '指南', link: '/guide/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2278535805/Phi-Recorder' }
    ],

    editLink: {
      pattern: 'https://github.com/SeRazon/pr-docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    outline: [2, 3],

    algolia: {
      appId: '6OC1XCG4R5',
      apiKey: '7779946cc768ec3699123e60a91d0ddc',
      indexName: 'stack-jimmycai',
    }
  },
});

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '关于 Phi Recorder', link: '/guide/' },
        { text: '快速开始', link: '/guide/getting-started' },
      ]
    },
    {
      text: '基础',
      collapsible: true,
      items: [
        { text: '谱面信息', link: '/guide/base/chart-info' },
        { text: '渲染设置', link: '/guide/base/render-config' },
        { text: 'RPE 绑定', link: '/guide/base/rpe-bind' },
      ]
    },
    {
      text: '接口',
      collapsible: true,
      items: [
        { text: '参数', link: '/guide/connect/args' },
        { text: '资源包', link: '/guide/connect/res-pack' },
      ]
    },
  ]
}
