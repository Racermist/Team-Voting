import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
     apiKey: "AIzaSyCZ0sJo0AV-syTvwGpQBZCh4pZPg4aJK3g",
    authDomain: "class-test-aa973.firebaseapp.com",
    projectId: "class-test-aa973",
    storageBucket: "class-test-aa973.appspot.com",
    messagingSenderId: "485919676844",
    appId: "1:485919676844:web:53d18ffdad8a5ca9548209",
    measurementId: "G-6ZW8MESSPW"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();