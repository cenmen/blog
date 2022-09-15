module.exports = {
  port: 5000,
  title: 'Developer',
  description: '前端技术学习笔记',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Extra', // 必要的
        path: '/Extra/TypeScript/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          {
            title: 'TypeScript', // 必要的
            path: '/Extra/TypeScript/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
           },
        ],
      },
    ],
    lastUpdated: 'Last Updated',
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'assets',
      },
    },
  },
};
