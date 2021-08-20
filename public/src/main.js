fetch('http://localhost:3000/api/cameras')
    .then((response) => response.json())
    .then((data) => {
        const card = document.getElementById('main');
        for (let product of data) {
            card.innerHTML += `<div class="col-md-4"> <div class="cardArticle card mb-4">
      <img src="${product.imageUrl}" class="card-img-top cards_index" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Dicta cupiditate beatae voluptate animi fugiat soluta quis. Illum reiciendis nostrum fugiat dolor.</p>
        <a href="product.html?id=${product._id}" class="btn btn-primary">Voir plus</a>
      </div>
      </div>
      </div>`;
        }
    })
    .catch((err) => {
        console.log(err);
    });
