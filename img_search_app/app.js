const apikey = "fq5mP7L9aOiUad61NNbdjuzpOTPVIfHk3zDxKDbtMzE";
const formEl = document.querySelector("form");
const searchInput = document.querySelector(".image-input");
const searchResults = document.querySelector(".search-results");
const searchResult = document.querySelector(".search-result");
const showMore = document.querySelector("#show-more-button");

let page = 1;
let inputData = "";
async function searchImage() {
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResults.innerHTML = "";
  }
  const results = data.results;
  console.log(results);
  results.map((result) => {
    const div = document.createElement("div");
    div.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";
    imgLink.textContent = result.alt_description;
    div.appendChild(image);
    div.appendChild(imgLink);
    searchResults.appendChild(div);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  searchImage();
});

showMore.addEventListener("click", () => {
  searchImage();
});
