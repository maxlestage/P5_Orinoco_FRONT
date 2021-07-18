fetch('http://localhost:3000/api/cameras')
    .then((response) => response.json())
    .then((data) => {
        const card = document.getElementById('main');

        for (const product of data) {
            card.innerHTML += `<div class="col-md-4"> <div class="card mb-4" style="width: 18rem;">
      <img src="${product.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Dicta cupiditate beatae voluptate animi fugiat soluta quis. Illum reiciendis nostrum fugiat dolor.</p>
        <a href="product.html?id=${product._id}" class="btn btn-primary">Voir plus</a>
      </div>
      </div>
      </div>`;
        }
    });
