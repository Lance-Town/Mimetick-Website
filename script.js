// Get the navbar
var navbar = document.querySelector(".navBar");

var sticky = navbar.offsetTop;


function stickynavbar() {
  console.log(sticky);
  if (document.documentElement.scrollTop >= sticky) {    
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");    
  }
}
window.addEventListener("scroll", stickynavbar);