<template>
  <div class="shoop-box">
    <el-header>
      <div class="header">
        <div class="search-box">
          <div class="img-box">
            <img src="../../assets/img/Icon.png" alt="">
          </div>
          <input type="text" class="search-ipt" placeholder="搜索..."/>
        </div>
        <div class="header-back">
          <div class="image-box">
            <img src="../../assets/img/back.png" alt="">
          </div>
          <span>退出</span>
        </div>
      </div>
    </el-header>

    <el-main v-if="isAddActively">
      <div class="view-box">
        <div class="table-box">
          <div class="manage-tit" @click="isAddActively = false">
            <img src="../../assets/img/add.png" alt="">
          </div>
            <!--表格部分-->
          <div class="manage-table">
            <el-table
            v-loading="isLoading"
              :data="tableData"
              @cell-mouse-enter="show"
              @cell-mouse-leave="leave"
              style="width: 100%">
              <el-table-column
                prop="id"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="活动名称">
              </el-table-column>
              <el-table-column
                prop="create_time"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="join_num"
                label="参加人数">
              </el-table-column>
              <el-table-column
                prop="sold_num"
                label="付款人数">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态">
              </el-table-column>
              <el-table-column
                label="查看" >
                <template scope="scope">
                    <el-button type="text" @click="open(scope.row)" >
                      <img src="../../assets/img/see.png" alt="" srcset="">
                    </el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="operation"
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small" v-show="scope.row.flag"><img src="../../assets/img/bianji.png" alt="" srcset=""></el-button>
                  <el-button @click="del(scope.row)" type="text" size="small" v-show="scope.row.flag"><img src="../../assets/img/del.png" alt="" srcset=""></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size=10
          :total="activelyNumber">
        </el-pagination>
      </div>
    </el-main>
    <!-- <AddSeats v-else /> -->
    <Actively v-else :activelyClassifity="activelyClassifity" :activelyId='activelyId'/>
    <ReleaseOne v-if='isRelease  == 1' :activelyId='activelyId'/>
    <ReleaseTwo v-if='isRelease  == 2' :activelyId='activelyId'/>
    <ReleaseThree v-if="isRelease == 3" :activelyId='activelyId'/>
  </div>
</template>

<script>
import Actively from './activelyHuod/Actively.vue';//添加活动
import ReleaseOne from './activelyNamelist/ReleaseOne.vue';//活动一查看列表
import ReleaseTwo from './activelyNamelist/ReleaseTwo.vue'
import ReleaseThree from './activelyNamelist/ReleaseThree.vue';//活动三查看列表

  export default {
    name: "teaHouse",
    components: {Actively, ReleaseOne, ReleaseTwo, ReleaseThree},
    data() {
      return {
        isLoading: true,
        flag: false,
        tableData: [],
        isAddActively: true,
        qrCodeImg: '',
        activelyNumber: 0,//茶坊列表总条数
        isRelease: '',//查看活动列表
        activelyClassifity: 1,//活动类别
        activelyId: -1,//活动ID
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.activelyId = row.id
        this.activelyClassifity = row.classify
        this.isAddActively = false

      },
      del(row) {
        console.log(row);
        this.$http.delete(this.$conf.env.deleteSeat + '3').then( res =>{
          console.log(res)
        }).catch( err =>{
          console.log(err)
        })
      },
      open(row) {
        this.activelyId = row.id
        this.isRelease = row.classify
        console.log(this.qrCodeImg)
        // this.flag = true;
      },
      show(row){
        row.flag = true
      },
      leave(row){
        row.flag = false
      },
      change(data){
        this.flag = data
      },
      getActivelyList(){
        this.$http.get(this.$conf.env.getActivelyList+1).then( res =>{
          this.isLoading = false
          if(res.status == '200'){
            this.activelyNumber = res.data.count
            res.data.results.forEach( element =>{
              element.flag = false
            })
            this.tableData = res.data.results
          }
        }).catch( err =>{
          this.isLoading = false
          this.$message.error('网络错误');
        })
      }
    },
    mounted(){
      this.getActivelyList()
    }
  }
</script>


<style lang="scss" scoped>

  .shoop-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;



    header{
      width: 100%;
      height:.98rem !important;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-top:.24rem;
      padding-right:.66rem;
      background: #fff;
    }
    .header{
      width: 100%;
      height:100%;
      overflow: hidden;
      .search-box{
        position: relative;
        overflow: hidden;
        float: left;
        .search-ipt{
          width: 3.51rem;
          height:.5rem;
          background:rgba(243,243,243,1);
          border-radius:3px;
          float: left;
        }
        .img-box{
          width: .55rem;
          height:.5rem;
          background: #F3F3F3;
          float: left;
          img{
            width: .13rem;
            height: .13rem;
            display: block;
            margin:0 auto;
            margin-top: .18rem;
          }
        }
      }
      .header-back{
        float: right;
        overflow: hidden;
        cursor: pointer;
        margin-top:.1rem;
        .image-box{
          float: left;
          img{
            width: .29rem;
            height:.29rem;
            display: block;
          }
        }
        span{
          float: left;
          font-size:.19rem;
          color:rgba(127,99,244,1);
          margin-left: .15rem;
        }
      }
    }

    /*主体*/
    .view-box{
      width: 100%;
      height:100%;
      padding:.24rem .32rem .53rem .32rem;
      box-sizing: border-box;
      position: relative;
      .el-pagination{
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .table-box{
        width: 100%;
        height:100%;
        .manage-tit{
          width: 100%;
          overflow: hidden;
          img{
            display: block;
            float: right;
            margin-bottom: .4rem;
            width: .94rem;
            height:.33rem;
          }
        }
        /*表格部分*/
        .manage-table{
          width: 100%;
          height:8.1rem;
          .el-table__header{
            tr{
              th{
                background: #F2F5F8 !important;
              }
            }
          }
        }
      }
    }











  }
</style>
