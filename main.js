const clickable = document.querySelector("click");

clickable.addEventListener("click", function () {
  const other = document.querySelector("appear");
  other.classList.add("show");
});
