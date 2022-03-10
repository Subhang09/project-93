
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBaBs2hdkhDrjrL215JmsIIJsBwKHMxnDA",
      authDomain: "kwitter-fd77d.firebaseapp.com",
      databaseURL: "https://kwitter-fd77d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd77d",
      storageBucket: "kwitter-fd77d.appspot.com",
      messagingSenderId: "711655643271",
      appId: "1:711655643271:web:7a1cedf2a2f66dd1e9c022"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
