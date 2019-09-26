<template>
  <div class="new ">
 
       <nav class="breadcrumb">
     <a class="breadcrumb-item" href="#">Home</a>

     <span class="breadcrumb-item active">添加文章</span>
</nav>
     <div class="container">
   

    <div class="form-group">
       <label>Title:</label><input class="form-control" name="title" type="text" v-model="title" placeholder="请输入标题">
      <label>Category:</label>
        <select id="select">
              <option  v-for="(item) in categories" :value="item.id">{{item.title}}</option>
          </select>
    </div>
     <div class="form-group">
         <label>Body:</label>
         <!--<textarea class="form-control" name="body" v-model="body" placeholder="请输入内容"></textarea>-->
         <div class="edit_container">
             <quill-editor 
    v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
          </div>
         </div>
         <br>
         <input class="btn btn-primary" type="submit" value="Submit"  @click="saveArticle">
    
</div>
</div>
 
</template>
<script>

import qs from 'qs';
export default {
  data(){
    return{
     title:"",
     body:"",
     categories:[],
     tmp:{},
     content: `<p>hello world</p>`,
     editorOption: {  theme:'snow'},
  
    }
  },
 
  //   components: {
  //   Layout
  // },
   mounted: function () {
      this.editor.container.style.height = `450px`;
    this.$axios.get(this.webUrl+'new/')
      .then((res)=>{
       this.categories=res.data.category;      
      })
      
   },
  computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
  methods:{
       onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
       
  saveArticle:function(){
      var index=document.getElementById("select").selectedIndex;
     // var tmp={};
      //  this.categories.forEach(function(e){
      //    if(e.id=document.getElementById("select").options[index].value){
      //    this.tmp.push(e);
      //      console.log(this.tmp)
      //    }
      //  })
       this.$axios.post(this.webUrl+'new',
          qs.stringify({ title: this.title,  body: this.content, user:localStorage.getItem("userid"),category:document.getElementById("select").options[index].value}))
      .then((res)=>{
       
         console.log("res.data")
        this.refreshArticleList()
      })
  },
    refreshArticleList: function () {
        this.$router.push({name:'/'})
      },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.edit_container{
  height:500px;
}
</style>
