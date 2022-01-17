const searchTabs = document.querySelectorAll(".hero__search-tab");

searchTabs.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".selected").classList.remove("selected");
    item.classList.add("selected");
    if (searchTabs[0].classList.contains("selected")) {
      console.log("radius");
      document.querySelector(".hero__search-bar").style.borderRadius =
        "0 20px 20px 20px";
    } else {
      document.querySelector(".hero__search-bar").style.borderRadius = "20px";
    }
  });
});
