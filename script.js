"use strict";

const menuButton = document.querySelector("#hamburger-menu");
const closeButton = document.querySelector("#close-menu");
const nav = document.querySelector("#navigation");
const overlay = document.querySelector("#overlay");

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 700px)").matches) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});

menuButton.addEventListener("click", () => {
  nav.style.display = "flex";
  closeButton.classList.remove("hidden");
  closeButton.classList.add("visible");
  overlay.classList.remove("hidden");
  overlay.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  nav.style.display = "none";
  closeButton.classList.remove("visible");
  closeButton.classList.add("hidden");
  overlay.classList.remove("visible");
  overlay.classList.add("hidden");
});
