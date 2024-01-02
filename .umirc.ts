import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  proxy: {
    '/api/': {
      // 要代理的地址
      // target: 'http://crm.365me.me/',
      target: 'http://puhuicrm.creakeweb.com/',

      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/home', component: '@/pages/home' },
        { path: '/mine', component: '@/pages/mine' },
        { path: '/workbench', component: '@/pages/workbench' },
      ],
    },
  ],
  npmClient: 'pnpm',
});
