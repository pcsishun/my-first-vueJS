<template>
<div class="image-uploading">
  <div class="container">
      <h1>Hi this Image page.</h1>
      <div class="container">
      <div class="title-header">
      </div>
      <!-- <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" v-model="message"  :maxlength="max">
        <span class="input-group-text" v-text="max - message.length">20</span>
      </div> -->

      <div class="mb-3">
        <hr>
        <div v-if="!image">
          <label class="form-label">Upload File</label>
          <input type="file" class="form-control" @change="onFileChange">
        </div>
        <div v-else>
          <button class="btn btn-primary" @click="changeImg">Change</button>
          <img :src="image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
 
export default {
  name: 'image-uploading',
  data(){
    return{
      message:"",
      max:20,
      image:""
      }
    },
    methods:{

      onFileChange:function(event){
        // console.log(event.target.files);
        let files = event.target.files;
        if(!files.length)
          return;
        this.createImage(files[0]);
      },

      createImage(files){
        let reader = new FileReader();
        reader.onload=(event)=>{
          this.image=event.target.result;
        }
        reader.readAsDataURL(files);
        // console.log(this.image)
      },
      changeImg(){
        this.image="";
      }
    }
}

</script>
