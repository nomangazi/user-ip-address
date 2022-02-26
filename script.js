var fetchAPI = "https://api.ipify.org?format=json";

$.getJSON(fetchAPI, function (data) {
	$("#ipAdd").html(data.ip);
});
var apiInfo = fetch("https://ipinfo.io");
$.get(
	apiInfo,
	function (response) {
		console.log(response.ip);
	},
	"json"
);
