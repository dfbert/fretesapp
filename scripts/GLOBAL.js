var config__apisite = "http://fretesweb.com.br/app_api/";
var config__maximgsize = 1.5; //mb

function clearAll(){
	localStorage.clear();
     localStorage.setItem("welcome", true);
}
 function setupPush() {
    alert("setup");
   var push = window.plugins.PushNotification.init({
       "android": {
           "senderID": "225827957905"
       },
       "ios": {
         "sound": true,
         "alert": true,
         "badge": true
       },
       "windows": {}
   });

   push.on('registration', function(data) {
       alert("registration event: " + data.registrationId);
       var oldRegId = localStorage.getItem('registrationId');
       if (oldRegId !== data.registrationId) {
           // Save new registration ID
           localStorage.setItem('registrationId', data.registrationId);
           // Post registrationId to your app server as the value has changed
       }
   });

   push.on('error', function(e) {
       alert("push error = " + e.message);
   });
 }

            function ondeviceready() {   
   alert('Device is ready!');
   setupPush();
}
            
            
            

            document.addEventListener("deviceready", ondeviceready);