/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cells = document.querySelectorAll(".cell");
const container = document.querySelector(".container");

cells.forEach((cell) =>
  cell.addEventListener("click", () => {
    cell.classList.toggle("blue");
  })
);

cells.forEach((cell) =>
  cell.addEventListener(
    "dblclick",
    () => (cell.style.border = "3px solid #000")
  )
);

cells.forEach((cell) =>
  cell.addEventListener("mouseover", () => {
    cell.classList.add("beige");
    cell.style.border = "2px solid #9D9D9D";
  })
);

cells.forEach((cell) =>
  cell.addEventListener("mouseleave", () => {
    cell.classList.remove("beige");
  })
);

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "c") {
    container.style.background = "#9D9D9D";
  }
});
