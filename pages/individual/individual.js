const app = getApp()

Page({
  data: {
    userInfo: {}
  },

  onLoad() {
    this.setData({
      userInfo: app.globalData.userInfo || {
        avatarUrl: '/images/default-avatar.png',
        nickName: '未登录用户'
      }
    })
  },

  navigateToSettings() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  navigateToAbout() {
    wx.showToast({
      title: '版本 1.0.0',
      icon: 'none'
    })
  }
})