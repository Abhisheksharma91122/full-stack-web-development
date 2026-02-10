document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product 1", price: 10.99 },
    { id: 2, name: "product 2", price: 50.99 },
    { id: 3, name: "product 3", price: 60.999 },
  ];

  let cart = JSON.parse(localStorage.getItem("items")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalDisplay = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("product");
    itemDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;

    productList.appendChild(itemDiv);
  });
  renderCart();

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      console.log(productId);
      const product = products.find((p) => p.id === productId);

      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveItem();
    console.log(cart);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalDisplay.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <span>${item.name} - ${item.price.toFixed(2)}</span>
        <button data-index="${index}">remove</button>
        `;
        cartItem.classList.add("product");
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      cartItems.innerHTML = `<p id="empty-cart">Your cart is empty.</p>`;
      emptyCartMessage.classList.remove("hidden");
      cartTotalDisplay.classList.add("hidden");
      totalPriceDisplay.innerHTML = `$0.00`;
    }
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.dataset.index);
      cart.splice(index, 1);
      saveItem();
      renderCart();
    }
  });

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    saveItem();
    alert("Checkout successfully");
    renderCart();
  });

  function saveItem() {
    localStorage.setItem("items", JSON.stringify(cart));
  }
});
