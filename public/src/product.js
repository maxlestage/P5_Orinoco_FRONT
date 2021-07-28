const productIdUrl = window.location.search;
// const { id } = Object.fromEntries(new URL(document.location).searchParams);
// console.log(productIdUrl);
// Utilisation de table Regex pour reformaté l'id afin de le verifier avec la liste, dans ce cas ci nous supprimons "?id=" = .substr(4)
const compactUrl = /[^.]+/.exec(productIdUrl)[0].substr(4);
let panier = localStorage.getItem('Panier');

if (panier === null) {
    panier = [];
} else panier = JSON.parse(panier);

fetch(`http://localhost:3000/api/cameras/${compactUrl}`)
    .then((response) => response.json())
    .then((data) => {
        const card = document.getElementById('main');
        const titleCardSpec = document.getElementById('title');
        const titleNameProduct = document.getElementById('title_Product');
        // console.log(data);
        const { lenses } = data;
        // console.log(compactUrl);
        // for (let product of data) {
        const productImage = data.imageUrl;
        const productName = data.name;
        const productIdentifiant = data._id;
        const productDescription = data.description;
        const productPrice = data.price;

        titleNameProduct.innerHTML = `Orinoco | ${productName}`; // Pour donner le title de l'ongletdynamiquement.

        titleCardSpec.innerHTML = `${productName}`; // Pour donner le titre h1 dynamiquement à notre Appareil.

        card.innerHTML += `<div class="card mb-3">
    <img src="${productImage}" class="card-img-top" alt="Image de l'appareil ${productImage} en vente sur le site Orinoco">
    <div class="card-body">
    <p class="card-text">${productDescription}</p>
    <p class="card-text">Prix: ${productPrice / 100}€</p>
    <div class="form-group">

    </div>
    <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Selected Quantity</label>
    <input type="number" id="quantity" name="quantity" min="0" max="5" class="form-control" placeholder="Quantité :">
    </div>
    <button type="button" id="addTobasket" class="btn btn-primary">Ajouter au panier</button>
    </div>
    </div>`;

        const formList = document.querySelector('.form-group');
        formList.innerHTML = `<label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="selectedLense">

    </select>
    `;

        const selectLenses = document.querySelector('#selectedLense');
        selectLenses.innerHTML =
            '<option class="LenseModel" value="">Choix de l\'Objectif :</option>';

        // Parourir les éléments à l'aide d'une boucle for
        for (let i = 0; i < lenses.length; i += 1) {
            selectLenses.innerHTML += `<option class="LenseModel" value="${lenses[i]}">${lenses[i]}</option>`; // console.log(lenses[i]);
        }

        // [{“_id”: xxx, “name”: yyy, “quantité”: 2, “option”: c}]

        // Get item lense selected
        const itemSelected = (document.getElementById(
            'selectedLense'
        ).onchange = function () {
            const valueSelected =
                document.getElementById('selectedLense').value;
            console.log(valueSelected);
        });

        // Get item quantity
        const itemQuantity = (document.getElementById('quantity').onchange =
            function () {
                var valueQuantity = document.getElementById('quantity').value;
                console.log(valueQuantity);
            });

        let addToBasket = document
            .getElementById('addTobasket')
            // On ecoute l'événément, au click l'action se déclanche :
            .addEventListener('click', function () {
                const inputQuantity = document.getElementById('quantity').value;
                const inputItem =
                    document.getElementById('selectedLense').value;

                // Avertissemnt produit selectionné non valide soit objectif non selectionné ou quantité non renseignée ou les deux
                if (
                    inputItem == '' ||
                    inputItem === null ||
                    inputQuantity === null ||
                    inputQuantity == '' ||
                    (inputItem === null && inputQuantity === null)
                ) {
                    alert("Désolé, votre choix n'est pas complet.");
                    return; // L'éxecution s'arrete si rien n'est valide.
                }

                // On vérifie si on a déjà un produit similaire
                let produit = panier.find(
                    (obj) => obj.id === compactUrl && obj.option === inputItem
                );

                if (produit) {
                    produit.quantite += parseInt(inputQuantity);
                    panier.filter(function (obj) {
                        if (obj.id === compactUrl && obj.option === inputItem) {
                            return produit;
                        }
                        return obj;
                    });
                } else {
                    panier.push({
                        id: compactUrl,
                        photo: productImage,
                        name: productName,
                        option: inputItem,
                        quantite: parseInt(inputQuantity),
                        prix: productPrice,
                    });
                }

                localStorage.setItem('Panier', JSON.stringify(panier));
            });
    });

/* tab = [{ id: 1 }, { id: 2 }, { id: 3 }];

for (let obj of tab) {
    if (obj.id === 2) return obj;
}

tab.forEach((obj) => {
    if (obj.id === 2) return obj;
});

tab.filter(function (obj) {
    return obj.id === 2;
});

let produit = panier.find(
    (obj) => obj.id === compactUrl && obj.option === inputItem
);

if (produit) {
    produit.quantite += 1;
} */
