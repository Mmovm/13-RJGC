const app = getApp()

Page({
  onGetUserInfo(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      })
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }, 1500)
    }
  }
})