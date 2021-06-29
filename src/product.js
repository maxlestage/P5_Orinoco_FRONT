fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    let card = document.getElementById("main");
    let titleCardSpec = document.getElementById("title");
    let titleNameProduct = document.getElementById("title_Product");
    const productIdUrl = window.location.search;
    // console.log(productIdUrl);
    // Utilisation de table Regex pour reformaté l'id afin de le verifier avec la liste
    // Dans ce cas ci nous supprimons "?id=" = .substr(4)
    let compactUrl = /[^.]+/.exec(productIdUrl)[0].substr(4);
    // console.log(compactUrl);
    for (let product of data) {
      let imageUrl = product.imageUrl;
      let productName = product.name;
      let productIdentifiant = product._id;
      // Comparaison pour récuperer uniquement le produit voulu
      if (productIdentifiant === compactUrl) {
        // Pour donner le title de l'ongletdynamiquement.
        titleNameProduct.innerHTML = `Orinoco | ${productName}`;
        // Pour donner le titre h1 dynamiquement à notre Appareil.
        titleCardSpec.innerHTML = `${productName}`;
        // Pour Générer la carte du produit en vente.
        card.innerHTML += `<div class="card mb-3">
  <img src="${imageUrl}" class="card-img-top" alt="Image de l'appareil ${imageUrl} en vente sur le site Orinoco">
  <div class="card-body">
    <p class="card-text">Mollitia numquam voluptatem assumenda quae. Impedit ipsa illum non itaque harum velit minima nihil. Dolores voluptatem error eligendi exercitationem harum facilis provident. Similique sunt natus. Illo incidunt iure qui iste odio.</p>
  </div>
</div>`;
      }
    }
  });
