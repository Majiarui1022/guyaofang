// 开发环境配置
const winchaingroupApi = "http://10.102.100.23:8001";

module.exports = {
//API
    //用户登录模块
    loginUser: winchaingroupApi + '/user/login/',//用户登录

    //商品模块
    getprojectList: winchaingroupApi + '/good/good/',//商品列表
    establishProject: winchaingroupApi + '/good/good/',// 添加商品
    //商品分类
    getprojectCategory: winchaingroupApi + '/good/category/',//商品分类列表
    deleteProjectCategory: winchaingroupApi + '/good/category/',//删除商品分类
    addProjectCategory: winchaingroupApi +  '/good/category/',//添加商品分类


    //茶坊
    getSeatList: winchaingroupApi + '/good/seat?p=',//茶坊列表
    addSeatData: winchaingroupApi + '/good/seat/',//添加茶坊
    deleteSeat : winchaingroupApi + '/good/seat/',//删除茶坊


    //代购
    getAnimalList: winchaingroupApi +  '/good/animal/?p=',//代购列表
    deleteAnimlList: winchaingroupApi + '/good/animal/',//删除代购

    //活动
    getActivelyList: winchaingroupApi + '/good/activity/?p=',//活动列表
    //活动详情'
    getActivelyOneDetail: winchaingroupApi +  '/good/activityone/',//活动一详情信息
    getActivelyTwoDetail: winchaingroupApi +  '/good/activitytwo/',//活动二详情信息
    getActivelyThreeDetail: winchaingroupApi  + '/good/activitythree/',//活动三详情信息
    //查看活动信息
    getActivelyOneUserList: winchaingroupApi + '/order/users/?goods=',//获取活动1参与列表
    getActivelyTwoJoinList: winchaingroupApi + '/order/orderjoin/?object_id=',//获取活动二参与列表
    //修改添加活动
    setActivelyDetailOneData: winchaingroupApi + '/good/activityone/',//修改/添加活动一
    setActivelyDetailTwoData: winchaingroupApi + '/good/activitytwo/',//修改/添加商品二
}