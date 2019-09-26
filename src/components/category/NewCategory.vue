<template>
  <div class="new-category">
 
       <nav class="breadcrumb">
     <a class="breadcrumb-item" href="#">分类</a>

     <span class="breadcrumb-item active">添加分类</span>
</nav>
     <div class="container">
   

    <div class="form-group">
       <label>Title:</label><input class="form-control" name="title" type="text" v-model="title" placeholder="请输入标题">
       <label>Keywords:</label><input class="form-control" name="keywords" type="text" v-model="keywords" placeholder="请输入关键字">
       <label>Description:</label><input class="form-control" name="description" type="text" v-model="description" placeholder="描述">
         <label>Sort:</label><input class="form-control" name="sort" type="text" v-model="sort" placeholder="排序">
    </div>
    
         <input class="btn btn-primary" type="submit" value="Submit"  @click="saveCategory">
    
</div>
</div>
 
</template>
<script>

import qs from 'qs';
export default {
  data(){
    return{
     title:"",
     keywords:"",
     description: "",
     sort:""
  
    }
  },
 
  //   components: {
  //   Layout
  // },
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
       
  saveCategory:function(){
       //  alert(this.content);
       this.$axios.post(this.webUrl+'newcategory/',
       qs.stringify({ title: this.title,  keywords: this. keywords,description:this.description,sort:this.sort}))
      .then((res)=>{
         alert(res.data)
       
       })
  },
   
  },

}
</script>
