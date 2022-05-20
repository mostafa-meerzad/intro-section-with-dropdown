document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.classList.contains("drop-down")) {
    e.target.children[2].classList.toggle("menu-active");
  }
});

let menu = document.querySelector("nav ul");
console.log(menu);

document.querySelector(".menu").addEventListener("click", () => {
  menu.style.display = "block";
});
document.querySelector(".menu-close").addEventListener("click", () => {
  menu.style.display = "none";
  //   menu.classList.remove
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    menu.style.display = "flex";

    // console.log("test");
  } else {
    menu.style.display = "none";
  }
});
