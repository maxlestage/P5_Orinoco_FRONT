/* eslint-disable no-console */
const productIdUrl = window.location.search;
// const { id } = Object.fromEntries(new URL(document.location).searchParams);
// console.log(productIdUrl);
// Utilisation de table Regex pour reformaté l'id afin de le verifier avec la liste, dans ce cas ci nous supprimons "?id=" = .substr(4)
const compactUrl = /[^.]+/.exec(productIdUrl)[0].substr(4);

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
        // Pour donner le title de l'ongletdynamiquement.
        titleNameProduct.innerHTML = `Orinoco | ${productName}`;
        // Pour donner le titre h1 dynamiquement à notre Appareil.
        titleCardSpec.innerHTML = `${productName}`;

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
    <button type="button" id="" class="btn btn-primary">Ajouter au panier</button>
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
            // console.log(lenses[i]);
            selectLenses.innerHTML += `<option onchange="myFunction()" class="LenseModel" value="${lenses[i]}">${lenses[i]}</option>`;
        }

        // const inputChoice = [
        //     { 'Hirsch 400DTS': ['60mm 2.8', 5] },
        //     { 'Zurss 50S': ['35mm 1.4', 2] },
        //     { 'Zurss 80S': ['35mm 1.4', 2] },
        // ];
        // [{}]
        const arrayLense = [];
        const selectedToObjet = {};
        const myChoice = [];
        const pushObjectIntoArray = arrayLense.push(selectedToObjet);
        const formatedChoice = (selectedToObjet[productName] = myChoice);
        console.log(formatedChoice);

        // console.log("Je suis ici " + pushObjectIntoArray);

        // Get item lense selected
        const itemSelected = (document.getElementById(
            'selectedLense'
        ).onchange = function () {
            const valueSelected =
                document.getElementById('selectedLense').value;
            console.log(valueSelected);
            myChoice[0] = valueSelected;
        });

        // LocalStorage de la valeur
        const inputItem = document.getElementById('selectedLense');

        // inputItem.value = localStorage.getItem("Panier");
        inputItem.oninput = function (event) {
            localStorage.setItem(
                'Panier',
                // JSON.stringify((selectedToObjet[productName] = myChoice[0]))
                JSON.stringify(inputChoice)
            );
        };

        // Get item quantity
        const itemQuantity = (document.getElementById('quantity').onchange =
            function () {
                const valueQuantity = document.getElementById('quantity').value;
                console.log(valueQuantity);
                myChoice[1] = valueQuantity;
            });

        // LocalStorage de la quantity
        const inputQuantity = document.getElementById('quantity');

        // inputQuantity.value = localStorage.getItem("panier");
        inputQuantity.oninput = function (event) {
            localStorage.setItem(
                'Panier',
                // JSON.stringify((selectedToObjet[productName] = myChoice[1]))
                JSON.stringify(inputChoice)
            );
        };

        //     Si je découpe le boulot :
        // 1 je redéfini la clé Key sur "Panier", sa value est un tableau[] vide
        // 2 je dois ajouter dans objet la selection des éléments {}
        // 3 Je dois push cet objet dans ma value []

        // je crée une variable qui au click du bouton utilisera les deux variable précedentes
    });
