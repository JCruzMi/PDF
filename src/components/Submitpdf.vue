<template lang="pug">
  .container
    br
    input(type="number" id="inputID" class="form-control" placeholder="Cedula" v-model="newLinks.cc" required)
    br
    br
    input(type="date" step="1" min="2019-01-01" max="2019-12-31" value="2019-01-01" v-model="newLinks.fecha" required).btn.btn-primary
    br
    br
    br
    input(type="file" @change="onFileSelected" accept="application/pdf" required).btn.btn-primary
    button(@click="onUpload").btn.btn-success Subir PDF



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
        cc : '',
        name : '',
        fecha : ''
      }
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
    },
    /*
    *async, ejecute linea por linea, sin el nos daria error con el links
    *hace referenciación a firebase store y guarda el pdf
    *crea un nuevo "usuario cc/link" para luego trabajar
    */
    async onUpload(){
      try{
        const storageRef= await firebase.storage().ref(`/pdfs/${this.selectedFile.name}`).put(this.selectedFile);
        const url = await storageRef.ref.getDownloadURL();
        console.log(url);
        this.newLinks.downloadUrl = url;
        this.newLinks.name = this.selectedFile.name;
        linkspdfs.push(this.newLinks);
        this.newLinks.fecha = '';
        this.newLinks.cc = '';
        this.newLinks.downloadUrl = '';
        this.newLinks.name = '';

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
