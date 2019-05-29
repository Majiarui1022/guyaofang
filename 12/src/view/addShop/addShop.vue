<template>
  <div class="shoop-box">
    <el-main>
      <div class="view-box">
        <div class="addshopp-box">
          <div class="addshopp-dai">
            <div class="addshopp-tit">
              <p>
                <img @click="$parent.flag = true" src="../../assets/img/goback.png" alt="">
                <span>添加商品</span>
              </p>
            </div>
        <table>
        <tbody>
          <tr>
            <td>
              <label>分类</label>
                <el-select v-model="project.projectCategoryId" placeholder="请选择">
                  <el-option
                    v-for="item in projectCategory"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
            <span class="addshop" @click="editProjectClassifity()"><img src="../../assets/img/0c05a25c35cd22ea2d3e50d8b41ba32.png" alt="" ></span>
            <label>优先级</label>
            <div v-for="item in projectPriority" :key="item.id" >
                <!-- <el-radio v-model="project.projectPriorityId" :label="item.id">{{item.name}}</el-radio> -->
                <input name="ji"  type="radio" :value="item.id" v-model="project.projectPriorityId"/><span class="ji">{{item.name}}</span>
            </div>
            </td>
            <td class="inp-none">
              <label for="">状态 </label>
               <div v-for="item in projectStatusData" :key="item.id">
                  <input name="state" type="radio" :value="item.id" v-model="project.projectStatus" /> <span class="ji">{{item.name}}</span> 
               </div>
            </td>
            <td>
              <label for="">商品名称</label>
              <input type="text" placeholder="填写商品名称" class="actively-site" v-model="project.projectName">
            </td>
            <td>
              <label for="">原价</label>
              <input type="number" placeholder="填写商品原价" class="actively-num" v-model="project.oldProjectPrice">
              <label for=""  class="xian">现价</label>
              <input type="number" placeholder="填写商品现价" class="actively-iphone" v-model="project.newProjectPrice">
            </td>
            <td>
              <label for="">商品介绍</label>
              <input type="text" placeholder="填写商品介绍" class="actively-site" v-model="project.projectIntroduction">
            </td>
            <td class="zhuti-photo" style="height: auto;">
              <label for="" style="margin-top:.2rem">商品照片</label>
              <div class="activelyOne-photo">
                <el-upload
                  action="string"
                  ref="upload"
                  list-type="picture-card"
                  :http-request="addAttachment"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemoveBanner"
                  :multiple="true"
                  :file-list="project.projectBanner"
                  class="photo"
                >
                  <i class="el-icon-plus"></i>
                <p class="zhuyi">注：不得少于4张</p>
                </el-upload>
                
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                
                <p class="footer_text">750*370 png. jpg格式</p>
              </div>
            </td>
            <td class="zhuti-photo" style="height: auto;">
              <label for="" style="margin-top:.2rem">商品详情</label>
              <div class="activelyOne-photo">
                <el-upload
                  action="string"
                  ref="uploadDetail"
                  list-type="picture-card"
                  :http-request="addAttachmentDetail"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemoveDetail"
                  :file-list="project.projectDetail"
                  :before-upload="beforeAvatarUpload"
                  :multiple="true"
                  class="photo"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <p class="footer_text">750*370 png. jpg格式</p>
                
              </div>
            </td>
          </tr>
        </tbody>
        </table>
          </div>

        </div>
        </div>
      <div class="activelyOne-right">
        <div class="app-show">
            <div class="app-box">
            <div class="app-tit">
                <projectApp :project="project"/>
            </div>
        </div>
      </div>
    </div>
    <button class="tijiao" @click="submitProject">确定</button>
    </el-main>   
  </div>
</template>

<script>
import projectApp from "./projectApp.vue";
// import conf from "../../config/index.js";
    export default {
      name: "AddSeats",
      components: {projectApp},
      data() {
        return{
            input3: '',
            input4: '',
            input5: '',
            select: '',
            pickerOptions2: {
              shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近一个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近三个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                  picker.$emit('pick', [start, end]);
                }
              }]
            },
            value6: '',
            value7: '',
            dialogImageUrl: '',
            dialogVisible: false,
            img_list:[],    //上传图片文件
            project:{
               projectName: '',//商品名称
               newProjectPrice: '',//商品现价
               oldProjectPrice: '',//商品原价
               projectIntroduction: '',//商品介绍
               projectBanner: [],//商品banner图
               projectDetail: [],//商品详情图
               projectCategoryId: '',//分类ID
               projectPriorityId: '',//优先级ID
               projectStatus:'',//商品状态
            },
            projectCategory: [],//分类列表
            projectPriority:[{'id': '6', 'name': 'A'}, {'id': '5', 'name': 'B'}, {'id': '4','name': 'C'},{'id': '7', 'name': '推荐'}, {'id': '8', 'name': '新品'}],//优先级列表
            projectStatusData: [{'id': '1', 'name': '现货'}, {'id': '2', 'name': '期货'}],//商品状态数据
            file: '',
          }
      },
      methods: {
        addAttachment (params) {
          console.log(params)
          this.baseImg(params.file, true)
        },
        addAttachmentDetail(params){
          this.baseImg(params.file, false)
          let formData = new FormData();
          formData.append('head', params.file);
          console.log(formData)
        },
        baseImg(files, flag){
           let reader = new FileReader();
            let imgFile
            reader.readAsDataURL(files)
            reader.onload = e => {
                imgFile = e.target.result;
                let arr = imgFile.split(',')
                let obj = {}
                obj.url ='data:image/jpeg;base64,'+arr[1];
                obj.image = files
                flag ? this.project.projectBanner.push(obj): this.project.projectDetail.push(obj)
            }
        },
        beforeAvatarUpload(file) {
          this.file = file;
          console.log(this.file)
        },
        handleRemoveBanner(file, fileList){
          console.log(fileList);
          this.project.projectBanner = fileList
        },
        handleRemoveDetail(file, fileList){
          console.log(fileList)
          this.projrct.projectDetail = fileList
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        //点击添加分类
        editProjectClassifity(){
          this.$emit('editProjectClassifity')
        },
        editProjectName(){
          console.log(this.projectName)
        },
        setProjectCategory(){
          console.log(this.project.projectCategoryId)
        },
        /**@接口调用 */
        //获取分类列表
        
        getprojectCategory(){
          this.$http.get(this.$conf.env.getprojectCategory).then( res =>{
            if(res.status == '200'){
              if(res.data && res.data.length > 0){
                this.projectCategory = res.data
                // this.$emit("setProjectCategory", res.data)
                this.$bus.$emit("setProjectCategory", res.data)
              }
            }
          }).catch( err =>{
            console.log(err)
          })
        },
        submitProject(){
          console.log(this.project)
          if(
            !this.project.projectName||//商品名称
            !this.project.newProjectPrice||//商品现价
            !this.project.oldProjectPrice||//商品原价
            !this.project.projectIntroduction||//商品介绍
            this.project.projectBanner.length == 0 ||//商品banner图
            this.project.projectDetail.length == 0 ||//商品详情图
            !this.project.projectCategoryId||//分类ID
            !this.project.projectPriorityId||//优先级ID
            !this.project.projectStatus//商品状态
          ){
            this.$message({
              message: '请完善商品信息',
              type: 'warning'
            });
          }else{
            
            this.submitProjectUplude()
          }
        },
        submitProjectUplude(){
          let formData = new FormData();
          this.project.projectBanner.forEach(element =>{
              formData.append('good_images', element.image);
            })
             this.project.projectDetail.forEach(element =>{
              formData.append('good_images', element.image);
            })
              formData.append('category', this.project.projectCategoryId);
              formData.append('priority', this.project.projectPriorityId);
              formData.append('status', this.project.projectStatus == '1' ? true : false);
              formData.append('name', this.project.projectName);
              formData.append('shop_price', this.project.newProjectPrice);
              formData.append('old_price', this.project.oldProjectPrice);
              // formData.append('shop_price', this.project.newProjectPrice);
              formData.append('goods_desc', this.project.projectIntroduction);

          // var params ={
          //     "category": this.project.projectCategoryId, //分类id
          //     "priority": this.project.projectPriorityId,  //优先级 (4, 'C'), (5, 'B'), (6, 'A'), (7, '推荐'), (8, '新品')
          //     "status":  this.project.projectStatus == '1' ? true : false, //True现货 Flase期货
          //     "name": this.project.projectName,  //商品名称
          //     // "goods_num": null,   库存
          //     "shop_price": this.project.newProjectPrice, // 售价
          //     "old_price": this.project.oldProjectPrice,  //原价
          //     "goods_desc": this.project.projectIntroduction,  //介绍
          //     // "front_image": {''},   封面图
          //     "good_images": [{'image': formData.get("image")}], // 商品图
          //     "good_details": [{'image': formData.get("image")}] //   商品详情图
          // }
          console.log(params)
          this.$http.post(this.$conf.env.establishProject, params).then( res =>{
            console.log(res)
          }).catch( err =>{
            console.log(err)
          })
        }
      },
      mounted(){
        this.getprojectCategory()
      },
      watch:{
        project(){
          console.log(this.project.projectPriorityId)
          console.log(this.priject.projectStatus)
        },
        // projectStatus(){
        //   console.log(this.priject.projectStatus)
        // }
      }
    }
</script>

<style lang="scss" >
  .shoop-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
    position: relative;
    .tijiao{
      display: block;
      width: 1.71rem;
      height: .39rem;
      background:rgba(127,99,244,1);
      border-radius:3px;
      position: absolute;
      left: 4.86rem;
      top: 8.85rem;
      color: #fff;
      font-size: .18rem;
    }
    .activelyOne-right{
      position: absolute;
      top: .52rem;
      right: .45rem;
      .app-show{
        width: 5.25rem;
        height:8.5rem;
        padding:.53rem .25rem .21rem .25rem;
        box-sizing: border-box;
        background: #D3D3D3;
        .app-box{

          width: 100%;
          height:100%;
          background: #fff;
          overflow: hidden;
          overflow-y: scroll;
          .app-tit{
            width: 100%;
            height:20px;
            img{
              width: 100%;
              height:100%;
              display: block;
            }
          }
        }
      }
    }
    /*头部*/
    .view-box{
      width: 100%;
      height:100%;
      background: #fff;
      box-shadow:0px 3px 10px 0px rgba(119,119,119,0.1);
      border-radius:3px;
      .addshopp-box{
        width: 100%;
        height:100%;
        padding:.28rem;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;

        .el-input__suffix{
          display: none;
        }
        .addshopp-tit{
          width: 100%;
          height:.4rem;
          overflow: hidden;
          p{
            overflow: hidden;
          }
          span{
            font-size:.22rem;
            color:rgba(70,74,83,1);
            line-height: .4rem;
            margin-left: 12px;
            float: left;
          }
          img{
            float: left;
            width: .22rem;
            height:.22rem;
            margin-top: .1rem;
          }
        }
        .addshopp-dai{
          width: 8.8rem;
          height:100%;
          float: left;
          .one-lei{
            width: 100%;
            overflow: hidden;
          }
          table{
            margin-left: .22rem;
            tbody{
              tr{
                td{
                //   height:.98rem;
                  margin: .24rem 0;
                  display: flex;
                  align-items: center;
                  .xiala{
                      width: 1.46rem;
                      height: .49rem;
                      padding: 0 .2rem;
                      font-size: .15rem;
                      color: #999;
                  }
                  .addshop{
                      margin-left: .17rem;
                      margin-right: .95rem;
                      img{
                          width: .28rem;
                          height: .28rem;
                          display: block;
                      }
                  }
                  .ji{
                      font-size: .14rem;
                      margin-left: .1rem;
                      margin-right: .22rem;
                  }
                  .xian{
                      margin-left: .64rem;
                  }
                  label{
                    font-size:.18rem;
                    font-weight:bold;
                    color:rgba(70,74,83,1);
                    margin-right: .08rem;
                    span{
                      height: .33rem;
                      line-height: .33rem;
                      width: .94rem;
                      border-radius: 17px;
                      padding: 0;
                      font-size: .16rem;
                    }
                    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
                      background: #7F63F4;
                      border-color: #7F63F4;
                    }
                  }
                  div{
                    height:.49rem;
                    input{
                      float: left;
                    }
                    input:checked{
                      background: #7F63F4;
                    }
                    span{
                      float: left;
                      line-height: .49rem;
                    }                   
                  }
                  input{
                    height:.49rem;
                    border:1px solid #DDDFE1;
                    border-radius: 3px;
                    background:rgba(33,141,250,0);
                    font-size:.15rem;
                    color:#999;
                    line-height:.49rem;
                    text-indent: .19rem;
                  }
                  input[type="number"] {
                    -moz-appearance: textfield; 
                  }
                  input[type="number"]::-webkit-inner-spin-button,
                  input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  .daig-name{
                    width: 3.12rem;
                  }
                }

                /*上传图片样式修改*/
                .zhuti-photo{
                  margin-top: .3rem;
                  position: relative;
                  .activelyOne-photo{
                    position: relative;
                    height: 100%;
                  }
                  .footer_text{
                    position: absolute;
                    width: 1.4rem;
                  }
                  label{
                    white-space: nowrap;
                    margin-top: 0;
                  }
                  p{
                    font-size:.12rem;
                    color:rgba(127,99,244,1);
                  }
                  .zhuyi{
                    position: absolute;
                    right: -1rem;
                  }
                  .photo{
                    height: auto;
                    display: flex;
                    flex-wrap: wrap;
                  }
                  .el-upload--picture-card{
                    width: .8rem;
                    height: .8rem;
                    position: relative;
                    background: url("../../assets/img/addphoto.png") no-repeat;
                    background-size: cover;
                    border:0;
                    i{
                      /*position: absolute;*/
                      /*left: 0.26rem;*/
                      /*top: .25rem;*/
                      display: none;
                    }
                  }
                  ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                      width: .8rem;
                      height: .8rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    }
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
    
    /*表单*/








































  }
</style>
