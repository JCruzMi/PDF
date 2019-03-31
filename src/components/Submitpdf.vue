<template lang="pug">
  .container
    br
    input(type="number" id="inputID" class="form-control" placeholder="Cedula" v-model="newLinks.cc" required)
    input(type="file" @change="onFileSelected" accept="application/pdf" required)
    button(@click="onUpload") Subir



</template>

<script>
import {db, websiteRef, linkspdfs} from '../config'
import firebase from 'firebase'
import 'firebase/storage';


export default {
  name:'SubmitPdf',
  firebase: {
    links: linkspdfs
  },
  data() {
    return {
      selectedFile : null,
      newLinks : {
        downloadUrl : '',
        cc : ''
      }
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
    },
    async onUpload(){
      try{
        const storageRef= await firebase.storage().ref(`/pdfs/${this.selectedFile.name}`).put(this.selectedFile);
        const url = await storageRef.ref.getDownloadURL();
        console.log(url);
        this.newLinks.downloadUrl = url;

        linkspdfs.push(this.newLinks);
        this.newLinks.cc = '';
        this.newLinks.downloadUrl = '';

        console.log(this.newLinks)
      }catch (error) {
        console.error(error);
      }
    }
  }

}
</script>

<style lang="css" scoped>
</style>
