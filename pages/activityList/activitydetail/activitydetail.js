Page({
  data:{
    // 活动id,用来请求详情
    id: '',
    // 控制展开
    isStructFold: false,
    isContactFold: false,
    isDescFold: false,
    isAttentionFold: false,
  },
  foldCheck: function (e) {
    
    var tag = e.target.dataset.tag
    console.log(tag)
    switch (tag) {
      case 1:
        this.setData({
          isStructFold: !this.isStructFold
        })
        break;
      case 2:
        this.setData({
          isContactFold: !this.isContactFold
        })
        break;
      case 3:
        this.setData({
          isDescFold: !this.isDescFold
        })
        break;
      case 4:
        this.setData({
          isAttentionFold: !this.isAttentionFold
        })
        break;
    }
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
        id: options.id
    })
    console.log(options.id)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})