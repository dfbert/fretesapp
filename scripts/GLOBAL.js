var config__apisite = "http://fretesweb.com.br/app_api/";
var config__maximgsize = 1.5; //mb

function clearAll(){
	localStorage.clear();
     localStorage.setItem("welcome", true);
}
 function setupPush() {
    alert("setup");

  var push = PushNotification.init({
    android: {
        senderID: "225827957905"
    },
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
});

push.on('registration', function(data) {
    // data.registrationId
    alert("registred");
});

push.on('notification', function(data) {
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
    alert("notf");
});

push.on('error', function(e) {
    // e.message

    alert("error");
});
 }

            function ondeviceready() {   
   alert('Device is ready!');
   setupPush();
}
            
            
            

            document.addEventListener("deviceready", ondeviceready);