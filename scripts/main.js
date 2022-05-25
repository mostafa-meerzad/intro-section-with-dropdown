document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.classList.contains("drop-down")) {
    // e.target.children[2].classList.toggle("menu-active");
    if (!e.target.children[2].classList.contains("menu-active")) {
      console.log(e.target.children);
      e.target.children[2].classList.add("menu-active");
      e.target.children[0].style.display = "none";
      e.target.children[1].style.display = "inline-block";
    } else {
      e.target.children[2].classList.remove("menu-active");
      e.target.children[1].style.display = "none";
      e.target.children[0].style.display = "inline-block";
    }
    /*  const svg = document.querySelector(".drop-down > svg.up");
    console.log(svg);
    svg.style.display = "block"; */
    // console.log(e.target.children[2]);
  }
});

let menu = document.querySelector("nav ul");
console.log(menu);

document.querySelector(".menu").addEventListener("click", () => {
  menu.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".menu-close").addEventListener("click", () => {
  menu.style.display = "none";
  document.querySelector(".overlay").style.display = "none";

  //   menu.classList.remove
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    menu.style.display = "flex";

    // console.log("test");
  } else {
    menu.style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  }
});
document.querySelector(".overlay").addEventListener("click", () => {
  menu.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});
