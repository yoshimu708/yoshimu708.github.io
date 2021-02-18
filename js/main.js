'user strict';

{

  const menu = document.querySelectorAll(".open-menu");

  function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
  }

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
  }

}