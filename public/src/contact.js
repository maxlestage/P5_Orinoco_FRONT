// let postRequestUrl = 'http://localhost:3000/api/order';

// // 1 --- OBJET CONTACT CONTENANT INFORMATIONS DU FORMULAIRE, AVEC LA NOMENCLATURE SUIVANTE (ATTENTION A BIEN RESPECTER CETTE NOMENCLATURE)
// let contact = {
//     firstName: 'string',
//     lastName: 'string',
//     address: 'string',
//     city: 'string',
//     email: 'string',
// };

// // 2 --- ARRAY (TABLEAU) PRODUCTS CONTENANT LES IDENTIFIANTS DE CHAQUE PRODUIT QUE VOUS AVEZ DANS LE PANIER
// const { productIdentifiant } = data._id;
// let products = [
//     /*   'IDENTIFIANTS DE TOUS LES PRODUITS, ET UNIQUEMENT LES IDENTIFIANTS'
//             "SI VOUS METTEZ QUOI QUE CE SOIT D'AUTRE, CA NE FONCTIONNERA PAS" */
//     productIdentifiant,
// ];

// // 3 --- ENVOYER L'OBJET CONTACT && L'ARRAY PRODUCTS DANS LE BODY DE LA REQUETE POST
// let body = { contact, products };

// fetch(postRequestUrl, { method: 'POST', body: body })
//     .then((response) => response.json())
//     .then((data) => {});
