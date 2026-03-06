let ul = document.querySelector(".ul");
const path = new URLSearchParams(window.location.search);

const id = path.get("id");
let copyMovies = films;

copyMovies.forEach((film) => {
  if (film.id === id) {
    let vaqt = new Date(film.release_date * 1000);

    const kun = String(vaqt.getDate()).padStart(2, "0");
    const oy = String(vaqt.getMonth() + 1).padStart(2, "0");
    const yil = vaqt.getFullYear();

    const release_date = `${kun}.${oy}.${yil}`;
    ul.innerHTML += `
     <div class="hero__wrapper">
     <div class="hero__left">
     <a href="./index.html" class="back">return</a>
    <img class = "poster" src="${film.poster}" alt="">
    </div>
     <div class="hero__right">
      <h1 class = "title">${film.title}</h1>
      <p class = "text">${film.overview}</p>
      <p class = "genres">${release_date}</p>
      <p class = "genres">${film.genres}</p>
      </div>
      </div>
    `;
  }
});
