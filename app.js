const button = document.querySelector(".btn");
const shareDiv = document.querySelector(".share-div");
button.addEventListener("mouseover", () => {
  shareDiv.classList.add("visible");
});
button.addEventListener("mouseout", () => {
  shareDiv.classList.remove("visible");
});
