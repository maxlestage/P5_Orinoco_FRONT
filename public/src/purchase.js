fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    let productName = data.name;
    console.log(data);

    // let inputChoice = [
    //   { "Hirsch 400DTS": ["60mm 2.8", 5] },
    //   { "Zurss 50S": ["35mm 1.4", 2] },
    //   { "Zurss 80S": ["35mm 1.4", 2] },
    // ];

    const inputChoice = {
      a: "somestring",
      b: 42,
    };

    for (const [key, value] of Object.entries(object1)) {
      console.log(`${key}: ${value}`);
    }

    localStorage.setItem = ("Panier", JSON.stringify(inputChoice[0][1]));
    console.log(
      (localStorage.setItem = ("Panier", JSON.stringify(inputChoice[0][1])))
    );
    var output = document.createElement("p");
    output.textContent = localStorage.getItem("Panier");

    console.log(localStorage.getItem("Panier"));
    console.log(output.textContent);
    // window.addEventListener("storage", function (event) {
    //   if (event.key === "Panier") {
    //     output.textContent = event.newValue;
    //   }
    // });
    document.body.appendChild(output);
  });
