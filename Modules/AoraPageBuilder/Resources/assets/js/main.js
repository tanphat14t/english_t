document.addEventListener("DOMContentLoaded", () => {
  collapsedHotline();
  console.log("running....");
});
function collapsedHotline() {
  const expandableItems = document.querySelectorAll(".social-item.has-expand");

  expandableItems.forEach((item) => {
    const expands = item.querySelector(".expands");
    const link = item.querySelector("a");

    if (link) {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }

    item.addEventListener("click", function () {
      expands.classList.toggle("show");
    });
  });
}
