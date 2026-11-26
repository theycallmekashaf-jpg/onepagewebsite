// Interactive alert when clicking "Add to Bag"
const buttons = document.querySelectorAll('.cart-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Success! Item added to your boutique shopping bag.');
    });
});