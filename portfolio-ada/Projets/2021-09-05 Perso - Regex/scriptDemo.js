regexMatchs = document.getElementsByClassName("regexMatch");
results = document.getElementsByClassName("resultMatch");

for (let i = 1; i < regexMatchs.length + 1; i++) {
  console.log("txtMatch" + i);
  txtMatchI = document.getElementById("txtMatch" + i);
  regexMatchI = document.getElementById("regexMatch" + i);
  //-----
  txtMatchI.addEventListener("input", Maj);
  regexMatchI.addEventListener("input", Maj);
}

function Maj() {
  for (let i = 1; i < regexMatchs.length + 1; i++) {
    txtMatchI = document.getElementById("txtMatch" + i);
    regexMatchI = document.getElementById("regexMatch" + i);
    resultMatchI = document.getElementById("resultMatch" + i);
    //-------------
    let rg = new RegExp(regexMatchI.value);
    if (txtMatchI.value == "" || regexMatchI.value == "") {
      resultMatchI.value = "";
    } else {
      resultMatchI.value = rg.test(txtMatchI.value);
    }
  }
}

Maj();
