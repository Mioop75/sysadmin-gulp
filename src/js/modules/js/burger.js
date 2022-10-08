export default function burgerFunc() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu-mobile")

  if (burger) {
    burger.addEventListener("click", () => {
      if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        burger.classList.add("burger--active");
        document.body.classList.add('locked');
      } else {
        menu.classList.remove("active");
        burger.classList.remove("burger--active")
        document.body.classList.remove('locked');
      }
    })
  }
}