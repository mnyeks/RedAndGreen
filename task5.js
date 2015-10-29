//Create an implementation for the setTestStatus function.
var setTestStatus = function(elementid, buttonId, className){
//Remember that it takes 2 parameters: the id of an element and the test status
var elem = document.getElementById(elementid);
    elem.className = className;
var theButton = document.getElementById(buttonId);    
// change the button text
if (className === "failing") {
      button.innerHTML = "Make passing"; 
   }
   else {
   	 button.innerHTML = "Make failing";
}
};

//Refresh the page and see what happens.
//There should be no errors in Chrome DevTools.
//You should see a console message displaying 'success'

