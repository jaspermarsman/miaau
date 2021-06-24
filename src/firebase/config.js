import Firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBKdoE5Dt_MfXuvhwd4gZULlvmoeNsvR7M",
    authDomain: "miaau-ab4ba.firebaseapp.com",
    projectId: "miaau-ab4ba",
    storageBucket: "miaau-ab4ba.appspot.com",
    messagingSenderId: "836854931899",
    appId: "1:836854931899:web:c0762e0ab2112ff700249e",
    measurementId: "G-X2VML46KXN"
};

const firebase = Firebase.initializeApp(firebaseConfig)

export { firebase };