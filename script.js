// Initialize Firebase
var config = {
   apiKey: "AIzaSyAgcMf7umnASf0vSmuKWJlVSIbe3K0tAfA",
  authDomain: "chess-game-a8036.firebaseapp.com",
  databaseURL: "https://chess-game-a8036-default-rtdb.firebaseio.com",
  projectId: "chess-game-a8036",
  storageBucket: "chess-game-a8036.appspot.com",
  messagingSenderId: "481285790558",
  appId: "1:481285790558:web:3c2218fcedb674f0f94dcf",
  measurementId: "G-ZJ3RHK6632"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/setData');
  console.log(data)
  dataRef.set({
    value: data
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});
