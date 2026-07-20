const prices = [500, 600, 750, 350, 400];
for (let i = 1; i <= 5; i++) {
    const checkbox = document.getElementById("book" + i);
    const qty = document.getElementById("qty" + i);
    const value = document.getElementById("value" + i);
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            qty.style.display = "inline";
        } else {
            qty.style.display = "none";
            qty.value = "0";
            value.innerHTML = "0";
        }
    });
    qty.addEventListener("change", function () {
        const total = prices[i - 1] * Number(this.value);
        value.innerHTML = total;
    });
}
function purchase() {
    let grandTotal = 0;
    let message = "Purchased Books:\n\n";
    for (let i = 1; i <= 5; i++) {
        const checkbox = document.getElementById("book" + i);
        const qty = document.getElementById("qty" + i);
        if (checkbox.checked && Number(qty.value) > 0) {
            const amount = prices[i - 1] * Number(qty.value);
            grandTotal += amount;
            message +=
                document.querySelectorAll("tr")[i].cells[1].innerHTML +
                " - Qty: " +
                qty.value +
                " = ₹" +
                amount +
                "\n";
        }
    }
  
        message += "\nTotal Amount = ₹" + grandTotal;
        alert(message);
}