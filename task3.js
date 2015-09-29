var redButton = document.getElementById('redButton');
redbutton.addEventListener('click', function () {
var block = document.getElementById('block');
block.innerHTML = "Stop";
block.className = "red";
});

var greenbutton = document.getElementById('greenbutton');
greenbutton.addEventListener('click', function () {

var block = document.getElementById('block');
block.innerHTML = "Go";
block.className = "green";
});