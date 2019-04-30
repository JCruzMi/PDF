
import Firebase from 'firebase'

/*export default{
  apiKey: "AIzaSyBFj-lg982o-NThEglGlQkSRrQQSxfXBTk",
  authDomain: "vuefire-4e280.firebaseapp.com",
  databaseURL: "https://vuefire-4e280.firebaseio.com",
  projectId: "vuefire-4e280",
  storageBucket: "",
  messagingSenderId: "782260865313"
}*/
const app = Firebase.initializeApp({
    apiKey: "AIzaSyBFj-lg982o-NThEglGlQkSRrQQSxfXBTk",
    authDomain: "vuefire-4e280.firebaseapp.com",
    databaseURL: "https://vuefire-4e280.firebaseio.com",
    projectId: "vuefire-4e280",
    storageBucket: "vuefire-4e280.appspot.com",
    messagingSenderId: "782260865313"
});

export const db = app.database().ref();
export const websiteRef = db.child('usuarios');
export const linkspdfs = db.child('linkspdfs')
