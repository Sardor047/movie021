const ul = document.createElement("ul");
ul.classList.add("ul");
const select = document.querySelector("#sort");
const input = document.querySelector(".input");
document.body.appendChild(ul);
function render(movieArray) {
  ul.innerHTML = "";
  movieArray.forEach(function (film, index, array) {
    let vaqt = new Date(film.release_date * 1000);

    const kun = String(vaqt.getDate()).padStart(2, "0");
    const oy = String(vaqt.getMonth() + 1).padStart(2, "0");
    const yil = vaqt.getFullYear();

    const release_date = `${kun}.${oy}.${yil}`;

    const li = document.createElement("li");
    li.innerHTML += `
    <img src="${film.poster}" alt="">
    <h1>${film.title}</h1>
    <h3>${film.id}</h3>
    <p>${release_date}</p>
    <a href="detail.html?id=${film.id}" class="detail-btn">details</a>
    `;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
render(films);

input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase();
  let filter = films.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  render(filter);
});

select.addEventListener("change", () => {
  if (select.value == "a-z") {
    render(films.sort((a, b) => a.title.localeCompare(b.title)));
  } else if (select.value == "z-a") {
    render(films.sort((a, b) => b.title.localeCompare(a.title)));
  }
});
