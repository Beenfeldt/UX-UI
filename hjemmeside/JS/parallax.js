/* -------- parallax baggrund ------- */
window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var bgParallax = document.getElementsByClassName("background")[0];
    var limit = bgParallax.offsetTop + bgParallax.offsetHeight;
    if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit) {
      bgParallax.style.backgroundPositionY = scrollPosition / 3 + "px";
    } else {
      bgParallax.style.backgroundPositionY = "0";
    }
  });