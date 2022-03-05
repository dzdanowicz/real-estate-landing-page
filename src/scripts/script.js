const searchTabs = document.querySelectorAll(".hero__search-tab");

searchTabs.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".selected").classList.remove("selected");
    item.classList.add("selected");
    if (searchTabs[0].classList.contains("selected")) {
      document.querySelector(".hero__search-bar").style.borderRadius =
        "0 20px 20px 20px";
    } else {
      document.querySelector(".hero__search-bar").style.borderRadius = "20px";
    }
  });
});

let navMenuItems = document.querySelector(".nav__menu-items");
let darkLayer = document.querySelector(".dark-layer");
document.querySelector(".nav__side-menu-btn").addEventListener("click", () => {
  navMenuItems.classList.toggle("side-menu-active");
  darkLayer.classList.toggle("dark-layer-active");
});

window.addEventListener("click", (elem) => {
  console.log(elem);
  if (
    navMenuItems.classList.contains("side-menu-active") &&
    !elem.target.classList.contains("fa-solid")
  ) {
    navMenuItems.classList.remove("side-menu-active");
    darkLayer.classList.remove("dark-layer-active");
  }
});
