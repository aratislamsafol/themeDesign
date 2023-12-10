const menuBtn = document.querySelector('.menu_btn');
const mobileNav = document.querySelector('.mobile_nav_item');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    mobileNav.classList.add('open'); // Add this line to open the mobile navigation
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    mobileNav.classList.remove('open'); // Add this line to close the mobile navigation
    menuOpen = false;
  }
});

// carousel

	  