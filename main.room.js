
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCcaGBPD5WPC1qeXGBBGiWWz9ysQoDmYWY",
      authDomain: "class-test-4bbed.firebaseapp.com",
      databaseURL: "https://class-test-4bbed-default-rtdb.firebaseio.com",
      projectId: "class-test-4bbed",
      storageBucket: "class-test-4bbed.appspot.com",
      messagingSenderId: "651298553232",
      appId: "1:651298553232:web:0be2c806fdc1cd33dbc715"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom()
{
      room_name = document.getElementById ("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
       localStorage.setitem("room_name", room_name);
       window.location = "kwitter_page.html"; 
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout(){
      localStroge.removeItem("user_name");
      localStroge.removeItem("room_name");
      window.location = "kwitter.html";
}