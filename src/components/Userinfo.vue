<template>
  <div class="userinfo">
    
       <nav class="breadcrumb">
       <a class="breadcrumb-item" href="#">Home</a>
       <span class="breadcrumb-item active">个人中心</span>
      </nav>
  <div class="container">
       <label>头像：</label>  <img :src="'http://127.0.0.1:5000/'+portrait" style="height:100px;width:100px"><br/> 

       <input type="file" @change="getFile($event)" value="修改头像" id="newportrait" v-if="tusername==username">
       <button @click="updataFile" v-if="tusername==username">修改头像</button>
      <p> <label>昵称：</label>{{name}}</p>
      <p> <label>邮箱：</label>{{email}}</p>
       <p> <label>用户名：</label>{{tusername}}</p>

  </div>
  </div>
</template>
<script>

export default {
 data(){
    return{
     name:"",
     email:"",
     tusername:"",
     portrait:"",
    
     portraitimg:[]
   //  userid:""
     
    }
  },
 mounted: function () {
     if(this.$route.params.id){
     this.$axios.get(this.webUrl+'userinfo/'+ this.$route.params.id)
      .then((res)=>{
        this.name=res.data.user.name;
        this.email=res.data.user.email;
        this.tusername=res.data.user.username;
        this.portrait="uploads/"+res.data.user.portrait;
     //   this.userid=res.data.user._id;
      })
      
//     this.$axios({
//           method: "GET",
//          url: 'http://127.0.0.1:5000/'+this.portrait,
//         //  url: 'http://127.0.0.1:5000/static/uploads/1567135878545.jpg',
//           responseType: "arraybuffer",
           
//      }).then(res => {
//             return 'data:image/jpg;base64,' + btoa(
//                         new Uint8Array(res.data)
//                           .reduce((data, byte) => data + String.fromCharCode(byte), '')
//                       );
//     }).then(data => {
// 　　      // $('#img').attr('src', data);
//          this.portrait2=data;
//         console.log(data)
//          console.log( this.portrait)
//        });
     }
  },
   methods: {
    
      getFile:function(event) {
            this.file = event.target.files[0];  //获取上传元素信息
           //
            event.preventDefault();
            // 只能通过formData方式来传输文件
             var formData = new FormData();  
             formData.append('file', this.file);
             this.portraitimg= formData
         
           //let userid=that.userid;
         //   console.log(formData,config)
      },
      
    updataFile:function(){
          
            var that = this
            var config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.$axios.post(this.webUrl+'image'+ this.$route.params.id, this.portraitimg, config).then(function(res) {
              
                console.log(res.data.code)
                if (res.data.code == '0') {
                    /*这里做处理*/  
                   // that.init();  //   给avatar赋上新的值，否则要刷新获取
                   that.portrait="uploads/"+res.data.fileUrl;
                }
            })
        },
   },
     computed: {
      username() {
       return localStorage.getItem("username");
     }
     }

}
</script>