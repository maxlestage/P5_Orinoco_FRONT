const storedInputChoice = JSON.parse(localStorage.getItem('Panier'));
// const output = document.createElement('p');
const tableBasket = document.querySelector('#basketTable');
for (let i = 0; i < storedInputChoice.length; i += 1) {
    const compactLenseSlected = storedInputChoice[i].name.toString();
    tableBasket.innerHTML += `<tr>
                <th scope="row">${storedInputChoice[i].name}</th>
                <td><img style="width: 16.66%"  class="img-fluid" src="${
                    storedInputChoice[i].photo
                }"></td>
                <td>${storedInputChoice[i].option}</td>
                <td>${storedInputChoice[i].quantite}</td>
                <td>${storedInputChoice[i].prix / 100}€</td>
                <td>${
                    (storedInputChoice[i].prix / 100) *
                    storedInputChoice[i].quantite
                }€</td>
                </tr>`;
}

let myForm = document.getElementById('form');
let formAction = myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const email = document.getElementById('email');
});

//  Une fois la validation => ajout des types emails & verifier si sup+ à 2 caracteres ajout de requierd sur les inputs
// si valide faire le fetch vers le post de l'api
