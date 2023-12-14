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

// accrodion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// counter
let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})

	  