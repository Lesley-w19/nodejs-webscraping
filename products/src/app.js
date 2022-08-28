document.body.onload = products;

const url = "http://localhost:3000/products";

const products = () => {
  let wrapper = document.querySelector(".product-wrapper");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data?.map((product) => {
        const image = product.image;
        const img_src = image.replace(/{width}/g, "200");
        // console.log(img_src);
        const productItem = `<div class="col-sm-6 col-md-4 col-lg-3 product">
    <div class="image mb-3">
      <img
        src=${img_src}}
      />
    </div>
    <div class="info p-2 mx-auto">
      <h3 class="title">${product.title}</h3>
      <p class="price">${product.price}</p>
    </div>
  </div>`;

        wrapper.innerHTML = productItem;
      });
    })
    .catch((error) => console.log(error));
};
// window.addEventListener("DOMContentLoaded", products, false);
