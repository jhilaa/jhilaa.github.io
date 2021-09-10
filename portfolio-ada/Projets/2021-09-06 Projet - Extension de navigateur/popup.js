
getLocalStorage();

let newText;
function getCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.tabs.sendMessage(tab[0].id, { greeting: "hello" }, function (response) {
      newText = newText + " " + response;
      document.getElementById("textarea").innerHTML = newText;
      setLocalStorage(newText);
    });
  });
}

let boutonAction = document.getElementById("action");
boutonAction.addEventListener("click", function () {
  getCurrentTab();
});



function setLocalStorage(value) {
  chrome.storage.local.set({ key: value });
}
function getLocalStorage() {
  chrome.storage.local.get(['key'], function (result) {
    newText = result.key
    document.getElementById("textarea").innerHTML = newText;
  });
}

