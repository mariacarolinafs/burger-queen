import firebase from 'firebase';
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyC4BoOnDoPdHro1uH_Ulm4gaJtyvQoyVes",
    authDomain: "burger-queen-lab03.firebaseapp.com",
    databaseURL: "https://burger-queen-lab03.firebaseio.com",
    projectId: "burger-queen-lab03",
    storageBucket: "burger-queen-lab03.appspot.com",
    messagingSenderId: "317972441220",
    appId: "1:317972441220:web:c991caeb12a41e5ee27ad1"
};

const firebaseApp = firebase.initializeApp(config).firestore;

export default firebaseApp;