var setTestStatus = function(testresult, className, text){
var fp = new setTestStatus('testresult');

fp.testFailed();
// `#testresult` should have the HTML class "failing" now
  

// set the text in the block to 'Failed'

fp.testPassed();
// ``#testresult` should have the HTML class "passing" now

// set the text in the block to 'Passed'
};