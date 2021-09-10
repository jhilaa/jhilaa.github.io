/*chrome.extension.onRequest.addListener(function(request, sendResponse) {
    if (request.action == "getDOM"){
        console.log("Okay ;)");
      sendResponse({dom: "The dom that you want to get"});
    }
        
    else
      sendResponse({}); // Send nothing..
   });*/

<<<<<<< HEAD
console.log("test");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "hello") console.log("hello");
  sendResponse({ farewell: "goodbye" });
});

/*function getSelectionText() {
    console.log("step1");
    if (window.getSelection) {
        console.log("step2");
      //only work if supported
      var selection = window.getSelection(); //get the selection object
      alert(
        "Selected text: \n" + selection.toString()
      );
    }
=======
   console.log("alex");

function getSelectionText() {
  if (window.getSelection) {
    //only work if supported
    var selObj = window.getSelection();
    console.log(selObj);
    var selectedText = selObj.toString();
    console.log(selectedText); 
    return selectedText;
    //get the selection object
    //alert(
      //"Selected text: \n" + selection.toString()
    //);
>>>>>>> dbc5bd83cc49dd7b71ba80500790a63375c39a72
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.greeting == "hello")
      sendResponse(getSelectionText());
      
  }
);







 
    // paste dans la pop up
<<<<<<< HEAD
*/
=======

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );



// getSelectionText();
//   alert("test");
>>>>>>> dbc5bd83cc49dd7b71ba80500790a63375c39a72
