<template>
    <div class="bigbox" v-show="flag">
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
                    <input type="text" placeholder="填写分类名称" class="actively-site">
                </td>
                <td class="zhuti-photo" style="height: auto;">
                    <label for="" style="margin-top:.2rem">选中图片</label>
                    <div class="activelyOne-photo">
                    <el-upload
                        action="string"
                        ref="upload"
                        list-type="picture-card"
                        :http-request="addAttachment"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :multiple="true"
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
    data(){
      return{
        flag: true,
        
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
        radioa:'2',     //状态
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
      addAttachment (params) {
        //console.log(item)
        let formData = new FormData()
        formData.append('file', params.file)
        formData.append('type', 'SKU')
        formData.append('id', this.$route.params.id)
        console.log('上传图片接口-参数', params.file)
        var self = this,
          file = params.file,
          fileType = file.type,
          file_url = self.$refs.upload.uploadFiles[0].url;
        params.file.url = self.$refs.upload.uploadFiles[0].url;
        this.img_list.push(params.file)
        console.log(this.img_list)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        console.log('发送axios请求')
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      close(){
          this.flag = false
          this.$emit("change",false)
      },
      addProjectCategory(){
          var params = {
              
          }
        this.$http.post(this.$conf.env.addProjectCategory, params).then( res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
      }
    }
}
</script>
<style lang="scss" scoped>
    .bigbox{
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
