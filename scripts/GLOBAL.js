var config__apisite = "http://fretesweb.com.br/app_api/";
var config__maximgsize = 1.5; //mb

function clearAll(){
	localStorage.clear();
     localStorage.setItem("welcome", true);
}


            function ondeviceready() {   
   alert('Device is ready!');
            
            
            

            document.addEventListener("deviceready", ondeviceready);