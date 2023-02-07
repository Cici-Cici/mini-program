export default defineAppConfig({
  pages: [
    'pages/feature/index',
    'pages/index/index',
    'pages/component-page/index',
    'pages/test/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
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
        text: 'feature',
        // iconPath: '',
        // selectedIconPath: '',
      },
      {
        pagePath: 'pages/component-page/index',
        text: 'component-page',
        // iconPath: './assets/i.png',
        // selectedIconPath: './assets/i.png'
      },
      {
        pagePath: 'pages/user/index',
        text: 'user',
        // iconPath: './assets/icon_wa.png',
        // selectedIconPath: './assets/i128.png'
      },
    ],
  },
})
