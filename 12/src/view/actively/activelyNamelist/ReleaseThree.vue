<template>
    <div class="big-box" v-show="flag">
        <div class="box"></div>
        <div class="model">
            <div class="header">
                <span></span>
                <p>放生名单</p>
                <span @click="$parent.isRelease = 0"><img src="../../../assets/img/close.png" alt="" srcset=""></span>
            </div>
            <el-main>
            <div class="view-box">
                <div class="table-box">
                
                    <!--表格部分-->
                <div class="manage-table">
                    <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                        <el-table-column
                            prop="date"
                            width="180px"
                            align="center">
                            <template slot-scope="scope">
                                <img src="../../../assets/img/denglu.png" alt="">
                                <span>{{scope.row.date}}</span>
                            </template>
                            
                        </el-table-column>
                        <el-table-column
                            prop="num1"
                            align="center"
                            width="100px"
                            label="小鸟">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            width="100px"
                            prop="num2"
                            label="甲鱼">
                        </el-table-column>
                        <el-table-column
                            prop="num3"
                            align="center"
                            width="100px"
                            label="蛇">
                        </el-table-column>
                        <el-table-column>
                           
                        </el-table-column>
                    </el-table>
                </div>

                <!-- 底部 -->
                <div class="total">
                    <span>合计</span>
                    <span>{{total.num1}}</span>
                    <span>{{total.num2}}</span>
                    <span>{{total.num3}}</span>
                </div>
                <div class="total-foot">
                    <p>￥340</p>
                </div>

                </div>
            </div>
            </el-main>
            
        </div>

    </div>
</template>
<script>
export default {
    name: 'bianji',
    data(){
      return{
        flag: true,
        
        tableData: [{
          date: '张磊',
          num1: '6',
          num2: '',
          num3: '6',
        }, {
          date: '张磊',
          num1: '',
          num2: '6',
          num3: '',
        }, {
          date: '张磊',
          num1: '',
          num2: '6',
          num3: '',
        }]
      }
    },

    methods: {
      close(){
          this.flag = false
      },
    },
    computed: {
        total: function(){
            let obj = {
                num1: 0,
                num2: 0,
                num3: 0,
            }
            let _that = this
            for(var i = 0 ,len = _that.tableData.length; i< len; i++){
                obj.num1 += _that.tableData[i].num1 * 1;
                obj.num2 += _that.tableData[i].num2 * 1;
                obj.num3 += _that.tableData[i].num3 * 1;
            }
            return obj;
        }
    }
}
</script>
<style lang="scss" scoped >
    .big-box{
        position: fixed;
        width: 200%;
        height: 100%;
        left: -10rem;
        z-index: 2;
        .box{
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.4);
        }
        .model{
            width: 12.2rem;
            height: 8.11rem;
            border-radius: .05rem;
            position: fixed;
            left: 0; right: 0; top: 0; bottom: 0;
            background: #fff;
            margin: auto;
            .header{
                height: .5rem;
                background: rgba(159,136,255,1);
                display: flex;
                justify-content: space-between;
                p{
                    font-size: .16rem;
                    color:rgba(255,254,254,1);
                    margin-top: .18rem;
                    margin-left: .33rem;
                }
                span{
                    margin-top: .21rem;
                    margin-right: .3rem;
                    img{
                        display: block;
                        width: .17rem;
                        height: .17rem;
                    }
                }
            }
            /*主体*/
            .el-main{
                padding: 0;
                .view-box{
                    width: 100%;
                    height:100%;
                    padding:.24rem 0 .53rem;
                    box-sizing: border-box;
                    .table-box{
                        width: 100%;
                        height:100%;
                        .manage-tit{
                        width: 100%;
                        overflow: hidden;
                        img{
                            display: block;
                            float: right;
                            // margin-bottom: .4rem;
                            width: .94rem;
                            height:.33rem;
                        }
                        }
                        /*表格部分*/
                        .manage-table{
                            width: 100%;
                            height:8.1rem;
                                tr.el-table__row--striped td {
                                    border: none;
                                    background:rgba(244,241,255,1);
                                }
                                img{
                                    width: .5rem;
                                    height: .5rem;
                                    display: block;
                                    border-radius: 50%;
                                    margin-left: .45rem;
                                    float: left;
                                }
                                span{
                                    float: left;
                                    margin-top: .14rem;
                                    margin-left: .17rem;
                                }
                            }
                        }
                        .total{
                            box-sizing: border-box;
                            width: 100%;
                            height: .76rem;
                            background:rgba(213,203,255,1);
                            position: absolute;
                            left: 0;
                            bottom: .72rem;
                            padding-left: 1rem;
                            span{
                                display: block;
                                float: left;
                                font-size: .18rem;
                                color:rgba(51,51,51,1);
                                line-height: .76rem;
                                margin-right: .76rem;
                            }
                        }
                        .total-foot{
                            width: 100%;
                            height: .76rem;
                            background:rgba(173,154,255,1);
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            p{
                                float: right;
                                font-size: .18rem;
                                line-height: .76rem;
                                margin-right: .46rem;
                                color: #fff;
                            }
                        }
                    }
                    
                }
            }
        
        
    }
    
</style>
