import { ThemeConfig } from 'vuepress-theme-vt';
import { defineConfig4CustomTheme } from 'vuepress/config';

export default defineConfig4CustomTheme<ThemeConfig>(ctx => ({
  theme: 'vt',
  title: 'Record',
  themeConfig: {
    status: '<GlobalStatus />',
    statusVersion: 'v5',
    // sidebarDepth: 1,
    enableDarkMode: true,
    repo: 'https://github.com/ulivz/vuepress-theme-vt',
    logo: '/logo.svg',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'More',
        items: [{ text: 'Theme Doc', link: 'https://vt.insx.dev/' }],
      },
      { text: 'Theme Doc', link: 'https://vt.insx.dev/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          initialOpenGroupIndex: -1,
          children: [
            {
              title: 'HTML',
              children: [],
            },
            {
              title: 'CSS',
              children: [],
            },
            {
              title: 'JavaScript',
              children: ['/guide/JavaScript/Function'],
            },
            {
              title: 'TypeScript',
              children: [],
            },
            {
              title: 'Frame',
              children: [
                {
                  title: 'React',
                  children: [],
                },
                {
                  title: 'Vue2.x',
                  children: [],
                },
                {
                  title: 'Vue3.x',
                  children: [],
                },
                {
                  title: 'uni-app',
                  children: [],
                },
                {
                  title: 'taro',
                  children: [],
                },
                {
                  title: 'Next.js',
                  children: [],
                },
                {
                  title: 'Nuxt.js',
                  children: [],
                },
              ],
            },
            {
              title: 'Builder',
              children: [
                {
                  title: 'Vite',
                  children: ['/guide/Builder/Vite/原理'],
                },
              ],
            },

            {
              title: 'Browser',
              children: [],
            },
            {
              title: 'Internet',
              children: [],
            },
            {
              title: 'Node.js',
              children: [
                {
                  title: 'Nest.js',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: 'Pocket',
          collapsable: false,
          initialOpenGroupIndex: -1,
          children: [
            {
              title: 'CSS',
              children: ['/guide/Pocket/CSS/hover-underline'],
            },
            {
              title: 'Tailwind CSS',
              children: ['/guide/Pocket/Tailwind CSS/util'],
            },
            {
              title: 'React',
              children: ['/guide/Pocket/React/message'],
            },
          ],
        },
        {
          title: 'Question',
          collapsable: false,
          initialOpenGroupIndex: -1,
          children: [
            {
              title: 'Question',
              children: ['/guide/Question/list'],
            },
          ],
        },
      ],
    },
    codeSwitcher: {
      groups: {
        default: { ts: 'TypeScript', js: 'JavaScript' },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      },
    },
  },
}));
