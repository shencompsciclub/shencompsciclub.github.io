  /* Open when someone clicks on the bars  */
function openNav(x) {
  document.getElementById("myNav").style.width = "100%";
  x.classList.toggle("change");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
