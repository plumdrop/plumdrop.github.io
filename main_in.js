firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.replace("event.html");
  } else {
    console.log("invalid login");
  }
});


// Submit form
function submitForm(e){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  if(userPass === "test1234") {
        window.location.replace("sample.html");
  } else {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  }
  
}

function logOut(e) {
      firebase.auth().signOut();
 }


