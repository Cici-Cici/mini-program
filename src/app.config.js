export default defineAppConfig({
  "lazyCodeLoading": "requiredComponents",
  // "subpackages": [
  //   {
  //     "root": "component",
  //     "pages": [
  //       "pages/user/index",
  //     ]
  //   },
    // {
    //   "root": "services",
    // },
  // ],
  pages: [
    'pages/component_page/index',
    'pages/feature/index',
    // 'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000',
    selectedColor: '#23d891',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/feature/index',
        text: '功能',
        // iconPath: '',
        // selectedIconPath: '',
      },
      {
        pagePath: 'pages/component_page/index',
        text: '转谱',
        // iconPath: './assets/i.png',
        // selectedIconPath: './assets/i.png'
      },
      // {
      //   pagePath: 'pages/user/index',
      //   text: '个人中心',
      //   // iconPath: './assets/icon_wa.png',
      //   // selectedIconPath: './assets/i128.png'
      // },
    ],
  },
})
