(function(){
	if(typeof injectr != "undefined") {
		injectr();
	} else {
		var s = document.createElement('script');
	    s.type = 'text/css';
	    s.src = 'https://github.com/sergioharo/injectr/raw/master/injectr.js';
	    document.body.appendChild(s);
	}
})();
