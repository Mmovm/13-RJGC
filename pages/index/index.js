const app = getApp()

Page({
  data: {
    currentWord: { en: 'apple', cn: '苹果' },
    showCn: false,
    check_in_day: 0,
    checkin_zt: "/images/红心.png",
    ischeck: false,
    pastwords: 0,
    showCn: false // 初始不显示翻译
  },

  onLoad() {
    // 初始化单词列表（保持不变）
    app.globalData.wordList = [
      { en: 'apple', cn: '苹果' },
      { en: 'book', cn: '书' },
      { en: 'cat', cn: '猫' }
    ]
  },

  // 显示翻译按钮点击事件
  showTranslation() {
    this.setData({ showCn: true })
  },

  // 下一个单词按钮点击事件
  nextWord() {
    const words = app.globalData.wordList
    const nextIndex = Math.floor(Math.random() * words.length)
    const newPastwords = this.data.pastwords + 1  // 计算新值
    
    this.setData({ 
      currentWord: words[nextIndex],
      pastwords: newPastwords,
      showCn: false,
      ischeck: newPastwords >= 5  // 直接使用表达式设置ischeck
    })
    if (newPastwords === 5) {
      wx.showToast({
        title: '今日打卡成功!',
        icon: 'none',
        image:'/images/烟花.png',
        duration: 3000,
      })
      this.setData({
        check_in_day:this.data.check_in_day+1
      })
    }
  }
})