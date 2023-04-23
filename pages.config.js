import { definePages } from '@uni-helper/vite-plugin-uni-pages'
import { title } from './src/configs/index'

export default definePages({
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@/uni_modules/uni-$1.vue',
      '^u-(.*)': 'vk-uview-ui/components/u-$1/u-$1.vue',
    },
  },
  pages: [
    {
      path: 'pages/login/phone/index',
      shortcut: '/login',
      style: {
        navigationBarTitleText: '',
        navigationBarTextStyle: 'black',
        navigationBarBackgroundColor: '#ffffff',
      },
    },
    {
      path: 'pages/home/tab-0/index',
      shortcut: '/tab-0',
      style: {
        navigationBarTitleText: '项目简介',
        // navigationStyle: 'custom',
      },
    },
    {
      path: 'pages/home/tab-1/index',
      shortcut: '/tab-1',
      // middleware: ['permission'],
      style: {
        navigationBarTitleText: '我的',
        navigationStyle: 'custom',
      },
    },
  ],
  // 分包配置
  subPackages: [
    {
      root: 'pages/connect',
      pages: [
        {
          path: 'index',
          style: {
            navigationBarTitleText: '联系我们',
          },
        },
      ],
    },
    {
      root: 'pages/statement',
      pages: [
        {
          path: 'index',
          style: {
            navigationBarTitleText: '特别声明',
          },
        },
      ],
    },
  ],
  // 预加载
  preloadRule: {
    // @ts-ignore
    'pages/connect/index': {
      network: 'all',
      packages: ['__APP__'],
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#2b9939',
    backgroundColor: '#F8F8F8',
    list: [
      {
        iconPath: 'static/images/tabbar/tab-0.png',
        selectedIconPath: 'static/images/tabbar/tab-0-active.png',
        pagePath: 'pages/home/tab-0/index',
        text: '首页',
      },
      {
        iconPath: 'static/images/tabbar/tab-1.png',
        selectedIconPath: 'static/images/tabbar/tab-1-active.png',
        pagePath: 'pages/home/tab-1/index',
        text: '我的',
      },
    ],
  },
  globalStyle: {
    navigationBarTextStyle: 'white',
    navigationBarTitleText: title,
    navigationBarBackgroundColor: '#2b9939',
    backgroundColor: '#F8F8F8',
  },
  condition: {
    current: 0,
    list: [
      {
        name: 'pages/home/tab-0/index',
        path: 'pages/home/tab-0/index',
        query: '',
      },
      {
        name: 'pages/statement/index',
        path: 'pages/statement/index',
        query: '',
      },
      {
        name: 'pages/login/phone/index',
        path: 'pages/login/phone/index',
        query: '',
      },
    ],
  },
})
