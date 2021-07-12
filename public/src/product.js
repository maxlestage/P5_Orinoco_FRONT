const productIdUrl = window.location.search;
// console.log(productIdUrl);
// Utilisation de table Regex pour reformaté l'id afin de le verifier avec la liste, dans ce cas ci nous supprimons "?id=" = .substr(4)
let compactUrl = /[^.]+/.exec(productIdUrl)[0].substr(4);

fetch(`http://localhost:3000/api/cameras/${compactUrl}`)
  .then((response) => response.json())
  .then((data) => {
    let card = document.getElementById("main");
    let titleCardSpec = document.getElementById("title");
    let titleNameProduct = document.getElementById("title_Product");
    console.log(data);
    let lenses = data.lenses;
    // console.log(compactUrl);
    //for (let product of data) {
    let productImage = data.imageUrl;
    let productName = data.name;
    let productIdentifiant = data._id;

    // Pour donner le title de l'ongletdynamiquement.
    titleNameProduct.innerHTML = `Orinoco | ${productName}`;
    // Pour donner le titre h1 dynamiquement à notre Appareil.
    titleCardSpec.innerHTML = `${productName}`;

    card.innerHTML += `<div class="card mb-3">
  <img src="${productImage}" class="card-img-top" alt="Image de l'appareil ${productImage} en vente sur le site Orinoco">
  <div class="card-body">
    <p class="card-text">Mollitia numquam voluptatem assumenda quae. Impedit ipsa illum non itaque harum velit minima nihil. Dolores voluptatem error eligendi exercitationem harum facilis provident. Similique sunt natus. Illo incidunt iure qui iste odio.</p>
    <div class="form-group">
    
  </div>
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5" class="form-control" placeholder="Quantité :">
  </div>
    <button type="button" id="" class="btn btn-primary">Ajouter au panier</button>
  </div>
</div>`;

    const formList = document.querySelector(".form-group");
    formList.innerHTML = `<label for="exampleFormControlSelect1">Example select</label>
  <select class="form-control" id="exampleFormControlSelect1">
    
  </select>
  `;

    const selectLenses = document.querySelector(".form-control");
    // Parourir les éléments à l'aide d'une boucle for
    for (let i = 0; i < lenses.length; i++) {
      // console.log(lenses[i]);
      selectLenses.innerHTML += `<option value="${lenses[i]}">${lenses[i]}</option>`;
    }

    // const testLoop = function(lenses){
    //   for (){}
    // }
  });
