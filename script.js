


document.querySelector('.hamburger-menu input').addEventListener('change', function() {
    const hamburgerItems = document.querySelector('.hamburger__items');
    if (this.checked) {
        hamburgerItems.style.display = 'flex';
    } else {
        hamburgerItems.style.display = 'none';
    }
});

const checkbox = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('.hamburger__items a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
        document.querySelector('.hamburger__items').style.display = 'none';
    });
});
