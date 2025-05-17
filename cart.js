const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: fixed instead  <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1) {
    console.warn("Invalid discount rate. It must be between 0 and 1.");
    return total; // Return total with no discount
  }
  return total - total * discountRate;
}

// ✅ Fixed receipt initialization and closing brackets
function generateReceipt(cartItems, total) {
  let receipt = "Items:\n"; // Fixed: Start as a string, not NaN

  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  // Validate total
  if (typeof total !== "number" || isNaN(total)) {
    total = 0;
  }

  receipt += `Total: $${total.toFixed(2)}`; // Always ends with formatted total
  return receipt;
}

// Debugging entry point
const totalElement = document.getElementById("total");
const receiptElement = document.getElementById("receipt");

if (totalElement && receiptElement) {
  totalElement.textContent = `Total: $${discountedTotal.toFixed(2)}`;
  receiptElement.textContent = receipt;
} else {
  console.error("Missing #total or #receipt element in HTML.");
}
