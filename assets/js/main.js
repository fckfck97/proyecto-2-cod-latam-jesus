const toggleMenuButton = document.querySelector('#menu-button');
const menuItemsList = document.querySelectorAll(".menu-item");

function toggleMobileMenu() {
  document.body.classList.toggle('mobile-menu-active');
}

function activateMenuItem() {
  const currentItem = document.querySelector('.active');
  currentItem.classList.remove('active');
  this.classList.add('active');
}

toggleMenuButton.addEventListener('click', toggleMobileMenu);

menuItemsList.forEach(function(item) {
  item.addEventListener('click', function() {
    toggleMobileMenu();
    activateMenuItem.call(this);
  });
});

