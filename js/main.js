let navigationSlides = document.querySelectorAll(
  "#header-slider-navigation ul"
);
navigationSlides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    let SlidePageNumber = e.target.parentElement.getAttribute("data-slide");
    let SlidesItems = document.querySelector("#header-slider-slides");
    if (SlidePageNumber == 1) {
      let Items = SlidesItems.querySelectorAll(".item");
      Items.forEach((item) => {
        //   Short-If-Else
        item.classList.contains("page-1")
          ? item.classList.remove("d-none")
          : item.classList.add("d-none");
      });
    }
    if (SlidePageNumber == 2) {
      let Items = SlidesItems.querySelectorAll(".item");
      Items.forEach((item) => {
        //   Short-If-Else
        item.classList.contains("page-2")
          ? item.classList.remove("d-none")
          : item.classList.add("d-none");
      });
    }
    if (SlidePageNumber == 3) {
      let Items = SlidesItems.querySelectorAll(".item");
      Items.forEach((item) => {
        //   Short-If-Else
        item.classList.contains("page-3")
          ? item.classList.remove("d-none")
          : item.classList.add("d-none");
      });
    }
    //   Get All Items Slider Nav
    let AllItemsSliderNavigation =
      e.target.parentElement.parentElement.querySelectorAll("li");
    // check if you clicked on the Items
    if (e.target.classList.contains("fa-circle")) {
      // Remove All Class `Active`
      AllItemsSliderNavigation.forEach((item) => {
        item.querySelector("i").classList.remove("active");
      });
      // Add Active Class to the new Item
      e.target.classList.add("active");
    }
  });
});
