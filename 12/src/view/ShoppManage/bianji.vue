<template>
    <div class="addbigbox" v-if="flag" v-loading.fullscreen.lock="isLoading">
        <div class="box"></div>
        <div class="model">
            <div class="header">
                <p>{{classifityTitle}}</p>
                <span @click="close()"><img src="../../assets/img/close.png" alt="" srcset=""></span>
            </div>
            <table>
                <tbody>
                <tr>
                <td>
                    <label for="">分类名称</label>
                    <input type="text" placeholder="填写分类名称" class="actively-site" v-model="activelyClassifityName">
                </td>
                <td class="zhuti-photo" style="height: auto;">
                    <label for="" style="margin-top:.2rem">选中图片</label>
                    <div class="activelyOne-photo">
                    <el-upload
                        action="string"
                        ref="upload"
                        list-type="picture-card"
                        :http-request="addAttachmentActive"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :multiple="true"
                        :limit = 1
                        :on-exceed = 'onExceed'
                        class="photo"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <p>750*370 png. jpg格式</p>
                    </div>
                </td>
                <td class="zhuti-photo" style="height: auto;">
                    <label for="" style="margin-top:.2rem">默认图片</label>
                    <div class="activelyOne-photo">
                    <el-upload
                        action="string"
                        ref="upload"
                        list-type="picture-card"
                        :http-request="addAttachment"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :multiple="true"
                        :limit = 1
                        :on-exceed = 'onExceed'
                        class="photo"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <p>750*370 png. jpg格式</p>
                    </div>
                </td>
                </tr>
                </tbody>
            </table>
            <button @click="addProjectCategory">确定</button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'bianji',
    inject:['reload'],
    data(){
      return{
        flag: true,
        
        pickerOptions2: {
          shortcuts: []
        },
        value6: '',
        value7: '',
        dialogImageUrl: '',
        dialogVisible: false,
        img_list:[],    //上传图片文件
        radioa:'2',     //状态
        activelyClassifityName: '',//分类名称
        addAttachmentActiveImgList: [],
        addAttachmentActiveImg: '',
        addAttachmentImgList: [],
        addAttachmentImg: '',
        isLoading : false
      }
    },
    props: {
        bianjiflag: Boolean,
         classifityTitle:{
            type:String,
            required: true
        },
    },
    methods: {
        addAttachmentActive(params){
            this.addAttachmentActiveImg = params.file
        },
      addAttachment (params) {
        this.addAttachmentImg = params.file
      },
      handleRemoveActive(){
        this.addAttachmentActiveImgList = []
        this.addAttachmentActiveImg = ''
      },
      handleRemove() {
        this.addAttachmentImg = ''
        this.addAttachmentImgList = []
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      close(){
          this.flag = false
          this.$emit("change",false)
          
      },
        /**@文件超出个数限制 */
        onExceed(){
            this.$message.error('最多添加一张图片');
        },
      addProjectCategory(){
          var params = new FormData()
          params.append('name', this.activelyClassifityName)
          params.append('click_img', this.addAttachmentActiveImg)
          params.append('img',  this.addAttachmentImg)
          this.isLoading = true
        this.$http.post(this.$conf.env.addProjectCategory, params, true).then( res =>{
            this.isLoading = false
            if(res.status == '201'){
                this.close()
                this.$bus.$emit('getprojectCategoryclose', 'data')
               this.$message({  message: '添加成功', type: 'success'}); 
            }
            console.log(res)
            
        }).catch(err =>{
             this.isLoading = false
            console.log(err)
        })
      }
    }
}
</script>
<style lang="scss" >
    .addbigbox{
        z-index: 13;
        position: fixed;
        width: 200%;
        height: 100%;
        left: -10rem;
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
            button{
                width: 1.71rem;
                height: .39rem;
                background:rgba(127,99,244,1);
                border-radius:3px;
                position: absolute;
                right: .82rem;
                bottom: .38rem;
                font-size: .18rem;
                text-align: center;
                color: #fff;
                line-height: .39rem;
            }
            table{
                width: 100%;
                tr{
                .inp-none{
                    .el-range-editor.el-input__inner{
                    width: 3.6rem;
                    height:.48rem;
                    padding:0;
                    }
                    .el-range-separator{
                    line-height: .45rem;
                    }
                    input{
                    border: 0;
                    height:.45rem;
                    font-size: .15rem;
                    line-height: .48rem;
                    }
                    .el-date-editor .el-range__icon{
                    display: none;
                    }
                }
                .section-big{
                    overflow: hidden;
                    .section-left{
                    float: left;
                    height:100%;
                    display: flex;
                    align-items: center;
                    margin-right: .3rem;
                    .actively-num{
                        width: 1.29rem;
                    }
                    }
                    .section-right{
                    float: left;
                    height:100%;
                    display: flex;
                    align-items: center;
                    .actively-iphone{
                        width: 3.14rem;
                    }
                    }
                }
                td{
                    display: flex;
                    align-items: center;
                    height:.84rem;
                    padding-left: .22rem;
                    input{
                    height:.48rem;
                    font-size:.15rem;
                    color:rgba(153,153,153,1);
                    line-height:.48rem;
                    text-indent: .19rem;
                    border:1px solid rgba(221, 223, 225, 1);
                    border-radius: 3px;
                    }
                    label{
                    font-size:.18rem;
                    font-weight:bold;
                    color:rgba(70,74,83,1);
                    margin-right:.08rem;
                    }
                    .activelyOne-startTime{
                    width: 3.12rem;
                    }
                    .actively-site{
                    width: 3.12rem;
                    }
                }

                /*上传图片样式修改*/
                .zhuti-photo{
                    margin-top: .3rem;
                    position: relative;
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
                        left: 1.64rem;
                        top: .52rem;
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
</style>

