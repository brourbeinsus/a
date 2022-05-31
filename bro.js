(function(){
	if(typeof injectr != "undefined") {
		injectr();
	} else {
		var s = document.createElement('script');
	    s.type = 'text/css';
	    s.src = 'https://raw.githubusercontent.com/brourbeinsus/a/main/thing.css';
	    document.body.appendChild(s);
	}
})();
