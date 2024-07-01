window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth <= 640) {
    return;
  }

  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}
