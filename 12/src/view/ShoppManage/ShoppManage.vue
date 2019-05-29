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

    <el-main v-if="flag">
      <div class="view-box">
        <div class="table-box" >
          <div class="manage-tit" @click="addShop()">
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
                label="商品名称">
              </el-table-column>
              <el-table-column
                prop="shop_price"
                label="价格">
              </el-table-column>
              <el-table-column
                prop="create_time"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="category"
                label="所属分类">
              </el-table-column>
              <el-table-column
                prop="priority"
                label="优先级">
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
          page-size="10"
          :total="projectNumber">
        </el-pagination>
      </div>

    </el-main>
   <add-project v-else @editProjectClassifity='editProjectClassifity'></add-project>


  <Bianji v-show="bianjiflag" @change="change" :classifityTitle="classifityTitle" />
  <Bianji2 v-show="bianji2flag" @change="change2" @addProjectClassifity="addProjectClassifity"  />
  
  </div>
</template>

<script>
  import Bianji from './bianji.vue'
  import Bianji2 from './bianji2.vue'
  import addProject from "../addShop/addShop.vue";
  export default {
    name: "ShoppManage",
    components: {
      Bianji, Bianji2, addProject
    },
    data() {
      return {
        flag: true,
        bianjiflag: false,
        bianji2flag: false,
        tableData: [],
        isLoading:true,
        classifityTitle:'',
        projectNumber: '',//商品总条数
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.bianjiflag = true;
      },
      del(row) {
        console.log(row);
      },
      addShop(){
        this.flag = !this.flag;
      },
      show(row){
        row.flag = true
      },
      leave(row){
        row.flag = false
      },
      change(data){
        this.bianjiflag = data
      },
      change2(data){
        this.bianji2flag = data
        console.log(data)
      },
      //编辑分类
      editProjectClassifity(){
        this.bianji2flag = true
      },
      addProjectClassifity(data){
        this.bianjiflag = true
        this.classifityTitle = data
      },
      /**@接口调用 */
      //获取商品列表
      getProjectList(){
        this.$http.get(this.$conf.env.getprojectList).then( res =>{
          this.isLoading = false
          if(res.status == '200'){
            this.projectNumber = res.data.count
            if(res.data.results && res.data.results.length>0){
              res.data.results.forEach(element => {
                element.flag = false
              });
              this.tableData = res.data.results
            }
          }
        }).catch( err =>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.getProjectList()
      
    }
  }
</script>


<style lang="scss" >
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
