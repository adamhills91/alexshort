const checkBox = document.getElementById("menu-btn");
const navBar = document.getElementById("menu");
const line = document.getElementById("line");
const lineWidth = line.style.width;
const links = document.getElementsByClassName("link");

const openNav = () => {
  navBar.style.maxHeight = "300px";
  navBar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
  line.style.width = "100%";
};

const closeNav = () => {
  navBar.style.maxHeight = "0px";
  navBar.style.borderBottom = "none";
  line.style.width = lineWidth;
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    checkBox.checked = false;
    navBar.style.transition = "none";
    navBar.style.height = "";
    openNav();
    navBar.style.borderBottom = "none";
  } else if (window.innerWidth < 800 && !checkBox.checked) {
    closeNav();
  }
});

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    navBar.style.transition = "";
    navBar.style.height = "";
    line.style.transition = "";
    openNav();
  } else {
    closeNav();
  }
});

//closes nav bar when a link is clicked
Array.from(links).forEach((element) => {
  element.addEventListener("click", () => {
    closeNav();
    checkBox.checked = false;
  });
});
