let menuIcon = document.getElementById("open");
let closeIcon = document.getElementById("close");

let openMenu = document.querySelector(".overflow");

let left_side = document.querySelector(".left");

function menuClicked() {
  menuIcon.addEventListener("click", () => {
    openMenu.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

    left_side.classList.add("active");
  });

  closeIcon.addEventListener("click", () => {
    if (openMenu.classList.contains("active")) {
      openMenu.classList.remove("active");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";

      left_side.classList.remove("active");
    }
  });
}

menuClicked();

const windowWidth = window.innerWidth;
const desktopBreakpoint = 700;

function resize() {
  if (windowWidth >= desktopBreakpoint) {
    openMenu.classList.remove("active");
    left_side.classList.remove("active");
  }
}

window.addEventListener("resize", resize);
