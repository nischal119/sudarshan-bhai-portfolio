function typeWriter(txtElement, words, wait = 1000) {
  let txt = "";
  let wordIndex = 0;
  let isDeleting = false;

  function type() {
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    txtElement.innerHTML = `<span class="txt">${txt}</span>`;

    let typeSpeed = 200;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 1000;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  typeWriter(txtElement, words, wait);
});
