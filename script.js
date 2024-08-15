

// Visar menyn vid klick på hamburgermenyn
document.querySelector('.hamburger-menu input').addEventListener('change', function() {
    const hamburgerItems = document.querySelector('.hamburger__items');
    if (this.checked) {
        hamburgerItems.style.display = 'flex';
    } else {
        hamburgerItems.style.display = 'none';
    }
});

// Stänger menyn när man klickar på ett menyobjekt
const checkbox = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('.hamburger__items a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
        document.querySelector('.hamburger__items').style.display = 'none';
    });
});

// Stänger menyn vid klick utanför den öppna menyn
document.addEventListener('click', function(event) {
    const hamburgerItems = document.querySelector('.hamburger__items');
    const isClickInsideMenu = hamburgerItems.contains(event.target);
    const isClickOnHamburger = document.querySelector('.hamburger-menu').contains(event.target);

    // Om klicket sker utanför menyn och det inte är ett klick på hamburgermenyn
    if (!isClickInsideMenu && !isClickOnHamburger && checkbox.checked) {
        checkbox.checked = false;
        hamburgerItems.style.display = 'none';
    }
});