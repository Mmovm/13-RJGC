// app.js
App({
  onLaunch() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.globalData.userInfo = res.userInfo
      }
    })
  },
  globalData: {
    userInfo: null,
    wordList: []
  }
})
