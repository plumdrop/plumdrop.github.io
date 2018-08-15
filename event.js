function logOut(e) {
      firebase.auth().signOut();
      window.location.replace("index.html");
 }


 // Save message to firebase
function saveMessage(fname, lname, company, email, password){
  var newComapnyChild = messagesRef.child(company)
  var newMessageRef = newComapnyChild.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email:email,
    organizer:false,
    password:password,
  });
}


function createEvent(e){
  var eventName = getInputVal('eventName');
  console.log(firebase.auth().currentUser);
  //var company = getCompany(firebase.auth().currentUser);
  var email = getInputVal('email').toLowerCase();
  var password = getInputVal('password');

  // Save message
  //saveMessage(fname, lname, company, email, password); 
}