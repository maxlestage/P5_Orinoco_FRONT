const productIdUrl = window.location.search;
// console.log(productIdUrl);
// Utilisation de table Regex pour reformaté l'id afin de le verifier avec la liste, dans ce cas ci nous supprimons "?id=" = .substr(4)
let compactUrl = /[^.]+/.exec(productIdUrl)[0].substr(4);
fetch(`http://localhost:3000/api/cameras/${compactUrl}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
