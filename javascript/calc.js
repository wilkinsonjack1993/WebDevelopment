var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("result");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit', function(event) {
	if (!numField1.value || !numField2.value) {
		alert("Please enter values");
	}
	var result = parseFloat(numField1.value) / parseFloat(numField2.value) * 100;
	resultField.innerText = result + "%";
	event.preventDefault();
});
	
