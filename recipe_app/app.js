const apiKey = "275d58779ccf4e22af03e792e8819fff";

const recipeList = document.getElementById("recipe-list");

function displayRecipe(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const li = document.createElement("li");
    li.classList.add("recipe-item");
    const recipeImg = document.createElement("img");
    recipeImg.src = recipe.image;

    const h2 = document.createElement("h2");
    h2.innerText = recipe.title;

    const ingredients = document.createElement("p");
    ingredients.innerHTML = ` <strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const links = document.createElement("a");
    links.href = recipe.sourceUrl;
    links.innerText = "View Recipe";

    li.appendChild(recipeImg);
    li.appendChild(h2);
    li.appendChild(ingredients);
    li.appendChild(links);
    recipeList.appendChild(li);
  });
}
async function getRecipe() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  return data.recipes;
}

async function init() {
  const recipes = await getRecipe();
  displayRecipe(recipes);
}
init();
