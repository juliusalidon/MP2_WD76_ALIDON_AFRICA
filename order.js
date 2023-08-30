var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// Get the button that opens the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn2");

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function() {
    const caramelOptionRadios = document.getElementsByName("caramelOption");
    const quantityInput = document.getElementById("quantityInput");
    const totalPriceDisplay = document.getElementById("totalPrice");
    const addToCartButton = document.getElementById("addToCartButton");

    caramelOptionRadios.forEach(radio => {
        radio.addEventListener("change", updateTotalPrice);
    });

    quantityInput.addEventListener("input", updateTotalPrice);

    function updateTotalPrice() {
        const selectedOption = document.querySelector('input[name="caramelOption"]:checked').value;
        const quantity = parseInt(quantityInput.value);
        const price = selectedOption === "12pcs" ? 199 : 109;
        const total = price * quantity;
        totalPriceDisplay.textContent = `$${total}`;
    }
});