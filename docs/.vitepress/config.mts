import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

const editLinkPattern =
  'https://github.com/liriliri/echo-docs/edit/master/docs/:path'

export default defineConfig({
  lang: 'zh',
  title: 'ECHO',
  description: 'ECHO Documentation',
  lastUpdated: true,
  outDir: '../dist',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    logo: {
      src: '/logo.png',
      width: 48,
      height: 48,
    },
    outlineTitle: '在这一页上',
    socialLinks: [
      {
        icon: {
          svg: fs.readFileSync(
            path.resolve(__dirname, `wechatpay.svg`),
            'utf8'
          ),
        },
        link: 'https://surunzi.com/wechatpay.html',
      },
      {
        icon: 'github',
        link: 'https://github.com/liriliri/echo',
      },
    ],
    editLink: {
      pattern: editLinkPattern,
      text: '提出修改意见',
    },
    lastUpdatedText: '修改日期',
    footer: {
      message: '基于 AGPL-3.0 许可发布',
      copyright: '版权所有 © 2025 至今 liriliri',
    },
  },
  vite: {
    resolve: {
      alias: [
        { find: '@share', replacement: path.resolve(__dirname, './share') },
      ],
    },
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Z93HBDFESL',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z93HBDFESL');`,
    ],
  ],
})
