

function logOut(e) {
      firebase.auth().signOut();
      location.href = "signin.html";
 }