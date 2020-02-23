const initMoviePage = movie => {
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
        <button type="button" class="video-icon button-icon js-film-icon" data-id="${id}" data-action="watched-films">Add to
          watched</button>
        <button type="button" class="calendar-icon button-icon js-calendar-icon" data-id="${id}" data-action="queue-films">Add to
          queue</button>
      </div> 
    </section>
    `;
  };

  document.querySelector(".js-main > .container").innerHTML = getMoviePage();

  const watched = document.querySelector('.js-film-icon');
  const queue = document.querySelector('.js-calendar-icon');


  const addToWatch = function (event) {
    if (event.target.classList.contains('video-icon')) {
      event.target.classList.remove('video-icon')
      event.target.classList.add('video-icon-remove')
      event.target.textContent = 'Remove from watched'
    } else {
      event.target.classList.add('video-icon')
      event.target.classList.remove('video-icon-remove')
      event.target.textContent = 'Add to watched'
    }

  }

  const addToQueue = function (event) {
    if(event.target.classList.contains('calendar-icon')) {
      event.target.classList.remove('calendar-icon')
      event.target.classList.add('calendar-icon-remove')
      event.target.textContent = 'Remove from queue'
    }  else {
      event.target.classList.add('calendar-icon')
      event.target.classList.remove('calendar-icon-remove')
      event.target.textContent = 'Add to queue'
    }
  }

  watched.addEventListener('click', addToWatch);
  queue.addEventListener('click', addToQueue);
};

export default initMoviePage;