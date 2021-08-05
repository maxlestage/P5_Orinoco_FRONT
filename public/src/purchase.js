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
                <td>${
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

// Abandonner le panier
// let cancelAllBtn = document.querySelector;

function sendform(paramContact, paramProducts) {
    // APEL API AVEC FETCH // ENVOIE DES DONNEES AVEC POST
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
            console.alert('fetch Error');
        });
}

let myForm = document.getElementById('form');
let formAction = myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    // On verifie si l'adresse email est conforme
    const email = document.getElementById('email').value;
    if (email) {
        function validateEmail(email) {
            const regex = /\A[^@\s]+@[^@\s]+\z/;
            return regex.test(email);
        }
        validateEmail(email);
    }

    const contact = { firstName, lastName, address, city, email };
    const basketParsed = JSON.parse(localStorage.getItem('Panier'));
    const paramProducts = [];

    for (let i = 0; i < basketParsed.length; i += 1)
        paramProducts.push(basketParsed[i].id);
    sendform(contact, paramProducts);
});
// Utilis& du regex pour valider les inputs, pas d'envoie si tableau vide. si les conditions reunis sont valide je send form avec mes params
