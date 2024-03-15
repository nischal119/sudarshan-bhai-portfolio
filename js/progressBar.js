document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll("#about-b .progress-bar");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fillProgressBars() {
    progressBars.forEach((bar) => {
      if (isInViewport(bar)) {
        const width = bar.getAttribute("data-width");
        bar.style.width = `${width}%`;
      }
    });
  }

  fillProgressBars();

  window.addEventListener("scroll", fillProgressBars);
});
