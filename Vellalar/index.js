var sidenav = document.querySelector(".side-navbar")

function ShowNavbar() {
    sidenav.style.left = "0"

}

function CloseNavbar() {
    sidenav.style.left = "-60%"

}
document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle('open');
  });

  window.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });