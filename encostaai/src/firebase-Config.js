const Rebase = require('re-base')
const firebase = require('firebase')


const Firebaseconfig = {
    apiKey: "AIzaSyBf23dbJGUtT0aXHveUhTXqY-7gu6URHfw",
    authDomain: "encostaai-c2d9d.firebaseapp.com",
    databaseURL: "https://encostaai-c2d9d.firebaseio.com",
    projectId: "encostaai-c2d9d",
    storageBucket: "encostaai-c2d9d.appspot.com",
    messagingSenderId: "357875355548"
  }

  
  const app = firebase.initializeApp(Firebaseconfig)
  
  export const database = firebase.database();

  const config = Rebase.createClass(app.database()) 

  export const auth = app.auth();
  


  export default config