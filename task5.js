//Create an implementation for the setTestStatus function.
var setTestStatus = function(elementid, buttonId, className){
//Remember that it takes 2 parameters: the id of an element and the test status
var elem = document.getElementById(elementid);
    elem.className = className;
// change the button text
};

//Refresh the page and see what happens.
//There should be no errors in Chrome DevTools.
//You should see a console message displaying 'success'

