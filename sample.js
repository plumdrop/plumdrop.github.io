

function logOut(e) {
      firebase.auth().signOut();
      location.href = "signin.html";
 }


function eventRedirect(e) {
      location.href = "event.html";
 }

 function analysticsRedirect(e) {
      location.href = "https://www.tableau.com/trial/tableau-software?utm_campaign_id=2017049&utm_campaign=Retargeting-CORE-ALL-ALL-ALL-ALL&utm_medium=Paid+Search&utm_source=Google+Search&utm_language=EN&utm_country=USCA&kw=tableau&adgroup=WEB-Brand-Core-E&adused=270719777956&matchtype=e&placement=&gclid=CjwKCAjwns_bBRBCEiwA7AVGHpcWDG695ZtDbmPro66EGc2p8yg-PuGjkJ6TEPRO46uDtWUQ5QlNZBoCI5wQAvD_BwE&gclsrc=aw.ds&dclid=CNXft_vY79wCFQRTwQodLh4KIw";
 }