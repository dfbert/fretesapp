var config__apisite = "http://fretesweb.com.br/app_api/";
var config__maximgsize = 1.5; //mb

function clearAll(){
	localStorage.clear();
     localStorage.setItem("welcome", true);
}
$.getScript("pushnotification.js");

var pushNotification;
            
            function onDeviceReady() {
                alert("vai");
			
				try 
				{ 
                	pushNotification = window.plugins.pushNotification;
                	if (device.platform == 'android' || device.platform == 'Android' ||
                            device.platform == 'amazon-fireos' ) {
			pushNotification.register(successHandler, errorHandler, {"senderID":"225827957905","ecb":"onNotification"});		// required!
					} else {
                    	pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"false","alert":"true","ecb":"onNotificationAPN"});	// required!
                	}
                }
				catch(err) 
				{ 
					txt="There was an error on this page.\n\n"; 
					txt+="Error description: " + err.message + "\n\n"; 
					alert(txt); 
				} 
            }
            
            // handle APNS notifications for iOS
            function onNotificationAPN(e) {
                if (e.alert) {
                }
                if (e.badge) {
                    pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
                }
            }
            function onNotification(e) {
                
                switch( e.event )
                {
                    case 'registered':
					if ( e.regid.length > 0 )
					{
						alert("registered!");
						// Your GCM push server needs to know the regID before it can push to this device
						// here is where you might want to send it the regID for later use.
						$.getJSON(config__apisite+"regid.php", {regid: e.regid, mail: localStorage.getItem("mail"), password: localStorage.getItem("password")});
					}
                    break;
                    
                    case 'message':
                    	// if this flag is set, this notification happened while we were in the foreground.
                    	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
                    	if (e.foreground)
                    	{
						      
						}
						else
						{	// otherwise we were launched because the user touched a notification in the notification tray.
							
						}
							
                        //android only
                        //amazon-fireos only
                    break;
                    
                    case 'error':
                    break;
                    
                    default:
                    break;
                }
            }
            
            function tokenHandler (result) {
                // Your iOS push server needs to know the token before it can push to this device
                // here is where you might want to send it the token for later use.
            }
			
            function successHandler (result) {
            }
            
            function errorHandler (error) {
            }
            

			$(document).ready(function(){
				onDeviceReady();
			})