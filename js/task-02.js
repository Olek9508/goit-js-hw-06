const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElements = document.querySelector("ul");

const createItems = ingredients.map((el) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = el;
  return ingredientEl;
});

ingredientsElements.append(...createItems);

// Другие варианты
// ==============================================
// const ingredientsElements = document.querySelector("ul");

// const createItems = ingredients.forEach((el) => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.classList.add("item");
//   ingredientEl.textContent = el;
//   return ingredientsElements.append(ingredientEl);
// });

// --------------------------------------------------

// const createItems = [...ingredients].forEach((el) => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.classList.add("item");
//   ingredientEl.textContent = el;

//   const ingredientsElements = document.querySelector("ul");
//   ingredientsElements.append(ingredientEl);
// });

// --------------------------------------
