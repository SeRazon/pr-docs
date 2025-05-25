import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-cn',
    title: 'Phi Recorder',
    description: '你的下一个渲染器，何必是渲染器。',
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
            message: "Documentation released under the MIT License, all rights reserved.",
            copyright: "Copyright © 2025 - Present Phi Recorder Team",
        },

        sidebar: {
            '/guide/': sidebarGuide(),
            '/config/': sidebarGuide(),
            '/writing/': sidebarGuide(),
        },

        nav: [
            { text: '指南', link: '/guide/' },
            //{ text: 'Config', link: '/config/' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/2278535805/Phi-Recorder' }
        ],

        editLink: {
            pattern: 'https://github.com/SeRazon/pr-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
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
               // { text: 'Modify Theme', link: '/guide/modify-theme' }
            ]
        },
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: '谱面信息', link: '/guide/chart-info' },
                { text: '渲染设置', link: '/guide/render-config' },
                { text: 'RPE 绑定', link: '/guide/rpe-bind' },
            ]
        },
        /*{
            text: 'Config',
            collapsible: true,
            items: [
                {
                    text: 'Introduction',
                    link: '/config/'
                },
                {
                    text: 'Site Configs',
                    link: '/config/site'
                },
                {
                    text: 'i18n Configs',
                    link: '/config/i18n'
                },
                {
                    text: 'Custom Menu',
                    link: '/config/menu'
                },
                {
                    text: 'Custom Header / Footer',
                    link: '/config/header-footer'
                },
                {
                    text: 'Date Format',
                    link: '/config/date-format'
                },
                {
                    text: 'Sidebar',
                    link: '/config/sidebar'
                },
                {
                    text: 'Footer',
                    link: '/config/footer'
                },
                {
                    text: 'Article',
                    link: '/config/article'
                },
                {
                    text: 'Comments',
                    link: '/config/comments'
                },
                {
                    text: 'Widgets',
                    link: '/config/widgets'
                },
                {
                    text: 'Open Graph',
                    link: '/config/open-graph'
                },
                {
                    text: 'Default Image',
                    link: '/config/default-image'
                },
                {
                    text: 'Color Scheme',
                    link: '/config/color-scheme'
                },
                {
                    text: 'Image Processing',
                    link: '/config/image-processing'
                }
            ]
        },*/
    ]
}
