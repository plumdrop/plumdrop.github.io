function logOut(e) {
      firebase.auth().signOut();
      location.href = "index.html";
 }


function eventRedirect(e) {
      location.href = "event.html";
 }

 function analysticsRedirect(e) {
 	      location.href = "analytics.html";
 }

