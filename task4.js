var redbutton = document.getElementById('redbutton');
redbutton.addEventListener('click', function () {
var block = document.getElementById('block');
block.innerHTML = "Stop";
block.className = "red";
});