window.onload=function(){
	document.getElementById("devalor").onkeyup = function(){cambiarDivisa()};
	document.getElementById("a").onkeyup = function(){cambiarDivisa()};
	document.getElementById("b").onkeyup = function(){cambiarDivisa()};
};

function cambiarDivisa(){
	var api_key="d5a578fdba64c7b0534bf54935f915cd";
	var a = document.getElementById("de").value; 
	var b = document.getElementById("a").value;
	var xmlHttp = new XMLHttpRequest();

	var url = "http://data.fixer.io/api/latest?access_key="+api_key+"&symbols="+a+","+b;
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange =function(){
		if (xmlHttp.readyState == 4 && xmlHttp.status ==200) {
			var result = xmlHttp.responseText;

			var jsResult =JSON.parse(result);
			var oneUnit = jsResult.rates[a]/jsResult.rates[de];
			var cantidad = document.getElementById("devalor").value;
			document.getElementById("avalor").value = (oneUnit*cantidad).toFixed(6);

		}
	}
}