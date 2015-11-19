console.log('<...Start...>');
var marker = document.getElementById("testresult");

var className = marker.className;

  if(className === "grey") {
      console.log("className is correct as needed : " +marker.className);
  }
  else {
      console.log("className is incorrect it should not print : " +marker.className);
  }


  if(marker.innerHTML === "Failed") {
     console.log("the text on my block is correct : " +marker.innerHTML);
  }
  else {
     console.log("the text on my block is incorrect it should be Failed but it's : " +marker.innerHTML);
   }

 console.log(",,,FAILING,,,");

 var marker = document.getElementById("testresult");

 var className = marker.className;

 if (className === "failing"){
   console.log("My class name is super correct : " +marker.className);
 }
 else{
   console.log("My class is incorrect should be failing but : " +marker.className);
 }

 if (marker.innerHTML === "Failed"){
   console.log("The text is Failed as expected : " +marker.innerHTML);
 }
 else{
   console.log("The text is incorrect should be 'Failed', but is : " +marker.innerHTML);
 }

  console.log("...PASSING...");

 if (className === "passing"){
  console.log("The class is correct as i want to : " +marker.className);
 }
 else{
  console.log("The class is not correct it should be 'passing' but is : " +marker.className);
 }

 if (marker.innerHTML === "passing"){
  console.log("the innerHTML is Passed correct : " +marker.innerHTML);
 }
 else{
  console.log("the innerHTML is not correct supposed to be 'Passed' but its : " +marker.innerHTML);
 }

 if (marker.className === "passing"){
    console.log("success");
 }
 else{
   console.log("failure");
 }
