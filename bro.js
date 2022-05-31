(function(){
	if(typeof injectr != "undefined") {
		injectr();
	} else {
		var s = document.createElement('script');
	    s.type = 'text/css';
	    s.src = 'https://brourbeinsus.github.io/a/thing.css';
	    document.body.appendChild(s);
	}
})();
