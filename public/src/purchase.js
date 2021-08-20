let panier = localStorage.getItem('Panier');

if (panier === null) {
    panier = [];
} else panier = JSON.parse(panier);

const storedInputChoice = JSON.parse(localStorage.getItem('Panier'));
// const output = document.createElement('p');
const tableBasket = document.querySelector('#basketTable');
for (let i = 0; i < storedInputChoice.length; i += 1) {
    let compactLenseSlected = storedInputChoice[i].name.toString();
    tableBasket.innerHTML += `<tr>
                <th scope="row">${storedInputChoice[i].name}</th>
                <td><img class="img-fluid" src="${
                    storedInputChoice[i].photo
                }"></td>
                <td>${storedInputChoice[i].option}</td>
                <td>${storedInputChoice[i].quantite}</td>
                <td>${storedInputChoice[i].prix / 100}€</td>
                <td class="countPriceAdd">${
                    (storedInputChoice[i].prix / 100) *
                    storedInputChoice[i].quantite
                }€</td>
                <td>
                <button type="button" data-id="${
                    storedInputChoice[i].id
                } " data-option="${
        storedInputChoice[i].option
    }" class="delete-choice bootstrap_btn_size btn btn-danger text-sm-center">Supprimé</button>
                </td>
                </tr>`;
}

//supprimer un produit
let deleteChoice = document.querySelectorAll('.delete-choice');

deleteChoice.forEach(function (deleteChoice) {
    deleteChoice.addEventListener('click', function () {
        // this.style.backgroundColor = 'black';
        // Suppression de l'objet du localStorage
        // console.log('Ici', this.dataset.id);

        const dataset = this.dataset;
        const tempBasket = [];

        for (let i = 0; i < storedInputChoice.length; i += 1) {
            if (
                storedInputChoice[i].id !== dataset.id &&
                storedInputChoice[i].option !== dataset.option
            ) {
                tempBasket.push(storedInputChoice[i]);
            }
        }
        // console.log(tempBasket);
        localStorage.setItem('Panier', JSON.stringify(tempBasket));
        window.location.reload();
    });
});

// Effacer le Panier
// const clearData = localStorage.clear();

// Obtenir le prix total de tous les éléménts
// const tr = document.getElementsByTagName('tr')[5];
const td = document.querySelectorAll('.countPriceAdd');
let tdTotalQuantityPrice = function () {
    let price = 0;
    for (let i = 0; i < td.length; i += 1) {
        priceTextContentToInt = parseInt(`${td[i].textContent}`);
        price = price + priceTextContentToInt;
    }
    return price;
};

let resultTotalPrice = function (a) {
    return a;
};

tdTotalQuantityPrice();

let selectPTotalePrice = document.querySelector('.totalPrice');
const total = resultTotalPrice(tdTotalQuantityPrice());
if (total === 0) {
    selectPTotalePrice.innerHTML = `Votre panier est vide.`;
    let hiddenForm = document.querySelector('#form');
    hiddenForm.innerHTML = ' ';
} else {
    selectPTotalePrice.innerHTML = `Le prix totale pour la selection est de <span class="badge badge-secondary">${total} €</span> `;
    let clearAllButton = document.querySelector('.container');
    let clearButton = document.createElement('button');
    clearButton.classList.add('btn', 'btn-outline-danger', 'clearAllButton');
    clearAllButton.appendChild(clearButton);
    clearButton.innerHTML = 'Vider le panier';
    clearButton.addEventListener('click', function () {
        // localStorage.clear();
        panier = [];
        localStorage.setItem('Panier', JSON.stringify(panier));
        window.location.reload();
    });
}

function sendform(paramContact, paramProducts) {
    // APEL API AVEC FETCH // ENVOIE DES DONNEES AVEC POST
    return (
        fetch('http://localhost:3000/api/cameras/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                contact: paramContact,
                products: paramProducts,
            }),
        })
            .then(function (response) {
                return response.json();
            })
            //SI Erreur API
            .catch(function (err) {
                console.log('fetch Error');
            })
    );
}

let myForm = document.getElementById('form');
let formAction = myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // /^[a-Z]{2,}/;

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;

    // On verifie si le nom et le prenom est conforme
    const regName = /[A-Za-z]{1,32}/;
    function validatefirstName(firstName) {
        return regName.test(firstName);
    }
    if (!validatefirstName(firstName)) {
        alert('Erreur validation firstName');
        return;
    }

    function validatelastName(lastName) {
        return regName.test(lastName);
    }
    if (!validatelastName(lastName)) {
        alert('Erreur validation lastName');
        return;
    }

    // On verifie si l'adresse email est conforme
    const regMail = /([a-z]|\w)+@([a-z]|\w+\d)+.([a-z]|\w)*/;
    function validateEmail(email) {
        return regMail.test(email);
    }
    if (!validateEmail(email)) {
        alert('Erreur validation email');
        return;
    }

    const contact = { firstName, lastName, address, city, email };
    const basketParsed = JSON.parse(localStorage.getItem('Panier'));
    const paramProducts = [];

    for (let i = 0; i < basketParsed.length; i += 1)
        paramProducts.push(basketParsed[i].id);
    sendform(contact, paramProducts).then(function (data) {
        // console.log(data);
        window.location = `confirm.html?id=${data.orderId}&total=${total}&firstName=${firstName}&lastName=${lastName}`;
    });
});


(function (){}())