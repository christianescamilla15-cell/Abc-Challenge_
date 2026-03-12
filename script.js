document.addEventListener("DOMContentLoaded", function () {
  const colors = ["green", "blue", "red"];
  const headings = document.querySelectorAll("h5");

  headings.forEach(function (h5) {
    h5.addEventListener("click", function () {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      h5.style.color = randomColor;
    });
  });
});
