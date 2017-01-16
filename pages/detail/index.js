//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    items:[],
    // items:[{"action":"购票","actor":"安迪·萨姆伯格 / 凯蒂·克朗 / 凯尔希·格兰莫 ","image":"htt://static.wepiao.com/movie/2016/9/7_0/201609070940573548.jpg","score":"8.7分","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"action":"购票","actor":"安迪·萨姆伯格 / 凯蒂·克朗 / 凯尔希·格兰莫 ","image":"htt://static.wepiao.com/movie/2016/9/7_0/201609070940573548.jpg","score":"8.7分","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"action":"购票","actor":"安迪·萨姆伯格 / 凯蒂·克朗 / 凯尔希·格兰莫 ","image":"htt://static.wepiao.com/movie/2016/9/7_0/201609070940573548.jpg","score":"8.7分","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"action":"购票","actor":"安迪·萨姆伯格 / 凯蒂·克朗 / 凯尔希·格兰莫 ","image":"htt://static.wepiao.com/movie/2016/9/7_0/201609070940573548.jpg","score":"8.7分","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })

    //playingList
    wx.request({
      url: 'http://json.bmbstack.com/playingList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        // that.data.items = res.data
        that.setData({
             items : res.data,
        });
        console.log("test")
      }
    })

    //bannerList
    wx.request({
      url: 'http://json.bmbstack.com/bannerList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        // that.data.images = res.data
         that.setData({
             images : res.data,
        });
      },
        fail:function(){
          console.log("error");
        }
    })

  },
  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
