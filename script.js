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


// stop new page from loading when form submit
window.addEventListener("load", function() {
  const form = document.getElementById('singupEmail');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // alert("Success!");
      form.reset();
    })
  });
});

