import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpO-Gkb3bvNJj3fcDeqhhVuQV4ZdUZlpY",
  authDomain: "facebook-clone-83cfb.firebaseapp.com",
  databaseURL: "https://facebook-clone-83cfb.firebaseio.com",
  projectId: "facebook-clone-83cfb",
  storageBucket: "facebook-clone-83cfb.appspot.com",
  messagingSenderId: "155073606080",
  appId: "1:155073606080:web:ed131dceb61eeea4bc9825",
  measurementId: "G-WSE96XHRSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
