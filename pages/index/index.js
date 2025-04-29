const app = getApp()

Page({
  data: {
    currentWord: { en: 'apple', cn: '苹果' },
    showCn: false
  },

  onLoad() {
    app.globalData.wordList = [
      { en: 'apple', cn: '苹果' },
      { en: 'book', cn: '书' },
      { en: 'cat', cn: '猫' }
    ]
  },

  showTranslation() {
    this.setData({ showCn: true })
  },

  nextWord() {
    const words = app.globalData.wordList
    const nextIndex = Math.floor(Math.random() * words.length)
    this.setData({ 
      currentWord: words[nextIndex],
      showCn: false
    })
  }
})