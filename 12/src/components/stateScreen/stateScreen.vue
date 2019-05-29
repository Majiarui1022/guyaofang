<template>
    <div class="stateScreen">
        <div class="left">
            <p>订单</p>
            <!--表格部分-->
            <div class="manage-table">
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="位置">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="商品">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="数量">
                </el-table-column>
                <el-table-column
                    prop="operation"
                    label="操作">
                    <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">完成</el-button>
                    </template>
                </el-table-column>
                </el-table>
          </div>
        </div>
        <div class="center">
            <p>订单</p>
            <div class="indent">
                <div class="info">
                    <div class="one"><p class="name">啊啊</p><span class="haoma">5456456465465</span><span class="teaname">西湖龙井</span></div>
                    <div class="two"><p class="ear">上海市 上课分类进阿卡丽圣诞节快乐</p><span class="num">X2</span></div>
                    <div class="san">大会计法律框架</div>
                </div>
                <div class="finsh">
                    <span class="tang"><input type="radio" name="radio" class="radio1">堂客</span>
                    <span class="wan">完成</span>
                </div>
                <div class="yes">
                    <span class="hao"><input type="radio" name="radio" class="radio1">订单号</span>
                    <input type="text" class="input">
                    <span class="que">确认发货</span>
                </div>
            </div>
            <div class="indent">
                <div class="info">
                    <div class="one"><p class="name">啊啊</p><span class="haoma">5456456465465</span><span class="teaname">西湖龙井</span></div>
                    <div class="two"><p class="ear">上海市 上课分类进阿卡丽圣诞节快乐</p><span class="num">X2</span></div>
                    <div class="san">大会计法律框架</div>
                </div>
                <div class="yiwan">
                    <span class="tang"><span class="dingdan">订单号</span><span class="dingdan">156456454132132</span></span>
                    <span class="wan">已发货</span>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <p>席位</p>
                <div class="seat">
                    <span><img src="../../assets/img/denglu.png" alt="" srcset=""><em>1号桌</em></span>
                    <span><img src="../../assets/img/denglu.png" alt="" srcset=""><em>1号桌</em></span>
                    <span><img src="../../assets/img/denglu.png" alt="" srcset=""><em>1号桌</em></span>
                </div>
            </div>
            <div class="bottom">
                <p>今日茶单</p>
                <div class="tea">
                    <div class="box">
                        <input name="tea" type="checkbox" value="" class="tu"/>
                        <span>
                            <img src="../../assets/img/denglu.png" alt="" srcset="">
                            <em>白茶</em>
                        </span>
                        <input name="tea" type="checkbox" value="" class="tu"/>
                        <span>
                            <img src="../../assets/img/denglu.png" alt="" srcset="">
                            <em>白茶</em>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'stateScreen',
    data(){
        return {
            tableData: [{
            date: '1号桌',
            name: '白茶',
            num: 'X2',
            operation:''
            },]
        }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
    },
}
</script>
<style lang="scss" scoped>
    .stateScreen{
        width: 100% !important;
        height: 100% !important;
        background: url("../../assets/img/loginbj.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-around;
        padding-top: .52rem;
        p{
            font-size: .6rem;
            font-family:FZXKFW--GB1-0;
            font-weight:400;
            color:rgba(186,138,197,1);
            text-align: center;
        }
        .left{
            width: 5.76rem;
            height: 9.97rem;
            background: url("../../assets/img/1.png") no-repeat;
            background-size: cover;
            padding: 0 .34rem;
            .manage-table{
                width: 100%;
                height:8.1rem;
                .table__header-wrapper{
                    .el-table__header{
                        .el-table{
                            tr{
                                th{
                                    background: none !important;
                                }
                            }
                            
                        }
                    }
                    
                }
                
            }
            
        }
        .center{
            width: 5.76rem;
            height: 9.97rem;
            background: url("../../assets/img/2.png") no-repeat;
            background-size: cover;
            .indent{
                width: 5.36rem;
                box-sizing: border-box;
                border:1px solid rgba(214,208,233,1);
                border-radius:5px;
                margin-left: .18rem;
                padding: 0 .21rem .2rem .12rem;
                font-size: .2rem;
                margin-bottom: .15rem;
                .info{
                    .one{
                        height: .4rem;
                        .name{
                            float: left;
                            line-height: .4rem;
                            color:rgba(51,51,51,1);
                            font-size:.2rem; 
                        }
                        .haoma{
                            float: left;
                            margin-left: .22rem;
                            font-size:.18rem;
                            color:rgba(153,153,153,1);
                            line-height: .4rem;
                        }
                        .teaname{
                            float: right;
                            font-size:20px;
                            color:rgba(51,51,51,1);
                            line-height: .4rem;
                        }
                    }
                    .two{
                        height: .25rem;
                        .ear{
                            font-size: .16rem;
                            color: #000;
                            float: left;
                        }
                        .num{
                            font-size: .15rem;
                            color:rgba(102,102,102,1);
                            float: right;
                        }
                    }
                    .san{
                        font-size: .16rem;
                        color: #000;
                        line-height: .23rem;
                    }
                }
                .radio1{
                    // color: rgba(167,114,179,1);
                    margin-right: .07rem;
                    width: .2rem;
                    height: .2rem;
                    vertical-align: middle;
                }
                
                .finsh{
                    height: .35rem;
                    margin-bottom: .06rem;
                    .tang{
                        font-size:.18rem;
                        color:rgba(51,51,51,1);
                        line-height: .35rem;
                        float: left;
                    }
                }
                .wan{
                    width:.92rem;
                    height:.33rem;
                    background:rgba(153,153,153,1);
                    border-radius:.05rem;
                    color: #fff;
                    line-height: .33rem;
                    text-align: center;
                    font-size: .18rem;
                    float: right;
                }
                .yiwan{
                    // height: .4rem;
                    margin-top: .18rem;
                    .dingdan{
                        font-size: .18rem;
                        color:rgba(51,51,51,1);
                    }
                }
                .yes{
                    height: .35rem;
                    // padding-bottom: .2rem;
                    .hao{
                        font-size:.18rem;
                        color:rgba(51,51,51,1);
                        float: left;
                        line-height: .35rem;
                    }
                    .input{
                        width:266px;
                        height:36px;
                        border:1px solid rgba(167,114,179,1);
                        border-radius:5px;
                        float: left;
                        background: none;
                        padding: 0 .1rem;
                        margin-left: .1rem;
                    }
                    .que{
                        width:.92rem;
                        height:.33rem;
                        background:rgba(167,114,179,1);
                        border-radius:.05rem;
                        color: #fff;
                        line-height: .33rem;
                        text-align: center;
                        font-size: .18rem;
                        float: right;
                    }
                }
            }
        }
        .right{
            width: 7.15rem;
            height: 9.97rem;
            
            .top{
                width: 7.15rem;
                height: 4.82rem;
                background: url("../../assets/img/3.png") no-repeat;
                background-size: cover;
                padding: 0 .2rem;
                .seat{
                    // overflow: hidden;
                    height: 3.5rem;
                    span{
                        display: block;
                        float: left;
                        margin-right: .11rem;
                        text-align: center;
                        height: 1.2rem;
                        img{
                            width: .72rem;
                            height: .73rem;
                            display: block;
                        }
                        em{
                            display: block;
                            font-size: .14rem;
                            color:rgba(51,51,51,1);
                            line-height: .3rem;
                        }
                    }
                }
            }
            .bottom{
                width: 7.15rem;
                height: 5.08rem;
                background: url("../../assets/img/4.png") no-repeat;
                background-size: cover;
                margin-top: .07rem;
                padding: 0 .33rem;
                .tea{
                    .tu{
                        margin-right: .22rem;
                        float: left;
                        width: .18rem;
                        height: .18rem;
                        margin-top: .17rem;
                    }
                    span{
                        display: block;
                        float: left;
                        margin-right: .36rem;
                        text-align: center;
                        img{
                            width: .6rem;
                            height: .6rem;
                            display: block;
                        }
                        em{
                            font-size: .14rem;
                            color: rgba(51,51,51,1);
                            line-height: .3rem;
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>
