document.addEventListener("DOMContentLoaded", () => {
  const processChildren = document.querySelectorAll(".process-animated");

  function checkScroll() {
    processChildren.forEach((child) => {
      const childPosition = child.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (childPosition < windowHeight * 0.75) {
        child.classList.add("animated");
      } else {
        child.classList.remove("animated");
      }
    });
  }

  checkScroll();

  window.addEventListener("scroll", () => {
    checkScroll();
  });
});
