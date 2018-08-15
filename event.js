function logOut(e) {
      firebase.auth().signOut();
      window.location.replace("index.html");
 }


 function eventPageRedirect(e) {
    location.href = "https://www.plumdrop.co/ibm";
 }
