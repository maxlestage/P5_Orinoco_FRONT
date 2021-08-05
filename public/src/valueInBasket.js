// Verif si déjà un article dans le panier pour ajouté le nombre des articles dans un badge panier
// console.log(localStorage.getItem('Panier'));
const badgeBasketContent = document.querySelector('#badgeBasket');
const myBasketContent = JSON.parse(localStorage.getItem('Panier')).length;
const myBasket = function () {
    if (myBasketContent > 0) {
        valueInBasket = document.createTextNode(`${myBasketContent}`);
        badgeBasketContent.appendChild(valueInBasket);
    }
};
myBasket();
