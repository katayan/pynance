window.addEventListener('load', function(){
	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register("serviceWorker.js");
			console.log("serviceWorker registered");
		} catch (e) {
			console.log("serviceWorker failed");
		}
	}
});
