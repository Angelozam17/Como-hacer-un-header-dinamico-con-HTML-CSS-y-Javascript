(function(){
	var scroll = function (){
		var header = document.getElementById("header");

		if (document.documentElement.scrollTop > 0) {
			header.className = "header2";
		}else{
			header.className = "header";
		}
	}

	window.addEventListener("scroll", scroll);
}());