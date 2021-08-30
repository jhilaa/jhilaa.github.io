promise getTime function job() {
    return new Promise(function(resolve,reject){
        var debut = new Date().getTime()
    setTimeout(() =>resolve(debut))
    setTimeout(() =>reject("the code isn't correct")) 
});
    // var fin = new Date().getTime()
}
job()
 .then(promise=> {
    var fin = new Date().getTime()
     console.log(fin-promise,"msec")
    return promise;
  })
  .catch(function(error) {
    return error;
  });