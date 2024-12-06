document.addEventListener("DOMContentLoaded", () => {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 20.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 20.99,
    }
  ];

  const cart = [];

  const productList = document.getElementById("product-list");

  product.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
       const productId =parseInt( e.target.getAttribute("data-id"));
      const product = product.find(p => p.id === productId)
      addToCart(product);
    }
  });
});
