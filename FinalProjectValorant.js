function increaseQuantity(b) {
    const quantityElement = b.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity = quantity + 1;
    quantityElement.textContent = quantity;

}
function decreaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
    }
}

function deleteItem(button) {
    const card = button.closest('.card-body');
    card.remove();
    updateTotal();
}

function updateTotal() {
    const quantities = document.querySelectorAll('.quantity');
    console.log(quantities);
    const unitPrices = document.querySelectorAll('.unit-price');
    let total = 0;

    for (let i = 0; i < quantities.length; i++) {
        const quantity = parseInt(quantities[i].textContent);
        const unitPrice = parseInt(unitPrices[i].textContent.replace(' $', ''));
        total += quantity * unitPrice;
    } 

    document.querySelector('.total').textContent = `hedha total ${total} $`;
}
function toggleHeart(button) {
    button.classList.toggle('liked');
    button.style.color = button.classList.contains('liked') ? 'red' : 'black';
}

document.addEventListener('click', event => {
    if (event.target.classList.contains('fa-plus-circle')) {
        increaseQuantity(event.target);
        updateTotal()
    } else if (event.target.classList.contains('fa-minus-circle')) {
        decreaseQuantity(event.target);
        updateTotal()
    } else if (event.target.classList.contains('fa-heart')) {
        toggleHeart(event.target);
        updateTotal()
    } else if (event.target.classList.contains('fa-trash-alt')) {
        deleteItem(event.target);
        updateTotal()
    }
});