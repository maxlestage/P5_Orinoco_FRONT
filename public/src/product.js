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
    // console.log(data);
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
    <label for="staticEmail2" class="sr-only">Selected Quantity</label>
    <input type="number" id="quantity" name="quantity" min="0" max="5" class="form-control" placeholder="Quantité :">
  </div>
    <button type="button" id="" class="btn btn-primary">Ajouter au panier</button>
  </div>
</div>`;

    const formList = document.querySelector(".form-group");
    formList.innerHTML = `<label for="exampleFormControlSelect1">Example select</label>
  <select class="form-control" id="selectedLense">
    
  </select>
  `;

    const selectLenses = document.querySelector("#selectedLense");
    selectLenses.innerHTML = `<option onchange="myFunction()" class="LenseModel" value="">Choix de l'Objectif :</option>`;

    // Parourir les éléments à l'aide d'une boucle for

    for (let i = 0; i < lenses.length; i++) {
      // console.log(lenses[i]);
      selectLenses.innerHTML += `<option onchange="myFunction()" class="LenseModel" value="${lenses[i]}">${lenses[i]}</option>`;
    }

    // let inputChoice = [];
    let inputToObject = {};
    let inputChoice = [
      { "Hirsch 400DTS": ["60mm 2.8", 5] },
      { "Zurss 50S": ["35mm 1.4", 2] },
      { "Zurss 80S": ["35mm 1.4", 2] },
    ];

    console.log(inputChoice[0]);
    // Get item lense selected
    let itemSelected = (document.getElementById("selectedLense").onchange =
      function () {
        let valueSelected = document.getElementById("selectedLense").value;
        console.log(valueSelected);
      });

    // LocalStorage de la valeur
    var inputItem = document.getElementById("selectedLense");
    // inputItem.value = localStorage.getItem("Panier");
    inputItem.oninput = function (event) {
      localStorage.setItem("Panier", JSON.stringify("test"));
    };

    // Get item quantity
    let itemQuantity = (document.getElementById("quantity").onchange =
      function () {
        let valueQuantity = document.getElementById("quantity").value;
        console.log(valueQuantity);
      });
    // LocalStorage de la quantity
    var inputQuantity = document.getElementById("quantity");
    // inputQuantity.value = localStorage.getItem("panier");
    inputQuantity.oninput = function (event) {
      localStorage.setItem("panier", inputQuantity.value);
    };

    //     Si je découpe le boulot :
    // 1 je redéfini la clé Key sur "Panier", sa value est un tableau[] vide
    // 2 je dois ajouter dans objet la selection des éléments {}
    // 3 Je dois push cet objet dans ma value []

    // je crée une variable qui au click du bouton utilisera les deux variable précedentes
  });
