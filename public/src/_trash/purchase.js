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
            const compactLenseSlected = Object.values(
                storedInputChoice[i]
            )[0].toString();
            tableBasket.innerHTML += `<tr>
                <th scope="row">${Object.keys(storedInputChoice[i])}</th>
                <td>${Object.values(storedInputChoice[i])[0][0]}</td>
                <td>${Object.values(storedInputChoice[i])[0][1]}</td>
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
