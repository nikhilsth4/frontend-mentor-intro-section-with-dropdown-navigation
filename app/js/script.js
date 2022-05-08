const primaryNav = document.querySelector(".header__links")

const navToggle = document.querySelector(".header__menu")

const subHeaders = document.querySelectorAll(".subheader")

const body = document.querySelector("body")
const fadeElems = document.querySelectorAll(".has-fade")

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible")

  if (visibility === "false") {
    body.classList.add("noscroll")
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out")
      element.classList.add("fade-in")
    })
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else if (visibility === "true") {
    body.classList.remove("noscroll")
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in")
      element.classList.add("fade-out")
    })
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
  }
})

subHeaders.forEach((subHeader) => {
  subHeader.addEventListener("click", function () {
    this.classList.toggle("open")
  })
})
