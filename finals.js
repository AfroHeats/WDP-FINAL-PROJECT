// Initialize cart items and total price
var cartItems = [];
var totalPrice = 0;

// Function to add items to the cart
function addToCart(product, price) {
  cartItems.push({ name: product, price: price });
  totalPrice += price;
  alert(product + " has been added to the cart!");
  updateCart();
}

// Function to display items in the cart
function displayCart() {
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = ""; // Clear previous content

  // Create a list of cart items
  cartItems.forEach(function(item) {
    var itemElement = document.createElement("p");
    itemElement.textContent = item.name + " - P" + item.price;
    cartElement.appendChild(itemElement);
  });

  // Display total price
  var totalElement = document.createElement("p");
  totalElement.textContent = "Total: P" + totalPrice;
  cartElement.appendChild(totalElement);
}

// Function to handle checkout
function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase! Total Price: P" + totalPrice);
    // Reset cart after checkout
    cartItems = [];
    totalPrice = 0;
    updateCart();
    displayCart();
  }
}

// Function to update cart display icon
function updateCart() {
  var cartIcon = document.getElementById("car-icon");
  cartIcon.textContent = " " + cartItems.length;
}

// Function to alert items in the cart (alternative displayCart)
function alertCartContents() {
  alert("Products in cart: " + cartItems.map(item => item.name).join(", "));
}
