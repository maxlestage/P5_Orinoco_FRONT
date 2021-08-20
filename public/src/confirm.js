const getOrderId = window.location.search;
let url = new URL(window.location.href);
const id = url.searchParams.get('id');
const total = url.searchParams.get('total');
const firstName = url.searchParams.get('firstName');
const lastName = url.searchParams.get('lastName');

let date = new Date();

// afficher le contenu dans la page et vider le local storage
const displayName = document.querySelector('h2');
displayName.innerHTML = `Merci pour votre commande : <span class="text-secondary">${firstName} ${lastName}</span>`;

const selectElement = document.querySelector('p');
selectElement.innerHTML = `Votre commande du ${date} porte le numéro <span class="badge badge-secondary">${id}</span><br/> Pour un montant total de : <span class="badge badge-secondary">${total}</span> € <br/><br/> Nous traitons votre commande au plus vite, Orinico vous remercie de votre confiance.`;
// localStorage.clear();
