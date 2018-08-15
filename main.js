  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnxO0uJ3uLnnuapAIzDEsAoEDpuhNXFUI",
    authDomain: "plumdrop-business.firebaseapp.com",
    databaseURL: "https://plumdrop-business.firebaseio.com",
    projectId: "plumdrop-business",
    storageBucket: "plumdrop-business.appspot.com",
    messagingSenderId: "1014652124168"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Users');

// Listen for form submit
document.getElementById('SignUp').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  var fname = getInputVal('fname').toLowerCase();
  var lname = getInputVal('lname').toLowerCase();
  var company = getInputVal('company').toLowerCase();
  var email = getInputVal('email').toLowerCase();
  var password = getInputVal('password');

  // Save message
  firebase.auth().createUserWithEmailAndPassword(email,password);  
  saveMessage(fname, lname, company, email, password);

}


$(function () {
      $("#slider4").responsiveSlides({
        auto: true,
        pager:true,
        nav:false,
        speed: 400,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
    window.onload = function() {
    var realBtn = document.getElementById("file");
    var customBtn = document.getElementById("file-button");
    var customTxt = document.getElementById("button-text");
    
    customBtn.addEventListener("click", function() {
        realBtn.click();
    });
    
    realBtn.addEventListener("change", function() {
        if (realBtn.value) {
            customTxt.innerHTML = realBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            customTxt.innerHTML = "No File Chosen" ;
        }
    });
    document.getElementById('SignUp').addEventListener('submit', function(e){
        var storageRef = firebase.storage().ref();
        var uploadRef = storageRef.child(realBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]);
        console.log(realBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]);
        uploadRef.put(realBtn.value[0]);

      });
    }

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
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
  location.href = "index.html";

}