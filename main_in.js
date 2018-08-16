var company;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var user = firebase.auth().currentUser;

      if(user.email === "manager@patagonia.com") {
        window.location.replace("sample.html");
      } else {
         window.location.replace("untitled.html");
      }
  } else {
    console.log("invalid login");
  }
});


// Submit form
function submitForm(e){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  company = document.getElementById("company").value;
  company - company.toLowerCase();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  
}


 


