const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItems = [...ingredients].forEach((el) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = el;

  const ingredientsElements = document.querySelector("ul");
  ingredientsElements.appendChild(ingredientEl);
});
