const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "zhangjingjing前端之路", // 标题
  tagline: "Hellow!", // 标题下面的字
  url: 'https://hello-world-28256.github.io',
  baseUrl: '/docusaurus/',

  onBrokenLinks: "throw", // 只有部署的时候生效
  onBrokenMarkdownLinks: "warn", // 只有部署的时候生效
  favicon: "img/favicon.ico", // 网页标签上面的小logo
  organizationName: 'hello-world-28256', // Usually your GitHub org/user name.
  projectName: 'hello-world-28256.github.io', // Usually your repo name.

  onBrokenLinks: 'ignore',
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    liveCodeBlock: {
      /**
       * 实时效果显示的位置，可位于编辑器上方或下方。
       * 可为："top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    hideableSidebar: true,
    // 主题的配置
    navbar: {
      // 头部
      hideOnScroll: true,
      title: "zhangjing", // h1位置的标题
      logo: {
        alt: "logo",
        src: "img/logo.jpg",
      },
      items: [
        // tabs
        {
          activeBasePath: "docs", // 路径
          label: "前端",
          position: "right",
          items: [
            {
              label: "前端基础",
              to: "/docs/FE/FEBasis",
            },
            {
              label: "JavaSciprt",
              to: "/docs/FE/javaSciprt",
            },
            {
              label: "CSS",
              to: "/docs/FE/CSS",
            },
            {
              label: "浏览器",
              to: "/docs/FE/browser",
            },
            {
              label: "TypeScript ",
              to: "/docs/FE/typeScript ",
            },
            {
              label: "可视化 ",
              to: "/docs/FE/visualization",
            },
            // {
            //   label: "前端业务",
            //   to: "/docs/FE/professionalWork ",
            // },
            // {
            //   label: "可视化 ",
            //   to: "/docs/FE/",
            // },
          ],
        },
        {
          label: "后端",
          position: "right",
          items: [
            {
              label: "Node.js",
              to: "/docs/AE/node",
            },
          ],
        },
        {
          label: "框架",
          position: "right",
          items: [
            {
              label: "react",
              to: "/docs/framework/react",
            },
            {
              label: "vue",
              to: "/docs/framework/vue",
            },
            {
              label: "组件设计",
              to: "/docs/framework/components",
            },
          ],
        },
        {
          label: "计算机",
          position: "right",
          items: [
            {
              label: "计算机网络",
              to: "/docs/CS/netWork",
            },
            {
              label: "数据结构与算法",
              to: "/docs/CS/leetcode",
            },
          ],
        },
        {
          label: "杂七杂八",
          position: "right",
          items: [
            // {
            //   label: "工具",
            //   to: "/book",
            // },
            {
              label: "随笔",
              to: "/docs/liftStyle/essayist",
            },
            // {
            //   label: "推荐",
            //   to: "/book",
            // },
            {
              label: "英语",
              to: "/docs/liftStyle/English",
            },
          ],
        },
        { to: "blog", label: "博客", position: "right" },
        {
          to: "/docs/aboutMe",
          label: "关于我",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hello-world-28256",
            },
            {
              label: "LeetCode",
              href: "https://leetcode-cn.com/u/hello-world-28256/",
            },
          ],
        },
      ],
    },
    footer: {
      // 下面的介绍，看需求
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "JS基础",
      //         to: "docs/js_base",
      //       },
      //       {
      //         label: "问题总结",
      //         to: "docs/errors",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "哔哩哔哩",
      //         href: "https://www.bilibili.com/",
      //       },
      //       {
      //         label: "掘金",
      //         href: "https://juejin.cn/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "博客",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/hello-world-28256",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} hello-world-28256, Inc. Built with Docusaurus.`, // 版权信息
    },
  },
  plugins: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      "@docusaurus/preset-classic", // 一开始安装的主题
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // 这个是点击来之后边上侧边栏的配置
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          editUrl:
            "https://github.com/hello-world-28256/hello-world-28256.github.io/tree/main", // 项目url
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          remarkPlugins: [math],
          blogSidebarTitle: "近期文章",
          rehypePlugins: [katex],
          editUrl:
            "https://github.com/hello-world-28256/hello-world-28256.github.io/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"), // 主题使用的css
        },
      },
    ],
  ],
};
