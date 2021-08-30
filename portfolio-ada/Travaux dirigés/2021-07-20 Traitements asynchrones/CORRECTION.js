const urls= [
    'https://www.mathieu-crevoulin.com/',
    'https://www.singulart.com/fr/?campaign_id=203&keyword=art%20en%20ligne&matchtype=e&gclid=CjwKCAjwi9-HBhACEiwAPzUhHAMbD9ZZeBdkag_cARNqg9SiY7tyhCZZhX0Ctsz6cxERIy4e518wABoCbFEQAvD_BwE',
    'https://www.elle.fr/Deco/News-tendances/Sites-blogs/boutiques-et-sites-de-vente-en-ligne-d-art',
    'https://www.lequipe.fr/',
    'https://www.cafeyn.co/fr/newsstand?gclid=CjwKCAjwi9-HBhACEiwAPzUhHAc8rMU4Y9iJxB7_CFHKIQElH7hlqWXddMdQSW8k28S2JHcPADtRpRoCrR0QAvD_BwE',
    'https://www.ldlc.com/informatique/cint3063/',
    'https://www.audible.fr/ep/audio-livre-offert?source_code=ADW30DFT1Bk126030420907K&ipRedirectOverride=true&gclid=CjwKCAjwi9-HBhACEiwAPzUhHBCAcNaAvfYStq_4V5HqkNFdUY3rKfuJheY9gNrzyJy52tj52ZBjzRoC4UIQAvD_BwE',
    'https://fr.wikipedia.org/wiki/Cheval',
    'https://www.spotify.com/fr/',
    'https://ligue.auteurs.pro/',
    'https://www.nts.live/my-nts/favourites/shows',
    'https://www.youtube.com/watch?v=6OVz-iBGfxg',
    'https://www.arte.tv/fr/',
    'https://www.tissus.net/tissus.html',
    'https://www.doctolib.fr/sessions/new?redirection=%2F',
    'https://www.leroymerlin.fr/',
    'https://www.webfx.com/web-design/color-picker/',
    'https://www.lepayanet.fr/',
    'https://openclassrooms.com/fr/',
    'https://adatechschool.fr/'
];
const requests = urls.map(url => {
    var now = Date.now();
  return  fetch(url)
        .then(function(responses){
           if(responses){
             var loadTime = Date.now() - now;
             return{"url":url,"loadTime":loadTime};
           } else {
               console.log("error");
                  }
        })
})
 Promise.all(requests)
   .then(responses => {
    console.log(responses); 
    }
   )


// https://developer.mozilla.org/fr/docs/orphaned/Web/JavaScript/Reference/Statements/async_function
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
