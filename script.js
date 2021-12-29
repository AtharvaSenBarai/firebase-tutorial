// Initialize Firebase
var config = {
apiKey: "AIzaSyApQhIWMO8zNFnstSFsHnB0T9-GzhkMha0",
            authDomain: "https://atharvasenbarai.github.io/",
            databaseURL: "https://website-80fc1-default-rtdb.firebaseio.com",
            projectId: "website-80fc1",
            storageBucket: "website-80fc1.appspot.com",
            messagingSenderId: "712562391435"
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
