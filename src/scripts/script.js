const searchTabs = document.querySelectorAll(".hero__search-tab");

searchTabs.forEach((item) => {
  item.addEventListener("click", () => {
    let selectedItem = document.querySelector(".selected");
    selectedItem.classList.remove("selected");
    item.classList.add("selected");
  });
});
