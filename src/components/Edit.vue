<template>
  <div class="new ">
 
     <div class="container">
     <h1>编辑文章</h1>

    <div class="form-group">
       <label>Title:</label><input class="form-control" name="title" type="text" v-model="title" placeholder="请输入标题">
    </div>
     <div class="form-group">
         <label>Body:</label>
       <!--  <textarea class="form-control" name="body" v-model="content" placeholder="请输入内容" ></textarea>-->
          <div class="edit_container">
             <quill-editor  v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
          </div>
         </div>
         <br>
          <label>category:</label>
          <select id="select">
            	<template v-for="(item) in categories" >
                 <option  :value="item.id" v-if="item.id== category" selected="selected">{{item.title}}</option>
                <option v-else  :value="item.id" >{{item.title}}</option>
              </template>
          </select>
         <input class="btn btn-primary" type="submit" value="Submit"  @click="updateArticle">
    
</div>
</div>
 
</template>
<script>
//import { anchor } from "../../static/js/public.js";
import qs from 'qs';
export default {
  data(){
    return{
     title:"",
     categories:[],
     category:"",
     content: "",
     editorOption: {}
    }
  },
 
  //   components: {
  //   Layout
  // },
  mounted: function () {
     this.editor.container.style.height = `450px`;  
  if (this.$route.params.id) {  
    this.$axios.get(this.webUrl+'edit/'+ this.$route.params.id)
      .then((res)=>{
       // let article=res.data;
     //  console.log(res.data)
       this.title= res.data.article.title;
       this.content = res.data.article.body;
       this. category= res.data.article.category;
       this.categories=res.data.category;
      // console.log(res.data.category)
      // this.author=res.data.user.name;
       
      })
        }
    },
     computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
methods: {
      onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
       
 updateArticle: function () {
    var index=document.getElementById("select").selectedIndex;
   
    this.$axios.post(this.webUrl+'update/'+ this.$route.params.id, qs.stringify({id: this.$route.params.id,title: this.title,  body: this.content, category:document.getElementById("select").options[index].value}))
      .then((res)=>{
       
         console.log("res.data")
        this.refreshArticleList()
      })
  
  },
    refreshArticleList: function () {
        this.$router.push({name:'/'})
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ql-editor {
 min-height:450px;
}
</style>
