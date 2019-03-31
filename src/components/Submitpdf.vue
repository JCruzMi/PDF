<template lang="pug">
  .container
    br
    input(type="file" @change="onFileSelected")
    button(@click="onUpload") Subir



</template>

<script>
import firebase from 'firebase'


export default {
  name:'SubmitPdf',
  data() {
    return {
      selectedFile : null,
      pdf : null
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = even.target.files[0];
    },
    onUpload(){
      const storageRef=firebase.storage().ref(`/pdfs/${this.selectedFile.name}`).put(this.selectedFile);
      const url = storageRef.ref.getDownloadURL();
      console.log('archivo disponible en ', url);
      this.downloadUrl = url;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
