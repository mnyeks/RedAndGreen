//Check that the div with id testresult doesn't have the class failing or passing. 
//Use console.log to display a message that tells you what the result of the check was.
console.log('<...This is the start...>');
var testresult = document.getElementById("testresult");

var className = testresult.className

if (className === "grey") {
	console.log("the class name is failing it should show : " +  testresult.className);
}
else{
	console.log("the class name is passing it should not showing : " + testresult.className);
}

//Check that the button has the text 'Make failing'.

var theButton = document.getElementById("button");

if (theButton.innerHTML === "Make failing") {
 console.log("button text is passing correct : " + theButton.innerHTML);
}
else {
 console.log("button text is failing incorrect: " + theButton.innerHTML);
}

//Call setTestStatus('testresult', 'testbutton', 'failing');
console.log('<...setTestStatus was called for faling...>');
setTestStatus('testresult', 'testbutton', 'failing');

//Check that #testresult has the class failing. The CSS should give it a red background.
if (testresult.className === "failing"){
 console.log("The testresult class failing is correct : " + testresult.className);
}
else{
 console.log("The testresult class is not correct is should be 'failing', but is : " + testresult.className);
} 
//Check that the button has the text 'Make passing'.
//Use console.log to display a message that tells you what the result of the check was. 
 var mybutton = document.getElementById("button");
 if (mybutton.innerHTML === "Make passing"){
  console.log("the button text is 'Make passing' as i want it: " + mybutton.innerHTML);
 }
 else{
  console.log("the button text is not 'Make passing' as expected : " + mybutton.innerHTML);
 }
//Call setTestStatus('testresult', 'testbutton', 'passing');.
console.log('<...setTestStatus was called for passing...>');
 setTestStatus('testresult', 'testbutton', 'passing');
//Check that #testresult has the class passing. The CSS should give it a green background.
if (testresult.className === "passing") {
 console.log("the className is passing cause it's: " + testresult.className);
}
else{
 console.log("the className is  not correct it should be 'passing', but is: " +testresult.className);
}
//Check that the button has the text 'Make passing'.
 var mybutton = document.getElementById("button");

 if (mybutton.innerHTML === "Make failing"){
  console.log("button text is 'Make failing' that is correct : " + mybutton.innerHTML);
 }
 else{
  console.log("button text is not correct it should be 'Make failing', but is : " + mybutton.innerHTML);
 }
//Display 'success' if testresult has the class passing, otherwise display 'failure'
 if (testresult.className === "passing"){
    console.log("success");
 }
 else{
   console.log("failure");
 }