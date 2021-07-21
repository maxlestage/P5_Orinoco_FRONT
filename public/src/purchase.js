fetch('http://localhost:3000/api/cameras')
    .then((response) => response.json())
    .then((data) => {
        const productName = data.name;

        // custom console
        console.log(data);

        const storedInputChoice = JSON.parse(localStorage.getItem('Panier'));

        const output = document.createElement('p');
        // output.textContent = localStorage.getItem("Panier");

        const tableBasket = document.querySelector('#basketTable');

        /* eslint no-console: "error" */
        // custom console
        console.log(storedInputChoice.length);
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
            // document.body.innerHTML += `<p>${Object.keys(
            //   storedInputChoice[i]
            // )} ${Object.values(storedInputChoice[i])}</p>`;
            // console.log(Object.values(storedInputChoice[i])[0][1]);
        }

        window.addEventListener('storage', (event) => {
            if (event.key === 'Panier') {
                output.textContent = event.newValue;
            }
        });
    });
