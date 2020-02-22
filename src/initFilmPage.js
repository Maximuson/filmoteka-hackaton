const initMoviePage = movie => {
  const currentMovie = movie;
  const getMoviePage = () => {
    const {
      poster_path,
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      overview,
      id
    } = movie;
    return `
    <section class="section" data-id="{id}">
      <div class="poster-wrapper">
        <img class="film-poster" src="${poster_path}" alt="poster image" />
      </div>
      <div class="description-wrapper">
      <h2 class="film-title">${title}</h2>
      <div class="vote-wrapper">
        <span class="titles vote-titles">vote / votes: </span>
        <span class="votes-numbers">${vote_average} / ${vote_count}</span>
      </div>
      <div class="popularity-wrapper">
        <span class="titles film-popularity">popularity: </span>
        <span class="popularity-score">${popularity}</span>
      </div>
      <div class="original-film-wrapper">
        <span class="titles original-film-titles">original title: </span>
        <span class="original-film-name">${original_title}</span>
      </div>
      <div class="film-genre-wrapper">
        <span class="titles film-genre">genre: </span>
        <span class="genre-list">${"genres"}</span>
      </div>
      <h3>About</h3>
      <p class="film-description">
        ${overview}
      </p>
      <div class="button-wrapper">
        <button type="button" class="js-add-to-watched video-icon button-icon" data-id="${id}" data-action="watched-films">Add to
          watched</button>
        <button type="button" class="calendar-icon button-icon" data-id="${id}" data-action="queue-films">Add to
          queue</button>
      </div> 
    </section>
    `;
  };

  document.querySelector(".js-main > .container").innerHTML = getMoviePage();
  document.querySelector(".js-add-to-watched ").addEventListener("click", e => {
    let watchedFilms = JSON.parse(localStorage.getItem("watched"));
    if (!watchedFilms) {
      localStorage.setItem("watched", []);
      watchedFilms = [];
    }
    watchedFilms.push(currentMovie);
    localStorage.setItem("watched", JSON.stringify(watchedFilms));
  });
};
export default initMoviePage;
