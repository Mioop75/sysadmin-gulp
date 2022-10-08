export default function fixedMenuFunc() {
  const menu = document.querySelector(".header")

  window.addEventListener("scroll", scrollFixedMenu)


  function scrollFixedMenu() {
    const breakpoint = 5
    if (window.scrollY > breakpoint) {
      menu.classList.add("fixed")
    } else {
      menu.classList.remove("fixed")
    }
  }

  scrollFixedMenu()

}