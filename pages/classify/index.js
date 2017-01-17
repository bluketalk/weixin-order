var app = getApp()
Page({
    data: {
        navLeftItems:[{"id":1,"name":"米饭套餐","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]},{"id":2,"name":"面类","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]},{"id":3,"name":"米线","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]}],
        navRightItems: [{"id":1,"name":"米饭套餐","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒肉丝","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]},{"id":2,"name":"面类","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"牛肉面","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]},{"id":3,"name":"米线","desc2":"","level":"level1","image":"../../image/test.jpeg","popular":"","nodes":[{"id":16,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":17,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"},{"id":18,"action":"订餐","name":"泡椒米线","image":"../../image/test.jpeg","price":"15元","subTitle":"天真无邪大眼鸟，护送萌宝做保镖","title":"逗鸟外传：萌宝满天飞"}]}],
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})