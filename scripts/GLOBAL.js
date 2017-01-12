var config__apisite = "http://fretesweb.com.br/app_api/";
var config__maximgsize = 1.5; //mb

function clearAll(){
	localStorage.clear();
     localStorage.setItem("welcome", true);
}
function initPushwoosh() {
  var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  // Should be called before pushwoosh.onDeviceReady
  document.addEventListener('push-notification', function(event) {
    var notification = event.notification;
    // handle push open here
  });
  
  // Initialize Pushwoosh. This will trigger all pending push notifications on start.
  pushwoosh.onDeviceReady({
    appid: "FB3FB-27698",
    projectid: "225827957905",
    serviceName: "MPNS_SERVICE_NAME"
  });

pushwoosh.registerDevice(
  function(status) {
    var pushToken = status.pushToken;
     alert(pushToken);
  },
  function(status) {
    // handle registration error here
  }
);


}


            function ondeviceready() {   
   alert('Device is ready!');
   initPushwoosh();
}
            
            
            

            document.addEventListener("deviceready", ondeviceready);