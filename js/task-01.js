const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const categoriesEl = itemEl.forEach((el) => {
  const titleEl = el.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);
  const itemCountEl = el.querySelectorAll("li");
  console.log(`Elements: ${itemCountEl.length}`);
});
