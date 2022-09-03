const url = "http://localhost:3000/products";

const products = () => {
  let wrapper = document.querySelector(".products-wrapper");
  let searchname = document.querySelector(".name").value;

  searchname.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.value);
  });

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.map((product) => {
        let image = product.image;
        let img_src = image.replace(/{width}/, "200");
        // console.log(image);
        const productItem = `<div class="card col-sm-6 col-md-4 col-lg-3  mb-3 ">
        <img class="card-img-top img" src=${img_src} alt=${product.title}>
        <div class="card-body info">
          <h5 class="card-title title">${product.title}</h5>
          <p class="card-text price">${product.price}</p>
          <a href=${img_src} class="btn btn-primary">Show picture</a>
        </div>
      </div>`;

        wrapper.insertAdjacentHTML("beforeend", productItem);
      });
    })
    .catch((error) => console.log(error));
};

document.body.onload = products;
